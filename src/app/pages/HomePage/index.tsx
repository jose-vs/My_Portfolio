import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components';

export function HomePageOld() {
  return (
    <>
      <Helmet>
        <title>Hi! I'm Jose</title>
        <meta
          name="description"
          content="Jose Santos - My Personal Portfolio"
        />
      </Helmet>
      <NavBar />
    </>
  );
}
