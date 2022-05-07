export const setToken = (token: string) => {
  localStorage.setItem("auth", JSON.stringify(token));
};

export const getToken = () => {
  const token = localStorage.getItem("auth");
  if (token) {
    return JSON.parse(token);
  } else {
    return "";
  }
};
export const verifyToken = () => {
  return Boolean(getToken());
};
