const loginForm = document.getElementById('login-form');
const profilePictureInput = document.getElementById('profile-picture');
const profilePicturePreview = document.getElementById('profile-picture-preview');

// Check if user is already logged in
if (localStorage.getItem('username')) {
  window.location.href = '/';
}


loginForm.addEventListener('submit', (e) => {


  // Get user input
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  
  // Convert profile picture to base64 string and store in local storage
  const fileReader = new FileReader();
  fileReader.readAsDataURL(profilePictureInput.files[0]);
  fileReader.onload = (e) => {
    const profilePictureBase64 = e.target.result;
    localStorage.setItem('profilePicture', profilePictureBase64);
  };

  // Save user input to local storage
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('address', address);
  localStorage.setItem('phone', phone);
  localStorage.setItem('password', password);
  
});
  
  
profilePictureInput.addEventListener('change', () => {
  const file = profilePictureInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    profilePicturePreview.src = reader.result;
  }
  reader.readAsDataURL(file);
});