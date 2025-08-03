window.PETSTAY_CONFIG = {
  AWS_REGION: "us-east-2",
  COGNITO_USER_POOL_ID: 'us-east-2_xY7Mf98Hk',
  COGNITO_USER_POOL_CLIENT_ID: 'acrr8036vgbsdlnv2pg1rploa',
  COGNITO_DOMAIN: 'https://us-east-2xy7mf98hk.auth.us-east-2.amazoncognito.com',
  REDIRECT_SIGN_IN_URL: 'https://main.d1f86unaot6kvq.amplifyapp.com/admin-frontend/post-login.html',
  REDIRECT_SIGN_OUT_URL: 'https://main.d1f86unaot6kvq.amplifyapp.com/index.html',
  BOOKINGS_API_URL: "{{BOOKINGS_API_URL}}",
  ROOMS_AVAILABILITY_API_URL: "{{ROOMS_AVAILABILITY_API_URL}}",
  NEW_BOOKING_API_URL: "{{NEW_BOOKING_API_URL}}",
  CHECKIN_API_URL: 'https://main.d1f86unaot6kvq.amplifyapp.com/checkin.html',
};

// Safety check: crash the page if placeholders were not replaced
for (const key in window.PETSTAY_CONFIG) {
  if (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}")) {
    throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
  }
}

