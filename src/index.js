// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if (+currency>10000) return { error:"You are rich, my friend! We don't have so much coins for exchange"};
    if (+currency<0) return {};
       
    const cash={};
    cash.H=Math.floor(currency/50);
    cash.Q=Math.floor((currency-50*cash.H)/25);
    cash.D=Math.floor((currency-50*cash.H-25*cash.Q)/10);
    cash.N=Math.floor((currency-50*cash.H-25*cash.Q-10*cash.D)/5);
    cash.P=Math.floor((currency-50*cash.H-25*cash.Q-10*cash.D-5*cash.N));
    for (key in cash)
    if (cash[key]==0) delete cash[key]
    return cash;
    
}
