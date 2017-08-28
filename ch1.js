
const PHONE_PRICE = 100;
const ACCESSORY_PRICE = 10;
const SPENDING_THRESHOLD = 800;
const TAX_RATE = .11;

var bankBalance = 2000;
var amount = 0;

function taxRate(amt) {
  return amt * TAX_RATE;
}

function formatNum(amt){
    return `$${amt.toFixed(2)}`;
}

while (amount < bankBalance){
    amount += PHONE_PRICE;

    if(amount < SPENDING_THRESHOLD){
        amount += ACCESSORY_PRICE;
    }
}

amount += taxRate(amount);

console.log(`Your amount is ${formatNum(amount)}`);

if(amount > bankBalance){
    console.log(`You can't afford this one`);
}

