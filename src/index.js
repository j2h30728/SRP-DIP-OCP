import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HttpClient } from "./httpClient/httpClient";
import { LocalTokenRepository } from "./repository/LocalTokenRepository";
import { AuthService } from "./service/AuthService";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient(
  "https://www.pre-onboarding-selection-task.shop/",
  tokenRepository
);
const authService = new AuthService(httpClient, tokenRepository);

root.render(
  <AuthProvider authService={authService}>
    <App />
  </AuthProvider>
);
