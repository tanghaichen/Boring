$(document).ready(function(){
	var scrolltop;
	var timer=300;
	$(window).scroll(function(){

    scrolltop=$(document).scrollTop();//获取页面被吞没的高度值
console.log(scrolltop)
    //下面这个if为结尾动画，copy走(只需要该if判断语句中的值就可以调用public.js中的footer函数了)
     if (scrolltop>=800) {
      footer();
    }//这个if来判断是否执行结尾动画
     if (scrolltop<=730) {
      secondleft();
    }//这个if来判断是否执行表单动画
     if (scrolltop>=410&&scrolltop<=1100) {
      mainthird();
    }//这个if来判断是否执行表单动画


    })//window.scroll语句结束


//表单以及右边图片（未完成，复制下面的即可，如果没有子集则不需要复制）
secondleft();
function secondleft(){
// window.onload=function(){  
setTimeout(function(){
      if (scrolltop==null||scrolltop<=730) {
  $('.mainsecond>li').children().each(function(index,obj){
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateY(30px)',
       'transition':'all 1s'
    })
    },timer*(1+index))
  })
   $('.mainsecond>li:eq(0)>form').children().not('span').each(function(index,obj){
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateY(30px)',
       'transition':'all 1s'
    })
    },timer*(3+index))
  })
}
},100);

}//secondleft函数完成


//四个东西的动画
function mainthird(){
    // window.onload=function(){
    
  $('.mainthird>li').each(function(index,obj){
   // console.log(index)
     setTimeout(function(){
        $(obj).stop().css({
        opacity:'1',
       'transform':'translateX(50px)',
       'transition':'all 1s'
    })
    },400*(1+index))
  })
}

// 三级联动

 var shengdata=[
     {'id':'01',name:'黑龙江'},
     {'id':'02',name:'河北'},
     {'id':'03',name:'山东省'}
     ];
 var shidata=[
       {'pid':'01',names:[{'id':'011',name:'哈尔滨'},{'id':'012',name:'齐齐哈尔'}]
       },
       {'pid':'02',names:[
           {'id':'021',name:'唐山'},
           {'id':'022',name:'保定'}
                     ]
       },
       {'pid':'03',names:[
           {'id':'031',name:'济南'},
           {'id':'032',name:'泰安'}
       ]
       }
       ]
 var qudata=[
    {'pid':'011',names:[{'id':'0111',name:'南岗区'},{'id':'0112',name:'道里区'}]},
    {'pid':'012',names:[{'id':'0121',name:'龙沙区'},{'id':'0122',name:'梅里斯区'}]},
    {'pid':'021',names:[{'id':'0211',name:'迁安'},{'id':'0212',name:'滦县'}]},
    {'pid':'022',names:[{'id':'0221',name:'保定一'},{'id':'0222',name:'保定二'}]},
    {'pid':'031',names:[{'id':'0311',name:'济南一'},{'id':'0312',name:'济南二'}]},
    {'pid':'032',names:[{'id':'0321',name:'泰安一'},{'id':'0322',name:'泰安二'}]},
        ]

$.each(shengdata,function(index,obj){
    $('.sheng').append('<option value='+obj.id+'>'+obj.name+'</option>');
  });

$('.sheng').change(function(){
  $('.shi')[0].length=1;
  $('.qu')[0].length=1;
     var shengval=$(this).val();
     $.each(shidata,function(index,obj){
        if(shengval==obj.pid){
           $.each(obj.names,function(i,o){
             $('.shi').append(' <option value='+o.id+'>'+o.name+'</option>')
           })
        }
     })
})

$('.shi').change(function(){
  $('.qu')[0].length=1;
  var shival=$(this).val();
  $.each(qudata,function(i,o){
    if (shival==o.pid) {
       $.each(o.names,function(index,obj){
        $('.qu').append(' <option>'+obj.name+'</option>')
       })
    }
  })
})



//正则验证
var stop;
var res=/^[\u4e00-\u9fa5]{2,4}$/;
var ipt1=$('form>input:eq(0)')
$(ipt1).focus(function(){
      $('form').children('span:eq(0)').remove();
      $(this).before('<span>请留下您的姓名</span>')
      $('form').children('span:eq(0)').html('')
      stop=setInterval(function(){
      if (res.test(ipt1.val())){ 
        $('form').children('span:eq(0)').css('color','green')
        $('form').children('span:eq(0)').html('输入成功')
      }
      else 
      if(ipt1.val()==''){
        $('form').children('span:eq(0)').css('color','blue')
         $('form').children('span:eq(0)').html('请留下您的姓名☺')
      }
      else{
        $('form').children('span:eq(0)').css('color','red')
         $('form').children('span:eq(0)').html('请输入正确的姓名')
      }
       },300)
}).blur(function(){
  clearInterval(stop)
    $('form').children('span:eq(0)').html('')
  if (res.test(ipt1.val())){
    $('form').children('span:eq(0)').css('color','green')
     $('form').children('span:eq(0)').html('输入成功')
}else if(ipt1.val()==''){
   $('form').children('span:eq(0)').css('color','blue')
   $('form').children('span:eq(0)').html('请输入您的姓名')
}else{
   $('form').children('span:eq(0)').css('color','red')
   $('form').children('span:eq(0)').html('姓名格式不正确')
}
   })//bulr结束符号






var nn=/^[1-9]\d{10}$/;
var ipt2=$('form>input:eq(1)');
var clock;
$(ipt2).focus(function(){
  if (ipt1.val()=='') {
     $('form').children('span:eq(1)').remove();
     $(this).before('<span>请先输入您的姓名</span>')
  }
  if (!ipt1.val()=='') {
      $('form').children('span:eq(1)').remove();
      $(this).before('<span>请输入您的手机号</span>')
      $('form').children('span:eq(1)').html('')
      clock=setInterval(function(){
      if (nn.test(ipt2.val())){ 
        $('form').children('span:eq(1)').css('color','green')
        $('form').children('span:eq(1)').html('手机号输入成功')
      }
      else 
      if(ipt2.val()==''){
        $('form').children('span:eq(1)').css('color','blue')
         $('form').children('span:eq(1)').html('请输入您的手机号☺')
      }
      else{
        $('form').children('span:eq(1)').css('color','red')
         $('form').children('span:eq(1)').html('手机号格式不正确')
      }
       },311)
      }
}).blur(function(){
  clearInterval(clock)
  if (!ipt1.val()=='') {
    $('form').children('span:eq(1)').html('')
  if (nn.test(ipt2.val())){
    $('form').children('span:eq(1)').css('color','green')
     $('form').children('span:eq(1)').html('手机号输入成功')
}else if(ipt2.val()==''){
   $('form').children('span:eq(1)').css('color','red')
   $('form').children('span:eq(1)').html('联系方式不能为空')
}else{
   $('form').children('span:eq(1)').css('color','red')
   $('form').children('span:eq(1)').html('手机号格式不正确')
}}
   })//bulr结束符号

//正则完成





var ma=document.getElementsByTagName('video')[0];
ma.onclick=function(){


       if (ma.paused){
 
           ma.play();
 
       }else{
 
           ma.pause();
 
       }

};








})//结束