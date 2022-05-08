const like = document.querySelector('.like>span')
const link = document.querySelector('.link>span>a')
const preve = document.querySelector('.preve>span')
const next = document.querySelector('.next>span')
const stopstart = document.querySelector('.stopstart')
const music = document.querySelector('section>audio ')
const time = document.getElementsByClassName('time')[0]
const dura = document.getElementsByClassName('dura')[0]
const spend = document.getElementsByClassName('spend-time')[0]
const album = document.getElementsByClassName('album')[0]
const track = document.getElementsByClassName('track')[0]
const img = document.getElementById('img')
const _stop =document.getElementById('stop')
const test = document.getElementById('test')



let minutsone, secondone, minutstow, secondtow 
let musicIndex = 0
let flag =0
let playing = true




const traks= [ 'audio/Shahab Mozaffari - Delbarito Kamtaresh Kon (320).mp3','audio/Ibrahim Tatlises - Haydi Soyle 128.mp3',]
const Name =['Shahab Mozaffari','Ibrahim Tatlises']
const NameSong =['Delbarito','Haydi Soyle']
const ImgSong =['img/1.jpg','img/2.jpg']
const srclink =['https://music-fa.com/download-song/3120/','https://www.youtube.com/watch?v=k72yN-FMvgM']


function stopplay(){
   if(playing){
      _stop.setAttribute('class', 'fa fa-pause')
      music.play()
      playing = false
   }else{
      _stop.setAttribute('class', 'fa fa-play')
      music.pause()
      playing= true
   }
}
stopstart.addEventListener('click', stopplay)
music.addEventListener('ended' , nexttrack)

function nexttrack () {
   musicIndex++
   if(  musicIndex ==  traks.length  ){
      musicIndex = 0;
   }
   if(flag > 0){
      like.classList.toggle('fav')
   }
   music.src = traks[musicIndex]
   img.setAttribute('src',''+ImgSong[musicIndex]+'')
   album.innerHTML=''+Name[musicIndex]+''
   track.innerHTML=''+NameSong[musicIndex]+''
   link.setAttribute('href',''+srclink[musicIndex]+'')
   playing = true
   stopplay()
}
next.addEventListener('click', nexttrack)
function prevetrack () {
   musicIndex--
   if(  musicIndex < 0  ){
      musicIndex = traks.length -1
   }
   if(flag > 0){
      like.classList.toggle('fav')
   }
   music.src = traks[musicIndex]
   img.setAttribute('src',''+ImgSong[musicIndex]+'')
   album.innerHTML=''+Name[musicIndex]+''
   track.innerHTML=''+NameSong[musicIndex]+''
   link.setAttribute('href',''+srclink[musicIndex]+'')
   playing = true
   stopplay()
}
preve.addEventListener('click', prevetrack)


setInterval(Bar, 500);

function Bar() {
   test.max = music.duration;
   test.value =music.currentTime;
   dura.textContent = formatTime(music.currentTime);
   time.textContent = formatTime(music.duration);
 }
 function formatTime(sec){
   let minutes = Math.floor(sec / 60);
   let seconds = Math.floor(sec - minutes * 60);
   if (seconds < 10) {
     seconds = `0${seconds}`;
   }
   return `${minutes}:${seconds}`;
 }
 function changBar() {
    if(playing){
      music.currentTime == 0;
    }else{
      music.currentTime = test.value;
    }
  
 }
 test.addEventListener('click',changBar)

like.addEventListener('click', function () {
   flag++
   this.classList.toggle('fav')
})
