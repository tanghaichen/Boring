$(document).ready(function(){
	var scrolltop;
	$(window).scroll(function(){

    scrolltop=$(document).scrollTop();//获取页面被吞没的高度值
console.log(scrolltop)
    //下面这个if为结尾动画，copy走(只需要该if判断语句中的值就可以调用public.js中的footer函数了)
     if (scrolltop>=670) {
      footer();
    }//这个if来判断是否执行结尾动画
     if (scrolltop<=540) {
      fivetop();
    }//这个if来判断是否执行结尾动画
     if (scrolltop>=135&&scrolltop<=880) {
      fivebottom();
    }//这个if来判断是否执行结尾动画














})//window.scroll结束

$('.fivemain>.fivetop>li').css({
	transform:'translateX(-30px)',
	opacity:'0'
})
$('.fivemain>.fivebottom>li').css({
	transform:'translateX(-30px)',
	opacity:'0'
})
fivetop();
function fivetop(){
	setTimeout(function(){
       if (scrolltop==null||scrolltop<=540){     
  $('.fivemain>.fivetop>li').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateX(0px)',
       'transition':'all .5s'
    })
    },200*(1+index))
  })
    }
	},50)
}
function fivebottom(){
  $('.fivemain>.fivebottom>li').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateX(0px)',
       'transition':'all .5s'
    })
    },200*(4+index))
  })
}






var btn=document.getElementsByClassName('btn');
var heimu=document.getElementsByClassName('mask')[0];
var close=document.getElementsByClassName('close')[0];
var pic=document.getElementsByClassName('pic')[0];
var left=document.getElementsByClassName('left')[0];
var right=document.getElementsByClassName('right')[0];
var num=0;
var parts=document.getElementsByClassName('parts')[0];
var html=document.getElementsByTagName('html')[0];


for(var i=0;i<btn.length;i++){
	btn[i].index=i

	btn[i].onclick=function(){
		html.style.overflow='hidden';
		num=this.index+1;
		heimu.style.opacity='1';
		heimu.style.zIndex='9999';
		pic.innerHTML='<img src=./images/index1/item-'+num+'.jpg>';
		pic.style.opacity='1';

  left.onclick=function(){
  	num--;
  	if (num==0) {
  		num=btn.length;
  	}
  	pic.style.opacity='0';
  	pic.style.left='20%';//0.点击时候渐渐左移渐隐

    setTimeout(function(){//1。500毫秒后消失
      pic.innerHTML='';
      pic.style.display='none';
      setTimeout(function(){//2。10毫秒后到右边，并且插入图片透明
        pic.style.left='36%';
        pic.style.opacity='0';
        pic.style.display='block';
        pic.innerHTML='<img src=./images/index1/item-'+num+'.jpg>';
        setTimeout(function(){//3。500毫秒后让图片显示
           pic.style.left='28%';
           pic.style.opacity='1';
        },200)//3
      },50)//2
    },200);//1


	// setTimeout(function(){
	// pic.innerHTML='<img src=./images/index1/item-'+num+'.jpg>';
	// pic.style.left='28%'
 //  	pic.style.opacity='1';
	// },500)

  }

  right.onclick=function(){
  	num++;
  	if (num==btn.length+1) {
  		num=1;
  	}
  	// background: url(../images/bm.jpg)
  	parts.style.background='url(../images/bm.jpg)'
	pic.style.opacity='0';
  	pic.style.left='36%';//0.点击时候渐渐左移渐隐

    setTimeout(function(){//1。500毫秒后消失
      pic.innerHTML='';
      pic.style.display='none';
      setTimeout(function(){//2。10毫秒后到右边，并且插入图片透明
        pic.style.left='20%';
        pic.style.opacity='0';
        pic.style.display='block';
        pic.innerHTML='<img src=./images/index1/item-'+num+'.jpg>';
        setTimeout(function(){//3。500毫秒后让图片显示
           pic.style.left='28%';
           pic.style.opacity='1';
        },200)//3
      },50)//2
    },200);//1
  }





	}//btn[i]的点击函数结束
}//for循环结束

close.onclick=function(){
	heimu.style.opacity='0';
	heimu.style.zIndex='-1';
	// pic.innerHTML=''
	html.style.overflow='auto';
	pic.style.opacity='0';
}




})//