import { lazy } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Footer, Header } from 'widgets';

const Home = lazy(() => import('./Home'));
const ProductPage = lazy(() => import('./ProductPage'));
const ProfilePage = lazy(() => import('./ProfilePage'));
const ShopPage = lazy(() => import('./ShopPage'));

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
        <Route path="shop" element={<ShopPage />} />
        <Route path="product">
          <Route index element={<Navigate to="/shop" />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
