import liff from '@line/liff';

liff.init({
  liffId: '1656167992-OLx3dxD5'
}).then(() => {
  // Now you can call LIFF API methods
  const userIdElement = document.getElementById('userId');
  userIdElement.innerHTML = `staet`;

  if (liff.isLoggedIn()) {
    const userId = liff.getProfile().userId;
    userIdElement.innerHTML = `Your Line user ID is: ${userId}`;
  } else {
    liff.login();
  }
}).catch((err) => {
  console.log(`LIFF initialization failed: ${err.message}`);
});






