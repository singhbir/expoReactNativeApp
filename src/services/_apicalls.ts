import axios from "axios";

export const verifyUser = async (idToken: string) => {
  try {
    let url = `https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`;
    let data = await axios.get(url);
    return data.data;
  } catch (error) {
    throw error;
  }
};
