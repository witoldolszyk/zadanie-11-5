$(function(){
function Button(text) {
	this.text = text;
}
Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
			this.$element.appendTo($('body'));
			});
		this.$element.appendTo($('body'));
	}
}
var btn = new Button('Hello!');
btn.create();
});
