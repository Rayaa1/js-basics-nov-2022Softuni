function journey (input){
    let budget = Number(input[0])
    let season = input[1];
    let vacationType;
   switch(season){
    case "summer":
        if(budget <= 100){
            budget = budget * 0.30;
            vacationType = "Camp";
            console.log("Somewhere in Bulgaria")
            console.log(`${vacationType} - ${budget.toFixed(2)}`)
        }else if(budget <= 1000){
            budget = budget * 0.40;
            vacationType = "Camp";
            console.log("Somewhere in Balkans")
            console.log(`${vacationType} - ${budget.toFixed(2)}`)
        }else {
            budget = budget * 0.90;
            vacationType = "Hotel";
            console.log("Somewhere in Europe")
            console.log(`${vacationType} - ${budget.toFixed(2)}`)
        }break;
    case "winter":
        if(budget <= 100){
            budget = budget * 0.70;
            vacationType = "Hotel";
            console.log("Somewhere in Bulgaria")
            console.log(`${vacationType} - ${budget.toFixed(2)}`)
        }else if(budget <= 1000){
            budget = budget * 0.80;
            vacationType = "Hotel"
            console.log("Somewhere in Balkans")
            console.log(`${vacationType} - ${budget.toFixed(2)}`)
        }else {
            budget = budget * 0.90;
            vacationType = "Hotel";
            console.log("Somewhere in Europe")
            console.log(`${vacationType} - ${budget.toFixed(2)}`)
        }break;    
   }
} 
journey(["1500", "summer"])