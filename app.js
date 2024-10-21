import { playList } from "./playList.js"

const audio = document.getElementById('audio')
const play = document.getElementById('play') 
const pause = document.getElementById('pause')
const forward = document.getElementById('forward') 
const rewind= document.getElementById('rewind') 
const stop = document.getElementById('stop')

// play.addEventListener('click', () => audio.play())

// pause.addEventListener('click', () => audio.pause()) 

// rewind.addEventListener('click', () => audio.currentTime -= 10) 

// forward.addEventListener('click', () => audio.currentTime += 10) 

// stop.addEventListener('click', () => { 
//      audio.pause() 
//      audio.currentTime = 0 
//     })

    window.addEventListener('DOMContentLoaded', makeCard(playList))

    function makeCard(containerPlayer){
        const container = document.createElement('div')
        container.id = 'card'
        container.classList.add('container-player')

        const title = document.createElement('h1')
        title.innerHTML = 'Play Music'

        const contAlbum = document.createElement('div')
        contAlbum.id = 'container-album'
        contAlbum.classList.add('container-album')

        const imgCard = document.createElement('img')
        imgCard.src = containerPlayer.img     
        
        const artistTitle = document.createElement('h2')
        artistTitle.innerHTML = containerPlayer.artist
        artistTitle.classList.add('player-artist')

        const songTitle = document.createElement('h3')
        songTitle.innerHTML = containerPlayer.title
        songTitle.classList.add('player-song')

        const audioControls = document.createElement('div')
        audioControls.id = 'controls'
        audioControls.classList.add('controls')

        const audio = document.createElement('audio');
        audio.className = 'player__audio';
        audio.controls = true;
        audio.id = 'audio';

        const source = document.createElement('source');
        source.src = containerPlayer.song;
        source.type = 'audio/mpeg';
        audio.load()

        const btns = document.createElement('div')
        btns.id = 'player-controls'
        btns.classList.add('player-controls')

        const rewindbButton = document.createElement('i')
        rewindbButton.classList.add('bx-rewind')
        rewindbButton.id ='rewind'
    
        const playButton = document.createElement('i')
        playButton.classList.add('bx-play')
        playButton.id = 'play'
    
        const stopButton = document.createElement('i')
        stopButton.classList.add('bx-rewind')
        stopButton.id = 'stop'
    
        const pauseButton = document.createElement('i')
        pauseButton.classList.add('bx-pause')
        pauseButton.id = 'pause'
    
        const forwardButton = document.createElement('i')
        forwardButton.classList.add('bx-fast-forward')
        forwardButton.id = 'forward'


        container.appendChild(title)
        container.appendChild(contAlbum)
        contAlbum.appendChild(imgCard)
        container.appendChild(audioControls)
        document.querySelector('main').appendChild(container)
    }
