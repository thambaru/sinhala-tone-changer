String.prototype.strictToNormal = function (textObj) {
    var replaceString = this;
    var regex;
    for (var key in textObj) {
	regex = new RegExp(key, "g");
	replaceString = replaceString.replace(regex, textObj[key]);
    }
    return replaceString;
};

String.prototype.normalToStrict = function (textObj) {
    var replaceString = this;
    var regex;
    for (var key in textObj) {
	regex = new RegExp(textObj[key], "g");
	replaceString = replaceString.replace(regex, key);
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

	var textObj = {
	    "දෙයි": "දෙනවා",
	    "දුන්නේය": "දෙනවා",
	    "වෙයි": "වෙනවා",
	    "සැලසෙයි": "සැලසෙනවා",
	    "කරයි": "කරනවා",
	    "කෙරේ": "‍කරනවා",
	    "කරවයි": "‍කරවනවා",
	    "කළේය": "කළා",
	    "කළේ ය": "කළා",
	    "කිව්වේය":"කියනවා",
	    "කියයි":"කියනවා",
	    "හෙතෙම": "ඔහු",
	    "ඇති බවයි": "ඇතැයි කියා යි",
	    "ලබයි": "ලබනවා",
	    "ලබාදෙයි": "ලබා දෙනවා",
	    "සපයයි": "සපයනවා",
	    "තිබේ": "තිබෙනවා"
	}
	console.log(radio.is(':checked'));
	$('textarea').val(text[radio.is(':checked') ? 'strictToNormal' : 'normalToStrict'](textObj));
    });
});

