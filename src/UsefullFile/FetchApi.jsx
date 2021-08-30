async function FetchApi(url, method = null, postData = {}) {
  try {
    if (method === 'post') {
      const param = {
        method: 'POST',
        body: postData,
      }
      console.log(postData);
      const response = await fetch(url, param);
      return response.json();

    }
    else {
      const param = null;
      // console.log('null for get method');
      const response = await fetch(url, param);
      // console.log(response);
      const reciveData = await response.json();
      // console.log(reciveData);
      return reciveData;
    }

  } catch (error) {

    return console.log(error);
  }
}

export { FetchApi };