async function getApiData(url, requestParams = {}) {
  let response = await fetch(url, requestParams);
  if (response.status === 200) {
    try {
      let data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Ошибка при обработке данных!');
    };
  };
  if (response.status === 403) {
    throw new Error('Ваше приложение не имеет права доступа к данным!');
  };
  throw new Error('Приложение совершило не корректный запрос!');
  /* if (response.status === 200) {
    let data = await response.json();
    return data;
  } else if (response.status === 403) {
    throw new Error("Ваше приложение не имеет права доступа к данным!");
  } else {
    throw new Error('Приложение совершило не корректный запрос!');
  }; */
};

export { getApiData };