var fs = require('fs');

module.exports = function (options) {
    
    options = options || {};
    options.attr = options.wrap || 'wrap';

    return function ($) {
        
        $('[' + options.attr + ']').each(function () {
            var emmet = $(this).attr(options.attr),
                content = $.html($(this).removeAttr(options.attr)),
                
                // wrap function
                wrap = function (inner, options) {
                    return '<' + options.tag + ' class="' + options.classes.join(' ') + '">' + inner + '</' + options.tag + '>'
                };
            
            // analize abbr
            emmet = emmet.split('>').reverse();
            emmet.forEach(function (element, index) {
                content = wrap(content, {
                    tag: element[0] != '' ? 'div' : element[0],
                    classes: element.slice(1).split('.')
                });
            });
            
            // replace
            $(this).replaceWith(content);
        });
    };
};
