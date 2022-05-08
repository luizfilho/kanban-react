export const setToken = (token: any) => {
  localStorage.setItem("auth", token);
};

export const getToken = () => {
  const token = localStorage.getItem("auth");
  console.log("TOKEN ==>", { token });
  if (token) {
    return token;
  } else {
    return null;
  }
};
export const verifyToken = () => {
  return Boolean(getToken());
};
