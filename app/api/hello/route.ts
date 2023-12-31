import axios from 'axios';

export default async function handler(content) {
  console.log(process.env.NEXT_PUBLIC_TOKEN)
  try {
    const axios = require('axios');
    content = content.slice(23)
    let data = JSON.stringify({
      "instances": [
        {
          "content": content
        }
      ],
      "parameters": {
        "confidenceThreshold": 0.15,
        "maxPredictions": 5
      }
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://us-central1-aiplatform.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_PROJECT_ID}/locations/us-central1/endpoints/${process.env.NEXT_PUBLIC_ENDPOINT_ID}:predict`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+process.env.NEXT_PUBLIC_TOKEN.toString()

      },
      data : data
    };

    return await axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          return JSON.stringify(response.data)
        })
        .catch((error) => {
          console.log(error);
          return ""
        })
  } catch (error) {
    return error.toString();
  }
}

async function refreshAccessToken() {
  const response = await axios.post('https://accounts.google.com/o/oauth2/token', {
    grant_type: 'refresh_token',
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    refresh_token: 'YOUR_REFRESH_TOKEN',
  });

  return response.data.access_token;
}
export async function getAccessToken(){
  const response = await axios.post('https://accounts.google.com/o/oauth2/v2/auth', {
    key:'AIzaSyCT2Gt7H7kOx2KMrmecHYxFY26MInckEX8',
    scope: 'https%3A//www.googleapis.com/auth/drive.metadata.readonly',
    include_granted_scopes: 'true',
    response_type: 'token',
    redirect_uri: 'http://localhost:3000',
    client_id:'48414764875-3ng54q5g1mvlap4f94t355fh4u9fuqv3.apps.googleusercontent.com',
  });

  console.log(response)
  return response;
}

