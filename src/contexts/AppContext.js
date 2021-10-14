import { createContext, useEffect, useState } from "react";

import { useRouter } from 'next/router';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [navItem, setNavItem] = useState('/');

  const { route } = useRouter();

  useEffect(() => {
    setNavItem(route.split('/')[1]);
  }, [route]);

  return (
    <AppContext.Provider value={{
      navItem
    }}>
      {children}
    </AppContext.Provider>
  );
}