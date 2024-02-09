
const { EOL } = require('os')

// can use https://opentdb.com/api_config.php to get trivia game like python game

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

class Question {
    constructor(question, correct_answer, incorrect_answers, category = null, difficulty = null) {
        if (difficulty && !["easy", "medium", "hard"].includes(difficulty)) {
            throw new Error("Invalid difficulty level");
        }
        this.question = question;
        this.correct_answer = correct_answer;
        this.incorrect_answers = incorrect_answers;
        this.category = category;
        this.difficulty = difficulty;
        
        let answers = this.incorrect_answers.slice();
        answers.push(this.correct_answer);
        shuffleArray(answers);
        this.answers = answers;
        this.answer_id = answers.indexOf(this.correct_answer) + 1;
    }
    
    get(index) {
        if (typeof index === 'string') {
            if (index === 'question') {
                return this.question;
            }
            if (index === 'correct_answer') {
                return this.correct_answer;
            }
            if (index === 'incorrect_answers') {
                return this.incorrect_answers;
            }
            if (index === 'category') {
                return this.category;
            }
            if (index === 'difficulty') {
                return this.difficulty;
            }
        }
    }
    
    toString() {
        let returnStr = `${this.question}`;
        this.answers.forEach((value, index) => {
            returnStr += `${EOL}${index + 1}. ${value}`;
        });
        returnStr += `${EOL}Enter your answer:`;
        return returnStr;
    }
}

let p = new Question("Question text",
"correct",
["wrong", "false", "incorrect"],
"category",
"medium",)


module.exports = { Question }
