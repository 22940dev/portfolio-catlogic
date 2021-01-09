class ContactApi {
  constructor() {
    this.baseUrl = 'https://app.99inbound.com/api/e/jBezP2-G';
  }

  async sendMessage(message) {
    const res = await fetch(this.baseUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(message),
    });
    if (res.ok) {
      return res.json();
    }
    const statusError = await res.json();
    const { status, error } = statusError;
    throw new Error(`Server error: ${status} (${error})`);
  }
}

const contactApi = new ContactApi();

export default contactApi;
