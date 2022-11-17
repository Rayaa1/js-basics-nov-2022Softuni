function cinemaTicket (input){
    let day = input[0];
    let ticket = 0;
    switch(day){
        case "Monday":
             ticket = ticket + 12;  
             console.log(ticket);break;
         case "Tuesday":
             ticket = ticket + 12;
             console.log(ticket);break;
         case "Wednesday":
             ticket = ticket + 14;
             console.log(ticket);break;  
         case "Thursday":
             ticket = ticket + 14;
             console.log(ticket);break;         
         case "Friday":
             ticket = ticket + 12;
             console.log(ticket);break;  
         case "Saturday":
             ticket = ticket + 16;
             console.log(ticket);break;  
         case "Sunday":
             ticket = ticket + 16;
             console.log(ticket);break;             
    }
}
cinemaTicket(["Thursday"])