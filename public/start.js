/**
 * @file
 * @author 何文林
 * @date 16/9/12
 */

(function($){
  $.fn.start = function(option){
    //默认值
    var defaults = {
      startNum: 0,
      getClickNum: null
    };
    var options = $.extend(defaults, option);
    var self = this;
    var input = $(this).find('input');
    var aSpan = $(this).find('span');
    // 设置又几个星星
    setStart(options.startNum);
    aSpan.on('click', function(){
      var index = $(this).index();
      aSpan.removeClass('active');
      setStart(index);
    });
    function setStart(n){
      input.val(n);
      if(n != 0) {
        for (var i = 0; i < n; i++) {
          aSpan.eq(i).addClass('active');
        }
      }
      options.getClickNum && options.getClickNum(n);
    }
  };
})(Zepto);
