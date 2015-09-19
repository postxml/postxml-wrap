var fs = require('fs');
var expandClasses = function (classes) {
    return '<div class="' + classes.substring(1).split('.').join(' ') + '"></div>';
};

module.exports = function (opts) {

    return function ($) {
        
        $('[px-wrap]').each(function () {
            var emmet = $(this).attr('px-wrap').split('.'),
                classes = '',
                tag,
                classSeparator = ' ';
            
            $(this).removeAttr('px-wrap');
            
            // analize abbr
            if (emmet[0] === '') {
                tag = 'div';
            } else {
                tag = emmet[0];
            }
            
            for (var index = 1, lenght = emmet.length; index < lenght; index++) {
                if (index != 1 ) {
                    classes += classSeparator;
                }
                classes += emmet[index];
            }
            
            // expand abbr to html
            var element = '<' + tag + ' class="' + classes + '">' + $.html(this) + '</' + tag + '>';
            
            // replace
            $(this).replaceWith(element);
        });
    };
};
