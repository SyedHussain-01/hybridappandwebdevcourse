function getValue(num){

    var answer = document.getElementById('answer')
    answer.value += num;

} 

function empty(){
    var answer = document.getElementById('answer')
    answer.value = ''

}

function getAnswer(){
    var answer = document.getElementById('answer')
    answer.value = eval(answer.value)

} 