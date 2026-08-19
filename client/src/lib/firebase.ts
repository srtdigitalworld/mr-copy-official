import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import {
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
  signOut,
  type Auth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCREAChZ62epE-x7QMtFIQZrp_1iLopTu0",
  authDomain: "mr-copy.firebaseapp.com",
  projectId: "mr-copy",
  appId: "1:624777915101:web:c4fa9d882c0fe87d3ec934",
};

function getFirebaseApp(): FirebaseApp {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export async function signInForAccountDeletion(): Promise<{ email: string | null }> {
  const auth = getAuth(getFirebaseApp());
  await setPersistence(auth, browserSessionPersistence);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const result = await signInWithPopup(auth, provider);
  return { email: result.user.email };
}

export function getDeletionAuth(): Auth {
  return getAuth(getFirebaseApp());
}

export async function signOutOfDeletionFlow(): Promise<void> {
  await signOut(getDeletionAuth());
}
