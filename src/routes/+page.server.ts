import { CRIPTO_API_KEY, CURRENCY_API_KEY } from "$env/static/private";
/* 
async function call(){
    let response: any = {data: []};

    
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
        response.data.push(x.symbol = {name: x.name, symbol: x.symbol, sign: x.symbol, price: x.quote.USD.price })
    });
    [...fiatResponse.data].forEach(x =>{
        if(currencyResponse.data[x.symbol]?.value){
            response.data.push(x.symbol = {name: x.name, symbol: x.symbol, sign: x.sign, price: currencyResponse.data[x.symbol].value})
        }
    });
    response.date = criptoResponse.status.timestamp
    return response
}
*/


//example
export const load = () => {
    return call();
};

///*
function call() {
    const fecha = new Date().toISOString();
    const a = {
        date: fecha,
        data: [
            {
                name: 'Uruguayan Peso',
                symbol: 'UYU',
                sign: '$',
                price: 40.2730068872
            },
            {
                name: 'Qatari Rial',
                symbol: 'QAR',
                sign: 'ر.ق',
                price: 3.6410006985
            },
            {
            name: 'Argentine Peso',
            symbol: 'ARS',
            sign: '$',
            price: 1354.690224809
            },
            {
                name: 'Euro',
                symbol: 'EUR',
                sign: '€',
                price: 0.8498741066
            },
            {
                name: 'Swiss Franc',
                symbol: 'CHF',
                sign: 'Fr',
                price: 0.7832301211
            },
            {
                name: 'Chilean Peso',
                symbol: 'CLP',
                sign: '$',
                price: 893.8801171435
            },
            {
                name: 'Chinese Yuan',
                symbol: 'CNY',
                sign: '¥',
                price: 6.8303011642
            },
            {
                name: 'United States Dollar',
                symbol: 'USD',
                sign: '$',
                price: 1
            },
            {
                name: 'Bitcoin',
                symbol: 'BTC',
                sign: 'BTC',
                price: 75959.64584106281
            },
            {
                name: 'Ethereum',
                symbol: 'ETH',
                sign: 'ETH',
                price: 2406.6583399550696
            },
        ]
    }
    return a;
}
//*/