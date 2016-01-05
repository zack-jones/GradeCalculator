function calculate() {
  var sum = 0;
  var percent = "";
  var remain = 0;
  var goal = 0;
  for (var i = 0; i < document.getElementsByClassName('grade').length; i++){
    sum += document.getElementsByClassName('grade')[i].value * document.getElementsByClassName('percent')[i].value;
    percent += document.getElementsByClassName('percent')[i].value;
  }
  sum = sum/100;
  remain = 100-percent;

  document.getElementById('result').innerHTML = sum.toFixed(2);
  document.getElementById('complete').innerHTML = percent + "%";

  function toGetAnA() {
    if (sum < 93) {
      goal = (93 - sum) / remain;
      goal *= 100;
      document.getElementById('potential').innerHTML = goal.toFixed(2);
      document.getElementById('remain').innerHTML = remain + "%";
    }
  }
  toGetAnA();

}
function reset() {
  for (var i = 0; i < document.getElementsByClassName('grade').length; i++){
    document.getElementsByClassName('grade')[i].value = "";
    document.getElementsByClassName('percent')[i].value = "";
    document.getElementById('result').innerHTML = 0;
    document.getElementById('complete').innerHTML = 0 + "%";
    document.getElementById('potential').innerHTML = 0;
    document.getElementById('remain').innerHTML = 0 + "%";
  }
}
function addGrade() {
  var place = document.getElementsByClassName('grade').length + 1;
  document.getElementById('grades').innerHTML += '<div class="row"><div class="col-md-3 col-md-offset-3"><div class="input-group"><input type="text" class="grade" placeholder=' + place + '></div></div><div class="col-md-3"><div class="input-group"><input type="text" class="percent" placeholder=""></div></div></div>';
}
