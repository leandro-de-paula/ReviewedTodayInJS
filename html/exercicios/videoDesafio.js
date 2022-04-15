const video = document.getElementById('meuVideo')
const playButton = document.querySelector('.botao-play')
const volume = document.querySelector('.volume')
// const currentTimeElement = querySelector('.corrente')
// const durationTimeElement = querySelector('.duracao')

playButton.addEventListener('click',(e) => {
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