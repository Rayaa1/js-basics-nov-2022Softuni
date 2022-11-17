function fruitShop (input){
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    switch(day){
         case "Monday":
         case "Tuesday":
         case "Wednesday":
         case "Thursday":
         case "Friday":            
            if(fruit == "banana"){
             quantity = quantity * 2.50;
             console.log(quantity.toFixed(2));break;
            } else if(fruit == "apple"){
             quantity = quantity * 1.20;
             console.log(quantity.toFixed(2));break;
            }else if (fruit == "orange"){
             quantity = quantity * 0.85;
             console.log(quantity.toFixed(2));break;
            }else if(fruit == "grapefruit"){
             quantity = quantity * 1.45;
             console.log(quantity.toFixed(2));break;
            }else if(fruit == "kiwi"){
             quantity = quantity * 2.70;
             console.log(quantity.toFixed(2));break;
            }else if(fruit == "pineapple"){
             quantity = quantity * 5.50;
             console.log(quantity.toFixed(2));break;
            }else if(fruit == "grapes"){
             quantity = quantity * 3.85;
             console.log(quantity.toFixed(2));break;
             }
         case "Saturday":
         case "Sunday":
            if(fruit == "banana"){
                quantity = quantity * 2.70;
                console.log(quantity.toFixed(2));break;
               } else if(fruit == "apple"){
                quantity = quantity * 1.25;
                console.log(quantity.toFixed(2));break;
               }else if (fruit == "orange"){
                quantity = quantity * 0.90;
                console.log(quantity.toFixed(2));break;
               }else if(fruit == "grapefruit"){
                quantity = quantity * 1.60;
                console.log(quantity.toFixed(2));break;
               }else if(fruit == "kiwi"){
                quantity = quantity * 3.00;
                console.log(quantity.toFixed(2));break;
               }else if(fruit == "pineapple"){
                quantity = quantity * 5.60;
                console.log(quantity.toFixed(2));break;
               }else if(fruit == "grapes"){
                quantity = quantity * 4.20;
                console.log(quantity.toFixed(2));break;
                }
            default:
                console.log("error")    
           }
}
fruitShop(["orange", "Sunday",3])