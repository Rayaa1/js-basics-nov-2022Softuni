function book (input){
    let bookList = input[0];
    let listPerHour = input[1];
    let days = input[2];
    let TotalHour = bookList / listPerHour ;
    let hoursPerDay = TotalHour / days ;
    console.log(hoursPerDay);
}
book(["212","20","2"]);