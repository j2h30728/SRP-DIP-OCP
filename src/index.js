import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HttpClient } from "./httpClient/httpClient";
import { LocalTokenRepository } from "./repository/LocalTokenRepository";
import { AuthService } from "./service/AuthService";
import { AuthProvider } from "./context/AuthContext";
import { TodoService } from "./service/TodoService";
import { TodoProvider } from "./context/TodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient(
  "https://www.pre-onboarding-selection-task.shop/",
  tokenRepository
);
const authService = new AuthService(httpClient, tokenRepository);
const todoService = new TodoService(httpClient);

root.render(
  <AuthProvider authService={authService}>
    <TodoProvider todoService={todoService}>
      <App />
    </TodoProvider>
  </AuthProvider>
);
