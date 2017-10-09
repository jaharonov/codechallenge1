$(document).ready(readyNow);

function readyNow() {
  console.log('ready!');
  $('#generateButton').on('click', newDiv);
  $('#swap').on('click', swapColor);
}

function newDiv() {
  console.log('newDiv');

  $('#firstDiv').append('<div>new div</div>');
  $('#firstDiv').children().append('<p>counter</p>');
  $('#firstDiv').last().append('<button type="button" id="swap">swap</button>' +
  '<button type="button" id="delete">delete</button>');
}

  function swapColor() {
    $('#firstDiv').parent().css('background-color', 'yellow');
  }
