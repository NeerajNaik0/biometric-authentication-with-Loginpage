document.getElementById('authenticate-btn').addEventListener('click', function() {
  // Simulate biometric authentication
  // Here you would usually integrate with a biometric authentication system
  let authenticated = Math.random() >= 0.5; // Simulated authentication result

  if (authenticated) {
    document.getElementById('auth-message').textContent = 'Authentication successful!';
  } else {
    document.getElementById('auth-message').textContent = 'Authentication failed. Please try again.';
  }
});