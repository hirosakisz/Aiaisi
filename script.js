const audio = document.getElementById("audio");
const start = document.getElementById("start");
const music = document.getElementById("music");

start.addEventListener("click", async () => {
  try {
    await audio.play();
    music.classList.add("on");
  } catch(e) {
    music.classList.add("on");
  }
  document.getElementById("letter").scrollIntoView({behavior:"smooth"});
});

music.addEventListener("click", async () => {
  if(audio.paused){ await audio.play(); }
  else { audio.pause(); }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});

document.querySelectorAll("p").forEach(p => observer.observe(p));
