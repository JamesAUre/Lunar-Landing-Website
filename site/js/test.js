(function($) {
    var dateAndTime = function() {
        $('#m_date').datepicker({
          'format': 'm/d/yyyy',
          'autoclose': true
        });
        $('#checkin_date, #checkout_date').datepicker({
          'format': 'd MM, yyyy',
          'autoclose': true
        });
        $('#m_time').timepicker();
      };
      dateAndTime();
})

var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){
    if(content.className=="open"){
        content.className = "";
    }

    else{
        content.className="open";
    }
};

function calculatetotal(costforroom){
    $("input#start-time").val();
    const days = document.getElementById("nightsstay").value;
    const adultnum = document.getElementById("adults").value;
    const childnum = document.getElementById("children").value;
    const totalcost = days * (((0.5 * costforroom) * childnum) + (costforroom * adultnum));
    //const totalcost = days * (adultnum * costforroom);
    //const totalcost = (costforroom * ((0.5 * childnum) + adultnum));
    document.getElementById("totalcost").innerHTML= "$" + totalcost;
    console.log("CALCULATE TOTAL CALLED", adultnum, childnum, totalcost);
}