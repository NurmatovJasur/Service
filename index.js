let day = document.querySelector('.day')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')

function timer () { 
    let promotion = new Date(`15 Jan 2025 00:00`)

    let today = new Date()

    let dis = promotion - today

    let d = Math.floor(dis / 1000 / 60 / 60 / 24)
    let h = Math.floor((dis / 1000 / 60 / 60) % 24)
    let m = Math.floor((dis / 1000 / 60) % 60) 
    
    
    day.innerHTML = d
    hours.innerHTML = h
    minutes.innerHTML = m
    setInterval(() => timer(),1000)
}
timer()
