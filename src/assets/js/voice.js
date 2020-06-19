



//showInfo('info_start');

var create_email = false;
var final_transcript = 'hello';  //final text 
var recognizing = false;
var ignore_onend;
var start_timestamp;

//voice converstation starts here
function startButton(event) {
//alert("start button started");
 record();
 start_timestamp = event.timeStamp;
}

//RECORDING VOICE
function record(){
//alert('starting recording');
 if (recognizing) {
 recognition.stop();
 return;
 }
 
 final_transcript = '';
 recognition.lang = 'en-US';
 recognition.start();
 ignore_onend = false;
 final_span.innerHTML = '';
 interim_span.innerHTML = '';
 start_img.src = 'res/mic-slash.gif';
}



if (!('webkitSpeechRecognition' in window)) {
 //upgrade();
} 
else {
 start_button.style.display = 'inline-block';
 var recognition = new webkitSpeechRecognition();
 recognition.continuous = true;
 recognition.interimResults = true;

 recognition.onstart = function() {
 recognizing = true;
 start_img.src = 'res/mic-animate.gif';
 };

 recognition.onerror = function(event) {
 if (event.error == 'no-speech') {
 start_img.src = 'res/mic.gif';
 ignore_onend = true;
 }
 if (event.error == 'audio-capture') {
 start_img.src = 'res/mic.gif';
 ignore_onend = true;
 }
 if (event.error == 'not-allowed') {
 if (event.timeStamp - start_timestamp < 10) {
 } 
 ignore_onend = true;
 }
 };

 recognition.onend = function() {
 recognizing = false;
 if (ignore_onend) {
 return;
 }
 start_img.src = 'res/mic.gif';
 if (!final_transcript) {
 //showInfo('info_start');
 return;
 }
 showInfo('');
 if (window.getSelection) {
 window.getSelection().removeAllRanges();
 var range = document.createRange();
 range.selectNode(document.getElementById('final_span'));
 window.getSelection().addRange(range);
 }record();

 };

 recognition.onresult = function(event) {
 var interim_transcript = '';
 if (typeof(event.results) == 'undefined') {
 recognition.onend = null;
 recognition.stop();

 return;
 }
 
 //alert(event.results.length);
 for (var i = event.resultIndex; i < event.results.length; ++i) {
 
 if (event.results[i].isFinal) {
 // call dialogflow api here sending  event.results[i][0].transcript
 final_transcript += event.results[i][0].transcript;
 } else {
 interim_transcript += event.results[i][0].transcript;
 }
 }
 final_transcript = capitalize(final_transcript);
 
 //alert("final_transcript " +final_transcript + '\n' + "interim_transcript " +interim_transcript);
 final_span.innerHTML = linebreak(final_transcript);
 interim_span.innerHTML = linebreak(interim_transcript);
// alert(" Send to Api "+final_transcript);
 };
}