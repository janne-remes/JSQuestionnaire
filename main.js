//var question;
var presentedQuestions = [];

function onStart(){
    var questionOne = presentedQuestions.push(
        new Question(
            "Millaista musiikkia kuuntelet?",
            [
                "Vanhoja ikivihreitä",
                "Konemusiikkia",
                "Raskasta musiikkia",
                "Jotain muuta",
                "En kuuntele musiikkia"
            ]
        )
    );

    /*var questionTwo = presentedQuestions.push(
        new Question(
            "Millaisista elokuvistä pidät?",
            [
                "Romanttisista tarinoista",
                "Komedioista",
                "Jännittävistä elokuvista",
                "Tieteiskuvitelmista"
            ]
        )
    );*/
    
    document.getElementById("questionsBlock").style.visibility = "hidden";
    document.getElementById("endSummary").style.visibility = "hidden";
}

function startQuestionnaire(){
    
    document.getElementById("questionline").innerHTML = presentedQuestions[0].exactQuestion;

    document.getElementById("answerBlock").innerHTML = presentedQuestions[0].answerChoices;
    
    document.getElementById("startBlock").style.visibility = "hidden";
    document.getElementById("questionsBlock").style.visibility = "visible";
    document.getElementById("endSummary").style.visibility = "hidden";
}

/*
console.log();
console.log(presentedQuestions);
*/