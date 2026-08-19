/** Design philosophy: Field Notes Utility — personal files appear as a calm, factual index with upload actions kept deliberate and visible. */

import FileIcon from "lucide-react/dist/esm/icons/file";
import FolderOpen from "lucide-react/dist/esm/icons/folder-open";
import LoaderCircle from "lucide-react/dist/esm/icons/loader-circle";
import LogIn from "lucide-react/dist/esm/icons/log-in";
import RefreshCw from "lucide-react/dist/esm/icons/refresh-cw";
import Trash2 from "lucide-react/dist/esm/icons/trash-2";
import Upload from "lucide-react/dist/esm/icons/upload";
import { ChangeEvent, useRef, useState } from "react";
import { startLogin } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { usePageMeta } from "@/hooks/usePageMeta";
import { trpc } from "@/lib/trpc";

const ACCEPTED_TYPES = "image/jpeg,image/png,image/webp,image/gif,application/pdf,text/plain,text/csv,application/json";

function formatBytes(size: number) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 ** 2) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 ** 2).toFixed(1)} MB`;
}

export default function FileLibrary() {
  usePageMeta({ title: "My Files", description: "Securely upload and manage your Mr. Copy reference files.", path: "/files" });
  const { isAuthenticated, loading, user } = useAuth();
  const utils = trpc.useUtils();
  const inputRef = useRef<HTMLInputElement>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const filesQuery = trpc.files.list.useQuery(undefined, { enabled: isAuthenticated, retry: false });
  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: async () => { setNotice("File stored securely in your library."); await utils.files.list.invalidate(); },
    onError: error => setNotice(error.message),
  });
  const removeMutation = trpc.files.remove.useMutation({ onSuccess: () => utils.files.list.invalidate() });

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0];
    event.target.value = "";
    if (!selected) return;
    if (selected.size > 10 * 1024 * 1024) { setNotice("Choose a file that is 10 MB or smaller."); return; }
    if (!ACCEPTED_TYPES.split(",").includes(selected.type)) { setNotice("Choose an image, PDF, text, CSV, or JSON file."); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = String(reader.result).split(",")[1];
      if (!base64) { setNotice("The selected file could not be read."); return; }
      uploadMutation.mutate({ fileName: selected.name, mimeType: selected.type, dataBase64: base64 });
    };
    reader.onerror = () => setNotice("The selected file could not be read.");
    reader.readAsDataURL(selected);
  };

  if (loading) return <main className="file-library-page"><div className="shell file-library-loading"><LoaderCircle className="spin" size={23} /> Loading your file library…</div></main>;
  if (!isAuthenticated) return <main className="file-library-page"><section className="shell file-auth-panel"><div className="file-panel-index">01 / PRIVATE LIBRARY</div><FolderOpen size={38} aria-hidden="true" /><p className="eyebrow">Your stored references</p><h1>Bring your useful files together.</h1><p>Sign in to upload private reference files, keep their metadata organized, and open them from your Mr. Copy library.</p><button className="button button-primary" type="button" onClick={startLogin}><LogIn size={17} aria-hidden="true" /> Sign in to continue</button><small>Files are tied to your account. Supported files are images, PDFs, text, CSV, and JSON up to 10 MB.</small></section></main>;

  return <main className="file-library-page"><section className="shell file-library-header"><div><p className="eyebrow">Private file storage</p><h1>My Files</h1><p>Keep reference files connected to your Mr. Copy workflow. Your library belongs to <strong>{user?.name ?? "your account"}</strong>.</p></div><div className="file-upload-actions"><input ref={inputRef} className="file-upload-input" type="file" accept={ACCEPTED_TYPES} onChange={handleUpload} /><button className="button button-primary" type="button" onClick={() => inputRef.current?.click()} disabled={uploadMutation.isPending}><Upload size={17} aria-hidden="true" /> {uploadMutation.isPending ? "Uploading…" : "Upload file"}</button><span>Images, PDF, text, CSV, JSON · 10 MB max</span></div></section>{notice && <div className="shell file-notice" role="status"><span>{notice}</span><button type="button" onClick={() => setNotice(null)}>Dismiss</button></div>}<section className="shell file-library-content"><div className="file-library-rail"><span>02</span><i aria-hidden="true" /><small>STORED REFERENCES</small></div><div className="file-library-list">{filesQuery.isLoading ? <div className="file-empty"><LoaderCircle className="spin" size={22} /> Loading your files…</div> : filesQuery.isError ? <div className="file-empty"><p>Your library could not be loaded.</p><button type="button" className="button button-secondary" onClick={() => filesQuery.refetch()}><RefreshCw size={16} /> Try again</button></div> : filesQuery.data?.length ? <div className="file-table" role="list">{filesQuery.data.map(file => <article className="file-row" role="listitem" key={file.id}><div className="file-row-icon"><FileIcon size={21} aria-hidden="true" /></div><div className="file-row-main"><a href={file.storageUrl} target="_blank" rel="noreferrer">{file.fileName}</a><span>{file.mimeType} · {formatBytes(file.sizeBytes)}</span></div><time dateTime={new Date(file.createdAt).toISOString()}>{new Date(file.createdAt).toLocaleDateString()}</time><button type="button" className="file-remove" onClick={() => removeMutation.mutate({ id: file.id })} disabled={removeMutation.isPending} aria-label={`Remove ${file.fileName}`}><Trash2 size={17} aria-hidden="true" /></button></article>)}</div> : <div className="file-empty"><FolderOpen size={31} aria-hidden="true" /><h2>Your library is ready.</h2><p>Upload a reference file to start building a private collection.</p><button className="button button-secondary" type="button" onClick={() => inputRef.current?.click()}><Upload size={16} /> Upload your first file</button></div>}</div></section></main>;
}
