/*
  Johan Karlsson, 2022
  https://twitter.com/DonKarlssonSan
  MIT License, see Details View
*/

export default class Bouncer {
  constructor(x, y, dir, useRandomRotation) {
    this.x = x
    this.y = y
    this.dir = dir
    this.speed = 1
    if (useRandomRotation) {
      this.angle = Math.random() * Math.PI * 2
      const rotDirection = Math.random() > 0.5 ? 1 : -1
      this.rotSpeed = (Math.random() * 0.1 + 0.01) * rotDirection
    } else {
      this.angle = 0
      this.rotSpeed = 0.09
    }
  }

  move(delta) {
    this.x += Math.cos(this.dir) * delta * this.speed
    this.y += Math.sin(this.dir) * delta * this.speed
    this.angle += this.rotSpeed * delta
    this.speed += 0.01 * delta
  }

  draw() {
    const s = Math.min(w, h) * 0.02
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.angle)
    ctx.fillRect(-s / 2, -s / 20, s, s / 10)
    ctx.restore()
  }
}

let canvas
let ctx
let w, h
let bouncers
let then
let useRandomRotation

function setup() {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')
  resize()
  window.addEventListener('resize', () => {
    resize()
    reset()
  })
  canvas.addEventListener('click', reset)
  reset()
}

function resize() {
  w = canvas.width = window.innerWidth
  h = canvas.height = window.innerHeight
}

export function reset() {
  bouncers = []
  useRandomRotation = Math.random() > 0.5
}

export function addBouncer(angle, r) {
  const x1 = Math.cos(angle) * r + w / 2
  const y1 = Math.sin(angle) * r + h / 2
  const b1 = new Bouncer(x1, y1, angle, useRandomRotation)
  bouncers.push(b1)
}

function clear() {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, w, h)
}

function draw(now) {
  requestAnimationFrame(draw)
  clear()
  ctx.fillStyle = 'black'
  const r = Math.min(w, h) * 0.1
  const angle = now * 0.005

  addBouncer(angle, r)
  addBouncer(-angle, r)

  const delta = (now - then) * 0.1
  bouncers.forEach((b) => {
    b.move(delta)
    b.draw()
  })
  bouncers = bouncers.filter(
    (b) => b.x >= 0 && b.x <= w && b.y >= 0 && b.y <= h
  )

  then = now
}

setup()
draw(performance.now())
