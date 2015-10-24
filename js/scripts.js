$(document).ready(function() {

  // First Button Functionality

  $("#first-button").click(function(){
    $("#display-section").hide();
    $("#form-section").show();
  }); // ends first-button function

  // Form Buttons Functionalities 

  $("#button1id").click(function(event){
    var categoryInputValue = $("#selectbasic").val();
    var firstInputValue = $("input#first-input").val();
    var secondInputValue = $("input#second-input").val();
    var thirdInputValue = $("input#third-input").val();
    var fourthInputValue = $("input#fourth-input").val();
    var fifthInputValue = $("input#fifth-input").val();
   
    if (categoryInputValue == 1) {
      categoryString = 'Any';
      $('body').css('background-image', 'none');
    };
    if (categoryInputValue == 2) {
      categoryString = 'Musical Acts';
      $('body').css('background-image', 'url(images/music.jpg)');

    };
    if (categoryInputValue == 3) {
      categoryString = 'Sports Teams';
      $('body').css('background-image', 'url(images/sports.jpg)');
    };
    if (categoryInputValue == 4) {
      categoryString = 'Books';
      $('body').css('background-image', 'url(images/books.jpg)');
    };
    if (categoryInputValue == 5) {
      categoryString = 'Movies';
      $('body').css('background-image', 'url(images/movies.jpg)');
    };
    if (categoryInputValue == 6) {
      categoryString = 'Websites';
      $('body').css('background-image', 'url(images/internet.jpg)');
    };

    if (firstInputValue !=='') {

      $('#category').text(categoryString);
      $("#first-li").text(firstInputValue);
      $("#second-li").text(secondInputValue);
      $("#third-li").text(thirdInputValue);
      $("#fourth-li").text(fourthInputValue);
      $("#fifth-li").text(fifthInputValue);


      $("#form-section").hide();
      $("#display-section").show();
      $("#first-list").hide();
      $("#made-list").show();
      event.preventDefault();
    };
  }); // ends submit button function

  $("#button2id").click(function(event){
    $('#selectbasic').val('1');
    $('#first-input').val('');
    $('#second-input').val('');
    $('#third-input').val('');
    $('#fourth-input').val('');
    $('#fifth-input').val('');
    event.preventDefault();
  }); //ends clear form button function

  $("#last-button").click(function(event){
    $('#selectbasic').val('1');
    $('#first-input').val('');
    $('#second-input').val('');
    $('#third-input').val('');
    $('#fourth-input').val('');
    $('#fifth-input').val('');
    $("#display-section").hide();
    $("#form-section").show();
  }); // ends 'make another' button function
}); // ends document ready