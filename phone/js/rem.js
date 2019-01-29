(function () {

  var PSD_WIDTH = 750; //.psd width
  function changeRem() {
    var width = document.documentElement.clientWidth;
    if(width > 750){
      width = 750;
    }
    document.documentElement.style.fontSize = width * 100 / PSD_WIDTH + 'px';
    // 设置data-dpr属性，留作的css hack之用 强制设为1
    var docEl = document.documentElement ;
    //docEl.setAttribute('data-dpr', 1);
  }

  changeRem();
  window.addEventListener('resize', function () {
    changeRem();
  })


})();