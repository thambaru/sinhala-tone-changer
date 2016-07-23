$(function () {
    var dictionary = {
	"Sinhala Tone Changer": {
	    "en": "Sinhala Tone Changer",
	    "si": "සිංහල වාග් විලාස පරිවර්තකය"
	},
	"Strict to Normal": {
	    "si": "රචනා වහර සිට කටවහරට"
	},
	"Normal To Strict": {
	    "si": "කටවහර සිට රචනා වහරට"
	},
	"Convert": {
	    "si": "පරිවර්තනය කරන්න"
	}
    }


    $('.trn').each(function () {
	var str = $(this).text() ? $(this).text() : $(this).val();
	$(this).attr('data-tr-key', str);
    });

    $('.translator').click(function () {
	translateTo($(this).data('lang'));
    });

    function translateTo(langCode) {
	setCookie('lang', langCode);

	$('.trn').each(function () {
	    var $this = $(this),
		    key = $this.attr('data-tr-key');

	    if (dictionary.hasOwnProperty(key)) {
		var str = dictionary[$this.attr('data-tr-key')].hasOwnProperty(langCode) ? dictionary[key][langCode] : key;
		$this.text(str);
	    }
	});
    }

    var lastSetLang = getCookie('lang');
    if (lastSetLang != "")
	translateTo(lastSetLang);
});

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; ";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0) == ' ') {
	    c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
	    return c.substring(name.length, c.length);
	}
    }
    return "";
}