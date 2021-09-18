/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePageOld, NotFoundPage } from './pages';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        defaultTitle="Hi! I'm Jose"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Jose Santos - My Portfolio" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePageOld} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
