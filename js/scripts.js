$(document).ready(function() {
  event.preventDefault();
  $("#formVoter").submit(function(event) {
    const age = $("input#voterAge").val();
    const ageNumber = parseInt(age);

    if (ageNumber >= 18) {
      $('#voterInfo').show();
    } else (ageNumber < 18) {

      $("#minorInfo").show();
    }

  });
});

// const age = parseInt($("input#voterAge").val());
//$("#voterInfo").submit(function(event) {
  // const age = $("input#voterAge").val();

  //$(document).ready(function() {
 // $("#voterAge").submit(function(event) {
   // const age = $("input#age").val();
   // const ageNumber = parseInt(age);

    //$("#ofAge).show();
    //$("#underAge).show();


    //event.preventDefault();

  });

  
});
