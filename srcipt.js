const slider = document.querySelector(".services__card-container")
var mouseDown = false
var startX, scrollLeft

let startDragging = function (e) {
  mouseDown = true
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
}
let stopDragging = function (e) {
  mouseDown = false
}

slider.addEventListener("mousemove", (e) => {
  e.preventDefault()
  if (!mouseDown) {
    return
  }
  console.log("mousedown")
  const x = e.pageX - slider.offsetLeft
  const scroll = x - startX
  slider.scrollLeft = scrollLeft - scroll
})

slider.addEventListener("mousedown", startDragging, false)
slider.addEventListener("mouseup", stopDragging, false)
