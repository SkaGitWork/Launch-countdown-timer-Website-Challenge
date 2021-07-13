var days = document.getElementsByClassName("number")[0]
var hours = document.getElementsByClassName("number")[1]
var minutes = document.getElementsByClassName("number")[2]
var seconds = document.getElementsByClassName("number")[3]

var box_element = document.getElementsByClassName("box--animation")
var shadow_element = document.getElementsByClassName("shadow")

/* -------------------------------- Animation ------------------------------- */
function animation(target, index) {
  setTimeout(() => {
    if (parseInt(target.textContent) == '00') {
      if (target == hours) {
        target.innerHTML = "23"
        console.log(target)
      } else if (target == minutes) {
        target.innerHTML = "59"
      }

    } else {

      target.innerHTML = parseInt(target.textContent) - 1
    }


    if (target.innerHTML < 10) {
      target.innerHTML = "0" + target.innerHTML
    }
  }, 500)

  // Box Animation
  box_element[index].animate([
    {
      transform: "rotateX(360deg)"
    },
  ], {
    duration: 2000,
  })


  // Number Animation
  target.animate([
    {
      transform: "rotateX(360deg)"
    },
  ], {
    duration: 2000,
  })

  // Hide Number
  setTimeout(() => {
    target.style.display = "none"
  }, 500)
  setTimeout(() => {
    target.style.display = "block"
  }, 1500)

  // Shadow animation
  shadow_element[index].animate([
    {
      height: "100%", offset: 0.5
    },
  ], {
    duration: 2000,
  })
}

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