document.addEventListener('DOMContentLoaded',
  () => {

    const drawStar = (x, y, r, n, inset, color) => {
      ctx.save();
      ctx.beginPath();
      ctx.translate(x, y);
      for (var i = 0; i < n; i++) {
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - r);
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (r * inset));
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      ctx.restore();
    }

    const big = document.getElementById("big");
    const small = document.getElementById('small');
    const ctx = big.getContext("2d");
    const bigWidth = big.width;
    drawStar(100, 100, 30, 5, 3, 'red');
    drawStar(bigWidth - 100, 100, 30, 5, 3, 'blue');
    drawStar(100, bigWidth - 100, 30, 5, 3, 'green');
    drawStar(bigWidth - 100, bigWidth - 100, 30, 5, 3, 'yellow');
    drawStar(bigWidth / 2, bigWidth / 2, 30, 5, 3, 'black');
    big.addEventListener('click', (e) => {
      const data = ctx.getImageData(e.layerX, e.layerY, 1, 1).data;
      small.style.background = `rgba(${data[0]},${data[1]},${data[2]},${data[3]})`;
    })
  })
