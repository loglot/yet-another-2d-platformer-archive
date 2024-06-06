function drawCircle({ x, y, r }, color = "black", width = 1) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.stroke();
  }
  
  function drawLine(x1, y1, x2, y2, color = "black", width = 1) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  
  function drawArc(x, y, r, a1, a2, color = "black", width = 1) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    
    ctx.beginPath();
    ctx.arc(x, y, r, a1, a2);
    ctx.stroke();
  }
  
  
  
  function render(c1, c2) {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    
    // circles
    drawCircle(c1);
    drawCircle(c2);
  
    // tangents
    const tangents = outerTangents(c1, c2);
    tangents.lines.forEach(
      ([[x1, y1], [x2, y2]]) => drawLine(x1, y1, x2, y2, "rgba(255, 0, 0, 0.5)", 5)
    );
  
    // Arcs
    const [ a1, a2 ] = tangents.angles;
    const from = a2 + a1;
    const to = a1 - a2;
    drawArc(c1.x, c1.y, c1.r, from, to, "rgba(0, 255, 255, 0.5)", 5);
    drawArc(c2.x, c2.y, c2.r, to, from, "rgba(255, 0, 255, 0.5)", 5);
  }
  
  function onChange() {
    const [ x1, y1, r1, x2, y2, r2 ] = inputs.map(el => el.valueAsNumber);
    render({ x: x1, y: y1, r: r1 }, { x: x2, y: y2, r: r2 });
  }
  
  // https://en.wikipedia.org/wiki/Tangent_lines_to_circles#Outer_tangent
  function outerTangents({ x: x1, y: y1, r: r1 }, { x: x2, y: y2, r: r2 }) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dxy = Math.sqrt(dx ** 2 + dy ** 2);
  
    if (dxy <= Math.abs(r2 - r1)) {
      return { lines: [], angles: [] };
    }
  
    const a1 = Math.atan2(dy, dx);
    const a2 = Math.acos((r1 - r2) / dxy);
  
    return {
      lines: [
        [
          [x1 + r1 * Math.cos(a1 + a2), y1 + r1 * Math.sin(a1 + a2)],
          [x2 + r2 * Math.cos(a1 + a2), y2 + r2 * Math.sin(a1 + a2)]
        ],
        [
          [x1 + r1 * Math.cos(a1 - a2), y1 + r1 * Math.sin(a1 - a2)],
          [x2 + r2 * Math.cos(a1 - a2), y2 + r2 * Math.sin(a1 - a2)]
        ]
      ],
      angles: [ a1, a2 ]
    };
  }