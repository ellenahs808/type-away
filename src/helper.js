// const helper = {
//     ww: window.innerWidth,
//     wh: window.innerHeight,
// };

// helper.random = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
// };

// helper.wrapper = document.getElementById("ws-wrapper");

// // diagonal distance of view for spawn area
// helper.radius = Math.sqrt(helper.ww * helper.ww + helper.wh * helper.wh) / 4;



// export default helper;


class Helper {
  constructor(ww, wh) {
    this.ww = window.innerWidth;
    this.wh = window.innerHeight;
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  wrapper() {
      document.getElementById("ws-wrapper");
  }

  radius() {
      Math.sqrt(helper.ww * helper.ww + helper.wh * helper.wh) / 4;
  } 
}


export default helper;