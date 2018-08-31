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
   
    //显示首页背景
    function showFirstPageBg(){
        $('section').removeClass('result');
    }
    //显示中奖页背景
    function showResultPageBg(){
        $('section').addClass('result');
    }
    //奖品金额随机数
    var num = (Math.random()*10+1).toFixed(2);
    //首页抽红包按钮
    $('#cj').on('click',function(){
        $('.result').show();
        $('.f_page').hide();
        showResultPageBg();
    });
    
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