import { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Footer, Header } from 'widgets';

const Home = lazy(() => import('./Home'));

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Routing;
