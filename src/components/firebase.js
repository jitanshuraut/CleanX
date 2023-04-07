import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-XRy0W6bf4pl4Db60rCtYARmEVPnYXTE",
  authDomain: "dustbin-36bf9.firebaseapp.com",
  projectId: "dustbin-36bf9",
  storageBucket: "dustbin-36bf9.appspot.com",
  messagingSenderId: "960770984064",
  appId: "1:960770984064:web:8e44c814c6a9e44f96fe65",
  measurementId: "G-G57BS0D87F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// google auth signin
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);

    const user = res.user;
    localStorage.setItem("profilePic", user.photoURL);
    localStorage.setItem("Email", user.email);
    localStorage.setItem("Name",user.displayName)
    console.log(user.photoURL)
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
    sessionStorage.setItem("flag","true");
    window.location.replace('/Map')

  } catch (err) {
    console.error(err);
    sessionStorage.setItem("flag","false");
    alert(err.message);
  }
};
// login with email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    
    await signInWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem("flag","true");
    window.location.replace('/Map')

  } catch (err) {
    sessionStorage.setItem("flag","false");
    console.error(err);
    alert(err.message);
  }
};
// register with email
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    sessionStorage.setItem("flag","true");
    window.location.replace('/Map')
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  sessionStorage.setItem("flag","false");
  window.location.replace('/')
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
