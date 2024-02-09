const {Question} = require("./game.js");
const questions = require('./questions.json');
function random_number_generator(number) {
    return Math.floor(Math.random() * number);
}

let thing = new Question(question="test_question", correct_answer = "correct", incorrect_answers = ["incorrect_1", "incorrect_2", "incorrect_3"], difficulty = "easy");

//console.log(thing.toString())

//console.log(thing.get("incorrect_answers"))

//I'm going to do a function version of the game first. Then we can class it later.


//Get a List of All questions in Dictionary Form
fetch(questions)
    .then(response => response.json())
    .then(data => {
        const questions = data;
        //console.log(questions);
        // Now 'questions' variable contains an array of objects from your JSON file
    })
    //.catch(error => console.error('Error fetching JSON:', error));

//console.log(JSON.stringify(questions, null, 2));

//console.log(questions[0])

//console.log(questions.length)

//Great. Now What? Do I just make a function that plays the game?

function play_a_random_round() {
    let random_question = random_number_generator(questions.length)

    console.log(questions[random_question].toString())
    console.log(`${questions[random_question].question} \n ${questions[random_question].answers}`)
    var input = prompt("Enter answer");
    if (input in questions[random_question].answers) {
        console.log("Correct");
    }
    else {
        console.log("incorrect");
    }

    //Finish Later


}
play_a_random_round()
