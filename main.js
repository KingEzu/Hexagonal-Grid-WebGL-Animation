import Grid1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js'

document.addEventListener('DOMContentLoaded', () => {
  // Create background
  const canvas = document.getElementById('webgl-canvas');
  const bg = Grid1Background(canvas);

  // Button click event
  const button1 = document.getElementById('colors-btn');
  button1.addEventListener('click', () => {
    bg.grid.setColors([
      0xffffff * Math.random(),
      0xffffff * Math.random(),
      0xffffff * Math.random()
    ]);
    bg.grid.light1.color.set(0xffffff * Math.random());
    bg.grid.light1.intensity = 500 + Math.random() * 1000;
    bg.grid.light2.color.set(0xffffff * Math.random());
    bg.grid.light2.intensity = 250 + Math.random() * 250;
  });

  // Apply responsive styles
  document.body.style.margin = '0';
  document.documentElement.style.margin = '0';
  document.body.style.height = '100vh';
  document.documentElement.style.height = '100vh';
  document.body.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0.5) 200%)';

  const app = document.getElementById('app');
  app.style.height = '100%';
  app.style.width = '100%';
  app.style.fontFamily = '"Montserrat", sans-serif';
  app.style.position = 'relative';
  app.style.overflow = 'hidden';

  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.display = 'block';

  const buttons = document.querySelector('.buttons');
  buttons.style.position = 'absolute';
  buttons.style.bottom = '60px';
  buttons.style.width = '100%';
  buttons.style.display = 'flex';
  buttons.style.justifyContent = 'center';
  buttons.style.alignItems = 'center';
  buttons.style.flexWrap = 'wrap';
  buttons.style.gap = '10px';
  buttons.style.zIndex = '2';

  const btn = document.querySelector('button');
  btn.style.fontFamily = '"Montserrat", sans-serif';
  btn.style.background = 'rgba(255, 255, 255, 0.5)';
  btn.style.borderRadius = '5px';
  btn.style.border = '1px solid grey';
  btn.style.padding = '6px 12px';
  btn.style.fontSize = '16px';
  btn.style.cursor = 'pointer';

  const footer = document.querySelector('.footer');
  footer.style.position = 'absolute';
  footer.style.bottom = '1';
  footer.style.textAlign = 'center';
  footer.style.width = '100%';
  footer.style.color = '#abb3de';
  footer.style.fontSize = '14px';
  footer.style.marginTop = '100px';
  footer.style.zIndex = '1';
  footer.style.marginBottom = '1px'; // Optional: tweak for spacing


  // Resize canvas on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
