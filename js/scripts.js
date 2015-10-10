  
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

$("#button2id").click(function(event){
  $('#selectbasic').val('1');
  $('#first-input').val('');
  $('#second-input').val('');
  $('#third-input').val('');
  $('#fourth-input').val('');
  $('#fifth-input').val('');
  event.preventDefault();
}); //ends clear form button function



  // $("#button1id").click(function(event) {
  //   var person1Input = $("input#person1").val();
  //   var person2Input = $("input#person2").val();
  //   var animalInput = $("input#animal").val();
  //   var exclamationInput = $("input#exclamation").val();
  //   var verbInput = $("input#verb").val();
  //   var nounInput = $("input#noun").val();



  //   $(".person1").text(person1Input);
  //   $(".person2").text(person2Input);
  //   $(".animal").text(animalInput);
  //   $(".exclamation").text(exclamationInput);
  //   $(".verb").text(verbInput);
  //   $(".noun").text(nounInput);

  //   $("#story").show();

  //   event.preventDefault();

  // }); // ends blanks form submit funciton
}); // ends document ready