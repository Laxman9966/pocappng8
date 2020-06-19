//-----------------------web--------------------------------
$(function(){
$("#entpBotAnchor").click(function () {
  $('#entpBotWindow').addClass('popup-box-on');
   var d = new Date();
   var locale = "en-us";
   var month = d.toLocaleString(locale, {month: "long"});
   var dateTime = d.getDate() +' '+ month+' ' + d.getHours()+':' + d.getMinutes()+'MIN';
   document.getElementById("ftime").innerHTML = dateTime;
    });
  
    $("#removeClass").click(function () {
  $('#entpBotWindow').removeClass('popup-box-on');
    });
})


//----------Dialogflow-------------v1--------------------------------
//var accessToken = "f0a1a400c8444dbda5a79cdaa4f3c050";
var accessToken = "b3e2b80f1d9a419c878268023c0e160c";
var baseUrl = "https://api.dialogflow.com/v1/";
//-----------------------v2--------------------------------
// var baseUrl = "https://dialogflow.googleapis.com/v2/projects/iteminventoryagent-baafe/agent/";
// var accessToken = "ya29.c.El_yBap2t-U1WN7kJ6ZEh5fqOUcq3Uxj_56nUPswiCbYWMPFxvVgBLkkYjgEp03tKxlD6vLUYAVka9s5QYMnqxKRFmcLhx0qmiOOoh_zZYCWrsSnv5KtlhixpfBA2D5thQ";

$(document).ready(function () {
	
	//$('#entpBotWindow').addClass('popup-box-on');
    $('#input').focus();
    $("#input").keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
			var inputvalue = $('#input').val();  // input text value from user
			var currentDateTime = getDateTime();			
			var usermessage ='<div id="usermsgtemp">'+
			'<div _ngcontent-c4 class="chat_message_wrapper">'+
			'<div _ngcontent-c4 class="chat_user_avatar">'+
				'<img _ngcontent-c4 class="md-user-image" src="../../assets/images/jc.png">'+
			'</div>'+
			'<ul _ngcontent-c4 class="chat_message">'+
				'<li _ngcontent-c4 ><span _ngcontent-c4 class="chat_message_time">'+currentDateTime+'</span>'+
					'<p>' +inputvalue +'</p>'+
				'</li>'+
			'</ul>'+
			'</div>'+
			'</div>';
			$("#entpBotContbox").append(usermessage);  
            send();
			
			 $('#entpBotContbox').animate({
  scrollTop: $('#entpBotContbox').get(0).scrollHeight}, 2000);
  $('#entpBotChatBox').animate({
  scrollTop: $('#entpBotChatBox').get(0).scrollHeight}, 2000);
			
        }
    });
    $("#rec").click(function (event) {
        switchRecognition();
    });
});


function getUserName(){
var userName =	document.getElementById("userId").innerHTML;
return userName;
}


var recognition;

function startRecognition() {
    recognition = new webkitSpeechRecognition();
    recognition.onstart = function (event) {
        updateRec();
    };
    recognition.onresult = function (event) {
        var text = "";
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
        }
        setInput(text);
        stopRecognition();
    };
    recognition.onend = function () {
        stopRecognition();
    };
    recognition.lang = "en-US";
    recognition.start();
}

function stopRecognition() {
    if (recognition) {
        recognition.stop();
        recognition = null;
    }
    updateRec();
}

function switchRecognition() {
    if (recognition) {
        stopRecognition();
    } else {
        startRecognition();
    }
}

function setInput(text) {
    $("#input").val(text);
    send();
}

function updateRec() {
    $("#rec").text(recognition ? "Stop" : "Speak");
}

function send() {
    var text = $("#input").val();
	$('#input').val('');
	//console.log(" ***** in send() input text = " +text)
	//$("#wait").css("display", "block");
    $.ajax({
        type: "POST",
        url: baseUrl + "query?v=20150910", //v1
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + accessToken
        },
        data: JSON.stringify({
            query: text,
            lang: "en",
            sessionId: "12345",
			timezone: "Asia/Almaty"
        }),
 
        success: function (data) {
			//$("#wait").css("display", "none");
            console.log("*********Success Data size:  "+data.result.fulfillment.messages.length);
            for (var i = 0; i < data.result.fulfillment.messages.length; i++) {
				let respData = (JSON.stringify(data.result.fulfillment.messages[i].speech));
				//console.log("*********Success Data respData:  "+respData);
				setResponse(respData);
        }
		},
        error: function (data) {
            console.log("**** error in send function:  "+data);
            setResponse("Internal Server Error");
        }
    });
    //setResponse("Loading...");
}

function setBotMessage(botmsg){
	//console.log('*****setBotMessage() called')
	var currentDateTime = getDateTime();
var usermessage ='<div id="usermsgtemp">'+
			'<div _ngcontent-c4 class="chat_message_wrapper">'+
			'<div _ngcontent-c4 class="chat_user_avatar">'+
				'<img _ngcontent-c4 class="md-user-image" src="../../assets/images/jc.png">'+
			'</div>'+
			'<ul _ngcontent-c4 class="chat_message">'+
				'<li _ngcontent-c4><span _ngcontent-c4 class="chat_message_time"></span>'+
					'<p>' +botmsg +'</p>'+
				'</li>'+
			'</ul>'+
			'</div>'+
			'</div>';
			$("#entpBotContbox").append(usermessage);
}


function setResponse(responseText) {
	//console.log('**** setResponse value = ' +responseText);	//response value from bot  'Good Day'
    var me = $('#input').val();             // input text value from user
	//setBotMessage(responseText);
	var currentDateTime = getDateTime();
	 
	 responseText =responseText.replace(/\"/g, "");
	var botresponsemsg=	'<div id="botmsgtemp">'+
  '<div _ngcontent-c4 class="chat_message_wrapper chat_message_right">'+
	'<div _ngcontent-c4 class="chat_user_avatar">'+
		'<img _ngcontent-c4 class="md-user-image" src="../../assets/images/bott.png">'+
	'</div>'+
	'<ul _ngcontent-c4 class="chat_message">'+
		'<li _ngcontent-c4><span _ngcontent-c4 class="chat_message_time">'+currentDateTime+'</span>'+
			'<p>' + responseText+ '</p>'+  //window.getUserName() + will give you user name
		'</li>'+
	'</ul>'+
'</div>'+
'</div>';
$("#entpBotContbox").append(botresponsemsg);
//var scroll=document.getElementById("contbox");
   //       scroll.scrollTop = scroll.scrollHeight;

   $('#entpBotContbox').animate({
  scrollTop: $('#entpBotContbox').get(0).scrollHeight}, 2000);
  $('#entpBotChatBox').animate({
  scrollTop: $('#entpBotChatBox').get(0).scrollHeight}, 2000);
  
	
    var bot = responseText;
    var cache = $("#response1").val();
    if (me !== '') {
		//alert(text(cache + "\nMe : " + me + "\nBot :" + bot));
        $("#response1").text(cache + "\nMe : " + me + "\nBot :" + bot);
        $('#input').val("");
    }

    if (me === '' && bot !== 'Internal Server Error') {
        $("#response1").text(cache + "\nBot :" + bot);
    }

    //var textarea = $('#response1');
    //textarea.scrollTop(textarea[0].scrollHeight);
}



function setResponse1(val) {
	console.log('**** setResponse ' +val);			//response value from bot
    var me = $('#input').val();                // input text value from user
	console.log('********+in setResponse function ' +me);
	var $message = $($('.message_template').clone().html());   
	 $('.response1').append($message);
	 //$('.response1').append(me);
    var bot = val;
    var cache = $("#response1").val();
    if (me !== '') {
		//alert(text(cache + "\nMe : " + me + "\nBot :" + bot));
        $("#response1").text(cache + "\nMe : " + me + "\nBot :" + bot);
        $('#input').val("");
    }

    if (me === '' && bot !== 'Internal Server Error') {
        $("#response1").text(cache + "\nBot :" + bot);
    }

    var textarea = $('#response1');
    textarea.scrollTop(textarea[0].scrollHeight);
}

/* Functional Code Start here */

function getDateTime(){
        var d = new Date();
	    var locale = "en-us";
		var month = d.toLocaleString(locale, {month: "long"});
        var dateTime = d.getDate() +' '+ month+' ' + d.getHours()+':' + d.getMinutes()+'MIN';
     // console.log(dateTime);
        return dateTime;
  }
  
  
  
  
   function getElements(){
	  var matches = [];
var searchElements =  document.getElementsByTagName("p");
//document.getElementById("entpBotContbox").children;
 alert(searchElements.length);
 writeFile();
for(var i = 0; i < searchElements.length; i++) {
        alert(searchElements[i].tagName);
}
  }
  
  
  function writeFile(){
	  /// write to file
	   alert('write to file');
var object = new ActiveXObject("Scripting.FileSystemObject");
var file = object.CreateTextFile("E:\\Hello.txt", false);
file.WriteLine('Hello World');
file.WriteLine('Hope is a thing with feathers, that perches on the soul.'); 
file.Close();
  }
  
  
  
  function getChatMessages() {
	 // function getDateTime();
    var list = document.getElementsByTagName("p");
    console.log(list.length);
    for(var i=0; i<list.length; i++){
    list.getElementsByTagName("LI")[0].innerHTML = "Milk";
    }
    
    list.getElementsByTagName("LI")[0].innerHTML = "Milk";
}



 /* 
  
  function getLocation(){
	  var city, state;
var geocoder;
if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}

//Get the latitude and the longitude;
function successFunction(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  codeLatLng(lat, lng);
}

function errorFunction() {
  console.log("Geocoder failed");
}

function codeLatLng(lat, lng) {
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({
    'latLng': latlng
  }, function(results, status) {
   if (status == google.maps.GeocoderStatus.OK) {
     if (results[1]) {
    //find country name
     for (var i = 0; i < results[0].address_components.length; i++) {
       for (var b = 0; b < results[0].address_components[i].types.length; b++) {
        //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
        if (results[0].address_components[i].types[b] == "administrative_area_level_2") {
          //this is the object you are looking for
          city = results[0].address_components[i];
          break;
        }
      }
    }

    for (var i = 0; i < results[0].address_components.length; i++) {
      for (var b = 0; b < results[0].address_components[i].types.length; b++) {
        //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
        if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
          //this is the object you are looking for
          state = results[0].address_components[i];
          break;
        }
      }
    }
  }
  } }
  
  */