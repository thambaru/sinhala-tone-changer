/* global strictToNormalLib, normalToStrictLib */

String.prototype.twReplaceText = function (lib) {
    var replaceString = this;
    var regex;
    for (var key in lib) {
	regex = new RegExp(key, "g");
	replaceString = replaceString.replace(regex, lib[key]);
    }
    return replaceString;
};

jQuery(function ($) {
    var libs = {strictToNormalLib: {}, normalToStrictLib: {}};
    
    $.ajax({url: 'lib/library.json', success: function (data) {
	    libs = data;
	}});

    $('textarea').keydown(function (e) {
	if ((e.ctrlKey || e.metaKey) && (e.keyCode == 13 || e.keyCode == 10))
	    $('#convert-btn').trigger('click');
    }).focus();

    $('[name="way"]').click(function () {
	$('#convert-btn').trigger('click');
    });

    $('#convert-btn').click(function () {
	var text = $('textarea').val(),
		radio = $('#strictToNormal-radio');
	if (radio.is(':checked')) {
	    $('textarea').val(text.twReplaceText(libs.strictToNormalLib));
	} else {
	    $('textarea').val(text.twReplaceText(libs.normalToStrictLib));
	}
    });
});