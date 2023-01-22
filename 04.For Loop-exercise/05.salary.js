function salary (input){
    let tabs = Number(input[0]);
    let startingSalary = Number(input[1]);
    let social;
    for(let i = 2; i <= input.length ; i++){
        social = input[i]
        switch(social){
            case "Facebook":
                startingSalary = startingSalary - 150;break;
            case "Instagram":
                startingSalary = startingSalary - 100;break;
            case "Reddit":
                startingSalary = startingSalary - 50;break;
            default: break;
    
        }
    }
    if(startingSalary <= 0){
        console.log("You have lost your salary.")
    }else {
        console.log(startingSalary)
    }
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])