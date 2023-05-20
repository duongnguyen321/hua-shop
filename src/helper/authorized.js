import API from "../config";
import axios from "axios";

const authorized = async () => {
  const userId = localStorage.getItem("user_id");
  const url = API.userId(userId);
  let author = false;
  if (userId) {
    await axios.get(url).then((res) => {
      if (Object.keys(res.data).length) {
        author = true;
      } else {
        author = false;
        localStorage.removeItem("user_id");
      }
    });
  } else {
    author = false;
    localStorage.removeItem("user_id");
  }
  return author;
};
export default authorized;
