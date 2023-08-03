import md5 from "md5";

export function generateAuthToken(email, password) {
  const combinedString = email + password;
  const authToken = md5(combinedString);
  return authToken;
}
