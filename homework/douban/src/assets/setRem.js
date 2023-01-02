let html = document.documentElement;
function setRem() {
  let ui_w = 375;
  let cl_w = document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = (cl_w / ui_w) * 10 + "px";
}

window.addEventListener("onload", setRem);

let timer = null;

window.addEventListener("resize", function () {
  clearTimeout(timer);
  timer = setTimeout(setRem, 200);
});

//     function setRem(){
//     var ui_w = 375;
//     var client_w =
//     document.documentElement.clientWidth||document.body.clientWidth;
    
//     client_w = client_w > 650 ? 650 : client_w;
//     client_w = client_w < 250 ? 250 : client_w;

//     var html_=document.getElementsByTagName('html')[0];
//     html_.style.fontSize=(client_w/ui_w)*10+'px';
//    }
//    var timer=null;
//     window.onresize=function(){
//         clearTimeout(timer);
//         timer=setTimeout(setRem,100);
//     }
//     window.onload=setRem;

