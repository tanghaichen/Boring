$(document).ready(function(){
	 var scrolltop;
   $('.threetitle').children().css('opacity','0');
   $('.threearticle>ul').children().css('opacity','0');
	$(window).scroll(function(){
      scrolltop=$(document).scrollTop();//获取页面被吞没的高度值
      console.log(scrolltop)
      //下面这个if为结尾动画，copy走(只需要该if判断语句中的值就可以调用public.js中的footer函数了)
       if (scrolltop>=1390) {
        footer();
       }//这个if来判断是否执行结尾动画
      if (scrolltop<=365) {
            thirdtitle()
       }//这个if来判断是否执行标题
      if (scrolltop==null||scrolltop<=565) {
            thirdartone()
       }//这个if来判断是否执行前两个li
       if (scrolltop>=100&&scrolltop<=765) {
            thirdarttwo()
       }//这个if来判断是否执行后两个个li
       if (scrolltop>=466&&scrolltop<=1050) {
            fourpicone()
       }//这个if来判断是否执行四图的标题
       if (scrolltop>=575&&scrolltop<=1340) {
            fourpictwo()
       }//这个if来判断是否执行四图渐显
       if (scrolltop>=932&&scrolltop<=1510) {
            banner()
       }//这个if来判断是否执行轮播标题


     });//window.scroll结束



thirdtitle()
thirdartone()
function thirdtitle(){
    // window.onload=function(){
    setTimeout(function(){
 if (scrolltop==null||scrolltop<=365) {
    
  $('.threetitle').children().each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'.8',
       'transform':'translateY(30px)',
       'transition':'all 1s'
    })
    },200*(1+index))
  })
}
  },100)
}


function thirdartone(){
    // window.onload=function(){
    setTimeout(function(){
 if (scrolltop==null||scrolltop<=565) {
  $('.threearticle li:eq(0),.threearticle li:eq(1)').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateY(30px)',
       'transition':'all 1s'
    })
    },200*(3+index))
  })
  }
  },100)
}//team团队前两个


function thirdarttwo(){
    // window.onload=function(){
    
  $('.threearticle li:eq(2),.threearticle li:eq(3)').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateY(30px)',
       'transition':'all 1s'
    })
    },200*(5+index))
  })
}//artical后两个



// 点击放大的那个效果
// var hm=document.getElementsByClassName('hm')[0]
// $('.threemain>ul>li').each(function(index,obj){
  // $(obj).mouseenter(function(){
  // $(this).children('.big').css({
    // opacity:'1'
  // })
// })//移入函数结束

/*
$(this).children('.big').click(function(){
    $('.hm').css('display','block');
    $(this).children('.little').html('<img src='+'./images/index1/item-'+(index+1)+'.jpg>')

  })//this.children.big的的点击函数结束部分

  $(obj).mouseleave(function(){
 if (hm.style.display=='block') {
     
      $('.little').children('img').css({
           position:'fixed',
           left:'340px',
           top:'150px',
           width:'450px',
           height:'450px'
      })
    }else{
  $(this).children('.big').css({
    opacity:'0'
  })
  }
})//mouseout的结束
})//li：each的结束
*/



$('.big').each(function(index,obj){
  $('.close').click(function(){
  $('.hm').css({
    opacity:'0',
    zIndex:'-1',
    transition:'all .5s'
  })
 
})
  

$(obj).click(function(){
  var num;
num=index+1;
console.log(num)
  $('.hm').css({
    opacity:'1',
    zIndex:'9999',
    transition:'all .5s'
  })
  $('.pic').html('').append('<img src=./images/index1/item-'+num+'.jpg>');

  $('.left').click(function(){
    // console.log(index)
    num--;
    if (num==0) {
      num=4;
    }
    console.log(num)
  $('.pic').html('').append('<img src=./images/index1/item-'+num+'.jpg>');
  })

 $('.right').click(function(){
    num++;
    if (num==5) {
      num=1;
    }
    console.log(num)
  $('.pic').html('').append('<img src=./images/index1/item-'+num+'.jpg>');
  })



})//obj.click结束
  

})











$('.threemain>h2,.threemain>p').css({
  opacity:'0',
  'transform':'translateY(30px)'
})
  function fourpicone(){
    // window.onload=function(){
    
  $('.threemain>h2,.threemain>p').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateY(0px)',
       'transition':'all 1s'
    })
    },400*(1+index))
  })
}//四图标题

$('.threemain>ul>li').css({
  opacity:'0',
  'transform':'translateX(-50px)'
})
  function fourpictwo(){
    // window.onload=function(){
    
  $('.threemain>ul>li').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateY(0px)',
       'transition':'all 1s'
    })
    },300*(1+index))
  })
}//四图渐显












//轮播图

// //轮播图效果
var lun=$('.threebanner>div>ul')
var len=$('.threebanner>div>ul').children('li').length
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
$('.threebanner>div').bind({
  mouseover:function(){clearInterval(stop)},
  mouseout:function(){stop=setInterval(running,2)}
})
//轮播图完成


  function banner(){
    // window.onload=function(){
    
  $('.threebanner').children().each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateY(50px)',
       'transition':'all 1s'
    })
    },400*(1+index))
  })
}//轮播图渐显动画















});//jq结束