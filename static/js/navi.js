/*
 * @Author: xiao-jie
 * @Date: 2021-08-16 10:17:17
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-08-16 15:49:07
 * @Description: 
 */
window.addEventListener('DOMContentLoaded', onready)
window.onresize = onready
function onready() {
    let pageHei = window.innerHeight
    let pageWid = window.innerWidth;
    let aside = document.getElementById('main-aside')
    let header = document.getElementById('main-header')
    let footer = document.getElementById('main-footer')
    let main = document.getElementById('main-main')
    aside.style.height = pageHei + 'px'
    header.style.width = pageWid + 'px'
    footer.style.width = pageWid + 'px'
    main.style.height = pageHei - 60 + 'px'
    main.style.marginLeft = aside.style.width
}
