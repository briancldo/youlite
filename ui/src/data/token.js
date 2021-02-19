function getToken() {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Not logged in.');
  // redirect to homepage instead

  return token;
}

function setToken(token) {
  localStorage.setItem('token', token);
}

module.exports = {
  getToken,
  setToken,
};
