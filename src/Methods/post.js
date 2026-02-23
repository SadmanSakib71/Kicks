import axios from "axios";

async function post(url, data = {}, config = {}) {
  const res = await axios.post(url, data, config);
  return res?.data?.result;
}

export default post;
