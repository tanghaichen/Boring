$(document).ready(function(){
	var scrolltop;
	$(window).scroll(function(){

    scrolltop=$(document).scrollTop();//获取页面被吞没的高度值
console.log(scrolltop)
    //下面这个if为结尾动画，copy走(只需要该if判断语句中的值就可以调用public.js中的footer函数了)
     if (scrolltop>=1780) {
      footer();
    }//这个if来判断是否执行结尾动画
     if (scrolltop<=730) {
         sevenone();
    }//这个if来判断是否执行第1个动画
     if (scrolltop>=500&&scrolltop<=1300) {
        seventwo();
    }//这个if来判断是否执行第2个动画
      if (scrolltop>=1100&&scrolltop<=1970) {
        seventhree();
    }//这个if来判断是否执行第3个动画
})//windw.scroll结束

//第一个动画

$('.sevenright>div').children().css({
  transform:'translateY(-30px)',
  opacity:'0'
})


sevenone();
function sevenone(){
  setTimeout(function(){
      if (scrolltop==null||scrolltop<=730){

$('.rightone').children().each(function(index,obj){
 setTimeout(function(){
  $(obj).css({
    transform:'translateY(0)',
    opacity:'1',
    transition:'all 1s'
  })
},(index+1)*400)
})
      }
  },100)
}

function seventwo(){
$('.righttwo').children().each(function(index,obj){
 setTimeout(function(){
  $(obj).css({
    transform:'translateY(0)',
    opacity:'1',
    transition:'all 1s'
  })
},(index+1)*400)
})
}

function seventhree(){
$('.rightthree').children().each(function(index,obj){
 setTimeout(function(){
  $(obj).css({
    transform:'translateY(0)',
    opacity:'1',
    transition:'all 1s'
  })
},(index+1)*400)
})
}






















})