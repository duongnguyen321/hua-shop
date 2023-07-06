import API from "../config";
import axios from "axios";

const authorized = async () => {
  const userId = localStorage.getItem("userId");
  const accessToken = localStorage.getItem("accessToken");
  const url = API.getUserId(userId);
  let author = false;
  if (userId && accessToken) {
    const res = await axios
      .get(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => res)
      .catch((err) => err.response);
    if (res.status !== 401) {
      author = true;
    } else {
      author = false;
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
    }
  } else {
    author = false;
    localStorage.removeItem("userId");
    localStorage.removeItem("accessToken");
  }

  return author;
};
export default authorized;
