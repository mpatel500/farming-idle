import React, { useEffect, useState } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { getInventory, defaultInventory } from './data/inventory'

function MyApp({ Component, pageProps }: AppProps) {
  const [inventory, setInventory] = useState(defaultInventory);

  useEffect(() => {
    const defaultInventory = getInventory();
    setInventory(defaultInventory);
  }, []);

  const handleSeedChange = (key: string, value: string | number) => {
    const seeds = {...inventory['seeds'], [key]: value}
    setInventory({ ...inventory, seeds} );
  }
  
  return (
    <Component
      {...pageProps}
      handleSeedChange={handleSeedChange}
      inventory={inventory}
    />
  );
}

export default MyApp
