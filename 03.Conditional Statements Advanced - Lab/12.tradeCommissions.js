function tradeCommissions(input){
    let city = input[0];
    let sales = Number(input[1]);
    switch(city){
        case "Sofia":
         if(sales >= 0 && sales <= 500){
         sales = sales * 5/100;
         console.log(sales.toFixed(2))   
         }else if(sales <= 1000){
          sales = sales * 7/100;
          console.log(sales.toFixed(2))  
         }else if(sales <= 10000){
         sales = sales * 8/100;
         console.log(sales.toFixed(2))  
         }else if(sales > 10000){
         sales = sales * 12/100;
         console.log(sales.toFixed(2))  
         }break;
         case "Varna":
         if(sales >=0 &&sales <= 500){
         sales = sales * 4.5/100;
         console.log(sales.toFixed(2))   
         }else if(sales <= 1000){
          sales = sales * 7.5/100;
          console.log(sales.toFixed(2))  
         }else if(sales <= 10000){
         sales = sales * 10/100;
         console.log(sales.toFixed(2))  
         }else if(sales > 10000){
         sales = sales * 13/100;
         console.log(sales.toFixed(2))  
         }break;

         case "Plovdiv":
         if(sales >= 0 && sales <= 500){
         sales = sales * 5.5/100;
         console.log(sales.toFixed(2))   
         }else if(sales >500 && sales <= 1000){
          sales = sales * 8/100;
          console.log(sales.toFixed(2))  
         }else if(sales >1000 && sales <= 10000){
         sales = sales * 12/100;
         console.log(sales.toFixed(2))  
         }else if(sales > 10000){
         sales = sales * 14.5/100;
         console.log(sales.toFixed(2))
         }else{
            console.log("error")
         }break;
         default:
            console.log("error");
            break;
    }        
}

