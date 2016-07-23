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

    var strictToNormalLib = {
	"දෙයි": "දෙනවා",
	"දුන්නේය": "දෙනවා",
	"වෙයි": "වෙනවා",
	"සැලසෙයි": "සැලසෙනවා",
	"කරයි": "කරනවා",
	"කෙරේ": "‍කරනවා",
	"කරවයි": "‍කරවනවා",
	"කළේය": "කළා",
	"කළේ ය": "කළා",
	"කිව්වේය": "කියනවා",
	"කියයි": "කියනවා",
	"කෙරුණි": "කරනු ලැබුවා",
	"කෙරිණි": "කරනු ලැබුවා",
	"හෙතෙම": "ඔහු",
	"ඇති බවයි": "ඇතැයි කියා යි",
	"ලැබේ": "ලබනවා",
	"ලබයි": "ලබනවා",
	"ලබාදෙයි": "ලබා දෙනවා",
	"සපයයි": "සපයනවා",
	"තිබේ": "තිබෙනවා",
	"තිබුණි": "තිබෙනවා",
	"ඇත": "තිබෙනවා",
	"පවසති": "පවසනවා",
	"පවසයි": "පවසනවා",
	"පැවැසීය": "පැවසුවා",
	"පවසන ලදී": "පැවසුවා",
	"පැවැසුවාය": "පැවසුවා",
	"පත්වූවාය": "පත්වූවා",
	"නිසැකය": "නිසැකයි"
    },
    normalToStrictLib = {
	"දෙනවා": "දෙයි",
	"වෙනවා": "වෙයි",
	"කරනවා": "කරයි",
	"කළා": "කළේ ය",
	"කියනවා": "කියයි",
	"කරනු ලැබුවා": "කෙරිණි",
	"ලබනවා": "ලබයි",
	"සපයනවා": "සපයයි",
	"තිබෙනවා": "තිබේ",
	"පැවසුවා": "පැවැසීය",
	"පවසනවා": "පවසයි",
	"පත්වූවා": "පත්වූවාය",
	"නිසැකයි": "නිසැක ය",
    };
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

