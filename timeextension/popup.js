//document.getElementById('input').addEventListener("click",time);



var d = new Date();

var hour = d.getHours();

var minutes = d.getMinutes();



if (hour> 20 || hour< 5){
	moment = "night";
}
else if (hour>= 5 && hour<= 10){
	moment = "morning";
}
else if (hour> 10&&hour<= 17){
	moment = "day";
}
else if(hour> 17&&hour<= 20){
	moment = "evening";
}

    
    if(hour>12){
	hour = hour-12;
}
else if(hour==0)
    hour = 12;



document.getElementById("text-to-copy").value = "It is "+hour+":"+minutes+" of "+moment+"."+" What about there?";




// Add click event
document.getElementById('copy-text').addEventListener('click', function(e){
  e.preventDefault();

  // Select the text
  document.getElementById('text-to-copy').select();

  var copied;

  try
  {
      // Copy the text
      copied = document.execCommand('copy');
  } 
  catch (ex)
  {
      copied = false;  
  }

  if(copied)
  {
    // Display the copied text message
    document.getElementById('copied-text').style.display = 'block';    
  }

});

/*function ClipBoard() 
{
hehe.innerText = copytext.innerText;
Copied = hehe.createTextRange();
Copied.execCommand("Copy");
}*/