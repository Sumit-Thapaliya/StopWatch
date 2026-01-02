const start = document.querySelector("#start");
const lap = document.querySelector("#lap");
const reset = document.querySelector("#reset");
const lapped=document.querySelector(".lapped");


let time = 0;
let timer = null;

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    String(hrs).padStart(2, "0") + ":" +
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0")
  );
}


start.addEventListener("click",()=> {
  if (timer === null) {
    timer = setInterval(() => {
      time++;
      document.querySelector(".display").innerText = formatTime(time);
    }, 10);
    start.innerHTML='Stop';
  }else{ 
    clearInterval(timer);
    timer = null;
    start.innerText='Start';
  }
});

let lapCount=1;
lap.addEventListener("click",()=>{
  if (formatTime(time) != '00:00:00'){
  const lapitem = document.createElement("h2");
  lapitem.innerText= `Lap ${lapCount}: ${formatTime(time)}`;
  lapped.appendChild(lapitem);
  lapped.style.display='block';
  lapCount++;
  }
});

reset.addEventListener("click",()=>{
  clearInterval(timer);
  timer=null;
  time = 0;
  document.querySelector(".display").innerText = "00:00:00";
  lapCount=1;
  lapped.innerText='';
  lapped.style.display='none';
  start.innerText='Start';
});


