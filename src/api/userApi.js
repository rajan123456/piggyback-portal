import { handleResponse, handleError } from "./apiUtils";
import * as config from "../config/config";

const baseUrlHateOas = config.baseUrlHateOas;
const baseUrl = config.baseUrl;

export function getUsers() {
  return fetch(baseUrlHateOas)
    .then(handleResponse)
    .catch(handleError);
}

export function getUserById(user_id) {
  return fetch(baseUrlHateOas + user_id)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(user => {
        return user;
      });
    })
    .catch(handleError);
}

export function saveUser(user) {
  return fetch(baseUrlHateOas + (user.id || ""), {
    method: user.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function loginUser(user) {
  return fetch(baseUrl + "login/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  }).then(response => {
    if (!response.ok) throw new Error("Network response was not ok.");
    return response;
  });
}
