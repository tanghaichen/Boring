$(document).ready(function(){
	var scrolltop;
	$(window).scroll(function(){

    scrolltop=$(document).scrollTop();//获取页面被吞没的高度值
console.log(scrolltop)
    //下面这个if为结尾动画，copy走(只需要该if判断语句中的值就可以调用public.js中的footer函数了)
     if (scrolltop>=2565) {
      footer();
    }//这个if来判断是否执行结尾动画
})//window.scroll结束
// var bantime=1500;
// var len=0;

// setTimeout(banner,bantime)
// function banner(){
// len-=1000;
// $('.sixbanner ul').animate({
// 	left:len+'px'
// },500)
// if (len<=-1000) {
//   $('.sixbanner ul li:eq(0)').clone(true).appendTo('.sixbanner ul')
//   $('.sixbanner ul li:eq(0)').remove();
//  $('.sixbanner ul').css({
// 	left:0
// })
//  len=0;
// }

 





// setTimeout(banner,bantime)
// }


$('.sixbanner ul li:eq(0)').clone(true).appendTo('.sixbanner>ul');
var len=$('.sixbanner ul li').length;
var lis=0,ico=0,stop,step=0;
var time=1500;
var timer=500;
// var imgs=$('.sixbanner ul li img:eq(0)');
var uls=document.getElementsByTagName('ul')[0];
var wid=1000;
for(var i=0;i<len-1;i++){
	$('.icon ol').append('<li>'+(i+1)+'</li>');
}

$('.icon li:eq(0)').addClass('orange');
$('.sixbanner ul').css('width',len*wid+'px');
stop=setInterval(running,time);

function running(){
	if (step>=len-1) {
		step=0;
		$('.sixbanner ul').css({
			left:0
		});
	}
	step++;
	$('.sixbanner ul').animate({
		left:-step*wid
	},timer);
	ico++;
	if (ico==len-1) {
		ico=0;
	}
	$('.icon li').eq(ico).addClass('orange').siblings().removeClass('orange');
console.log(ico+'||'+step)
}//running结束

$('.sixbanner').hover(function(){
	clearInterval(stop);
},function(){
	stop=setInterval(running,time)
})

$('ol li').click(function(){
	index=$(this).index();
	// console.log(index)
	$(this).addClass('orange').siblings().removeClass('orange');
	$('.sixbanner ul').stop().animate({left:-index*wid});
	if (index==0) {
		step=len-1;
		ico=index;
	}else{
		step=index;
		ico=index;
	}
})
$('.right').click(function(){
	ico++;
	if (ico==len-1) {
		ico=0;
	}
	$('.icon li').eq(ico).addClass('orange').siblings().removeClass('orange');
	if (step>=len-1) {
		step=0;
		$('.sixbanner ul').css({
			left:0
		});
	}
		step++;
	if (uls.style.left=='-4000px') {
		uls.style.left=0;
		step=1;
	}
	$('.sixbanner ul').animate({
		left:-step*wid
	},timer);
})
$('.left').click(function(){
	if (true) {}
	ico--;
	if (ico==-1) {
		ico=len-2;
	}
	// console.log(ico)
	$('.icon li').eq(ico).addClass('orange').siblings().removeClass('orange');

	if (step==0) {
		step=len-1;
		$('.sixbanner ul').css({
			'left':"-3000px"
		});
	}
		step--;
	// if (uls.style.left==0) {
	// 	uls.style.left='-3000px';
	// 	step=len-1;
	// }
	$('.sixbanner ul').animate({
		left:-step*wid
	},timer);
})

//放上鼠标之后显示耳朵



$('.sixbanner').mousemove(function(event){
  var event=event||window.event;
  console.log(event.pageX)
  if (event.pageX<=575) {
  	$('.left').css({
  		opacity:'1',
  		transition:'all .5s'
  	})
  }else if(event.pageX>575||event.pageX==null){
  	$('.left').css({
  		opacity:'0'
  	})
  }
if (event.pageX>=775) {
  	$('.right').css({
  		opacity:'1',
  		transition:'all .5s'
  	})
  }else if(event.pageX<775||event.pageX==null){
  	$('.right').css({
  		opacity:'0'
  	})
  }
}).mouseout(function(){
    $('.left,.right').css('opacity','0')
})

// $('.right').mouseover(function(){
// 	$(this).css('opacity','1')
// })






//正则验证
var resna=/^[\u4e00-\u9fa5]{2,4}$/;
var resem=/^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;

var name=$('.sixform input:eq(0)');
var email=$('.sixform input:eq(1)');
var stop,sto,clo,clock;
var yanna=$('.sixform .name');
var yanem=$('.sixform .email');

//名称验证
name.focus(function(){
	clearTimeout(sto)
	yanna.fadeIn();
stop=setInterval(function(){
    if (resna.test(name.val())){
       yanna.html('输入成功'); 
       yanna.css('color','green');
    }else if(name.val()==''){
    	yanna.html('最好写上名字'); 
    	yanna.css('color','blue');
    }else{
    	yanna.html('您的名字不对吧');
    	yanna.css('color','red');
    }
},300)

})

name.blur(function(){
clearInterval(stop)
namf()
function namf(){
yanna.fadeToggle();

sto=setTimeout(namf,500)
}
})
//姓名整体结束

email.focus(function(){
	clearTimeout(clo)
	yanem.fadeIn();
clock=setInterval(function(){
    if (resem.test(email.val())){
       yanem.html('输入正确'); 
       yanem.css('color','green');
    }else if(email.val()==''){
    	yanem.html('我们和您一样讨厌垃圾邮件'); 
    	yanem.css('color','blue');
    }else{
    	yanem.html('格式不正确，请检查');
    	yanem.css('color','red');
    }
},300)

})

email.blur(function(){
clearInterval(clock)
emaf()
function emaf(){
yanem.fadeToggle();

clo=setTimeout(emaf,500)
}
})























})//jq结束