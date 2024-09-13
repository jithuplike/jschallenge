var submit = document.getElementById('submit');
var input = document.getElementById('txtSecondNumber');

function sum() {
    var FirstNumber = 1;
    var SecondNumber = input.value;

    var result = 0;

    for (var i = FirstNumber; i <= SecondNumber; i++) {
      result += i;  
    }

    alert(result);
}

submit.addEventListener('click', sum);

