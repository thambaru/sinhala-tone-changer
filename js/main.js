/* global strictToNormalLib, normalToStrictLib */

String.prototype.tnwReplaceText = function (lib) {
    var replaceString = this;
    var regex;
    for (var key in lib) {
	regex = new RegExp(key, "g");
	replaceString = replaceString.replace(regex, lib[key]);
    }
    return replaceString;
};

jQuery(function ($) {
    $('textarea').keydown(function (e) {
	if ((e.ctrlKey || e.metaKey) && (e.keyCode == 13 || e.keyCode == 10))
	    $('#convert-btn').trigger('click');
    });
    $('#convert-btn').click(function () {
	var text = $('textarea').val(),
		radio = $('#strictToNormal-radio');
	if (radio.is(':checked')) {
	    $('textarea').val(text.tnwReplaceText(strictToNormalLib));
	} else {
	    $('textarea').val(text.tnwReplaceText(normalToStrictLib));
	}
    });
});

