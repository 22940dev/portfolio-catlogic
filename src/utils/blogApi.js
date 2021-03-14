class BlogApi {
  constructor() {
    this.baseUrl = 'https://dev.to/api/articles?username=cat__logic';
  }

  async getData() {
    const res = await fetch(this.baseUrl);
    if (res.ok) {
      return res.json();
    }
    const statusError = await res.json();
    const { status, error } = statusError;
    throw new Error(`Server error: ${status} (${error})`);
  }
}

const blogApi = new BlogApi();

export default blogApi;
