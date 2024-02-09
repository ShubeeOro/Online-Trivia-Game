const { Question } = require('./../game.js')
const { EOL } = require('os')
var assert = require('assert')

let q = new Question( 
    "Question text",
    "correct",
    ["wrong", "false", "incorrect"],
    "category",
    "medium",
    )
q.answers = ["correct", "wrong", "false", "incorrect"]
q.answer_id = 1

describe('Question Class', function () {
    describe('new Question()', function () {
        it('Contain the proper values when given inputs', function () {
            assert.equal(q.question, "Question text");
            assert.equal(q.difficulty, "medium");
            assert.equal(q.category, "category");
            assert.equal(q.answer_id, 1);
        });
        it('toString() should return a proper message', function () {
            let question_string = q.toString();
            let lines = question_string.split(EOL);
            const regex = /1\W+correct/;

            assert.ok(question_string.includes("Question text"));
            assert.match(question_string, regex);
            assert.ok(lines[1].includes("correct"))
            assert.ok(lines[4].startsWith("4"))
            assert.ok(lines[4].includes("incorrect"))
        })
    });
});




/**
 * 
 * def test_string(question):
    """Tests the str method"""
    question_string = str(question)
    lines = question_string.split("\n")
    assert "Question text" in question_string
    assert re.search(r"1\W+correct", question_string)
    assert "correct" in lines[1]

    assert lines[4].startswith("4")
    assert "incorrect" in lines[4]
 * 
 * 
 */

