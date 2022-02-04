import React from 'react';
import { useOrientation } from '@terenceodonoghue/react-hooks';

function HomePage() {
  const { isLandscape, isPortrait } = useOrientation();

  return (
    <>
      <div>Welcome to Next.js!</div>
      <p>Is landscape?: {isLandscape.toString()}</p>
      <p>Is portrait?: {isPortrait.toString()}</p>
    </>
  );
}

export default HomePage;
