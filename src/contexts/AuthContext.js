import { createContext, useState } from "react";

import { firebaseApp, auth } from '../services/firebase';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);

  async function signInWithGoogle() {
    alert('OK');
  }

  return (
    <AuthContext.Provider value={{ signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };