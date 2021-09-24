import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components';
import { MastHead } from './components';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Hi! My name is Jose</title>
        <meta
          name="description"
          content="Jose Santos Software Developer Portfolio"
        />
      </Helmet>
      <NavBar />
      <MastHead />
    </>
  );
}
