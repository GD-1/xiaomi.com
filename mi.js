$('.menu_li').hover(function(){
		$('#menu_content_bg').css('border','1px solid #d0d0d0');
		$('#'+$(this).attr('control')).show();
		$('#menu_content_bg').height(230);
},function(){
		$('#'+$(this).attr('control')).hide();
		$('#menu_content_bg').height(0);
		$('#menu_content_bg').css('border','0px solid #d0d0d0');
});


//搜索
$('#find_input').focus(function(){
		$('#find_wrap').css('border','1px solid #ff6700');
});
$('#find_input').blur(function(){
		$('#find_wrap').css('border','1px solid #f0f0f0');
});




//菜单

$('#banner_menu_wrap').children().hover(function(){
		$(this).css('background','#ff6700');
		$(this).children('.banner_menu_content').css('border','1px solid #f0f0f0').show();
		
},function(){
		$(this).css('background','none');
		$(this).children('.banner_menu_content').css('border','0px solid #f0f0f0').hide();
});



//轮播


$(function(){
		var i=0;
		var big_banner_pic=$('#big_banner_pic');
		var allImg=$('#big_banner_pic li').length;
		function img_change(){
				var img_i=i*-1226+'px';
				big_banner_pic.animate({opacity:'0.6'},100,function(){
						big_banner_pic.css('left',img_i);
						big_banner_pic.animate({
								opacity:'1'
						},100)
				})
		}
		function automatic(){
				i+=1;
				if(i>=allImg){
						i=0;
				}
				img_change();
		}
		change_self_time=setInterval(automatic,3000);
		//轮播 图标 控制
		$('#big_banner_change_wrap').hover(function(){
				clearInterval(change_self_time);
				$('#big_banner_change_wrap').children().show();	
		},function(){
				
				change_self_time=setInterval(automatic,3000);
				$('#big_banner_change_wrap').children().hide();
		});
		$('#big_banner_change_prev').click(function(){
				i+=1;
				if(i>=allImg){
						i=0;
				}
				img_change();
		});
		$('#big_banner_change_next').click(function(){
				i-=1;
				if(i<=0){
						i=allImg-1;
				}
				img_change();
		});
		
});

//小米明星
$(function(){
		$('#head_hot_goods_content').children().children().eq(0).css('border-color','#ff6700');
		$('#head_hot_goods_content').children().children().eq(1).css('border-color','#red');
		$('#head_hot_goods_content').children().children().eq(2).css('border-color','#adff2f');
		$('#head_hot_goods_content').children().children().eq(3).css('border-color','#6495ed');
		$('#head_hot_goods_content').children().children().eq(4).css('border-color','#6a5acd');
		$('#head_hot_goods_content').children().children().eq(5).css('border-color','#ff7600');
		$('#head_hot_goods_content').children().children().eq(6).css('border-color','#red');
		$('#head_hot_goods_content').children().children().eq(7).css('border-color','#adff2f');
		$('#head_hot_goods_content').children().children().eq(8).css('border-color','#6495ed');
		$('#head_hot_goods_content').children().children().eq(9).css('border-color','#6a5acd');
})

//小米明星轮播


//控制小米明星left
$('#head_hot_goods_next').click(function(){
     $('#head_hot_goods_content').children('ul').animate({
         left:'-1226px'
     },300)
})
$('#head_hot_goods_prave').click(function(){
    $('#head_hot_goods_content').children('ul').animate({
        left:'0'
    },300)
})




$("#head_hot_goods_prave").hover(function(){
    $(this).css("color","#ff6700");
},function(){
    $(this).css("color","#BEBEBE");
})
$("#head_hot_goods_next").hover(function(){
    $(this).css("color","#ff6700");
},function(){
    $(this).css("color","#BEBEBE");
})

$(".floor_goods_wrap_li").hover(function () {
       $(this).css({"top":"-5px",
           "box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"
       });
},function(){
    $(this).css({"top":"0px",
        "box-shadow":"none"
    });
})

$(".foot_bottom_r").children("span").hover(function(){
    $(this).css({"background":"#ff6700",color:"#fff"});
},function(){
    $(this).css({"background":"none",color:"#ff6700"});
})
