import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{ backgroundColor: "turquoise" }}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      <Footer></Footer>
    </div>
  );
}
