var fs = require('fs');

module.exports = function (options) {
    
    options = options || {};
    options.attr = options.wrap || 'wrap';

    return function ($) {
        
        $('[' + options.attr + ']').each(function () {
            var emmet = $(this).attr(options.attr).split('.'),
                classes = '',
                tag,
                classSeparator = ' ';
            
            $(this).removeAttr(options.attr);
            
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
