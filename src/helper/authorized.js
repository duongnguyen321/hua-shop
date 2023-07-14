import API from "../config";
import axios from "axios";

const authorized = async () => {
  const userId = localStorage.getItem("userid");
  const accessToken = localStorage.getItem("accessToken");
  const url = API.postTokenLogin;
  let author = false;
  if (userId && accessToken) {
    const res = await axios
      .post(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          userid: userId,
        },
      })
      .then((res) => res.data)
      .catch((err) => err.response.data);
    if (res) {
      if (res?.user?.userid === userId) {
        author = true;
        localStorage.userInfo = JSON.stringify(res.user);
      } else {
        author = false;
        localStorage.removeItem("userid");
        localStorage.removeItem("userInfo");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }
  } else {
    author = false;
  }
  return author;
};
export default authorized;
