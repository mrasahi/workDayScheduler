// Display current date time in page header
$('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

// Update time every 1 second
setInterval(() => {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000);

// Current time hour parsed into military time to compare easier
let currentTime = parseInt(moment().format('HH'))

console.log(currentTime)

// Add bg class to each time block
function hourBg() {
    // Loop 9 to 5 in military time
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

// When save button is clicked
$('.saveBtn').click(function() {
    let lsTime = $(this).siblings('.description').attr('id')
    let lsPlan = $(this).siblings('.description').val()
    console.log(lsTime)
    console.log(lsPlan)
    // Store data into localStorage only if text is written
    if (lsPlan !== '') {
        localStorage.setItem(lsTime, lsPlan)
    }
    console.log(localStorage)
})

// Write plans stored in localStorage into boxes loop
function lsWrite() {
    for (let i = 9; i <= 17; i++) {
        $(`#${i}`).val(localStorage.getItem(`${i}`))
    }
}

lsWrite()
