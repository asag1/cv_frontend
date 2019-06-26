import { API_DOMAIN } from "./constants";

export const putContact = async (url, id) => {
  return fetch(`${API_DOMAIN}${url}/${id}`, {
    body: JSON.stringify(id),
    method: "PUT",
    headers: { Accept: "application/json", "Content-type": "application/json" }
  }).then(resp => resp.json());
};
