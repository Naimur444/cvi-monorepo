import api from './api';

// Settings API functions
export const settingsAPI = {
  // Get current settings
  getCurrentSettings: async () => {
    const response = await api.get('/settings/current');
    return response.data;
  },

  // Update current settings
  updateCurrentSettings: async (settingsData) => {
    const response = await api.patch('/settings/current/update', settingsData);
    return response.data;
  },

  // Upload logo
  uploadLogo: async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Upload favicon
  uploadFavicon: async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};
