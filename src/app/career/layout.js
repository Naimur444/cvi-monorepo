"use client";

import Layout from "../components/Layout";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function CareerLayout({ children }) {
  return (
    <ProtectedRoute>
      <Layout>
        {children}
      </Layout>
    </ProtectedRoute>
  );
}