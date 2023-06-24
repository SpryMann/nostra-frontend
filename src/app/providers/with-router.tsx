import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouter = (component: () => React.ReactNode) =>
  function () {
    return (
      <BrowserRouter basename="/nostra-frontend">
        <Suspense fallback="Loading...">{component()}</Suspense>
      </BrowserRouter>
    );
  };

export default withRouter;
