import { redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  REDIRECT_URL,
} from "$env/static/private";

export const GET = async ({ url }) => {
  const code = await url.searchParams.get("code");
  try {
    const oAuth2Client = new OAuth2Client(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      REDIRECT_URL
    );

    const res = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(res.tokens);
    console.log("Auth tokens recieved");
    const user = oAuth2Client.credentials;
    console.log(user);
  } catch (error) {
    console.log("Error loggin in google auth");
    console.log(error);
  }
  throw redirect(303, "/foods/breakfast");
};
