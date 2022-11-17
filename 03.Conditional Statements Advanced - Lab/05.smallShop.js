function smallShop (input){
    let product = input[0];
    let city = input[1];
    let capacity = Number(input[2]);
    switch(city){
        case "Sofia":
            if(product === "coffee"){
                capacity = capacity * 0.50;
                console.log(capacity)
            }else if(product === "water"){
                capacity = capacity * 0.80;
                console.log(capacity)
            }else if(product === "beer"){
                capacity = capacity * 1.20;
                console.log(capacity)
            }else if(product === "sweets"){
                capacity = capacity * 1.45;
                console.log(capacity)
            }else if(product === "peanuts"){
                capacity = capacity * 1.60;
                console.log(capacity)
            }
            break;
        case "Plovdiv":
            if(product === "coffee"){
                    capacity = capacity * 0.40;
                    console.log(capacity)
            }else if(product === "water"){
                    capacity = capacity * 0.70;
                    console.log(capacity)
            }else if(product === "beer"){
                    capacity = capacity * 1.15;
                    console.log(capacity)
             }else if(product === "sweets"){
                    capacity = capacity * 1.30;
                    console.log(capacity)
            }else if(product === "peanuts"){
                    capacity = capacity * 1.50;
                    console.log(capacity)
            }
            break;  
        case "Varna":
            if(product === "coffee"){
                        capacity = capacity * 0.45;
                        console.log(capacity)
            }else if(product === "water"){
                        capacity = capacity * 0.70;
                        console.log(capacity)
            }else if(product === "beer"){
                        capacity = capacity * 1.10;
                        console.log(capacity)
            }else if(product === "sweets"){
                        capacity = capacity * 1.35;
                        console.log(capacity)
            }else if(product === "peanuts"){
                        capacity = capacity * 1.55;
                        console.log(capacity)
            }
             break;      
    }
}
smallShop("Sofia")