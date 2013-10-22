(function(){

var val = 'no',
	currentTime = 90,
	minutes = 60,
	hour = (currentTime/minutes).toFixed(2),
	time;

$('#flip-3').change(function() {

	console.log("here");
    if(val!==$(this).val()){
		
    	console.log($(this).val());
        //alert($(this).val());
    }
    val = $(this).val();

    if(val=== "yes"){
    	console.log("sometimes yes");
    	time = hour;
    	console.log(time + " hours");
        //alert($(this).val());
    }
    else {
    	console.log("this time no"); 
    	time = Math.round(currentTime);
    	console.log(time + " minutes");
    }
    
    // if ($( "#flip-3" ).data( "type" ) === "minutes") {alert('true');}
    // var info = $( "#flip-3" ).data( "type" );
    // console.log(info);

    
});


})();

