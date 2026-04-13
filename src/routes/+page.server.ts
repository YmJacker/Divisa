/* import { CRIPTO_API_KEY, CURRENCY_API_KEY } from "$env/static/private";

export const load = async () => {
    let response: any = new Object;

    
    const url = new URL("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",);
    url.search = new URLSearchParams({
        start: "1",
        limit: "10",
        convert: "USD",
    }).toString();
    const criptoResponse = await fetch(url, {
        headers: {
            Accept: "application/json",
            "X-CMC_PRO_API_KEY": CRIPTO_API_KEY,
        },
    })
    .then(promise => promise.json());
    
    //llamada a la api de solo 300 peticiones
    const currencyUrl = new URL("https://api.currencyapi.com/v3/latest");
    const currencyResponse = await fetch(currencyUrl, {
        headers:{
            Accept: "aplication/json",
            "apikey": CURRENCY_API_KEY,
        }
    })
    .then(promise => promise.json());

    // me duevuelve tipo de moneda y simbolo, fiat
    const fiat = new URL("https://pro-api.coinmarketcap.com/v1/fiat/map",);
    const fiatResponse = await fetch(fiat, {
        headers: {
            Accept: "application/json",
            "X-CMC_PRO_API_KEY": CRIPTO_API_KEY,
        },
    })
    .then(promise => promise.json());


    // if (!response.ok) {throw new Error(`Request failed: ${response.status} ${response.statusText}`);}


    [...criptoResponse.data].forEach(x =>{
        response[x.symbol] = {name: x.name, sign: x.symbol, price: x.quote.USD.price }
    });
    [...fiatResponse.data].forEach(x =>{
        if(currencyResponse.data[x.symbol]?.value){
            response[x.symbol] = {name: x.name, sign: x.sign, price: currencyResponse.data[x.symbol].value}        
        }
    });

    return response
} */