var askedQuestion = document.getElementById("questionline").textContent;
var usersAnswer; //= document.getElementById("answerBlockOne").textContent;

/*if (document.getElementById("answerOneChoosed").onclick = true){
    usersAnswer = document.getElementById("answerBlockOne").textContent;
}

if (document.getElementById("answerTwoChoosed").onclick = true){
    usersAnswer = document.getElementById("answerBlockTwo").textContent;
}

if (document.getElementById("answerThreeChoosed").onclick = true){
    usersAnswer = document.getElementById("answerBlockThree").textContent;
}

if (selectAnswerOne()){
    usersAnswer = document.getElementById("answerBlockOne").textContent;
}

else if(selectAnswerTwo()){
    usersAnswer = document.getElementById("answerBlockTwo").textContent;
}

else if(selectAnswerThree()){
    usersAnswer = document.getElementById("answerBlockThree").textContent;
}*/

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

    document.getElementById("questionsBlock").remove();
    document.getElementById("endSummary").style.visibility = "visible";

    return usersAnswer;
}

function selectAnswerTwo(){
    usersAnswer = document.getElementById("answerBlockTwo").textContent;

    document.getElementById("questionsBlock").remove();
    document.getElementById("endSummary").style.visibility = "visible";

    return usersAnswer;
}

function selectAnswerThree(){
    usersAnswer = document.getElementById("answerBlockThree").textContent;

    document.getElementById("questionsBlock").remove();
    document.getElementById("endSummary").style.visibility = "visible";

    return usersAnswer;
}


document.getElementById("resultAnalysis").innerHTML = "Kysymykseen <b>" + askedQuestion + "</b> sinä vastasit <b> " + usersAnswer + "</b>";

console.log(usersAnswer);
console.log(askedQuestion);


