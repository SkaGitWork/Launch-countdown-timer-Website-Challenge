var days = document.getElementsByClassName("number")[0]
var hours = document.getElementsByClassName("number")[1]
var minutes = document.getElementsByClassName("number")[2]
var seconds = document.getElementsByClassName("number")[3]

var box_element = document.getElementsByClassName("box--animation")
var shadow_element = document.getElementsByClassName("shadow")

/* -------------------------------- Animation ------------------------------- */
function animation(target, index) {
  setTimeout(() => {
    if (parseInt(target.textContent) == '00'){
      if (target == hours) {
        target.innerHTML = "23"
        console.log(target);
      }else if (target == minutes) {
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

// Exporting variables and functions
export {
  animation, days,
hours,
  minutes,
  seconds,
  box_element,
  shadow_element
}