import api from './api';

// Auth API functions
export const authAPI = {
  // Login
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  // Logout
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  // Refresh token
  refreshToken: async (refreshToken) => {
    const response = await api.post('/auth/refresh', { refreshToken });
    return response.data;
  },

  // Get profile
  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  // Create admin (for initial setup)
  createAdmin: async (adminData) => {
    const response = await api.post('/auth/create-admin', adminData);
    return response.data;
  },
};

// Token management - optimized with cache clearing
export const tokenManager = {
  setTokens: (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    // Clear profile cache when tokens change
    localStorage.removeItem('profileCacheTime');
  },
  
  getAccessToken: () => {
    return localStorage.getItem('accessToken');
  },
  
  getRefreshToken: () => {
    return localStorage.getItem('refreshToken');
  },
  
  clearTokens: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    localStorage.removeItem('profileCacheTime');
  },
  
  isTokenExpired: (token) => {
    if (!token) return true;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      // Add 30 second buffer before expiration
      return Date.now() >= (payload.exp * 1000 - 30000);
    } catch {
      return true;
    }
  },

  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  },

  clearUser: () => {
    localStorage.removeItem('user');
  },
};