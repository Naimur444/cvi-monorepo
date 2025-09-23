"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, isInitialized } = useAuth();
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isInitialized && !isLoading) {
      if (!isAuthenticated) {
        router.push('/');
      } else {
        setShouldRender(true);
      }
    }
  }, [isAuthenticated, isLoading, isInitialized, router]);

  // Show loading while checking authentication
  if (!isInitialized || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0E4F53]"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated (redirect is happening)
  if (!shouldRender) {
    return null;
  }

  return children;
}