   

$(document).ready(function(){


//下为滚动的变量
   var ctop = $('.gun').height();
   var top = ctop;
   var scrolltop;
   var time=1000;//first中的延迟
   var timer=400;//延迟时间


$(window).scroll(function(){

    scrolltop=$(document).scrollTop();//获取页面被吞没的高度值
console.log(scrolltop)
    //下面这个if为结尾动画，copy走(只需要该if判断语句中的值就可以调用public.js中的footer函数了)
     if (scrolltop>=2750) {
      footer();
    }//这个if来判断是否执行结尾动画
    if (scrolltop<=350) {
      firstanimate();
     }//这个if来判断是否执行第一个动画
    if (scrolltop>=300&&scrolltop<=1140){
            twoanimate()
       }//这个if来判断是否执行第二个动画
    if (scrolltop>=840&&scrolltop<=1400) {
      threefirst();
    }//这个if来判断是否执行第三个的第一个动画
     if (scrolltop>=1000&&scrolltop<=1900) {
      threesecond();
    }//这个if来判断是否执行第三个的第二个动画（第一个三图合并）
     if (scrolltop>=1450&&scrolltop<=2300) {
      threethird();
    }//这个if来判断是否执行第三个的第三个动画（第二个三图合并）
      if (scrolltop>=2050&&scrolltop<=2660) {
      fouranimate();
    }//这个if来判断是否执行第四个的标题和p标签
     if (scrolltop>=2250&&scrolltop<=2860) {
      fourfirst();
    }//这个if来判断是否执行第四个的第一排图片
     if (scrolltop>=2350&&scrolltop<=3080) {
      foursecond();
    }//这个if来判断是否执行第四个的第二排图片

});//window.scroll函数完成


//中间滚动的动画

   $('.gun>li').each(function(index,obj){
     $(obj).css({top:top});
     top-=ctop; 
 });
     //初始化
     top = ctop;
     setInterval(function(){
      $('.gun>li').each(function(index,obj){
          if(parseInt($(obj).css('top'))== -ctop){
              $(obj).css({top:ctop*($('.gun>li').length-1)});
          }
          $(obj).animate({top:"-="+ctop+"px"},1000);
      })
  },1500)//中间的动来动去的东西


//下面来判断第一个界面的动画

     
 firstanimate();
  function firstanimate(){ 
    setTimeout(function(){
      if (scrolltop==null||scrolltop<=350) {
       setTimeout(first,1000)
       setTimeout(second,1300)
       setTimeout(threed,1600)
       setTimeout(fours,1900)
       function first(){
         $('.content h1').stop().animate({
            'opacity':'1',
            'marginTop':'0px'
        },time)

     }
     function second(){
        $('.content .gun').stop().animate({
            'opacity':'1',
            'marginTop':'0px'
        },time)
    }
    function threed(){
        $('.content p').stop().animate({
            'opacity':'1',
            'marginTop':'20px'
        },time)
    }
    function fours(){
        $('.content a').stop().animate({
            'opacity':'1',
            'marginTop':'0px'
        },time)
    }
//以上为第一个四个动画
}//第三个if循环，判断页面是否为最上面
},100)//给延时动画然后判断scrollTop是否有值。当在最上面的时候top为null。当刚开始加载的时候top也为null，之后才会计算出所在的值。所以做一个延时函数，当在最上面的时候有延时top的值依旧是null但下面的值在经过延时之后会计算出是有值的，所以经过延时之后就不进入if循环，原理就是当初始加载页面和执行onscroll函数（比如从下往上滑动）的时候，判断是否为null（刚执行的时候肯定是null，然后经过延迟之后下面的就不是null而是具体数值了，而最上面一直不是具体数值）。所以再最上面的还是会进入scrolltop==null的if循环而下面的时候不会
    //总共有三个if循环，第一个在scroll函数的时候，判断从下往上滚动的时候是否执行if语句。第二个在页面上，在加载页面的时候判断是否执行if语句。第三个在函数里，判断经过 延迟之后是否是在初始位置（在初始位置的话scrolltop一直==null，而不再初始位置的时候刚开始为null，然后马上会计算出具体数值）

}  //firstanimate结束括号



//下面来判断第二个界面的动画
 function twoanimate(){ 
     setTimeout(function(){
        $('.twoleft').stop().animate({
            'opacity':'1',
            'marginLeft':'130px'
        },500)
    },500);
  setTimeout(function(){
    $('.tworight').stop().animate({
        opacity:'1',
        padding:'0px 100px 0 0'
    },500) 
},500)
      
  }

//下面来判断第三个的标题和第一个段落的
   function threefirst(){ 
     setTimeout(function(){
        $('.mainthree>h2').stop().animate({
            'opacity':'.8',
            'marginTop':'5px'
        },500)
    },400);
  setTimeout(function(){
    $('.mainthree>p').stop().animate({
        opacity:'1',
       'paddingTop':'20px'
    },500) 
},800)
      
  }

//第三个的中间的动画（第一个三图并列）
  function threesecond(){

    setTimeout(function(){
        $('.a').stop().css({
        opacity:'1',
       'transform':'translateX(30px)',
       'transition':'all 1s'
    })
    },200)
    setTimeout(function(){
        $('.b').stop().css({
        opacity:'1',
       'transform':'translateX(30px)',
       'transition':'all 1s'
    })
    },400)
    setTimeout(function(){
        $('.c').stop().css({
        opacity:'1',
       'transform':'translateX(30px)',
       'transition':'all 1s'
    })
    },600)     
}

//第三个的最后一个动画
  function threethird(){
    setTimeout(function(){
        $('.d').stop().css({
        opacity:'1',
       'transform':'translateX(30px)',
       'transition':'all 1s'
    })
    },800)
    setTimeout(function(){
        $('.e').stop().css({
        opacity:'1',
       'transform':'translateX(30px)',
       'transition':'all 1s'
    })
    },1000)
    setTimeout(function(){
        $('.f').stop().css({
        opacity:'1',
       'transform':'translateX(30px)',
       'transition':'all 1s'
    })
    },1200)     
}
  //第三个动画完成



//下面为第三个大图点击的时候出轮播图的效果


$('.threefirst>li ul>li>a:even').each(function(index,obj){
console.log(index)
      var str=''; 
     $(obj).click(function(){            
       str='<img src='+'./images/index1/item-'+(index+1)+'.jpg>';//在不点击左右键的时候让图片随点击而切换
 var ina;
 ina=index;


//点击左边
$('.ptgd>ul>li:eq(0)>p').click(function(){
        // ina=index;
        $('.ptgd img').remove();
            console.log(ina)
            ina--;
            if (ina<0) {
              ina=5;
            }
            $('.ptgd img').css({
              display:'none'
            })
          www='<img src='+'./images/index1/item-'+(ina+1)+'.jpg>';
          $('.ptgd').prepend(www);
          $('.ptgd img').css({
            width:'600px',
            height:'500px',
            left:'350px',
            top:'100px'
         })
         })//左键点击完成


     $('.ptgd>ul>li:eq(1)>p').click(function(){
            console.log(ina)
        $('.ptgd img').remove();

            // ina=index;
            ina++;
            if (ina>5) {
              ina=0;
            }
            $('.ptgd img').css({
              display:'none'
            })
          www='<img src='+'./images/index1/item-'+(ina+1)+'.jpg>';
          $('.ptgd').prepend(www);
          $('.ptgd img').css({
            width:'600px',
            height:'500px',
            left:'350px',
            top:'100px'
         })
         })//右键点击完成




      $('.ptgd').css({display:'block'}).append(str);//让蒙版显示出来
      $('html').css({overflow:'hidden'});//让滚动条消失
      
      var wei=(index+1)*340;
      $('.ptgd img').css({
        width:'2px',
        height:'2px',
        left:wei+'px',
        top:'200px'
      }).animate({
        width:'600px',
        height:'500px',
        left:'350px',
        top:'100px'
      },500)
      setTimeout(function(){
      $('.ptgd>ul>li>b').css({
        opacity:'1'
      })
     },1000)
       
     })
})

$('.threesecond>li ul>li>a:even').each(function(index,obj){
     var str=''; 
     $(obj).click(function(){
      
      console.log(str)
       str='<img src='+'./images/index1/item-'+(index+4)+'.jpg>';
      $('.ptgd').css({display:'block'}).prepend(str);
      $('html').css({overflow:'hidden'});
      
      var zhi=(index+1)*340;
     $('.ptgd img').css({
        width:'2px',
        height:'2px',
        left:zhi+'px',
        top:'400px'
      }).animate({
        width:'600px',
        height:'500px',
        left:'350px',
        top:'100px'
      },500)     
     setTimeout(function(){
      $('.ptgd>ul>li>b').css({
        opacity:'1'
      })
     },1000)

     })
     
})
$('.ptgd>ul>li>b').click(function(){
 $('.ptgd').css({display:'none'});
 $('.ptgd img').remove();
 $('.ptgd>ul>li>b').css({opacity:'0'})
 $('html').css({overflow:'auto'});
})//点击消失




//轮播图完成（未完成）




























//第四个的标题和p标签
  function fouranimate(){
    // window.onload=function(){
    setTimeout(function(){
        $('.title1').stop().css({
        opacity:'1',
       'transform':'translateY(30px)  scaleY(1.2) scaleX(.8)',
       'transition':'all 1s'
    })
    },400)
    setTimeout(function(){
        $('.article1').stop().css({
        opacity:'1',
       'transform':'translateY(30px)',
       'transition':'all 1s'
    })
    },800) 
}



function fourfirst(){
    // window.onload=function(){
    
  $('.fourfirst>li').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateY(-30px)',
       'transition':'all 1s'
    })
    },timer*(1+index))
  })
}
//倒数第二个第二排的蓝色圆圆的图
function foursecond(){    
  $('.foursecond>li').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateY(30px)',
       'transition':'all 1s'
    })
    },timer*(3+index))
  })
}



























})

