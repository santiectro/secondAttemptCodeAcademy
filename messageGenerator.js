const randomMessage = (str, num = 30) => {
    let messages = ["The stars were perfectly and wonderfully aligned the day you came into the world! Happy birthday!", "You consider yourself a born leader. Others think you are an idiot. You are vain and annot tolerate criticism. Your arrogance is disgusting. Believe everything you read. Your next Career: Skeptic. You will disover a new and apalling skill. Just because someone believes the sun shines out your butt doesn’t mean you should show them a full moon. Keep that eclipse going in your pants and stay mysterious.",
    "You will step in something in a few minutes. Get Religion. Quick! Your heroes are all cowards. All your furniture has moved one inch to the left. Turn that frown upside down, and you’ll get dizzy from standing on your head, fall over, and accidentally kick a frenemy into a water fountain. Now that will make you smile for real.", "It's time to leap into a jagged canyon of YOU! You regulate your breathing and color-coordinate the clothes in your closet. Your next Career: Foxy Boxer. Yeah, you're probably gay. A journey of a thousand miles can begin with a single step, but you’ll go farther if you simply jump to conclusions. Those ridiculous theories may not be right, but they’ll get you more air than Michael Jordan.",
    "Freedom is so important to you, not only because you need to freely explore the world in your incredible Sagittarius. May you always be a world traveler", "It is you who sees so clearly and ventures so bravely. You are the flame that spreads, and it has spread to my heart. I’ll go on any adventure with you", "Your adventurous spirit and courageous steps into the unknown are so inspirational for me.", "You suck", "Whatever I'm down and out, I can always count on you to life my spirits with your remarkable sense of humor", "What are the odds of you getting this message?", 
    " I'm glad you've decided to share your joy for life with me", "you can turn any thought of yours into real-life action, achieving whatever goals you set for yourself. That's, well, amazing. You're amazing", "Very few people like to make changes as much as you do. That's what makes you an amazingly brave", "Very few people like to make changes as much as you do. That's what makes you an amazingly brave" , "Very few people like to make changes as much as you do. That's what makes you an amazingly brave", 
    " You’ve changed my life for the better and opened my mind to so many perspectives and possibilities", "You are resourceful, kind, hilarious and rather foxy", "There is no way I am placing more messages I mean, at least something that makes sense"
]
    let randomNumber = Math.floor((Math.random() * num) + 1) 
    let randomMessage = messages[Math.floor(Math.random() * messages.length)]
    let answerToQuestion;
    if (Math.random() >= 0.5) {
        answerToQuestion = true
    }else{
        answerToQuestion = false
    }
    return `Your Luck number is ${randomNumber}, this is what the astros have to say to you: ${randomMessage}. 
Regarding your question ${str}: ${answerToQuestion}`
}

console.log(randomMessage("Legit question", 30))

