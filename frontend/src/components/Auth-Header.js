export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)

  if (user && user.token) {
    console.log("auth header: " + user.token)
    return { Authorization: `JWT ${user.token}` };
  } else {
    return {};
  }
}
