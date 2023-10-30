export const getUserData = () => {
  return JSON.parse(sessionStorage.getItem('user'));
};
