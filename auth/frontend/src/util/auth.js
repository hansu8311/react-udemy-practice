import { redirect } from "react-router-dom";
export function tokenLoader() {
  return getAuthToken();
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) return null;

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) return "EXPIRED";

  return token;
}

export function checkAuthLoader() {
  // 이 함수는 다음 강의에서 추가될 것입니다.
  // 최종적으로 이런 모습이 되도록 하십시오.
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null; // 이 부분은 다음 강의 비디오에 빠져 있고, 여러분이 추가하셔야 합니다.
}

export function getTokenDuration() {
  const expiration = localStorage.getItem("expiration");
  const expirationDate = new Date(expiration);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  return duration;
}
