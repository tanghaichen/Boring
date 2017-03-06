




$(document).ready(function(){
  var scrolltop;
var windowWidth;

$(window).scroll(function(){


    scrolltop=$(document).scrollTop();//获取页面被吞没的高度值
    
 if (scrolltop>=40){
      $('.public-header').stop().animate({

       padding:'10px 10%'
   },200)
  }
  if (scrolltop<=40) {
   $('.public-header').stop().animate({

       padding:'15px 10%'
   },200)   
       
console.log(scrolltop)

}
})//windwo.scroll结束
    var newsi=0;
    var txti=0;
    var txttimer,newstimer;
    var newstitle=['此页面由唐海宸制作','制作匆忙，难免有众多不足之处','欢迎留下批评改正意见','祝大家观赏愉快'];
    var newshref=['./index1.html','./index2.html','./index9.html','./index3.html'];
 shownew();
    function shownew(){
        var endstr='_';
        var hwnewstr=newstitle[newsi];
        var newslink=newshref[newsi];
        if (txti==(hwnewstr.length-1)) {endstr='';}
        if (txti>=hwnewstr.length) {
            clearInterval(txttimer);
            clearInterval(newstimer);
            newsi++;
            if (newsi>=newstitle.length) {
                newsi=0
            }

            newstimer=setInterval(shownew,2500);
            txti=0;
            return;
        }
            clearInterval(txttimer);
            document.getElementById('HotNews').href=newslink;
            document.getElementById('HotNews').innerHTML=hwnewstr.substring(0,txti+1)+endstr;
            txti++;
            txttimer=setInterval(shownew,150);
        }



        //下面为结尾

     
})



// $('.public-footer .item li').css({
//   // transform:'scale(11) translateY(500px)'

// })
var yanshidonghua=400;

function footer(){
// window.onload=function(){    
  $('.public-footer>.item>li').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateY(0px)',
       'transition':'all 1s'
    })
    },yanshidonghua*(1+index))
  })
}


// $(function(){

// wid()
//   function wid(){
//    windowWidth=window.innerWidth;
//     // console.log('宽度'+windowWidth);
//     var ratio=windowWidth/532;
//     var y=.2/(windowWidth-250);
// if (windowWidth<760){
//   $('.public-header .logo').css({
//     display:'none'
//   })
// }else{
//   $('.public-header .logo').css({
//     display:'block'
//   })
// }

// if (windowWidth<550) {
//   $('.public-header .nav').css({
//    transform:'scale('+ratio+')',
//    marginRight:y+'%'
//   })
// }else{
//   $('.public-header .nav').css({
//    transform:'scale(1)',
//    marginRight:'-9%'
//   })
// }
// //导航栏位置


// if (windowWidth>=550) {
//    $('.public-header').css({
//     width:'100%',
//     transition:'all 1s'
//   })
// }else if(windowWidth<550&&windowWidth>=500){
//     $('.public-header').css({
//     width:'580px',
//     transition:'all 1s'
//   })
// }else if (windowWidth<500&&windowWidth>=450) {
//   $('.public-header').css({
//     width:(windowWidth+60)+'px',
//     transition:'all 1s'
//   })
// }else if (windowWidth<450&&windowWidth>=400) {
//   $('.public-header').css({
//     width:'520px',
//     transition:'all 1s'
//   })
// }else if (windowWidth<400&&windowWidth>=355) {
//   $('.public-header').css({
//     width:'495px',
//     transition:'all 1s'
//   })
// }else if (windowWidth<355&&windowWidth>=280) {
//   $('.public-header').css({
//     width:'470px',
//     transition:'all 1s'
//   })
// }
// // else if(windowWidth>=400&&windowWidth<500){
// //     $('.public-header').css({
// //        width:'500px',
// //         transition:'all 1s'
// //      })
// // }else if(windowWidth<400){
// //     $('.public-header').css({
// //        width:windowWidth+'px',
// //         transition:'all 1s'
// //      })
// // }






//     // console.log(ratio)

// setTimeout(wid,500);
//   }





    
 // $(window).onresize=function(){  
                 // changeDivHeight();  

            // } 



// })