import axios from "axios";

export async function request(url: string, options: any) {
  const response = await axios(url, options);
  const response_1 = await checkStatus(response);
  return parseJSON(response_1);
}

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  console.log(error);

  // error.response = response;
  // error.status = response.status;
  throw error;
}

function parseJSON(response: any) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json ? response.json() : response;
}
