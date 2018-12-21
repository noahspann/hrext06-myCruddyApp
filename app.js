$(document).ready(function(){
  var valuesArr = [];
  var counter = 0;
  
  var liMaker = function(title, des, date){
   
    var newTitle = 'title'+ counter;
    var newDes = 'des'+ counter;
    var newDate = 'date'+ counter;

    let $li = document.createElement('li');
    $('ul').append('<div id="wrapper" class="'+ newTitle +'"><div class="'+ newTitle +'" id="todo-task"<li><span class="'+ newTitle +'">'+ title +'</span></li><div class="'+ newDes +'" id="description">'+ des +'</div><div class="'+ newDate +'" id="date">'+ date +'</div></div></div>');

    localStorage.setItem(''+ newTitle, JSON.stringify(valuesArr));
    var data = JSON.parse(localStorage.getItem(''+ newTitle));
  };
  

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', () => {
    
    counter++;

    valuesArr.push($('.title').val(), $('.description').val(), $('.date').val());
    
    liMaker($('.title').val(), $('.description').val(), $('.date').val());
    
    $('form').find("input").val("")


  });

  
  //delete from local storage when delete button clicked
  $('.btn-delete').on('click', () => {

    localStorage.removeItem('title'+ counter)
    $('div').remove('.title'+ counter)


    counter--;
   });


  //clear all local storage and refresh web page
  $('.clear-all').on('click', () => {
    localStorage.clear();
    location.reload();
  });

});