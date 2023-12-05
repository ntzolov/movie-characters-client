export const registerValidation = (dataObj) => {
  if (!dataObj.username || !dataObj.password || !dataObj.rePassword) {
    throw new Error('All fields required!');
  }
  if (dataObj.username.length < 3) {
    throw new Error('Username must be at least 3 characters long!');
  }
  if (dataObj.password.length < 3) {
    throw new Error('Password must be at least 3 characters long!');
  }
  if (dataObj.password !== dataObj.rePassword) {
    throw new Error("Password doesn't match!!!");
  }

  return;
};

export const loginValidation = (dataObj) => {
  if (!dataObj.username || !dataObj.password) {
    throw new Error('All fields required!');
  }
  if (dataObj.username.length < 3) {
    throw new Error('Username must be at least 3 characters long!');
  }
  if (dataObj.password.length < 3) {
    throw new Error('Password must be at least 3 characters long!');
  }
};

export const createEditValidation = (dataObj) => {
  if (
    !dataObj.name ||
    !dataObj.imageUrl ||
    !dataObj.createdBy ||
    !dataObj.performedBy ||
    !dataObj.firstAppearance ||
    !dataObj.description ||
    !dataObj.famousLine
  ) {
    throw new Error('All fields required!!!');
  }
  if (!/^https?:\/\//.test(dataObj.imageUrl)) {
    throw new Error('URL is not valid!!!')
  }
};
