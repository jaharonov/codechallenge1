$(document).ready(readyNow);
var count = 0;
var colorCount = 0;
function readyNow() {
  console.log('ready!');
  $('#generateButton').on('click', newDiv);
  $('#firstDiv').on('click', '#swap', swapColor);
  $('#firstDiv').on('click', '#delete', deleteDiv);
}
function newDiv() {
  count++;
  console.log('newDiv');
  if (count == 1) {
  $('#firstDiv').append('<div></div>');
  $('#firstDiv').children().append('<p id="count">' + count + '</p>');
  $('#firstDiv').last().append('<button type="button" id="swap">swap</button>');
  $('#firstDiv').last().append('<button type="button" id="delete">delete</button>');
}
  else {
    $('#count').html('<p id="count">' + count + '</p>');
  }
}
  function swapColor() {
    colorCount++;
    console.log('colors?');
    if (colorCount % 2) {
    $('#firstDiv').css('background-color', 'yellow');
  }
    else {
    $('#firstDiv').css('background-color', 'red');
    }
  }
  function deleteDiv() {
    $('#firstDiv').hide();
  }
