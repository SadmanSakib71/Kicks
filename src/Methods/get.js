import axios from "axios";

async function get(url, config = {}) {
  const res = await axios.get(url, config);
  return res?.data?.result ?? res?.data;
}

export default get;
