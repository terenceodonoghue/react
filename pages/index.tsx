import React from 'react';
import { useLocalStorage, useOrientation } from '@terenceodonoghue/react-hooks';

function HomePage() {
  const [name, setName] = useLocalStorage('name', '');
  const { isLandscape, isPortrait } = useOrientation();

  return (
    <>
      <div>Welcome to Next.js!</div>
      <p>Is landscape?: {isLandscape.toString()}</p>
      <p>Is portrait?: {isPortrait.toString()}</p>
      <p>Local storage:</p>
      <input
        type="text"
        onChange={(e) => setName(e.currentTarget.value)}
        value={name}
      />
    </>
  );
}

export default HomePage;
