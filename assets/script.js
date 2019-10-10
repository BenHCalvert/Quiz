// Questions

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Which browser has 'dev tools' making it very useful for web development",
        choices: ['Tor', 'Chrome', 'Internet Explorer', 'Firefox'],
        answer: 'Chrome'
    },
    {
        title: "To run Javascript within your HTML document, do you place the script in the head or the body?",
        choices: ['Head', 'Body'],
        answer: 'Body'
    },
    {
        title: "Console Logs are useful in a final, fully-deployed website",
        choices: ['True', 'False'],
        answer: 'False'
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ['function = myFunction()', 'function: myFunction()', 'function myFunction()','myFunction function()' ],
        answer: 'function myFunction()'
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ['quotes', 'curly brackets', 'square brackets','parantheses' ],
        answer: 'parentheses'
    },
]
  
// On Click for Answer Buttons
$(".answer").on("click", function() {
    console.log('answer duh');
    // $('#operator').empty();
    // $('#operator').append(this.innerText);
    // operator = event.target.innerText;
    // console.log("operator set as:" , operator);
});



// Functions to show the Questions
function showQuestions(questions, quizContainer){
	// set variables for output and answers
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}
