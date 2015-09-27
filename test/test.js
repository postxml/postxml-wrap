var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

   var proccessed = postxml([plugin(opts)]).process(input);

   expect(proccessed).to.eql(output);
};

describe('postxml-wrap', function () {
   it('wrap without opt', function () {
      test(
         '<div wrap=".g-section.bg"><a></a></div>',
         '<div class="g-section bg"><div><a></a></div></div>'
      );
   });
   it('abbr with nesting', function () {
      test(
         '<div wrap=".g-section.bg>.g-section__content"><a></a></div>',
         '<div class="g-section bg"><div class="g-section__content"><div><a></a></div></div></div>'
      );
   });
   it('abbr with double nesting', function () {
      test(
         '<div wrap=".g-section.bg>.g-section__content>.content"><a></a></div>',
         '<div class="g-section bg"><div class="g-section__content"><div class="content"><div><a></a></div></div></div></div>'
      );
   });
});
