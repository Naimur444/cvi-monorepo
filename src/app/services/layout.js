"use client";

import Layout from "../components/Layout";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function ServicesLayout({ children }) {
  return (
    <ProtectedRoute>
      <Layout>
        {children}
      </Layout>
    </ProtectedRoute>
  );
}