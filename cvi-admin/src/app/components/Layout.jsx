import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="w-11/12 mx-auto py-4 md:py-8">
      <div className="mb-8">
        <Header />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-1">
          <Sidebar />
        </div>
        <div className="md:col-span-5">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
