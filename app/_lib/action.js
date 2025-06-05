'use server';

import axios from "axios";



export async function getPost() {
  try {

  } catch (err) {

  }
}



export async function registerUser(val) {
  try {
    await axios.post('http://localhost:3000/api/auth/register', val);
    return { error: false, message: "success" };
  } catch (err) {
    return { error: true, message: 'Something went wrong' };
  }
}


