function hotelRoom(input){
    let month = input[0];
    let numberOfNights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;
    let typeRoom;
    switch(month){
        case "May":
        case "October":
            typeRoom = "Studio" 
            if(numberOfNights > 14){
                studioPrice = numberOfNights * 50 * 0.70   
            }else if(numberOfNights > 7){
                studioPrice = (numberOfNights * 50 * 0.95)
            }else{
                studioPrice = numberOfNights * 50
            }break;
        case "June":
        case "September":
            typeRoom = "Studio";
            if(numberOfNights > 14){
                studioPrice = numberOfNights * 75.20 * 0.80;
            }else{
                studioPrice = numberOfNights * 75.20
            }break;
        case "July":
        case "August":
            typeRoom = "Studio";
            studioPrice = numberOfNights * 76;
            break;           
    }
    switch(month){
        case "May":
        case "October":
            typeRoom = "Apartment";
            if(numberOfNights > 14 ){
                apartmentPrice = numberOfNights * 65 * 0.90
            }else {
                apartmentPrice = numberOfNights * 65
            }break;
        case "June":
        case "September":
            typeRoom = "Apartment"
            if(numberOfNights > 14){
                apartmentPrice = numberOfNights * 68.70 * 0.90
            }else {
                apartmentPrice = numberOfNights * 68.70 
            }break;
        case "July":
        case "August":
            typeRoom = "Apartment";
            if(numberOfNights > 14){
                apartmentPrice = numberOfNights * 77 * 0.90
            }else {
                apartmentPrice = numberOfNights * 77
            }break;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}
hotelRoom(["May",15])