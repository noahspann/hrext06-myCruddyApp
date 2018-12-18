$(document).ready(function(){
  var valuesArr = [];
  
  var liMaker = function(input){
    let $li = document.createElement('li');
    $('ul').append('<li><label><input type="checkbox">'+ input +'</label></li>');
  };
  
  localStorage.setItem('inputFieldValue', JSON.stringify(valuesArr));
  var myItemInStorage = JSON.parse(localStorage.getItem('inputFieldValue'));

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    valuesArr.push($('input').val());
    localStorage.setItem('inputFieldValue', JSON.stringify(valuesArr));
    liMaker($('input').val());
    $('input').val('');
  });

  //delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    var removedVal = valuesArr.shift();
    localStorage.setItem('inputFieldValue', JSON.stringify(valuesArr));
    valuesArr = JSON.parse(localStorage.getItem('inputFieldValue'));
    $('ul').html('');
    valuesArr.forEach(item => {
       $('ul').append('<li><label><input type="checkbox">'+ item +'</label></li>');
    });
   
  });
  //clear all local storage and refresh web page
  $('.clear-all').on('click', () => {
    localStorage.clear();
    location.reload();
  });

});