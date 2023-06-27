import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HomePage, NavBar, SearchResults, ProductPage, Checkout, Footer, Billing } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />     
        </Route>
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </BrowserRouter>
  );
}

function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet /> {/* Render the child elements */}
      <Footer />
    </>
  );
}

export default App;
