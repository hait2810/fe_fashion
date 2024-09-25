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
const DatHang = lazy(() => import('../pages/DatHang'))
const DangNhap = lazy(() => import('../pages/DangNhap'))
const DangKy = lazy(() => import('../pages/DangKy'))
const LayoutAdmin = lazy(() => import('../layouts/admin/Layout'))
const CategoryList = lazy(() => import('../pages/admin/category/CategoryList'))
const ProductList = lazy(() => import('../pages/admin/products/ProductList'))

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gioi-thieu" element={<GioiThieu />} />
        <Route path="dang-nhap" element={<DangNhap />} />
        <Route path="dang-ky" element={<DangKy />} />
        <Route path="huong-dan-mua-hang" element={<HuongDanMuaHang />} />
        <Route path="gio-hang" element={<GioHang />} />
        <Route path="dat-hang" element={<DatHang />} />
      </Route>
      <Route path="san-pham/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<ChiTietSanPham />} />
      </Route>
      <Route path="admin/" element={<LayoutAdmin />}>
        <Route index element={"Chào mừng bạn tới trang quản trị"} />
        <Route path="category" element={<CategoryList />} />
        <Route path="products" element={<ProductList />} />
      </Route>
      <Route path='*' element={<>
        <Header />
        <NotFound />
        <Footer />
      </>} />
    </Routes>
  );
};
