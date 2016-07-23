String.prototype.replaceObj = function (textObj) {
    var replaceString = this;
    var regex;
    for (var key in textObj) {
	regex = new RegExp(key, "g");
	replaceString = replaceString.replace(regex, textObj[key]);
    }
    return replaceString;
};

jQuery(function ($) {

    $('textarea').keydown(function (e) {
	if ((e.ctrlKey || e.metaKey) && (e.keyCode == 13 || e.keyCode == 10))
	    $('#convert-btn').trigger('click');
    });

    $('#convert-btn').click(function () {
	var text = $('textarea').val();

	var textObj = {
	    "දෙයි": "දෙනවා",
	    "දුන්නේය": "දෙනවා",
	    "වෙයි": "වෙනවා",
	    "සැලසෙයි": "සැලසෙනවා",
	    "කරයි": "කරනවා",
	    "කෙරේ": "‍කරනවා",
	    "කළේය": "කළා",
	    "කළේ ය": "කළා",
	    "හෙතෙම": "ඔහු",
	    "ඇති බවයි": "ඇතැයි කියා යි",
	    "ලබයි": "ලබනවා"
	}
	$('textarea').val(text.replaceObj(textObj));
    });
});

