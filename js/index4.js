$(document).ready(function(){
	var scrolltop;
	// var timer=300;
	$(window).scroll(function(){

    scrolltop=$(document).scrollTop();//获取页面被吞没的高度值
console.log(scrolltop)
    //下面这个if为结尾动画，copy走(只需要该if判断语句中的值就可以调用public.js中的footer函数了)
     if (scrolltop>=150) {
      footer();
    }//这个if来判断是否执行结尾动画
     if (scrolltop<=333) {
      main();
    }//这个if来判断是否执行表单动画


    })//window.scroll结束

  

  $('.fourzero').children().css({
          opacity:'0',
          transform:'translateY(-50px)',
  })
  main();
  function main(){
    setTimeout(function(){

    if (scrolltop==null||scrolltop<=333) {
  $('.fourzero').children().each(function(index,obj){
      setTimeout(function(){ 
        $(obj).css({
          opacity:'1',
          transform:'translateY(0px)',
          transition:'all 1s'
        })
      },300*(index+1))
      
  })
}
    },100)


  }



})//jq结束