import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Layout = lazy(() => import('../layouts/Layout'))
const Home = lazy(() => import('../pages/Home'))
const GioiThieu = lazy(() => import('../pages/GioiThieu'))
const HuongDanMuaHang = lazy(() => import('../pages/HuongDanMuaHang'))
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gioi-thieu" element={<GioiThieu />} />
        <Route path="huong-dan-mua-hang" element={<HuongDanMuaHang />} />
      </Route>
    </Routes>
  );
};
