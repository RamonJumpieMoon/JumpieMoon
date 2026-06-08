import { initializeApp, getApps } from "firebase/app";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbKBlLuyYYWaEeq4GEQM9KNapIexd5L_4",
  authDomain: "multi-uni.firebaseapp.com",
  projectId: "multi-uni",
  storageBucket: "multi-uni.firebasestorage.app",
  messagingSenderId: "765949274557",
  appId: "1:765949274557:web:f67120db9b81caf52acad4f",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);

// 🔥 NOVA FORMA OFICIAL (substitui enableIndexedDbPersistence)
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
});
