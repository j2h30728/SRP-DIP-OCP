/**
 * AuthService interface
 *
 * signin(eamil,password):Promise<undefined> - 토큰저장후
 * signup(email,password):Promise<undefined>
 * logout():void
 *
 */

export class AuthService {
  constructor(httpClient, tokenRepository) {
    this.httpClient = httpClient;
    this.tokenRepository = tokenRepository;
  }

  async signin(email, password) {
    const result = await this.httpClient.fetch("auth/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const { access_token } = await result.json();
    this.tokenRepository.save(access_token);
  }

  async signup(email, password) {
    const response = await this.httpClient.fetch("auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw response;
    }
  }

  logout() {
    this.tokenRepository.remove();
  }
}
