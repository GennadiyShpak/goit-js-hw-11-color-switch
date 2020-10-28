import './styles.css';
import refs from './js/refs';
import colors from './js/colors_arr';
import randomIntegerFromInterval from './js/colores_generator'
let intervalId = null;

refs.startBtn.addEventListener('click',function bodyCololHandler() {
        intervalId = setInterval(function(){
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0,5)];
        refs.stopBtn.disabled = false;
        refs.startBtn.disabled = true;
        },1000);
});

refs.stopBtn.addEventListener('click',()=>{
    clearInterval(intervalId);
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
})