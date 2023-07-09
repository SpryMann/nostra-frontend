import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from './scroll-to-top';

const withRouter = (component: () => React.ReactNode) =>
  function () {
    return (
      <BrowserRouter basename="/nostra-frontend">
        <ScrollToTop>
          <Suspense fallback="Loading...">{component()}</Suspense>
        </ScrollToTop>
      </BrowserRouter>
    );
  };

export default withRouter;
