function solve (input){
    let CountDogrami = Number(input[0])
    let typeDogrami = input[1]
    let delivery = input[2]
    let total = 0
    if(CountDogrami < 10){
        console.log("Invalid order")
        return;

    }
    switch(typeDogrami){
        case "90X130":
            total = CountDogrami * 110
            if(CountDogrami >= 30 && CountDogrami < 60){
                total = total * 0.95
            }else if(CountDogrami >= 60){
                total = total * 0.92
            }
            break;
        case "100X150":
            total = CountDogrami * 140
            if(CountDogrami >= 40 && CountDogrami < 80){
            
                total = total * 0.94
            }else if(CountDogrami >= 80){
            
                total = total * 0.90
            }
            break;
        case "130X180":
            total = CountDogrami * 190
            if(CountDogrami >= 20 && CountDogrami < 50){
            
                total = total * 0.93
            }else if(CountDogrami >= 50){
            
                total = total * 0.88
            }
            break;
        case "200X300":
            total = CountDogrami * 250
            if(CountDogrami >= 25 && CountDogrami < 50){
            
                total = total * 0.91
            }else if(CountDogrami >= 50){
            
                total = total * 0.86
            }
            break;
    }
if(delivery === "With delivery"){
    total += 60
}else if(delivery === "Without delivery"){
    total = total
}
    if(CountDogrami > 99){
            
        total = total * 0.96
    }
    console.log(`${total.toFixed(2)} BGN`)
}
solve(["105",
"100X150",
"With delivery"])

