// Display current date time in page header
$('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

// Update time every 1 second
setInterval(() => {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000);

// Current time hour parsed into military time to compare easier
let currentTime = parseInt(moment().format('HH'))

// For time travelling
// let currentTime = 14

console.log(currentTime)


// Add bg class vanilla loop
// function hourBg() {
//     // Loop 9 to 5 in military time
//     for (i = 9; i <= 17; i++) {
//         // Resets classes first
//         $(`#${i}`).removeClass('past present future')
//         // Check hour with currentTime, then add class bg
//         if (parseInt($(`#${i}`).attr('id')) < currentTime) {
//             $(`#${i}`).addClass('past')
//         } else if (parseInt($(`#${i}`).attr('id')) === currentTime) {
//             $(`#${i}`).addClass('present')
//         } else {
//             $(`#${i}`).addClass('future')
//         }
//     }
// }
// hourBg()

// Add bg class alternate using .each()
// Using each() runs the if else to every class with description
$('.description').each(function() {
    if (parseInt($(this).attr('id')) < currentTime) {
        $(this).addClass('past')
    } else if (parseInt($(this).attr('id')) === currentTime) {
        $(this).addClass('present')
    } else {
        $(this).addClass('future')
    }
})


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

// Write plans stored in localStorage into boxes vanilla loop
// function lsWrite() {
//     for (let i = 9; i <= 17; i++) {
//         $(`#${i}`).val(localStorage.getItem(`${i}`))
//     }
// }
// lsWrite()


// .each() loop to make description's to their localStorage id number
$('.description').each(function() {
    $(this).val(localStorage.getItem($(this).attr('id')))
    console.log($(this).attr('id'))
})