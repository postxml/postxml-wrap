var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

   var proccessed = postxml(input, [plugin(opts)]);

   expect(proccessed).to.eql(output);
};

describe('postxml-wrap', function () {
   it('wrap without opt', function () {
      test(
         '<div wrap=".g-section.bg"><a></a></div>',
         '<div class="g-section bg"><div><a></a></div></div>'
      );
   });
});
