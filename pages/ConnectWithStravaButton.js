import React from "react";
import axios from "axios";

// import { getStravaAuthRequestUrl } from "../utils/ingest/utils";
async function stravaGetRequest() {
  //const stravaAPIKey = '906c799780d57efe30f709fb31ea13ff56f52ec4'
  const stravaAuthUrl = "https://www.strava.com/api/v3/oauth/authorize";
  var client_id = 77581; // Your client id
  var client_secret = "dc82d35848881df36e51ba06e4da5111174f3a0b"; // Your secret
  var redirect_uri = 'http://localhost:3000/api/auth/callback/strava'; // Your redirect uri

  //https://stackoverflow.com/a/56297795
  const options = {
    method: "get",
    url: stravaAuthUrl,
    params: {
        client_id: client_id,
        redirect_uri: redirect_uri,
        response_type: 'code', 
        approval_prompt: 'auto',
        scope: 'activity:read_all'
    },
  };

  try {
    console.log(options);
    let response = await axios(options);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

const ConnectWithStravaButton = () => (
  //   <a className={className} href={getStravaAuthRequestUrl(pathname)}>
  <button onClick={stravaGetRequest}>Connect with Strava</button>
);

export default ConnectWithStravaButton;




//https://www.strava.com/oauth/authorize?approval_prompt=auto&client_id=22415&redirect_uri=https%3A%2F%2Fthemostlaps.com%2Fauth-callback&response_type=code&scope=read_all%2Cactivity%3Aread_all%2Cprofile%3Aread_all&state=%2F%7CshouldSubscribe
//https://www.strava.com/oauth/mobile/authorize?approval_prompt=auto