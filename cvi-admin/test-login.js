// Test login functionality
// Open browser console and run this test

async function testLogin() {
  const API_URL = 'http://api.cloudvortexinnovation.com';
  
  console.log('🧪 Testing login functionality...');
  
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@cloudvortexinnovation.com',
        password: 'admin123'
      })
    });
    
    console.log('📡 Response status:', response.status);
    console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Login successful!', data);
      
      // Test if we can access profile
      const profileResponse = await fetch(`${API_URL}/auth/profile`, {
        headers: {
          'Authorization': `Bearer ${data.accessToken}`
        }
      });
      
      if (profileResponse.ok) {
        const profile = await profileResponse.json();
        console.log('✅ Profile fetch successful!', profile);
      } else {
        console.log('❌ Profile fetch failed:', profileResponse.status);
      }
      
    } else {
      const errorText = await response.text();
      console.log('❌ Login failed:', response.status, errorText);
    }
  } catch (error) {
    console.log('❌ Network error:', error);
  }
}

// Run the test
testLogin();