function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}





// question

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}





function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the name of a person? <br> <img src='images/img1.jpg' height='150px' width='150px'></img>" , ["Ruthik Roshan", "Salman Khan","Sanjay Kumar", "Amithab Bachan"], "Sanjay Kumar"),

    new Question("What is the name of a person? <br> <img src='images/img2.jpg' height='150px' width='150px'></img>", ["SaiKiran Sondarkar", "Sanjay Kumar","David Raj", "Adabala Teja"], "SaiKiran Sondarkar"),
    

    new Question("What is the name of an Animal? <br> <img src='images/img3.jpg' height='150px' width='150px'></img>", ["Lion", "Kangaroo","Dog", "Fox"], "Dog"),
    

    new Question("What is the name of a Fruit? <br> <img src='images/img4.jpg' height='150px' width='150px'></img>", ["Apple", "Banana","Grapes", "Orange"], "Orange"),


    new Question("What is the name of a person? <br> <img src='images/img5.jpg' height='150px' width='120px'></img>", ["Virat Kohli", "Rohit Sharma","Ravindra Jadeja", "MS Dhoni"], "Virat Kohli"),


    new Question("What is the name of a person? <br> <img src='images/img6.jpg' height='150px' width='100px'></img>", ["Virat Kohli", "Rohit Sharma","Ravindra Jadeja", "Cristiano Ronaldo"], "Cristiano Ronaldo"),
        

];


var quiz = new Quiz(questions);


populate();



