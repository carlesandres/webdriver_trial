describe('Testing', function(){

    before(function() {
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');

        chai.use(chaiAsPromised);
        expect = chai.expect;
        chai.Should();
    });

    it('2 + 2 should be 4', function(){
        var a = 4;
        a.should.equal(2+2);
    });
});
