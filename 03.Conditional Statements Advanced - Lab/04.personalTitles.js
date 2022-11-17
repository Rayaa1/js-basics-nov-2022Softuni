function personalTitles (input){
    let age = Number(input[0]);
    let gender = input[1];
    if (gender === "f" && age >= 16){
        console.log("Ms.");
    }else if (gender === "f" && age < 16 ){
        console.log("Miss")
    }
    if (gender === "m" && age >= 16){
        console.log("Mr.")
    }else if(gender === "m" && age < 16){
        console.log("Master")
    }
}
personalTitles([14,"m"])