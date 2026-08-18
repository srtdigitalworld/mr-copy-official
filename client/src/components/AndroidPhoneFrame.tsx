/** Design philosophy: Field Notes Utility — a simple physical device frame presents owner-supplied app screenshots without altering their pixels. */

type AndroidPhoneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function AndroidPhoneFrame({ src, alt, className = "", priority = false }: AndroidPhoneFrameProps) {
  return <figure className={`real-phone-frame ${className}`}><div className="real-phone-shell"><div className="real-phone-screen"><img src={src} alt={alt} width="932" height="2048" loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : "auto"} /></div></div></figure>;
}
