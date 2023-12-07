export async function toJsonImage(file:File) {

    const base64 = await fileToBase64(file)
                        .then(function(data) {
                            return data;
                    })
   return `{
  "instances": [{
    "content": ${base64}
  }],
  "parameters": {
    "confidenceThreshold": 0.1,
    "maxPredictions": 5
  }
}`

}

export function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        let base64String = ''
        reader.onload = () => {
            if (typeof reader.result === "string") {
                base64String = reader.result.split(',')[1];
            }
            resolve(base64String);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
}
