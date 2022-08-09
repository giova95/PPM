

try {    
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;    
    var recognition = new SpeechRecognition();  
    }  
    catch(e) {    
    console.error(e);    
    $('.no-browser-support').show();   
     $('.app').hide();  
    }