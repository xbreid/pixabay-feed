const fetchData = (api: string) => fetch(api, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('pf_token') as string
  },
})
  .then((response) => response.json())
  .catch((error) => console.log(error));

function getUrlExtension(url: string): string | undefined {
  if (!url) return url;

  const stack = url.split(/[#?]/)[0].split('.').pop();
  return stack?.trim();
}

const numberWithCommas = (x: number | string) =>
  x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export {
  // eslint-disable-next-line import/prefer-default-export
  fetchData,
  getUrlExtension,
  numberWithCommas,
};
