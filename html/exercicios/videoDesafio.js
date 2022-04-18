const video = document.getElementById('meuVideo')
const playButton = document.querySelector('.botao-play')
const playVideo = document.getElementById('meuVideo')
const volume = document.querySelector('.volume')
const currentTimeElement = document.querySelector('.current')
const durationTimeElement = document.querySelector('.duration')
const progressBar = document.querySelector('.progresso-preenchido')
const progresso = document.querySelector('.progresso')

playButton.addEventListener('click',(e) => {
    if (video.paused) {
        video.play()
        e.target.textContent = '❚❚'
    } else {
        video.pause()
        e.target.textContent = '►'
    }
})

playVideo.addEventListener('click',(e) => {
    if (video.paused) {
        video.play()
        e.target.textContent = '❚❚'
    } else {
        video.pause()
        e.target.textContent = '►'
    }
})


// Volume 
volume.addEventListener('mousemove', (e) => {
    video.volume = e.target.value
})

// Tempo corrente e duração total do tempo do video
const currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60)
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
    let durationMinutes = Math.floor(video.duration / 60)
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds < 10 ? '0'+durationSeconds : durationSeconds}`
}

video.addEventListener('timeupdate', currentTime)


// Barra de progresso
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100
    progressBar.style.width = `${percentage}%`
})

// Clicando na Barra de progresso  
progresso.addEventListener('click', (e) => {
    const progressTime = (e.offsetX / progresso.offsetWidth) * video.duration
    video.currentTime = progressTime
})















/**
 *
function startVideoControl(id){
    const video = document.getElementById(id)
    video.oncontextmenu = () => false

    document.querySelector(`[wm-play=${id}]`).onclick = e => video.play()
    document.querySelector(`[wm-pause=${id}]`).onclick = e => video.pause()
    document.querySelector(`[wm-stop=${id}]`).onclick = e => {
        video.pause()
        video.currentTime = 0}
    }
    // document.querySelector(`[wm-dec=${id}]`).onclick = e => video.playbackRate -= 0.10
    // document.querySelector(`[wm-inc=${id}]`).onclick = e => video.playbackRate += 0.10
    // document.querySelector(`[wm-retroceder=${id}]`).onclick = e => video.currentTime -= 0.10
    // document.querySelector(`[wm-avancar=${id}]`).onclick = e => video.currentTime += 0.10

startVideoControl("meuVideo")
*
**/