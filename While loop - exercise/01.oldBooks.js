function oldBooks (input){
    let index = 0
    let bookSearch = input[index]
    index++
    let otherBooks = input[index]
    index++
    let bookCount = 0
    while(otherBooks !== "No More Books"){
        if(bookSearch === otherBooks){
            break;
        }
        otherBooks = input[index]
        index++
        bookCount++
    }
    if(bookSearch === otherBooks){
    console.log(`You checked ${bookCount} books and found it.`)
    }else {
        console.log("The book you search is not here!")
        console.log(`You checked ${bookCount} books.`)
    } 
}
oldBooks(["Troy",

"Stronger",

"Life Style",

"Troy"])