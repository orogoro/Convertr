const KEY_API = '21ri4hrP61Q26vqPAe641lMG4AVWyLMw';
const URL = 'https://api.apilayer.com/exchangerates_data';

const myHeaders = new Headers();
myHeaders.append('apikey', KEY_API);

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export function getСonvert(valueTo, valueFrom, amount) {
  return fetch(
    `${URL}/convert?to=${valueTo}&from=${valueFrom}&amount=${amount}`,
    requestOptions
  )
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => console.log(error));
}

export function getActualConvert() {
  return fetch(`${URL}/latest?base=UAH&symbols=EUR,USD`, requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => console.log('error', error));
}
