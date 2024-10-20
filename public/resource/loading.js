/**
 * 初始化加载效果的svg格式logo
 * @param {string} id - 元素id
 */
function initSvgLogo(id) {
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80.68 82.96">
  <defs>
    <linearGradient id="color_184" y1="41.48" x2="80.68" y2="41.48" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4fc9fa"/>
      <stop offset="0.5" stop-color="#9388ff"/>
    </linearGradient>
  </defs>
  <g>
    <path d="M34.3,22.2a6.41,6.41,0,1,0,5.87-6.9A6.41,6.41,0,0,0,34.3,22.2Z" fill="#9388ff"/>
    <path d="M73,16.5,48,2a15.36,15.36,0,0,0-15.3,0L7.65,16.5A15.33,15.33,0,0,0,0,29.75V58.66A15.33,15.33,0,0,0,7.65,71.91l12.72,7.34h0L26.79,83l0,0L44,69.63h0c1.15-.79,11.39-7.87,15.76-13.92,1.52-2.11,3.82-5.29,3.82-9.87a14.19,14.19,0,0,0-14.37-14c-3.34,0-6.24,1.94-8.53,4.12-2.29-2.18-5.19-4.12-8.53-4.12a14.19,14.19,0,0,0-14.37,14c0,4.58,2.3,7.76,3.82,9.87a51.73,51.73,0,0,0,8.79,8.69l5.54-4.26c-3.33-2.62-7-5.8-8.83-8.4-1.25-1.73-2.54-3.52-2.54-5.9a7.41,7.41,0,0,1,7.59-7.2c1,0,2.81.78,5.93,4.5l2.6,3.1,2.6-3.1c3.12-3.72,5-4.5,5.93-4.5a7.41,7.41,0,0,1,7.59,7.2c0,2.39-1.29,4.17-2.54,5.9a35.58,35.58,0,0,1-5.12,5.32h0l-.18.14c-.45.39-.9.78-1.36,1.16-.8.66-1.74,1.42-2.82,2.27-.88.69-1.74,1.34-2.53,1.91h0l-7.11,5.51h0l-1,.79c-2.79,2.12-5.54,4.2-7.87,6L11,66a8.54,8.54,0,0,1-4.26-7.38V29.75A8.55,8.55,0,0,1,11,22.37l25-14.45a8.53,8.53,0,0,1,8.52,0l25,14.45a8.55,8.55,0,0,1,4.26,7.38V58.66A8.54,8.54,0,0,1,69.64,66L54.35,74.86l-5-3.61L43.8,75.6l4.12,3h0l6,4.35,0,0L73,71.91a15.33,15.33,0,0,0,7.65-13.25V29.75A15.33,15.33,0,0,0,73,16.5Z" style="fill:url(#color_184)"/>
  </g>
</svg>`;
  const appEl = document.querySelector(id);
  const div = document.createElement('div');
  div.innerHTML = svgStr;
  if (appEl) {
    appEl.appendChild(div);
  }
}

function addThemeColorCssVars() {
  const themeColor = '#409EFF';
  const cssVars = `--primary-color: ${themeColor}`;
  document.documentElement.style.cssText = cssVars;
}

addThemeColorCssVars();

initSvgLogo('#loadingLogo');
