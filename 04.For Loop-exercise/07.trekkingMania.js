function trekkingMania (input){
    let groupCount = Number(input[0]);
    let Musula = 0;
    let Montblanc = 0 ;
    let Kilimanjaro = 0;
    let K2 = 0;
    let Everest = 0
    for (let i = 1 ; i <= groupCount ; i++){
        let group = Number(input[i])
        if(group <= 5){
            Musula +=group
        }else if(group <= 12){
            Montblanc +=group
        }else if(group <= 25){
            Kilimanjaro +=group
        }else if(group <= 40){
            K2 += group
        }else {
            Everest += group
        }
    }
    let totalAlpinist = Musula + Montblanc + Kilimanjaro + K2 + Everest;
    let percentMusala = Musula / totalAlpinist * 100
    let percentMontblanc = Montblanc / totalAlpinist * 100
    let percentKilimanjaro = Kilimanjaro / totalAlpinist * 100
    let percentK2 = K2 / totalAlpinist * 100
    let percentEverest = Everest / totalAlpinist * 100
    console.log(`${percentMusala.toFixed(2)}%`)
    console.log(`${percentMontblanc.toFixed(2)}%`)
    console.log(`${percentKilimanjaro.toFixed(2)}%`)
    console.log(`${percentK2.toFixed(2)}%`)
    console.log(`${percentEverest.toFixed(2)}%`)
}
trekkingMania(["10","10","5","1","100","12","26", "17", "37", "40", "78"])