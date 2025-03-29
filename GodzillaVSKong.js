
    function film (input){

    let moneyBudget = Number(input[0]);
    let numStatisti = Number(input[1]);
    let priceClothing = Number(input[2]);


    let decor = (moneyBudget * 0.10);
    if(numStatisti > 150){
        priceClothing = priceClothing *0.90
    }
    let totalClothing = numStatisti * priceClothing
    let totalSum = decor + totalClothing ;


    if (decor && totalClothing > moneyBudget) {
        let leftMoney = moneyBudget - totalSum 
        console.log(`Not enough money! Wingard needs ${leftMoney.toFixed(2)} leva more.`)
    }
    else {
        let notEnought = totalSum - moneyBudget 
        console.log(`Action!" "Wingard starts filming with ${ notEnought.toFixed(2)} leva left.`)
    }








}

film(["20000",  "120", "55.5"])