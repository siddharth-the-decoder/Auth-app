import axios from "axios";

const API_KEY = "AIzaSyC03toNNb6XwS8k06hQpvigGONiXX05fCo";

export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
