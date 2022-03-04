function Roll(){
  if(model.Credits <= 0) { 
    alert('No Credits')
    return;
  }
model.slots = [];
model.output = '';
model.Credits = model.Credits - 1;
 let random =  Math.floor(Math.random()*model.fruits.length);
 let random2 = Math.floor(Math.random()*model.fruits.length);
 let random3 = Math.floor(Math.random()*model.fruits.length);
 let scoreValue = model.fruits[random].sValue;
 model.slots.push(model.fruits[random].sImg);
 model.slots.push(model.fruits[random2].sImg);
 model.slots.push(model.fruits[random3].sImg);
   
for(let i = 0; i < model.slots.length; i++){
  let first = i % 3 == 0 ? `first` : '';
  model.output += `<div class="grid-container"><img width="297" height="248" src="${model.slots[i]}"></div>`
}
winner(scoreValue);
show();
} 

function winner(givenScore){
    if(model.slots[0] === model.slots[1] && model.slots[0] === model.slots[2]){
      model.Score += givenScore;
      //alert('Du vant')
      let lyd= new Audio('./lyd/Ta-da-orchestra-fanfare.mp3');
      lyd.play();
      let lyd2 = new Audio('https://bigsoundbank.com/UPLOAD/mp3/2482.mp3');
      lyd2.play();
    } else { console.log('ikke gevinst')
  }

}
function scoretoCred(){
  model.Credits += model.Score; 
  model.Score = 0;
show();
}


