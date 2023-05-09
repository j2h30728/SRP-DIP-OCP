/**
 * httpClient interface
 * fetch(endPoint, option):Promise<Response>
 */
export class HttpClient {
  constructor(baseUrl, tokenRepository) {
    this.baseUrl = baseUrl;
    this.tokenRepository = tokenRepository;
  }

  fetch(endPoint, option = {}) {
    return window.fetch(`${this.baseUrl}${endPoint}`, {
      ...option,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.tokenRepository.get(),
        ...option.headers,
      },
    });
  }
}
