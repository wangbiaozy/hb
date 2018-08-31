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
    
    //复制按钮属性等于验证码值
    $('.copy_btn').attr('data-clipboard-text',$('.code_text').text());
    //重新加载
    $('#reload').on('click',function(){
        window.location.reload();
    });
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
            'top': (z - .8) + 'rem'
        }, 1500, 'linear', function () {
            listPanel.css({'top': '0px'}).find("li:first").appendTo(listPanel);
            up();
        });
    }
    up();

    //获取验证码
    function getCodeStyle(btnId) {//btnId->jQ
        var orderTime = 60,
            timeLeft = orderTime,
            btn = btnId;
        function timeCount(){
            timeLeft-=1;
            if (timeLeft>0){
                btn.val(timeLeft+"s重新获取");
                setTimeout(timeCount,1000);
                btn.css({
                    background: '#a2a2a2',
                    color: '#ffffff'
                });
            }
            else {
                btn.val("获取验证码");
                btn.css({
                    background: '#76ca08',
                    color: '#ffffff'
                });
                timeLeft = orderTime;
                btn.removeAttr("disabled");
            }
        }
        btn.on('click', function () {
            $(this).attr("disabled",true);
            timeCount();
        });
    }
    getCodeStyle($('#codeBtn'));

    $('#helpBtn').on('click',function(){
        $('.login').show();
        showMask();
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