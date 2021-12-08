const randomMessage = (str = " ", num = 30) => {
    let finalString = ""
    let noun = ["You would", "You should", "Someone", "Your", "Be careful", "The universe"]
    let withYourStatements = [" with your family", " with your bestfriend", " with your partner", " with your close friends", " with your boss", 
                " with your job", " with your mental health", " with your health"]
    let randomNoun = noun[Math.floor(Math.random() * noun.length)]
    finalString += randomNoun
    switch(randomNoun) {
        case 'You would':
            let youWould2 = [" see changes", " find love", " see abundancy", " pass trough hard things in live", " get lucky", 
            " get unlucky", " be financially free", " meet someone important", " loose someone important", " get better in your relationship"]
            let youWould3 = [" soon.", " later in the year.", " in the near future", " after a while", " later in the month", " next year"]
            finalString += youWould2[Math.floor(Math.random() * youWould2.length)]
            finalString += youWould3[Math.floor(Math.random() * youWould3.length)]
            break;
        case 'You should':
            let youShould2 = [" go outside", " party", " stay in your house", " drink water", " clear things", " be careful", " spend time"]
            let randomNumYouShould = Math.floor(Math.random() * youShould2.length)
            finalString += youShould2[randomNumYouShould]
            if (randomNumYouShould < 4){
                let youShould3 = [" more often", " less often", " always"]
                finalString += youShould3[Math.floor(Math.random() * youShould3.length)]
            }else {
                finalString += withYourStatements[Math.floor(Math.random() * withYourStatements.length)]
            }
            break;
        case 'Someone':
            let someone = [" is looking for you", " has good news for you", " has bad news for you", " will call you today"
        , " will make your day happier", " will ruin your day", " has something important to say", " is wishing you bad"]
            finalString += someone[Math.floor(Math.random() * someone.length)]
            let someone2 = [" be careful", " be patient", " be mindful", " be aware"]
            finalString += someone2[Math.floor(Math.random() * someone2.length)]
            break;
        case 'Your':
            let your2 = [" relationship", " health", " family-bond", " friendship"]
            finalString += your2[Math.floor(Math.random() * your2.length)]
            let your3 = [" will get stronger", " will get weaker", " will get better", " will get worse", " is delicated, watchout", 
            " will go downward, be careful", " would keep improving, keep it up"]
            finalString += your3[Math.floor(Math.random() * your3.length)]
            break;
        case "Be careful":
            let secondPart = [" ", " with"]
            let beCarefulNum = Math.round(Math.random() * secondPart.length)
            finalString += secondPart[beCarefulNum]
            if (beCarefulNum === 0) {
                finalString += withYourStatements[Math.floor(Math.random() * withYourStatements.length)]
            }else {
                let thirdPart = [" alcohol", " money", " drugs", " who you trust"]
                finalString += thirdPart[Math.floor(Math.random() * thirdPart.length)]
            }
            break;
        case "The universe":
            let universeSecond = [ " will give you a sign", " has something to tell you", " will tell you the path", " will guide you", " has something for you"
            , " is listening to you," ]
            finalString += universeSecond[Math.floor(Math.random() * universeSecond.length)]
            let universeThird = [" listen carefully", " listen closely", " be aware", " be prepare"]
            finalString += universeThird[Math.floor(Math.random() * universeThird.length)]
            break;
    }

/*
    let randomNumber = Math.floor((Math.random() * num) + 1) 
    let randomMessage = messages[Math.floor(Math.random() * messages.length)]
    let answerToQuestion;
    if (Math.random() >= 0.5) {
        answerToQuestion = true
    }else{
        answerToQuestion = false
    }
*/
}


