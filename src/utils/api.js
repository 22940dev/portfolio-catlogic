import axios from 'axios';

class Api {
  constructor() {
    this._baseUrl = 'https://app.99inbound.com/api/e/jBezP2-G';
  }

  _serverErrorsHandler(response) {
    if (response.status >= 200 && response.status < 300)  {
      return response;
    } else {
      throw new Error(`Server error: ${response.status} (${response.error})`);
    }
  }

  sendMessage(message) {
    return axios({
      method: 'post',
      url: this._baseUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: message,
    }).then((response) => {
      return this._serverErrorsHandler(response);
    });
  }
}

export default Api;
