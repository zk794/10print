/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

// cyanFb: \x1b[96m
// cyanB: \x1b[46m
// magentaFb: \x1b[95m
// magentaB: \x1b[45m

const w = process.stdout.columns
const color1 = Math.floor(Math.random() * 8)
const color2 = Math.floor(Math.random() * 8)
let half = Math.floor(w/2)
// let crosses = ['╭', '╮', '╯', '╰']
let crosses = ['▙', '▛', '▜', '▟']
let boxfill = ['▖', '▗', '▘', '▚', '▝', '▞']

function draw () {
  setTimeout(draw, 1000)
  let output = ''

  output += "\x1b[9"+color1+"m" + "\x1b[4+"+color1+"m"
  for (let i = 0; i < half; i++) {
    let r = Math.floor(Math.random() * crosses.length)
    output +=  crosses[r]
  }

  output += "\x1b[9"+color2+"m" + "\x1b[4"+color2+"m"
  for (let i = half; i < w; i++) {
    let r = Math.floor(Math.random() * boxfill.length)
    output +=  boxfill[r]
  }
  console.log(output)

  half += Math.floor(Math.random() * 3) - 1
}

draw()
