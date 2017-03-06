$(document).ready(function(){
	var scrolltop;
	var timer=300;
	$(window).scroll(function(){

    scrolltop=$(document).scrollTop();//获取页面被吞没的高度值
console.log(scrolltop)
    //下面这个if为结尾动画，copy走(只需要该if判断语句中的值就可以调用public.js中的footer函数了)
     if (scrolltop>=1400) {
      footer();
    }//这个if来判断是否执行结尾动画
    if (scrolltop<=520) {
      twofirst();
    }//这个if来判断是否执行左图右字
     if (scrolltop>=130&&scrolltop<=855) {
      twosecond();
    }//这个if来判断是否执行手风琴动画
    if (scrolltop>=500&&scrolltop<=1300) {
      twothird();
    }//这个if来判断是否执行team团队动画
     if (scrolltop>=920&&scrolltop<=1500) {
      twofours();
    }//这个if来判断是否执行team团队动画






   })//window.scroll函数结束

//左边图右边文字的效果

      twofirst();
    
function twofirst(){
    // window.onload=function(){
    setTimeout(function(){


      if (scrolltop==null||scrolltop<=520) {
  $('.secondarticle>.first>ul>li:eq(0)').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateX(30px)',
       'transition':'all 1s'
    })
    },400*(1+index))
  })
    $('.secondarticle>.first>ul>li:eq(1)').children().each(function(index,obj){
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translatey(-30px)',
       'transition':'all 1s'
    })
    },400*(1+index))
  })
    }
},100)


}//towfirst动画完成


//图片的手风琴效果
$(".secondarticle>.second>ul>li").each(function(index,obj){}).mouseover(function(){
	$(this).stop().animate({'width':'40%'},400).siblings().stop().animate({'width':'15%'},400)
}).mouseout(function(){
	$(".secondarticle>.second>ul>li").stop().animate({'width':'20%'},400)
})
	

	function twosecond(){
    // window.onload=function(){
    
  $('.secondarticle>.second>ul>li').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateX(50px)',
       'transition':'all 1s'
    })
    },400*(1+index))
  })
}//手风琴函数结束


	function twothird(){
    // window.onload=function(){
    setTimeout(function(){
    $('.secondarticle>.third>h2').css({
        opacity:'1',
       'transform':'translateY(0px)',
       'transition':'all 3s'
    })
    },600)
  $('.secondarticle>.third>ul>li').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateX(0px)',
       'transition':'all 1s'
    })
    },400*(1+index))
  })
}//team团队



// //轮播图效果
var lun=$('.secondarticle>.fourth>div>ul')
var len=$('.secondarticle>.fourth>div>ul').children('li').length
var step=0,stop;
stop=setInterval(running,2)
 function running(){
   	if (step<=-1200) {
    	step=0;
     $(lun).css({
     	left:0
     });
     }
     step--
    $(lun).css({
     	left:step+'px'
     });
}
$('.secondarticle>.fourth>div').bind({
	mouseover:function(){clearInterval(stop)},
	mouseout:function(){stop=setInterval(running,2)}
})
//轮播图完成


	function twofours(){
    // window.onload=function(){
    
  $('.fourth h2,.fourth p').each(function(index,obj){
   // console.log(index)
setTimeout(function(){
   $('.fourth h2').stop().css({
        opacity:'1',
       'transform':'translateY(0px) scaleY(1.2) scaleX(.8)',
       'transition':'all 1s'
    })
 },400)
setTimeout(function(){
   $('.fourth p').stop().css({
        opacity:'1',
       'transform':'translateY(0px)',
       'transition':'all 1s'
    })
 },800)
  //    setTimeout(function(){
  //       $(obj).stop().css({
  //       opacity:'1',
  //      'transform':'translateY(50px)',
  //      'transition':'all 1s'
  //   })
  //   },400*(1+index))
  // })
})
}//轮播图渐显动画
	














})//js结束
