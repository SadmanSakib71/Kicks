import axios from "axios";

async function del(url, config = {}) {
  const res = await axios.delete(url, config);
  return res?.data?.result;
}

export default del;
