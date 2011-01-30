(function() {
    var docSet = testhelpers.getDocSetFromFile('test/cases/borrowstag.js'),
        util = docSet.getByLongname('util').filter(function($) {
            return ! $.undocumented;
        })[0];
    
    //dump(found);
    
    test('When a symbol has a @borrows tag, that is added to the symbol\'s "borrowed" property.', function() {
        assert.equal(util.borrowed.length, 1);
        assert.equal(util.borrowed[0].from, 'trstr');
        assert.equal(util.borrowed[0].as, 'trim');
    });
})();