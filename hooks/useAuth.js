/**
 * Bare bones for an auth provider.
 * Could be extended to include more functionality.
 * Firebase is a common auth provider.
 */
import React, { createContext, useContext } from 'react';

// specs for this assessment don't have an actual user, we set it to true
const AuthContext = createContext({});

export const AuthProvider = ( { children } ) => {
  return (
      <AuthContext.Provider value={{ user: 'Mindera' }}>
        {children}
      </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
