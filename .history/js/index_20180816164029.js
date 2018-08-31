(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
$(function () {
   
    //显示非中奖页背景
    function showFirstPageBg(){
        $('.main').removeClass('result');
    }
    //显示中奖页背景
    function showResultPageBg(){
        $('.main').addClass('result');
    }
    //显示活动规则弹窗
    $('#rule_btn').on('click',function(){
        $('.rule').show();
        showMask();
    });
    //关闭活动规则弹窗
    function hideRuleModel(){
        $('.rule').hide();
        hideMask();
    }
    $('.rule').on('click','a',function(){
        hideRuleModel();
    });
    //首页赚钱攻略按钮
    $('#gl_btn').on('click',function(){
        $('.gl').show();
        showMask();
    })
    //首页抽红包按钮
    $('#cj').on('click',function(){
        //奖品金额随机数
        var num = (Math.random()*9+1).toFixed(2);
        $('#moneyText').text(num);
        $('.result').show();
        $('.f_page').hide();
        showResultPageBg();
    });

    //获奖页获奖名单滚动
    var listPanel = $('#J_Activity ul');
    var z = 0;
    function up() {
        listPanel.animate({
            'top': (z - .5) + 'rem'
        }, 1500, 'linear', function () {
            listPanel.css({'top': '0px'}).find("li:first").appendTo(listPanel);
            up();
        });
    }
    up();

    //显示弹窗
    function showModel(){
        $('.model').show();
        showMask();
    }

    //关闭弹窗
    $('.close').on('click',function(){
        $(this).parent().parent().hide();
        hideMask();
    });  
    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
        $('body').css('position','fixed');
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
        $('body').css('position','unset');
    }
});