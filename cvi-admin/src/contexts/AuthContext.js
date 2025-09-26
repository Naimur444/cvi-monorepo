"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { authAPI, tokenManager } from '../utils/auth';

// Auth context
const AuthContext = createContext();

// Action types
const AUTH_ACTIONS = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING',
  CLEAR_ERROR: 'CLEAR_ERROR',
};

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  isInitialized: false,
};

// Auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
        isInitialized: true,
      };
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload.error,
        isInitialized: true,
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        isInitialized: true,
      };
    case AUTH_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: !!action.payload.user,
        isInitialized: true,
      };
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.loading,
      };
    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  // Initialize auth state on mount
  useEffect(() => {
    const initializeAuth = async () => {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: { loading: true } });
      
      try {
        const accessToken = tokenManager.getAccessToken();
        const user = tokenManager.getUser();

        if (accessToken && user) {
          // Only verify token if it's not expired
          if (!tokenManager.isTokenExpired(accessToken)) {
            // If we have valid token and user data, use cached data without API call
            dispatch({
              type: AUTH_ACTIONS.SET_USER,
              payload: { user },
            });
          } else {
            // Token is expired, clear everything
            tokenManager.clearTokens();
            tokenManager.clearUser();
            dispatch({
              type: AUTH_ACTIONS.SET_USER,
              payload: { user: null },
            });
          }
        } else {
          // No valid token, clear everything
          tokenManager.clearTokens();
          tokenManager.clearUser();
          dispatch({
            type: AUTH_ACTIONS.SET_USER,
            payload: { user: null },
          });
        }
      } catch (error) {
        console.error('Auth initialization failed:', error);
        // Clear everything on any error
        tokenManager.clearTokens();
        tokenManager.clearUser();
        dispatch({
          type: AUTH_ACTIONS.SET_USER,
          payload: { user: null },
        });
      } finally {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: { loading: false } });
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (credentials) => {
    dispatch({ type: AUTH_ACTIONS.LOGIN_START });

    try {
      const response = await authAPI.login(credentials);
      const { accessToken, refreshToken, user } = response;

      // Store tokens and user
      tokenManager.setTokens(accessToken, refreshToken);
      tokenManager.setUser(user);

      dispatch({
        type: AUTH_ACTIONS.LOGIN_SUCCESS,
        payload: { user },
      });

      return { success: true };
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed';
      dispatch({
        type: AUTH_ACTIONS.LOGIN_FAILURE,
        payload: { error: errorMessage },
      });
      return { success: false, error: errorMessage };
    }
  };

  // Logout function
  const logout = async () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: { loading: true } });

    try {
      // Call logout API
      await authAPI.logout();
    } catch (error) {
      // Even if logout API fails, we still clear local storage
      console.error('Logout API failed:', error);
    } finally {
      // Always clear local storage and state
      tokenManager.clearTokens();
      tokenManager.clearUser();
      dispatch({ type: AUTH_ACTIONS.LOGOUT });
    }
  };

  // Clear error function
  const clearError = () => {
    dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
  };

  // Update user function
  const updateUser = async () => {
    try {
      const profile = await authAPI.getProfile();
      dispatch({
        type: AUTH_ACTIONS.SET_USER,
        payload: { user: profile },
      });
      tokenManager.setUser(profile);
      return profile;
    } catch (error) {
      console.error('Failed to update user:', error);
      throw error;
    }
  };

  const value = {
    ...state,
    login,
    logout,
    clearError,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};