var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
canvas.width = 1000
canvas.height = 500
var ball = {
    x: 512,
    y: 100,
    r: 20,
    s: -2,
    g: 2,
    vx: -4,
    vy: 4,
    color: '#005588'
}
setInterval(function () {
    render(ctx)
    updata()
}, 50)


function render(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = ball.color
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fill()
}

function updata() {
    ball.x += ball.vx
    ball.y += ball.vy
    ball.vy += ball.g
    // ball.vx+=ball.s
    if (ball.y >= 500 - ball.r) {
        ball.y = 500 - ball.r
        ball.vy = -ball.vy * .5
    }
    if (ball.y <= 0 + ball.r) {
        ball.y = 0 + ball.r
        ball.vy = -ball.vy
    }
    if (ball.x >= 1000 - ball.r) {
        ball.x = 1000 - ball.r
        ball.vx = -ball.vx
    }
    if (ball.x <= 0 + ball.r) {
        ball.x = 0 + ball.r
        ball.vx = -ball.vx
    }
}