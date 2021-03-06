const video = document.querySelector('.video')
const playButton = document.querySelector('.play-button')
const volume = document.querySelector('.volume')
const currentTimeElement = document.querySelector('.current')
const durationTimeElement = document.querySelector('.duration')
const progress = document.querySelector('.video-progress')
const progressBar = document.querySelector('.video-progress-filled')


playButton.addEventListener('click', (e) => {
    if (video.paused) {
        video.play()
        e.target.textContent = '❚❚'
    } else {
        video.pause()
        e.target.textContent = "►"
    }
})

// volume
volume.addEventListener('mousemove', (e) => {
    video.volume = e.target.value
})

// current time and duration
const currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60)
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
    let durationMinutes = Math.floor(video.duration / 60)
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds < 10 ? '0'+durationSeconds : durationSeconds}`
}

video.addEventListener('timeupdate', currentTime)


// Progress Bar
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100
    progressBar.style.width = `${percentage}%`
})

// change progress bar on click
progress.addEventListener('click', (e) => {
    const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = progressTime
})