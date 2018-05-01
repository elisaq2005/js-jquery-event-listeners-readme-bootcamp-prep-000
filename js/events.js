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
  $("form").on("submit",function() {
    if($('input' === "G")) {
      alert("you entered G");
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


