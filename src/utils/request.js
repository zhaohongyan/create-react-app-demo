import axios from 'axios';

const request = async function (method, url, params) {
  try {
    const response = await axios({method, url, data: params});
    console.log('response: ', response)
    return response.data;
  } catch (error) {
    console.log('response error: ', error)
  }

}

export default request;