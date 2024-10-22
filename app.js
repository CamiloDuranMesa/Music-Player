import { playList } from "./playList.js";
window.addEventListener('DOMContentLoaded', madeSongs);

let currentIndex = 0;

function makeSong(song) {
    const container = document.createElement('div');
    container.id = 'container-player';
    container.classList.add('container-player');

    const title = document.createElement('h1');
    title.innerText = "Play Music";

    const contAlbum = document.createElement('div');
    contAlbum.id = 'controls';
    contAlbum.classList.add('container-album');

    const Btns = document.createElement('div');
    Btns.id = 'player_controls';
    Btns.classList.add('player_controls');

    const contBtns = document.createElement('div');
    contBtns.classList.add("player_controls");

    const imgCard = document.createElement('img');
    imgCard.src = song.img;

    const artistTitle = document.createElement('h2');
    artistTitle.classList.add('player__artist');
    artistTitle.innerHTML = song.artist;

    const songTitle = document.createElement('h3');
    songTitle.classList.add('player__song');
    songTitle.innerHTML = song.title;

    const audio = document.createElement('audio');
    audio.classList.add('player__audio');
    audio.controls = true;
    audio.id = 'audio';

    const source = document.createElement('source');
    source.src = song.song; 

    // Corregir id de los botones para evitar conflicto
    const forward = document.createElement('i');
    forward.classList.add('bx', 'bx-arrow-to-right');
    forward.id = 'TenMore-forward';

    const rewind = document.createElement('i');
    rewind.classList.add('bx', 'bx-arrow-to-left');
    rewind.id = 'TenLess-rewind';

    const backBtn = document.createElement('i');
    backBtn.classList.add('bx', 'bx-rewind');
    backBtn.id = 'back';

    const playBtn = document.createElement('i');
    playBtn.classList.add('bx', 'bx-play');
    playBtn.id = 'play';

    const stopBtn = document.createElement('i');
    stopBtn.classList.add('bx', 'bx-stop');
    stopBtn.id = 'stop';

    const pauseBtn = document.createElement('i');
    pauseBtn.classList.add('bx', 'bx-pause');
    pauseBtn.id = 'pause';

    const nextBtn = document.createElement('i');
    nextBtn.classList.add('bx', 'bx-fast-forward');
    nextBtn.id = 'next';

    // Añadir eventos corregidos
    rewind.addEventListener('click', () => {
        audio.currentTime -= 10;
    });

    forward.addEventListener('click', () => {
        audio.currentTime += 10;
    });

    playBtn.addEventListener('click', () => {
        audio.play();
    });

    pauseBtn.addEventListener('click', () => {
        audio.pause();
    });

    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0; 
    });

    

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % playList.length; 
        loadSong(playList[currentIndex]);
    });

    backBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + playList.length) % playList.length; 
        loadSong(playList[currentIndex]);
    });

    // Actualizar appendChild con las variables correctas
    container.appendChild(title);
    container.appendChild(contAlbum);
    contAlbum.appendChild(imgCard);
    contAlbum.appendChild(artistTitle);
    contAlbum.appendChild(songTitle);
    container.appendChild(Btns);
    Btns.appendChild(audio);
    Btns.appendChild(contBtns);
    contBtns.appendChild(backBtn);
    contBtns.appendChild(rewind);
    contBtns.appendChild(playBtn);
    contBtns.appendChild(stopBtn);
    contBtns.appendChild(pauseBtn);
    contBtns.appendChild(forward);
    contBtns.appendChild(nextBtn);
    audio.appendChild(source);
    audio.load();

    document.querySelector('main').appendChild(container);
}

function loadSong(song) {
    const imgCard = document.querySelector('.container-player img');
    const artistTitle = document.querySelector('.player__artist');
    const songTitle = document.querySelector('.player__song');
    const audio = document.getElementById('audio');

    imgCard.src = song.img; 
    artistTitle.innerHTML = song.artist; 
    songTitle.innerHTML = song.title;
    audio.src = song.song; 
    audio.load(); 
    audio.play(); 
}

function madeSongs() {
    makeSong(playList[currentIndex]); 
}
