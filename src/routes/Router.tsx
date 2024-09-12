import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Layout = lazy(() => import('../layouts/Layout'))
const Home = lazy(() => import('../pages/Home'))
const GioiThieu = lazy(() => import('../pages/GioiThieu'))
const ChiTietSanPham = lazy(() => import('../pages/ChiTietSanPham'))
const HuongDanMuaHang = lazy(() => import('../pages/HuongDanMuaHang'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Header = lazy(() => import('../layouts/Header'))
const Footer = lazy(() => import('../layouts/Footer'))
const GioHang = lazy(() => import('../pages/GioHang'))
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gioi-thieu" element={<GioiThieu />} />
        <Route path="huong-dan-mua-hang" element={<HuongDanMuaHang />} />
        <Route path="gio-hang" element={<GioHang />} />
      </Route>
      <Route path="san-pham/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<ChiTietSanPham />} />
      </Route>
      <Route path='*'  element={<>
        <Header />
        <NotFound />
        <Footer />
        </>} />
    </Routes>
  );
};
