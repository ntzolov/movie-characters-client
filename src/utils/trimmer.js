export const trimmer = (dataObj) => {
  for (const key in dataObj) {
    if (typeof dataObj[key] === 'string') {
      dataObj[key] = dataObj[key].trim();
    }
  }

  return dataObj;
};
