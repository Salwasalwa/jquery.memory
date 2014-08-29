(function($){
	$.fn.extend({
		memory: function(){
			this.each(function(){
				var $this = $(this);
				$this.html('Hola');
			});
		}
	});
})(jQuery)