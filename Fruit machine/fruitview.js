function show() {
  
    let html = `<div><h1 class= "headeline" >${model.maintitle}</h1>
   
   </div><hr>`;
  
    
     html += '<div class= "grid-container ${first}">' + model.output + '</div><hr>'
     html +=`<button class="bnt" onclick="Roll()">Let's Go</button>
     <div class = "score">Score:${model.Score}</div>
     <div class = "cred">Credits:${model.Credits}</div>
     <button class="bnt2" onclick="scoretoCred()">Score To Credit</button>
    `;
 
   
appDiv.innerHTML = html

}
