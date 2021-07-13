
var days = document.getElementsByClassName("number")[0]
var hours = document.getElementsByClassName("number")[1]
var minutes = document.getElementsByClassName("number")[2]
var seconds = document.getElementsByClassName("number")[3]

var box_element = document.getElementsByClassName("box--animation")

/* -------------------------------- Animation ------------------------------- */
function animation(target, index) {
  // setTimeout(() => {
  //   target.innerHTML = parseInt(target.textContent) - 1
  // }, 500)

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
}
/* ---------------------------- Seconds Animation --------------------------- */
// Box Animation for seconds
setInterval(() => {
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

    // Number Animation for seconds
    setTimeout(() => {
      seconds.animate([
        {
          transform: "rotateX(90deg)", offset: 0.5
        },
      ], {
        duration: 1000,
      })

    }, 500)

    // Seconds increment
    if (seconds.innerHTML < 10) {
      seconds.innerHTML = "0" + seconds.innerHTML
    }

    /* ------------------------------ End condition ----------------------------- */
    if (hours.innerHTML == "00" && minutes.innerHTML == "00" && seconds.innerHTML == "00" && days.innerHTML == "00") {
      clearInterval(my_var)
    }

    else if (seconds.innerHTML == "00") {


      // Days
      if ((hours.innerHTML == "00" && minutes.innerHTML == "00" && seconds.innerHTML == "00")) {
        hours.innerHTML = 24
        setTimeout(() => {

          days.innerHTML = parseInt(days.textContent) - 1
        }, 500)
        animation(days, 0)
        if (days.innerHTML < 10) {
          days.innerHTML = "0" + days.innerHTML
        }
      }

      // Hours
      if (minutes.innerHTML == "00") {
        minutes.innerHTML = '03'
        // hours.innerHTML = parseInt(hours.textContent) - 1
        setTimeout(() => {

          hours.innerHTML = parseInt(days.textContent) - 1
        }, 500)
        animation(hours, 1)

        if (hours.innerHTML < 10) {
          hours.innerHTML = "0" + hours.innerHTML
        }
      }

      // Minutes
      seconds.innerHTML = 5
      // minutes.innerHTML = parseInt(minutes.textContent - 1)
      setTimeout(() => {

        minutes.innerHTML = parseInt(days.textContent) - 1
      }, 500)
      animation(minutes, 2)

      if (parseInt(minutes.textContent) < 10) {
        minutes.innerHTML = "0" + minutes.innerHTML
      }

    }

  }, 1000)

}


; Control + Shift + Win + F1
  ^ +#F1:: SendInput { Media_Play_Pause }

; Control + Shift + Win + F2
  ^ +#F2:: SendInput { Media_Prev }

; Control + Shift + Win + F3
  ^ +#F3:: SendInput { Media_Next }

; Control + Shift + Win + F4
F4:: SaveSongToSpotifyLibrary()

addIcon(name){
  saveToYourLibraryIcon = % A_WorkingDir %\apps\SpotifyController\% name %
    ImageSearch FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, % saveToYourLibraryIcon %
            if (ErrorLevel = 0) {
    Click % FoundX %, % FoundY %
}
}

SaveSongToSpotifyLibrary() {
  spotify:= "ahk_exe spotify.exe"
  if WinExist(spotify) {
    ; Store starting window ID and mouse position.
    MouseGetPos x, y, startingWinId

      ; Activate Spotify.
        WinActivate % spotify %
        WinWaitActive % spotify %

        saveToYourLibraryIcon = % A_WorkingDir %\apps\SpotifyController\heart.bmp
    ImageSearch FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, % saveToYourLibraryIcon %
        if (ErrorLevel = 0) {
      Click % FoundX %, % FoundY %

        } else if (ErrorLevel = 1) {
      saveToYourLibraryIcon = % A_WorkingDir %\apps\SpotifyController\heart2.bmp
      ImageSearch FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, % saveToYourLibraryIcon %
            if (ErrorLevel = 0) {
        Click % FoundX %, % FoundY %

        } else if (ErrorLevel = 1) {
        saveToYourLibraryIcon = % A_WorkingDir %\apps\SpotifyController\heart3.bmp
        ImageSearch FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, % saveToYourLibraryIcon %
            if (ErrorLevel = 0) {
          Click % FoundX %, % FoundY %

        } else if (ErrorLevel = 1) {
          saveToYourLibraryIcon = % A_WorkingDir %\apps\SpotifyController\heart4.bmp
          ImageSearch FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, % saveToYourLibraryIcon %
            if (ErrorLevel = 0) {
            Click % FoundX %, % FoundY %

        } else if (ErrorLevel = 1) {
            saveToYourLibraryIcon = % A_WorkingDir %\apps\SpotifyController\SaveToYourLibraryIcon.png
            ImageSearch FoundX, FoundY, 160, 1000, 500, A_ScreenHeight, % saveToYourLibraryIcon %
            if (ErrorLevel = 0) {
              Click % FoundX %, % FoundY %

        } else if (ErrorLevel = 1) {
              saveToYourLibraryIcon = % A_WorkingDir %\apps\SpotifyController\heart5.bmp
              ImageSearch FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, % saveToYourLibraryIcon %
            if (ErrorLevel = 0) {
                Click % FoundX %, % FoundY %

        } else if (ErrorLevel = 1) {

                addIcon("heart6.bmp")

              }
            }
          }
        }
      }
    }

    ; Restore original window and mouse position.
    WinActivate ahk_id % startingWinId %
      MouseMove % x %, % y %
    }
}