/**
 * AuthService interface
 *
 * get():Promise<Array<Todo>>
 * create():Promise<Todo>
 */

export class TodoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async get() {
    const reponse = await this.httpClient.fetch("todos");
    return reponse.json();
  }

  async create(todo) {
    const response = await this.httpClient.fetch("todos", {
      method: "POST",
      body: JSON.stringify({ todo }),
    });
    return response.json();
  }
}
