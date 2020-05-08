var askedQuestion = document.getElementById("questionline").textContent;

function onStart(){
    document.getElementById("questionsBlock").style.visibility = "hidden";
    document.getElementById("endSummary").style.visibility = "hidden";
}

function startQuestionnaire(){
    document.getElementById("startBlock").style.visibility = "hidden";
    document.getElementById("questionsBlock").style.visibility = "visible";
    document.getElementById("endSummary").style.visibility = "hidden";
}

function selectAnswerOne(){
    usersAnswer = document.getElementById("answerBlockOne").textContent;

    document.getElementById("questionsBlock").style.visibility = "hidden";
    document.getElementById("endSummary").style.visibility = "visible";

    document.getElementById("resultAnalysis").innerHTML = "Kysymykseen <b>" + askedQuestion + "</b> sinä vastasit <b> " + usersAnswer + "</b>";
}

function selectAnswerTwo(){
    usersAnswer = document.getElementById("answerBlockTwo").textContent;

    document.getElementById("questionsBlock").style.visibility = "hidden";
    document.getElementById("endSummary").style.visibility = "visible";

    document.getElementById("resultAnalysis").innerHTML = "Kysymykseen <b>" + askedQuestion + "</b> sinä vastasit <b> " + usersAnswer + "</b>";
}

function selectAnswerThree(){
    usersAnswer = document.getElementById("answerBlockThree").textContent;

    document.getElementById("questionsBlock").style.visibility = "hidden";
    document.getElementById("endSummary").style.visibility = "visible";

    document.getElementById("resultAnalysis").innerHTML = "Kysymykseen <b>" + askedQuestion + "</b> sinä vastasit <b> " + usersAnswer + "</b>";
}

console.log(usersAnswer);
console.log(askedQuestion);


