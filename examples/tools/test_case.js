// Implementation is not quite right; regex is missing a /g
function trim(text){
    return text.replace(/^\s+|\s+$/,  '');
}

var YUITest = this.YUITest || require('yuitest');

YUITest.Assert.areEqual(28, 28);

var testCase = new YUITest.TestCase({
    name: 'trim() Tests',

    'Leading white space should be removed': function () {
        var result = trim('     Hello world!');
        YUITest.Assert.areEqual('Hello world!', result);
    },

    'Trailing white space should be removed': function () {
        var result = trim('Hello world!     ');
        YUITest.Assert.areEqual('Hello world!', result);
    },

    'Leading and trailing white space should be removed': function () {
        var result = trim('     Hello world!     ');
        YUITest.Assert.areEqual('Hello world!', result);
    }
});

YUITest.TestRunner.add(testCase);