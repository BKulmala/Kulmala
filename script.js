    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
function openCity(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  
  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";
  
  if(cityName == "HTML") {
    document.getElementById("HTMLBtn").style.width = "50%";
    document.getElementById("SchoolBtn").style.width = "25%";
    document.getElementById("CPPBtn").style.width = "25%";
  }
  else if(cityName == "CPP") {
    document.getElementById("HTMLBtn").style.width = "25%";
    document.getElementById("SchoolBtn").style.width = "25%";
    document.getElementById("CPPBtn").style.width = "50%";
  }
  else if(cityName == "School"){
    document.getElementById("HTMLBtn").style.width = "25%";
    document.getElementById("SchoolBtn").style.width = "50%";
    document.getElementById("CPPBtn").style.width = "25%";
  }
  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}
function etb() {
  let sentence = document.getElementById("inputIdOne").value;
  let sentenceNum = " ";
  let i = 0;
  const output = document.getElementById("Output");
    for(i = 0;i < sentence.length; i++) {
      sentenceNum = sentence.charCodeAt(i);
      while(sentenceNum > 0) {
        if(sentenceNum % 128 == 0) {
          let html = "++++++++[>++++++++++++++++<-]";
          output.insertAdjacentHTML("beforeend", html);
          sentenceNum-= 128;
        } 
        else if(sentenceNum % 64 == 0) {
          let html = "++++++++[>++++++++<-]";
          output.insertAdjacentHTML("beforeend", html);
          sentenceNum-= 64;
        }
        else if(sentenceNum % 32 == 0) {
          let html = "++++[>++++++++<-]";
          output.insertAdjacentHTML("beforeend", html);
          sentenceNum-= 32;
        }
        else if(sentenceNum % 16 == 0) {
          let html = "++++[>++++<-]";
          output.insertAdjacentHTML("beforeend", html);
          sentenceNum-= 16;
        }
        else if(sentenceNum % 8 == 0) {
          let html = "++++[>++<-]";
          output.insertAdjacentHTML("beforeend", html);
          sentenceNum-= 8;
        }
        else if(sentenceNum % 4 == 0){
          let html = "++[>++<-]";
          output.insertAdjacentHTML("beforeend", html);
          sentenceNum-= 4;
        }
        else if(sentenceNum % 2 == 0) {
          let html = "+[>++<-]";
          output.insertAdjacentHTML("beforeend", html);
          sentenceNum-= 2;
        }
        else if(sentenceNum % 2 != 0){
          let html = "+[>+<-]";
          output.insertAdjacentHTML("beforeend", html);
          sentenceNum= sentenceNum - 1;
        }
      }
      if(i < sentence.length - 1) {
        let html = ">>";
        output.insertAdjacentHTML("beforeend", html);
      }
      else{
        let html = ".";
        output.insertAdjacentHTML("beforeend", html);
      }
    }
}
function bte() {
  let sentence = document.getElementById("inputIdTwo").value;
  const output = document.getElementById("Output");
  var endOf = 0;
  var toBuild = [0];
  var iter = 0;
  let insert = 0;
  for(var i = 0;endOf != 2;i++) {
    if(sentence.charAt(i) == '>' && endOf === 0) {
      toBuild.push(0);
    }
    else if(sentence.charAt(i) == '+' && endOf === 1) {
      insert = toBuild[iter];
      ++insert;
      toBuild[iter] = insert;
    }
      else if(sentence.charAt(i) == '>' && endOf == 1) {
        ++iter;
      }
      else if(sentence.charAt(i) == '-' && endOf == 1) {
        --toBuild[iter];
      }
      else if(sentence.charAt(i) == '<' && endOf == 1) {
        --iter;
      }
      else if(sentence.charAt(i) == '[' && endOf == 1) {
        var manipKey = iter;
        var loopBeg = i;
        for(var j = loopBeg;toBuild[manipKey] != 1;j++) {
            if(sentence.charAt(j) == '-') {
              --toBuild[iter];
            }
            else if(sentence.charAt(j) == '+') {
              ++toBuild[iter];
            }
            else if(sentence.charAt(j) == '<') {
              --iter;
            }
            else if(sentence.charAt(j) == '>') {
              ++iter;
            }
            else if(sentence.charAt(j) == ']') {
              j = loopBeg;
            }
          }
      }
      else if(i >= sentence.length) {
        i = -1;
        ++endOf;
      }
    }
  for(var i = 0;i <= toBuild.length - 1;i++) {
    if(toBuild[i] != 0) {
    let html = toBuild[i] + ' ';
    output.insertAdjacentHTML("beforeend", html);
  }
  }

}
function photoGallery(folder) {
  var directory;
  document.body.innerHTML = "<a href='index.html'>(Index)</a>";
  if(folder == 1) {
    let directory = 'Images/Nature';
  }
  else if(folder == 2) {
    let directory = 'Images/Chicago';
    document.write('Chicago!');
  }
  else if(folder == 3) {
    let directory = 'Images/Cleveland';
    document.write('Cleveland!');
  }
  else if(folder == 4) {
    let directory = 'Images/Pittsburgh';
    document.write('Pittsburgh!');
  }
}