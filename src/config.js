const appConfig = {
  url: 'http://127.0.0.1:7000/api',
  requestParams: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'secret'
      }
    },
};

export {appConfig};