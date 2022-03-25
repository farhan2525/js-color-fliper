const colors = ['#f15025','red','rgba(133,122,200)','green']

const btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    let randomNumber = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor = randomNumber;
})