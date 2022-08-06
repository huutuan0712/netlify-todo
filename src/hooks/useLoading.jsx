import React, { useContext, createContext, useState, useMemo } from 'react';
import Loading from 'components/loading';

const LoadingContext = createContext(null);
export const useLoading = () => useContext(LoadingContext);

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const value = useMemo(
    () => ({
      show: () => setIsLoading(true),
      hide: () => setIsLoading(false),
    }),
    []
  );
  return (
    <LoadingContext.Provider value={value}>
      {children}
      {isLoading && <Loading />}
    </LoadingContext.Provider>
  );
}
