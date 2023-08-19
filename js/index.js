const usernameSpan = document.getElementById('username');
const logoutButton = document.getElementById('logout-button');

const profilePicture = document.getElementById('profile-picture');

// Retrieve profile picture from local storage
const profilePictureBase64 = localStorage.getItem('profilePicture');

// Check if user is logged in
if (localStorage.getItem('username')) {
  usernameSpan.textContent = localStorage.getItem('username');
} else {
  // Redirect to login page
  window.location.href = 'signup.html';
}

// Handle logout button click
logoutButton.addEventListener('click', () => {
  // Remove user data from local storage
  localStorage.removeItem('username');
  localStorage.removeItem('password');

  // Redirect to login page
  window.location.href = 'signup.html';
});


// Set profile picture as the source of the image tag
if (profilePictureBase64) {
  profilePicture.src = profilePictureBase64;
}