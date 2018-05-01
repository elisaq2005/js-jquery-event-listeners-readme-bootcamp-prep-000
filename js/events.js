//define functions here

function getIt() {
 $('p').on("click",function() {
   alert("Hey!");
 })
}

function frameIt() {
  $('img').on('load',function() {
    return $('img').addClass('tasty');
  })
}

function pressIt() {
  $("form").on("keydown",function(key) {
    if($(key.which === "G")) {
      alert();
    }
  })
}

function submitIt() {
  $("form").on("submit",function() {
    alert('Your form is going to be submitted now.')
  })
}
$(document).ready(function(){

// call functions here

});


