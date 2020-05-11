var presentedQuestions = [];
var qurrentQuestionId;
var answerIndexes = [];

function onStart(){
    
    document.getElementById("questionsBlock").style.visibility = "hidden";
    document.getElementById("endSummary").style.visibility = "hidden";
    
    var questionOne = presentedQuestions.push(
        new Question(
            "Millaista musiikkia tykkäät kuunnella?",
            [
                "Klassista musiikkia",
                "Vanhoja ikivihreitä",
                "Konemusiikkia",
                "Raskasta musiikkia",
                "Jotain muuta",
                "En kuuntele musiikkia"
            ]
        )
    );

    var questionTwo = presentedQuestions.push(
        new Question(
            "Millaisista elokuvista pidät?",
            [
                "Romanttisista tarinoista",
                "Komedioista",
                "Jännittävistä elokuvista",
                "Tieteiskuvitelmista",
                "En katso elokuvia"
            ]
        )
    );

    var questionThree = presentedQuestions.push(
        new Question(
            "Mikä on lempiruokaasi?",
            [
                "Perinteiset kotiruoat",
                "Aasialainen keittiö",
                "Mausteiset ruoat",
                "Keitot",
                "Jälkiruoat"
            ]
        )
    );
}

function startQuestionnaire(){
    
    document.getElementById("startBlock").style.visibility = "hidden";
    document.getElementById("questionsBlock").style.visibility = "visible";
    document.getElementById("endSummary").style.visibility = "hidden";

    qurrentQuestionId = 0;

    answerIndexes = new Array();

    askNextQuestion();

    document.getElementById("questionline").innerHTML = presentedQuestions[0].exactQuestion;

    document.getElementById("answerBlock").innerHTML = presentedQuestions[0].answerChoices +
    "<button>VASTAA</button>";
}

function showQuestion(exactQuestion){
    //
    var questionToAsk = exactQuestion;
    document.getElementById("questionline").innerHTML = questionToAsk;
    showAnswerOptions();
}

function askNextQuestion(){
    //
    if(presentedQuestions.length > qurrentQuestionId){
        showQuestion();
    }

    else{
        showEndSummary();
    }
}

function showAnswerOptions(answerChoices){
    //
}

function answerButtonClicked(index){
    //
}

function showEndSummary(){
    //
}