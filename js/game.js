document.addEventListener('DOMContentLoaded', () => {
    const monkey = document.querySelector('.dino')
    const grid = document.querySelector('.grid')
    const alert = document.getElementById('alert')

    let gravity = 0.9
    let isJumping = false
    let isGameOver = false

    function control(e) {
        if (e.code === "Space") {
            console.log("espaco")
        }
    }


    document.addEventListener('keydown', control)





})