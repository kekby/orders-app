// @flow

const get = (url: string) => {
  return fetch(url)
    .then((res) => res.json());
};

export default {
  getCities: () => get('https://www.mocky.io/v2/5b34c0d82f00007400376066?mocky-delay=700ms'),
};
