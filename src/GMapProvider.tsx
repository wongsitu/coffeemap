import React, { ReactNode, useEffect, useState } from 'react';

interface GMapsProviderProps {
  children: ReactNode
}

export const GMapsContext = React.createContext({});

export const GMapsProvider: React.FC<GMapsProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const GMapsJs = document.createElement('script');

    GMapsJs.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`;
    GMapsJs.defer = true;

    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) {
    return null
  }

  return (
    <GMapsContext.Provider value={{}}>
      {children}
    </GMapsContext.Provider>
  );
};
