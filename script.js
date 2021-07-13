import {
  animation, days,
  hours,
  minutes,
  seconds,
  box_element,
  shadow_element
} from '/script_animation.js'

/* ---------------------------- Seconds Animation --------------------------- */
// Box Animation for seconds
var box_animation = setInterval(() => {
  box_element[3].animate([
    {
      transform: "rotateX(360deg)"
    },
  ], {
    duration: 2000,
  })
  

}, 2000)


setTimeout(() => {

  countdown()

}, 500)
/* -------------------------------- CountDown ------------------------------- */
function countdown() {
  var my_var = setInterval(() => {

    seconds.innerHTML = (parseInt(seconds.textContent) - 1)

    shadow_element[3].style = ""


    // Number Animation for seconds
    setTimeout(() => {
      seconds.animate([
        {
          transform: "rotateX(90deg)", offset: 0.5
        },
      ], {
        duration: 1000,
      })
      shadow_element[3].style = "height : 100%"

      // shadow_element.animate([
      //   {
      //     transform: "scaleY(2)", offset: 0.5
      //   },
      // ], {
      //   duration: 1000,
      // })
    }, 500)

    // Seconds increment
    if (seconds.innerHTML < 10) {
      seconds.innerHTML = "0" + seconds.innerHTML
    }

    /* ------------------------------ End condition ----------------------------- */
    if (hours.innerHTML == "00" && minutes.innerHTML == "00" && seconds.innerHTML == "00" && days.innerHTML == "00") {
      clearInterval(my_var)
      clearInterval(box_animation)
    }

    else if (seconds.innerHTML == "0-1") {
      // Days Animation
      if ((hours.innerHTML == "00" && minutes.innerHTML == "00")) {
        animation(days, 0)
      }

      // Hours Animation
      if (minutes.innerHTML == "00") {
        animation(hours, 1)

      }

      // Minutes Animation
      seconds.innerHTML = 59
      animation(minutes, 2)



    }

  }, 1000)

}