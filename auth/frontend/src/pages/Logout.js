import { redirect } from "next/dist/server/api-utils";

export function action() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");

  return redirect("/");
}
