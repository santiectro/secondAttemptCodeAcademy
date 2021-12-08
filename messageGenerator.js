const randomMessage = (str = " ", num = 30) => {
    let finalString = ""
    let noun = ["You would", "You should", "Someone", "Your", "Be careful", "You are", "The Universe"]
    let randomNoun = noun[Math.floor(Math.random() * noun.length)]
    finalString += randomNoun
    switch(randomNoun) {
        case 'You would':
            let youWould2 = [" see changes", " find love", " see abundancy", " pass trough hard things in live", " get lucky", 
            " get unlucky", " be financially free", " meet someone important", " loose someone important", " get better in your relationship"]
            let youWould3 = [" soon.", " later in the year.", " in the near future", " after a while", " later in the month", " next year"]
            finalString += youWould2[Math.floor(Math.random() * youWould2.length)]
            finalString += youWould3[Math.floor(Math.random() * youWould3.length)]
            break
        case 'You should':
            let youShould2 = [" go outside", " party", " stay in your house", " drink water", " clear things", " be careful", " spend time"]
            let randomNumYouShould = youShould2[Math.floor(Math.random() * youShould2.length)]
            finalString += youShould2[randomNumYouShould]
            if (randomNumYouShould < 4){
                let youShould3 = [" more often", " less often", " always"]
                finalString += youShould3[Math.floor(Math.random() * youShould3.length)]
            }else {
                let youShould4 = [" with your family", " with your bestfriend", " with your partner", " with your close friends", " with your boss"]
                finalString += youShould4[Math.floor(Math.random() * youShould4.length)]
            }
    }



    let randomNumber = Math.floor((Math.random() * num) + 1) 
    let randomMessage = messages[Math.floor(Math.random() * messages.length)]
    let answerToQuestion;
    if (Math.random() >= 0.5) {
        answerToQuestion = true
    }else{
        answerToQuestion = false
    }
}

console.log(randomMessage("Legit question", 30))

