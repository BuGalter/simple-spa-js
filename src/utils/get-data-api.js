async function getApiData(url, requestParams = {}) {
  let response = await fetch(url, requestParams);
  let data = await response.json();
  return data;
};

export { getApiData };