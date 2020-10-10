// ハンバーガーメニュー

$(function(){
  var imgHeight = $('.kv-wrapper').outerHeight();
  var bgHeight = $('.fv').outerHeight();

 $('.burger-btn').on('click',function(){
   if( $(window).scrollTop() < imgHeight -50){
     $('.bar').toggleClass('cross');
     $('.header-nav').toggleClass('open');
     $('.burger-musk').fadeToggle(300);
     $('body').toggleClass('noscroll');
  } else {
     $(this).toggleClass('black');
     $('.bar').toggleClass('cross');
     $('.header-nav').toggleClass('open');
     $('.burger-musk').fadeToggle(300);
     $('body').toggleClass('noscroll');
   }
}); 


$(window).on('load scroll',function(){
  if ($(window).scrollTop() < imgHeight -50){
    $('.site-title').removeClass('black');
  }else{
    $('.site-title').addClass('black');
  }


  if ($(window).scrollTop() < bgHeight -50){
    $('.burger-btn').removeClass('black');
  }else{
    $('.burger-btn').addClass('black');
  }
});
});

$(window).on("load", function() {
	var _radio = [];
	$('input.radio').on('click', function() {
		var _this = $(this);
		var _name = _this.attr('name');
		var _val  = _this.val();
		
		if (_radio[_name] === '' || _radio[_name] === null || _radio[_name] === undefined) {
			_radio[_name] = _val;
		} else {
			if (_radio[_name] == _val) {
				_this.prop('checked', false);
				_radio[_name] = '';
			} else {
				_radio[_name] = _val;
			}
		}
	});
});


