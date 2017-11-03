  var config = {
    apiKey: "AIzaSyAcuWFjb7IP4Eapqa45ykGwFDFFqpx3zGY",
    authDomain: "my-rad-project-e1397.firebaseapp.com",
    databaseURL: "https://my-rad-project-e1397.firebaseio.com",
    projectId: "my-rad-project-e1397",
    storageBucket: "my-rad-project-e1397.appspot.com",
    messagingSenderId: "565771889616"
  };
  firebase.initializeApp(config);

var database = firebase.database();

  var name = "";
  var destination = "";
  var time = "";
  var frequency = "";
  var nextArrival = "";
  var minutes = "";

 $("#add-user").on("click", function(event) {
  
 event.preventDefault();

  var name = $("#name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var time = $("#time-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  var nextArrival = $("#nextArrival").val().trim();
  var minutes = $("minutes-input").val().trim();



  database.ref().push({
  	name: name,
  	destination: destination,
  	frequency: frequency,
  	nextArrival: nextArrival,
    minutes: minutes,
    })

  // database.ref().on("value", function(snapshot){
  	database.ref().on("child_added", function(snapshot){

  	console.log(snapshot.val());

  	console.log(snapshot.val().name);
  	console.log(snapshot.val().destination);
  	console.log(snapshot.val().timeInput);
  	console.log(snapshot.val().frequency-input);
    console.log(snapshot.val().nextArrival);
    console.log(snapshot.val().minutes-input);

  	$("#name-display").text(snapshot.val().name);
  	$("#destination-display").text(snapshot.val().destination);
  	$("#frequency-display").text(snapshot.val().timeInput);
  	$("#arrival-display").text(snapshot.val().frequency-input);
    $("#arrival-display").text(snapshot.val().nextArrival);
    $("#arrival-display").text(snapshot.val().minutes-input);

  })




});