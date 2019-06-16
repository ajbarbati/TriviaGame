// learn how to make a start button
$(document).on('click','#start', function() {
    console.log("Start")
    game.startGame()
})

$(document).on('click', '#reset', function () {
    game.reset()
})

var randomQuestions = Math.floor(Math.random()*(questions))

var questions = [
    {
	question: "When was The Lego company founded?",
	answers: [1937,1932,1951,1926],
	correctAnswer: 1932,
}, {

	question: "Lego come from the Danish term 'LEg GOdt.' What do these two words mean in English?",
	answers: ["play children", "play well", "building for kids", "go higher"],
	correctAnswer: "play well",
}, {

	question: "Which Lego toy for children under the age of five was invented in 1967?",
	answers: ["Dacta", "Duplo", "Le-Baby", "Grabbo"],
	correctAnswer: "Duplo",
}, {

	question: "What is the name of the original Lego theme park in California?",
	answers: ["Lego Studios", "Legoworld", "Legoland", "Lego Adventure Park"],
	correctAnswer: "Legoland",
}, {

	question: "Which of the following people has had a Lego character made to look like them?",
	answers: ["Steven Spielberg", "Rosie O'Donnel", "Jim Henson", "Dr. Phil"],
	correctAnswer: "Steven Spielberg",
}, {

	question: "Which of these is not a Lego series?",
	answers: ["Fighter Planes", "Paradisa", "Harry Potter", "Jack Stone"],
	correctAnswer: "Jack Stone",
}, {

	question: "In which of these themes would you find Lego Alpha Team?",
	answers: ["The Purple Planet", "Underwater", "The Center of the Earth", "The Ancient Orient"],
	correctAnswer: "Underwater",
}, {

	question: "How many pieces come in a standard five-hundred piece bucket?",
	answers: [500, 1000, 250, 400],
	correctAnswer: 500,
}, {

	question: "Fortune magazine gave Lego what distinction?",
	answers: ["The Best Toy in the World", "Building Smarter Kids Award", "Quality, Value, Standards Award", "Toy of the Century"],
	correctAnswer: "Toy of the Century",
}, {

	question: "Which of these is a popular Lego competitor?",
	answers: ["Quincy's Quality Building Toy's", "Stacko Blocks", "Mega Blocks", "Melissa and Doug's Blocks"],
	correctAnswer: "Mega Blocks",
},] 

// object to run game functions

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        game.counter--
        $('#counter-number').html(game.counter)
        if (game.counter === 0) {
            console.log('Times Up')
            game.timeUP()
        }
    },

    startGame: function () {
        timer = setInterval(game.countdown, 1000)
        $('#start').remove()
        for (var i = 0; i < questions.length; i++) {
            $("#panel").append('<h2>' + questions[i].question + '</h2>')
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#panel").append('<div id="answerChoice">' + '<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j] + '</div>')
            }
        }
    },

    timeUP: function () {
        clearInterval (timer)
        alert('Times Up!')
    },

    reset: function () {
        location.reload()
    },

    done: function () {
        $.each($("input[name='answer0']:checked"), function () {
            console.log(inside)
            if ($(this).val() == questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++
            }
        })
        $.each($("input[name='answer1']:checked"), function () {
            console.log(inside)
            if ($(this).val() == questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++
            }
        })
        $.each($("input[name='answer2']:checked"), function () {
            console.log(inside)
            if ($(this).val() == questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++
            }
        })
        $.each($("input[name='answer3']:checked"), function () {
            console.log(inside)
            if ($(this).val() == questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++
            }
        })
        $.each($("input[name='answer4']:checked"), function () {
            console.log(inside)
            if ($(this).val() == questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++
            }
        })
        $.each($("input[name='answer5']:checked"), function () {
            console.log(inside)
            if ($(this).val() == questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++
            }
        })
        $.each($("input[name='answer6']:checked"), function () {
            console.log(inside)
            if ($(this).val() == questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++
            }
        })
        $.each($("input[name='answer7']:checked"), function () {
            console.log(inside)
            if ($(this).val() == questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++
            }
        })
        $.each($("input[name='answer8']:checked"), function () {
            console.log(inside)
            if ($(this).val() == questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++
            }
        })
        $.each($("input[name='answer9']:checked"), function () {
            console.log(inside)
            if ($(this).val() == questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++
            }
        })
        game.result()
    },
        result: function () {
            clearInterval(timer)
            $("#panel").empty()
            $("#panel").append("Correct answers: " + game.correct + "<br/>")
            $("#panel").append("Incorrect answers: " + game.incorrect)
        }
}


// have a function to collect answers

// done button 

// takes you to game end screen shows you this stuff >

// - correct answers

// - incorrect answers

// - unanswered questions