var questionsarray = [
    {
        question: "Who is the president of America ?",
        correctanswer: "Trump",
        options: ["Trump", "Obama", "Hillary", "Putin"]
    },
    {
        question: "What is the square root of 9 ?",
        correctanswer: "3",
        options: ["3", "9", "6", "2"]
    },
    {
        question: "Who is the captain of Pakistan Test cricket team ?",
        correctanswer: "Azhar Ali",
        options: ["Asad Shafiq", "Babar Azam", "Shoaib Malik", "Azhar Ali"]
    },
    {
        question: "The Capital of Pakistan is ?",
        correctanswer: "Islamabad",
        options: ["Peshawar", "Karachi", "Lahore", "Islamabad"]
    },
    {
        question: "Which one of this is an even number ?",
        correctanswer: "32",
        options: ["103", "51", "32", "79"]
    },
]
var ques = document.getElementById("question")
var opt = document.getElementsByClassName("opt")
var optionCheck = document.getElementsByName("president")
var button = document.getElementById("button")
var resultbtnplace = document.getElementById("resultbtnplace")
var n = 1
var ansinc = 0
var score = 0
onload = function () {
    ques.innerHTML = questionsarray[0].question;
    for (let i = 0; i < opt.length; i++) {
        opt[i].innerHTML = questionsarray[0].options[i];

    }
}


function nextquestion() {

    for (let i = 0; i < optionCheck.length; i++) {
        if (optionCheck[i].checked) {


            var ans = optionCheck[i].nextSibling.firstChild.nodeValue;
            if (ans == questionsarray[ansinc].correctanswer) {
                score += 5;
            }









            ques.innerHTML = questionsarray[n].question;
            for (let i = 0; i < opt.length; i++) {
                opt[i].innerHTML = questionsarray[n].options[i]


            }

            n++;
            ansinc++;


        }



    }
    if (n === questionsarray.length) {
        var scorebtn = document.createElement("button")
        var txtscorebtn = document.createTextNode("Check Your Score")
        scorebtn.appendChild(txtscorebtn)
        scorebtn.setAttribute("class", "btn btn-light btn-lg")
        scorebtn.setAttribute("onclick", "leftquesresult()")
        resultbtnplace.appendChild(scorebtn)
        button.setAttribute("class", "visiblehidden")

    }

}

function leftquesresult() {
    for (let i = 0; i < optionCheck.length; i++) {
        if (optionCheck[i].checked) {


            var ans = optionCheck[i].nextSibling.firstChild.nodeValue;
            if (ans == questionsarray[ansinc].correctanswer) {
                score += 5;
            }

        }
    }
    ansinc++
    alert("Your Score :- " + score)
}
