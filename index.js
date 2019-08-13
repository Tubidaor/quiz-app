// 1. I need to generate a form for each question
// 2. I need to make a database of all the questions and answers
// 3. I need to make the score change
// 4. I need to make a function to give feed back when user submits
// 5. I need to make a function to give feed back at the end. 
let questionNumber = 0;
let score = 0;

function generateForm() {
// generate html to plug in form into .quiz-form div
    $('.quiz-form').html(somefunction);

}

function generateQuestion() {
// need to generate questions with answers and have them change
// whenever user submits 
if (questionNumber < quizDatabase.length) {
    return 
    <h2>{quizDatabase[question].question}</h2>
    <form>
        <fieldset> 
            <label class='answer-option'>
                <input class='answer-choice' type='radio' value='${quizDatabase[questionNumber].answers[0]}'>
            </label>


        <button type="submit" class='submit-button'></button>
        </fieldset>
    </form>
}

