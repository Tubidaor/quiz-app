
let questionNumber = 9;

let score = 0;

const quizDatabase = [
    {question: 'How many World Series tittles have the Dodgers won?',
     answers: [7, 10, 27, 5, 6],
     correctAnswer: 6,
     icon: 'https://media.gettyimages.com/photos/chris-sale-of-the-boston-red-sox-delivers-during-the-ninth-inning-of-picture-id1061363860?s=2048x2048',
     alt: 'Dodgers during a World Series game',

    },
    {question: 'How many Rookie of The Year awards have been awarded to Dodgers\' players',
        answers: [  5, 10, 18, 25, 9],
        correctAnswer: 18,
        icon: 'https://media.gettyimages.com/photos/raul-mondesi-of-the-los-angeles-dodgers-is-greeted-by-teammates-eric-picture-id51687507?s=2048x2048',
        alt: 'Raul Mondesi and teammates Erik Karros, and Mike Piazza, ',
   
    },
    {question:'Who is the Dodgers\' all time leader in wins?',
        answers: [ 'Clayton Kershaw', 'Don Sutton','Orel Hershiser', 'Sandy Koufax', 'Fernando Valenzuela'],
        correctAnswer: 'Don Sutton',
        icon:'https://media.gettyimages.com/photos/former-los-angeles-dodgers-sandy-koufax-and-don-sutton-talk-as-they-picture-id170194273?s=2048x2048',
        alt: 'Photo of Don Sutton and Sandy Koufax',
   
    },
    {question:'Who is the dodgers all time leader in home runs?',
        answers: ['Duke Snider','Erik Karros', 'Shaw Green', 'Mike Piazza', 'Jackie Robinson'],
        correctAnswer: 'Duke Snider',
        icon: 'https://media.gettyimages.com/photos/full-length-portrait-of-american-baseball-player-duke-snider-sporting-picture-id2024755?s=2048x2048',
        alt: 'Portrait of Duke Snider',
   
    },
    {question: 'Who is the Dodgers\' all time leader in strike outs?',
        answers: ['Don Newcomb', 'Sandy Koufax', 'Clayton Kershaw', 'Orel Hershiser', 'Don Sutton'],
        correctAnswer: 'Don Sutton',
        icon: 'https://media.gettyimages.com/photos/pitcher-don-sutton-of-the-los-angeles-dodgers-pitches-during-a-major-picture-id115960601?s=2048x2048',
        alt: ' Picture of Don Sutton pitching',
   
    },
    {question: 'Which Dodgers\' player holds the record for most consecutive saves without a blown save, at 84?',
        answers: ['Kenley Jansen', 'Jonathan Broxton', 'Eric Gagne', 'Todd Worrell', 'Jim Brewer'],
        correctAnswer: 'Eric Gagne',
        icon: 'https://media.gettyimages.com/photos/eric-gagne-of-the-los-angeles-dodgers-poses-during-media-photo-day-on-picture-id97384655?s=2048x2048',
        alt: 'image of Eric Gagne'
   
    },
    {question: 'Who holds the record for most consecutive innings pitched wihtout an earned run?',
        answers: ['Sandy Koufax', 'Don Drysdale', 'Don Sutton', 'Don Newcombe', 'Orel Hershiser'],
        correctAnswer: 'Orel Hershiser',
        icon: 'https://media.gettyimages.com/photos/orel-hershiser-of-the-los-angeles-dodgers-pitches-during-an-mlb-game-picture-id902697050?s=2048x2048',
        alt: 'Picture of Orel Hershiser',
   
    },
    {question: 'Which movie included Vin Scully as the brodcaster?',
        answers: ['Bull Durham', 'For Love of the Game', 'A League of Their Own', 'Field of Dreams', 'Shagging Flies'],
        correctAnswer: 'For Love of the Game',
        icon: 'https://chumley.barstoolsports.com/wp-content/uploads/2019/06/14/Screen-Shot-2019-06-14-at-2.45.59-PM-1024x566.png"',
        alt: 'Picture of Vin Scully',
   
    },
    {question: 'Who is the winningest manager in Dodgers\' history?',
        answers: ['Tommy Lasorda', 'Walter Alston', 'Wilbert Robinson', 'Jim Tracy', 'Ned Hanion'],
        correctAnswer: 'Walter Alston',
        icon: 'https://media.gettyimages.com/photos/manager-walter-alston-of-the-los-angeles-dodgers-looks-on-during-picture-id127372857?s=2048x2048',
        alt: 'Picture of Walter Alson',
   
    },
    {question: 'Who is the only player to have his number retired by all Major League Baseball teams?',
        answers: ['Babe Ruth', 'Frank Robinson', 'Roy Campanella', 'Sandy Koufax', 'Jackie Robinson'], 
        correctAnswer: "Jackie Robinson",
        icon: 'https://media.gettyimages.com/photos/american-baseball-player-jackie-robinson-of-the-brooklyn-dodgers-in-picture-id179748695?s=2048x2048',
        alt: 'Picture of Jackie Robinson stealing home',
   
    }]   

const levels = {
        start: `<div class="quiz-start">
        <h1>It's time for Dodger Baseball!!</h1>
        <div>
            <img class="start-vin" src="${quizDatabase[7].icon}" alt="${quizDatabase[7].alt}"/>

        </div>
        <button class="start-button" type="button">
            Play Ball!</button>
        </div>`,
        correct:  `<div class="feedback">
            
       <div class="icon">           
           <img class="feedback-pic-change" src="" alt=""/>
           
       </div>
       <p>Home Run! You got it right!</p>
       <button type="button" class="next-button"> <span class="next-span"> Next </span> </button>
       </div>`,
       incorrect: function () { return `<div class="feedback">
      
      <div class="icon">           
          <img class="feedback-pic-static" src="https://www.pressdemocrat.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=WApxaiKFxS9jf4Ptu5PN3s$daE2N3K4ZzOUsqbU5sYvcmOHmc_CZoRy2F1XkFrLuWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg" alt="Giants player striking out"/>
          
      </div>
      <p>You're out! Sorry, that is incorrect. The right answer is <span class="span-feedback">${quizDatabase[questionNumber].correctAnswer}</span>.</p>
      <button type="button" class="next-button"> <span class="next-span"> Next </span> </button>
      </div>`},  
      dodgerBlue: `<div class="quiz-retake">
      <h1>You scored <span class="final-score"> 0 </span> runs. You bleed Dodger Blue! </h1>
      <div>
          <img class="start-vin" src="https://i.imgur.com/wook8kz.jpg" alt="Picture of Vin Scully"/>
          <p class="the-end-p">Thank you for playing.</p>

      </div>
      <button class="restart-button" type="button">
          Try again</button>
    
      </div>`,
      casualFan: `<div class="quiz-retake">
      <h1>You scored <span class="final-score"> 0 </span> runs. You know your stuff. </h1>
      <div>
          <img class="start-vin" src="https://i.imgur.com/wook8kz.jpg" alt="Picture of Vin Scully"/> 
          <p class="the-end-p">Thank you for playing.</p>

      </div>
      <button class="restart-button" type="button">
          Try again</button>
    
      </div>`,   
      giantsFan:  `<div class="quiz-retake">
      <h1>You scored <span class="final-score"> 0 </span> runs. You must be a Giants fan. </h1>
      <div>
          <img class="start-vin" src="https://i.imgur.com/wook8kz.jpg" alt="Picture of Vin Scully"/>
          <p class="the-end-p">Thank you for playing. </p>

      </div>
      <button class="restart-button" type="button">
          Try again</button>
    
      </div>`,                   

    }

function startGame () {
     $('.quiz-start').on('click', '.start-button', function (event) {
        event.preventDefault();
        console.log('startGame ran');
        hideStart ();
        generateForm ();
        generateQuestions ();
        showQuiz();
        answerSelected()
        $('.current-question').text(questionNumber +1);

    });
}

function generateForm() {
// generate html to plug in form into .quiz-form div
    $('.quiz-questions').html(generateQuestions());
}

function generateQuestions() {
// need to generate questions with answers and have them change
// whenever user submits 
if (questionNumber < quizDatabase.length) {
    console.log('generatequestion ran')
    return `<h2>${quizDatabase[questionNumber].question}</h2>
            <form class="quiz-form">
                <fieldset>
                
                    <label class="answerOption">
                    <input type="radio" value="${quizDatabase[questionNumber].answers[0]}" name="answer" required>
                    <span>${quizDatabase[questionNumber].answers[0]}</span>
                    </label>
                    <label class="answerOption">
                    <input type="radio" value="${quizDatabase[questionNumber].answers[1]}" name="answer" required>
                    <span>${quizDatabase[questionNumber].answers[1]}</span>
                    </label>
                    <label class="answerOption">
                    <input type="radio" value="${quizDatabase[questionNumber].answers[2]}" name="answer" required>
                    <span>${quizDatabase[questionNumber].answers[2]}</span>
                    </label>
                    <label class="answerOption">
                    <input type="radio" value="${quizDatabase[questionNumber].answers[3]}" name="answer" required>
                    <span>${quizDatabase[questionNumber].answers[3]}</span>
                    </label>
                    <label class="answerOption">
                    <input type="radio" src="" value="${quizDatabase[questionNumber].answers[4]}" name="answer" required>
                    <span>${quizDatabase[questionNumber].answers[4]}</span>
                    </label>
                      
                    <button type="submit" class="quiz-button"> Submit </button>
                </fieldset>
            </form>`
    } else { 
        

    }
}

function setPictures () {
    
    $('.feedback-pic-change').attr("src", quizDatabase[questionNumber].icon);
    $('.feedback-pic-change').attr("alt", quizDatabase[questionNumber].alt);
}

function answerSelected() {
    console.log('answerSelected Ran');
    $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    console.log(answer);
    let correctAnswer = `${quizDatabase[questionNumber].correctAnswer}`;
    console.log(correctAnswer);
    if (answer === correctAnswer) {
        console.log('answer is right');
        goToCorrect();       
    } else {
        console.log('answer is wrong')
        goToWrongAnswer();
    }    
});
}
    
function goToCorrect () {
    showFeedback('correct'); 
    changeScore();
    gotoNext();   
}

function goToWrongAnswer () {  
    showFeedback('incorrect');
    gotoNext();   
}

function hideQuiz () {
    $('.quiz-questions').hide();
}
    
function hideStart () {
    $('.quiz-start').hide();
}
function showStart() {
    $('.quiz-start').show();
}

function showQuiz () {
    $('.quiz-questions').show();
}

function reviewQuiz() {
    console.log(score);
    if (score >= 9) {
    $('.quiz-questions').html(levels.dodgerBlue);
    $('.final-score').text(score);
    } if (score >= 7 && score <= 8) {
        $('.quiz-questions').html(levels.casualFan);
        $('.final-score').text(score);
    } else if ( score < 7) {
        $('.quiz-questions').html(levels.giantsFan);
        $('.final-score').text(score);
    }
   retakeQuiz(); 

}

function showFeedback (_rightOrWrong) {
    
        if (_rightOrWrong === 'correct') {
            let value = levels.correct;
            
            $('.quiz-questions').html(value);
            setPictures();
        } else if (_rightOrWrong === 'incorrect') {
         let value = levels.incorrect;          
            $('.quiz-questions').html(value);
        }
           
    changeNextButton();
}

function changeNextButton () {
    if (questionNumber === 9) {
        $('.next-span').text("Bring in Jansen!");
    }
    
}

function gotoNext () {
    $('div .feedback').on('click', '.next-button', function () {
        if (questionNumber < 9) {
        changeQuestionNumber();
        generateForm ();
        generateQuestions ();
        showQuiz();
        answerSelected();
        
        } else {
            
            showQuiz();
            reviewQuiz();
            

        }
    });
}

function changeScore () {
  score++
  $('span.total-score').text(score);
}

function changeQuestionNumber () {
    questionNumber++
    $('.current-question').text(questionNumber + 1);
}

function hideFeedback () {
    $('.quiz-retake').hide();
}
function retakeQuiz () {
    $('.quiz-retake').on('click', ".restart-button", function (){
        hideQuiz();
        hideFeedback();
        showStart();
        resetScore();
        
    });
}
function resetScore () {
        score = 0;
        questionNumber = 0;
        $('span.total-score').text(score);
        $('.current-question').text(questionNumber);
}
function runAllFunctions () {   
    startGame();
}

$(runAllFunctions());