const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    var color = '#'
  for(let i=0 ; i<6 ; i++){
      let ranNum = Math.floor(Math.random()*colors.length);
      color+= colors[ranNum]
      console.log(color);
  }
document.body.style.backgroundColor = color
})