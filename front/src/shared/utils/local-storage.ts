export const setToken = (token: string) => {
  localStorage.setItem("auth", JSON.stringify(token));
};

export const getToken = () => localStorage.getItem("auth") || "";

export const verifyToken = () => {
  return Boolean(getToken());
};
