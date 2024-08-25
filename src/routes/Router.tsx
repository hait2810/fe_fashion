import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Layout = lazy(() => import('../layouts/Layout'))
const Home = lazy(() => import('../pages/Home'))
const Intro = lazy(() => import('../pages/Intro'))
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="intro" element={<Intro />} />
      </Route>
    </Routes>
  );
};
