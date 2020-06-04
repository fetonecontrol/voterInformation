$(document).ready(function() {
  $("#formVoter").submit(function(event) {
    const age = $("input#voterAge").val();
    const ageNumber = parseInt(age);

    if (ageNumber >= 18) {
      $('#voterInfo').show();
    } else {
      $("#minorInfo").show();
    }
      
  event.preventDefault();
  console.log(); 
  
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
