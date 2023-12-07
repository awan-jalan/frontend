import axios from 'axios';

export default async function handler(content:string):any {
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
      url: 'https://us-central1-aiplatform.googleapis.com/v1/projects/48414764875/locations/us-central1/endpoints/2807442412828360704:predict',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ya29.a0AfB_byAb6iRab7HZjJXsV9KtshR54SAo276xrWjErpZJ6ksfUk5KKEk1d2CLH_GJnmOVDs_4Gt0sekBF8a0oLqeD2-mS64QejnkGbkVMjZMZkb_SSo0io-LdX4vX_8aPDRQ4zc0GizK3iX-GykLRPcJIZzHapn2Wv3F-g3knPrwaCgYKAfkSARESFQHGX2MiUP6pWzzGZD2ijQaQAhdsVw0178'
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
    client_id: '48414764875-3ng54q5g1mvlap4f94t355fh4u9fuqv3.apps.googleusercontent.com',
    client_secret: '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',
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

