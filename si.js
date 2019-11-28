/*远大医生团队*/
$(function(){
    $(".lanrenzhijia .tab li").hover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        $('.lanrenzhijia .bd .mt').hide();
        $('.lanrenzhijia .bd .mt:eq('+index+')').show();
    });

    var auto = 1;  //等于1则自动切�?��其他任意数字则不�?��切换
    if(auto ==1){
        var number = 0;
        var maxNumber = $('.lanrenzhijia .tab li').length;
        function autotab(){
            number++;
            number == maxNumber? number = 0 : number;
            $('.lanrenzhijia .tab li:eq('+number+')').addClass('on').siblings().removeClass('on');
            $('.lanrenzhijia .bd .mt:eq('+number+')').show().siblings().hide();
        }
        var tabChange = setInterval(autotab,3000);
        //鼠标�?��暂停切换
        $('.lanrenzhijia').mouseover(function(){
            clearInterval(tabChange);
        });
        $('.lanrenzhijia').mouseout(function(){
            tabChange = setInterval(autotab,3000);
        });
    }
});

/*选项卡切�?*/
$(function () {
    $(".stitle a").hover(function () {
        var index_tab = $(this).parent().children().index($(this)); //选项卡的索引�?
        $(this).parent().find(".open").removeClass("open").addClass("close"); //选项卡背�??�?
        $(this).removeClass("close").addClass("open");
        var content_obj = $(".cntorder");//内�?节点
        content_obj.hide();
        content_obj.eq(index_tab).show();
    });

});

/*hover事件*/
$(function(){
    var index =0;
    var timer = setInterval(function(){
        index = (index == 2) ? 0 : index + 1;
        $("#box ul li").hide().eq(index).show();
    }, 2500);
})

/*teb*/
jQuery(".tab_img").slide({
    titCell:".tab li",
    effect:"fold"
});

/*远大品牌*/
$(document).ready(function(){
    $('.footer_center_btn > li:first').addClass('active');
    $('.footer_center_dl:first').css('display','block');
    autoroll();
    hookThumb();
});

var i=-1; //第i+1个tab开�?
var offset = 30000; //�?��时间
var timer = null;
function autoroll(){
    n = $('.footer_center_btn > li').length-1;
    i++;
    if(i > n){
        i = 0;
    }
    slide(i);
    timer = window.setTimeout(autoroll, offset);
}

function slide(i){
    $('.footer_center_btn > li').eq(i).addClass('active').siblings().removeClass('active');
    $('.footer_center_dl').eq(i).css('display','block').siblings('.footer_center_dl').css('display','none');
}

function hookThumb(){
    $('.footer_center_btn > li').hover(function () {
            if (timer) {
                clearTimeout(timer);
                i = $(this).prevAll().length;
                slide(i);
                timer = window.setTimeout(autoroll, offset);
                this.blur();
                return false;
            }
        }
    );}

/*远大特色*/
$(function(){
    var oFocus=$('#focus'),
        oRight=oFocus.find('.ui-tabs-nav'),
        oLeft=oFocus.find('.datouwang_ul'),
        aRLi=oRight.find('li'),
        aLLi=oLeft.find('li'),
        index=0,
        timer = null;
    aRLi.hover(function(){
        index=$(this).index()
        $(this).addClass('active').siblings().removeClass();
        aLLi.eq(index).addClass('active').siblings().removeClass();
        aLLi.eq(index).stop().animate({'opacity':1},300).siblings().stop().animate({'opacity':0},300);
        stopFoucs();
    })
    oLeft.mouseenter(function(){
        stopFoucs();
    }).mouseleave(function(){
        startFocus();
    });
    timer = setInterval(function(){
        startFocus();
    },5000);
    function startFocus(){
        index++;
        index = index > aRLi.size()-1 ? 0 :index;

        aLLi.eq(index).addClass('active').siblings().removeClass();
        aLLi.eq(index).stop().animate({'opacity':1},300).siblings().stop().animate({'opacity':0},300);
        aRLi.eq(index).addClass('active').siblings().removeClass();
    }
    function stopFoucs(){
        clearInterval(timer);
    }
});