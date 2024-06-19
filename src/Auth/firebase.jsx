// firebase.jsx
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import firestore module
import { getAuth } from "firebase/auth";
// Firebase is available after the script is loaded
const firebaseConfig = {
  apiKey: "AIzaSyDM3kxPZ1oWmcsgwR7RgUOfEVperO884cY",
  authDomain: "myapp-e97ba.firebaseapp.com",
  projectId: "myapp-e97ba",
  storageBucket: "myapp-e97ba.appspot.com",
  messagingSenderId: "907425765418",
  appId: "1:907425765418:web:13e5a56c0e78f149160b53",
};
let app;
let auth;
let firestore; // Declare firestore variable

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  firestore = getFirestore(app); // Initialize firestore
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { auth, firestore, AuthContext }; // Export firestore along with auth and AuthContext
