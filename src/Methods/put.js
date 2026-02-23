import axios from "axios";

async function put(url, data = {}, config = {}) {
  const res = await axios.put(url, data, config);
  return res?.data?.result;
}

export default put;
