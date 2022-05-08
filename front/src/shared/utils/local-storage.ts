export const setToken = (token: any) => {
  localStorage.setItem("auth", token);
};

export const getToken = () => {
  const token = localStorage.getItem("auth");
  if (token) {
    return token;
  } else {
    return null;
  }
};
export const verifyToken = () => {
  return Boolean(getToken());
};
