// Current time hour in military time to compare easier
let currentTime = parseInt(moment().format('HH'))

console.log(currentTime)

// Add class to each time block
function hourBg() {
    for (i = 9; i <= 17; i++) {
        // Resets classes first
        $(`#${i}`).removeClass('past present future')
        // Check hour with currentTime, then add class bg
        if (parseInt($(`#${i}`).attr('id')) < currentTime) {
            $(`#${i}`).addClass('past')
        } else if (parseInt($(`#${i}`).attr('id')) === currentTime) {
            $(`#${i}`).addClass('present')
        } else {
            $(`#${i}`).addClass('future')
        }
    }
}

hourBg()