  
  // Change CSS background image to correspond with each list category
  //body {
  // background-image: url("../images/music.jpg");
  // background-repeat: no-repeat;
  // background-position: center;

    //$('body').css('background-image', 'none');
  //}

$(document).ready(function() {

  // First Button Functionality

  $("#first-button").click(function(){
    $("#display-section").hide();
    $("#form-section").show();
  }); // ends first-button function

  // Form Buttons Functionalities 

  $("#button1id").click(function(){
    // var category = $("#selectbasic").val();
    // var firstInputValue = $("input#first-input").val();
    // var secondInputValue = $("input#second-input").val();
    // var thirdInputValue = $("input#third-input").val();
    // var fourthInputValue = $("input#fourth-input").val();
    // var fifthInputValue = $("input#fifth-input").val();

    $("#form-section").hide();
    $("#display-section").show();
    $("#first-list").hide();
    $("#made-list").show();
    event.preventDefault();
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