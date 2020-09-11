const helper = {
    x: 1800,
    y: 900
}


helper.random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}


helper.wrapper = document.getElementById('ws-wrapper');


helper.radius = Math.sqrt(helper.x * helper.x + helper.y * helper.y) / 4;


export default helper;

