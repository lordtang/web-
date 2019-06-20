$(function () {
    $(window).on('resize',function () {
        let clientW = $(window).width();
        // console.log(clientW);
        let isShowBigImage = clientW>=800;
    //    获取所有item
        let $allItem = $("#lk_carousel .item");
        $allItem.each(function (index,item) {
            let src = isShowBigImage? $(item).data('lg-img'):$(item).data("sm-img");
            let imgUrl = 'url("'+src+'")';
            //设置背景
            $(item).css({
                backgroundImage:imgUrl
            });

            if(!isShowBigImage){
                let $img = "<img src='"+src+ "'>";
                console.log($img);
                $(item).empty().append($img)
            }else{
                $(item).empty()
            }

        });
    });
    $(window).trigger('resize');
});