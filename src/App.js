import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Loading from './components/common/Loading/LoadingContainer';
import MainLayout from './components/layout/MainLayout/MainLayoutContainer';

// ===========
// Views
// ===========
const ExplorePage = lazy(() =>
  import(
    /* webpackPrefetch: true */ './components/view/ExplorePage/ExplorePageContainer'
  )
);

const FavoritesPage = lazy(() =>
  import(
    /* webpackPrefetch: true */ './components/view/FavoritesPage/FavoritesPageContainer'
  )
);

const ImagePage = lazy(() =>
  import(
    /* webpackPrefetch: true */ './components/view/ImagePage/ImagePageContainer'
  )
);

const NotFoundPage = lazy(() =>
  import(
    /* webpackPrefetch: true */ './components/view/NotFoundPage/NotFoundPageContainer'
  )
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={ExplorePage} />
              <Route exact path="/favorites" component={FavoritesPage} />
              <Route exact path="/image/:id" component={ImagePage} />
              <Route exact path="*" component={NotFoundPage} />
            </Switch>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
