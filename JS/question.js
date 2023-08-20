var SE = 1000*60; //1000=1s in js
var TA=document.getElementById("TA");
var TI;
MFUN();
function MFUN(){
if(SE==60000)
	TI=setInterval(MFUN,1000)
SE-=1000;
document.getElementById("countdown").innerHTML='0:'+SE/1000;
if(SE<=0){
	clearInterval(TI);
}
}
document.getElementById("countdown").innerHTML="0:" + SE/1000;
function Quiz(POBs) {
    this.score = 0;
    this.POBs = POBs;
    this.POBIndex = 0;
}
 
Quiz.prototype.getQuezeIndex = function() {
    return this.POBs[this.POBIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuezeIndex().isCorrectAnswer(answer)) {
        this.score+=2;
		alert("correct");

	}else{
		this.score+=2-1;
		alert("Wrong");
    }
    this.POBIndex++;
	 
}

Quiz.prototype.isEnded = function() {
    return this.POBIndex === this.POBs.length;
}
 
 
function POB(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
POB.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();

    }
    else {
        // show POB
        var element = document.getElementById("POB");
        element.innerHTML = quiz.getQuezeIndex().text;
 
        // show options
        var choices = quiz.getQuezeIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
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
    var currentPOBNumber = quiz.POBIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentPOBNumber + " of " + quiz.POBs.length;
};
 
function showScores() {
    var GOH = "<h1>Completed</h1>";
    GOH += "<h1 id='score'> Your scores: " + quiz.score + "</h1>";
    var element = document.getElementById("quiz");
    element.innerHTML = GOH;
	 if (score<10){
	    document.querySelector("quiz.score").style.backgroundColor="red";
	 }
};
 
// create POBs here
var POBs = [
    new POB("1) What is the highest railway station in Sri Lanka?", ["Pattipola", "Ohiya", "Ella", "Kotuwa"], "Pattipola"),
    new POB("2) To which area King Ravana was famous?", ["Nuwaraeliya", "Kandy", "Ella", "Rathnapura"], "Nuwaraeliya"),
    new POB("3) Which station you have to get to approch to ninearch?", ["Demodara", "Ella", "Peradeniya", "Kotuwa"], "Demodara"),
    new POB("4) Unique step of railway loop of tunnel system in the world?", ["Kital Ella Railway Station", "Demodara Railway Station", "Nanuoya Railway Station", "Ella Railway Station"], "Demodara Railway Station"),
    new POB("5) What a historic place for Buddhists located in Kandy?", ["Royal Palace of Kandy", "Temple of the Sacred Tooth Relic", "Udawattekele Sanctuary", "Royal Botanical Garden"], "Temple of the Sacred Tooth Relic"),
    new POB("6) Who was the Buddhist monk brought the tooth relics of Buddha to Kalinga?", ["Monk khema", "Monk Ananda", "Monk Moggallana", "Monk Seriyuth"], "Monk khema"),
    new POB("7)  Who built the Kandy Dalada maligawa?", ["King Vimaladharmasooriya", "King Dutugemunu", "King Dewanampiyathissa", "King Sri Vickrama Rajasingha"], "King Vimaladharmasooriya"),
    new POB("8) Who brought the tooth relic to Sri Lanka?", ["Prince Dantha & Princess Hemamala", "Rama & seethe", "King Shah jahan &Queen  Mumtaz", "King Kusa & Queen Paba"], "Prince Dantha & Princess Hemamala"),
    new POB("9) What is the annual festival of the Tooth Relic ?", ["Esala Perahera", "poson Perahera", "Binara Perahera", "Vesak Perahera"], "Esala Perahera"),
    new POB("10) How many elephants are in Kandy perahera?", ["8-10", "10-12", "12-14", "14-16"], "8-10"),
];

 
 
// create quiz
var quiz = new Quiz(POBs);
 
// display quiz
populate();