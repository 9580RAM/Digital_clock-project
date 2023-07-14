setInterval(()=>{
    let d= new Date()
    time.innerHTML = d
    
  },1000)
  // example usage: realtime clock
  const clckFunc = () => {
    let date = new Date();
    let data = String(date).split(" ");
    let time = Array.from(data[4].split(":"));
    // time = time.map(Number);
    let day = date.getDay();
    let Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"];
  
    let hour = document.getElementById("h");
    let min = document.getElementById("m");
    let sec = document.getElementById("s");
    let currDate = document.getElementById("d");
    let currDay = document.getElementById("d1");
  
    hour.innerHTML = time[0];
    min.innerHTML = time[1];
    sec.innerHTML = time[2];
    currDate.innerHTML = data[2] + " " + data[1] + " " + data[3];
    currDay.innerHTML = Day[day];
  }
  
  let timerId = setInterval(clckFunc, 1000);