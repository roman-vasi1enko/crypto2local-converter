document.querySelector('button').addEventListener('click', getFetch)

let rawPrices;
let coinAmount;


let cadBtc = document.getElementById('cadBtc');
let usdBtc = document.getElementById('usdBtc');
let rubBtc = document.getElementById('rubBtc');
let cnyBtc = document.getElementById('cnyBtc');
let inrBtc = document.getElementById('inrBtc');
let gbpBtc = document.getElementById('gbpBtc');
let eurBtc = document.getElementById('eurBtc');
let tryBtc = document.getElementById('tryBtc');
let jpyBtc = document.getElementById('jpyBtc');
let brlBtc = document.getElementById('brlBtc');

function getFetch(){
    coinAmount = document.querySelector('input').value;
    const coinTicker = document.querySelector('select').value
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinTicker}&vs_currencies=cad%2Cusd%2Crub%2Ccny%2Cinr%2Cgbp%2Ceur%2Ctry%2Cjpy%2Cbrl`;

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        rawPrices = data[coinTicker];

        for (let price in rawPrices) {
            rawPrices[price] = rawPrices[price] * coinAmount;
        }

        cadBtc.innerText = rawPrices.cad.toLocaleString();
        usdBtc.innerText = rawPrices.usd.toLocaleString();
        rubBtc.innerText = rawPrices.rub.toLocaleString();
        cnyBtc.innerText = rawPrices.cny.toLocaleString();
        inrBtc.innerText = rawPrices.inr.toLocaleString();
        gbpBtc.innerText = rawPrices.gbp.toLocaleString();
        eurBtc.innerText = rawPrices.eur.toLocaleString();
        tryBtc.innerText = rawPrices.try.toLocaleString();
        jpyBtc.innerText = rawPrices.jpy.toLocaleString();
        brlBtc.innerText = rawPrices.brl.toLocaleString();


        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

getFetch();
