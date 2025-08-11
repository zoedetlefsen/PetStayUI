window.PETSTAY_CONFIG = {
  AWS_REGION: "us-east-2",
  COGNITO_USER_POOL_ID: 'us-east-2_xY7Mf98Hk',
  COGNITO_USER_POOL_CLIENT_ID: 'acrr8036vgbsdlnv2pg1rploa',
  COGNITO_DOMAIN: 'us-east-2xy7mf98hk.auth.us-east-2.amazoncognito.com',

  REDIRECT_SIGN_IN_URL: 'https://main.d1f86unaot6kvq.amplifyapp.com/admin-frontend/post-login.html',
  REDIRECT_SIGN_OUT_URL: 'https://main.d1f86unaot6kvq.amplifyapp.com/index.html',
  REDIRECT_ADMIN_SIGN_IN_URL: 'https://main.d1f86unaot6kvq.amplifyapp.com/admin-frontend/post-login.html',

  API_BASE_URL: 'https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed',
  BOOKING_API_URL: 'https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed/booking',
  BOOKING_STATUS_API_URL: 'https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed/bookingStatus',
  BOOKINGS_API_URL: `https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed/bookings`,
  ROOMS_AVAILABILITY_API_URL: 'https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed/rooms/availability',
  NEW_BOOKING_API_URL: 'https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed/newbooking',
  CONFIRM_BOOKING_URL: 'https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed/confirm',
  CANCEL_BOOKING_URL: 'https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed/cancel',
  CHECKIN_BOOKING_URL: 'https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed/checkin',
  CHECKOUT_BOOKING_URL: 'https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed/checkout',
  RESTORE_BOOKING_URL: 'https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed/restore',
  PET_PHOTO_UPLOAD_URL: 'https://sqxjb1dqb8.execute-api.us-east-2.amazonaws.com/deployed/upload-url',
  PET_PHOTO_PUBLIC_URL_BASE: 'https://petstay-pet-photos-110427923907.s3.amazonaws.com',

};

// Safety check: crash the page if placeholders were not replaced
for (const key in window.PETSTAY_CONFIG) {
  if (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}")) {
    throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
  }
}

