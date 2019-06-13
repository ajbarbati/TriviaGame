// learn how to make a start button
$(document).on('click','#start', function() {
    game.startGame();
})
// running timer

// post questions to page
var questions = [{
	question: "When was The Lego company founded?",
	answers: [1937,1932,1951,1926,],
	correctAnswer: ,
}, {

var questionArray = [,"Lego come from the Danish term 'LEg GOdt.' What do these two words mean in English?",
                        "Which Lego toy for children under the age of five was invented in 1967?", "What is the name of the original Lego theme park in California?",
                        "Which of the following people has had a Lego character made to look like them?", "Which of these is not a Lego series?", 
                        "In which of these themes would you find Lego Alpha Team?", "How many pieces come in a standard five-hundred piece bucket?",
                        "Fortune magazine gave Lego what distinction?", "Which of these is a popular Lego competitor?"
                    ]
var answers = {
    q1: {
        
    },
    q2: {
        a: "play children",
        b: "play well",
        c: "building for kids",
        d: "go higher",
    },
    q3: {
        a: "Dacta",
        b: "Duplo",
        c: "Le-Baby",
        d: "Grabbo",
    },
    q4: {
        a: "Lego Studios",
        b: "Legoworld",
        c: "Legoland",
        d: "Lego Adventure Park",
    },
    q5: {
        a: "Steven Spielberg",
        b: "Rosie O'Donnel",
        c: "Jim Henson",
        d: "Dr. Phil",
    },
    q6: {
        a: "Fighter Planes",
        b: "Paradisa",
        c: "Harry Potter",
        d: "Jack Stone",
    },
    q7: {
        a: "The Purple Planet",
        b: "Underwater",
        c: "The Center of the Earth",
        d: "The Ancient Orient",
    },
    q8: {
        a: 500,
        b: 1000,
        c: 250,
        d: 400,
    },
    q9: {
        a: "The Best Toy in the World",
        b: "Building Smarter Kids Award",
        c: "Quality, Value< Standards Award",
        d: "Toy of the Century",
    },
    q10: {
        a: "Quincy's Quality Building Toy's",
        b: "Stacko Blocks",
        c: "Mega Blocks",
        d: "Melissa and Doug's Blocks",
    }
}

// have a function to collect answers

// done button 

// takes you to game end screen shows you this stuff >

// - correct answers

// - incorrect answers

// - unanswered questions