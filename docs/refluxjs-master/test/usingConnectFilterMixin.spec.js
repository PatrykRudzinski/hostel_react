var assert = require('chai').assert,
    sinon = require('sinon'),
    connectFilter = require('../src/connectFilter'),
    Reflux = require('../src'),
    _ = Reflux.utils;

var dummyFilter = function(value) { return value.slice(0,2); };

describe('using the connectFilter(...) mixin',function(){

    it("should be exposed in Reflux",function(){
        assert.equal(connectFilter, Reflux.connectFilter);
    });

    describe("when calling with action",function() {
        var listenable = {
                listen: sinon.spy()
            },
            context = {setState: sinon.spy()};
        _.extend(context,connectFilter(listenable, "KEY", dummyFilter));

        it("should pass empty object to state",function(){
            assert.deepEqual({},context.getInitialState());
        });
    });

    describe("when filter func returns", function() {
        var listenable, context, expectedResult;
        function withFilterReturning(val) {
            var key = "KEY";
            listenable = {
                listen: sinon.spy(),
                getInitialState: sinon.stub().returns("DOES NOT MATTER")
            };
            context = {setState: sinon.spy()};
            expectedResult = {};
            expectedResult[key] = val;
            _.extend(context,connectFilter(listenable, key, function() {return val;}));
        }
        describe("0", function() {
            beforeEach(function () {
                withFilterReturning(0);
            });
            it("should return that value", function() {
                assert.deepEqual(expectedResult, context.getInitialState());
            });
        });
        describe("empty string", function() {
            beforeEach(function () {
                withFilterReturning("");
            });
            it("should return that value", function() {
                assert.deepEqual(expectedResult, context.getInitialState());
            });
        });
        describe("false", function() {
            beforeEach(function () {
                withFilterReturning(false);
            });
            it("should return that value", function() {
                assert.deepEqual(expectedResult, context.getInitialState());
            });
        });
        describe("undefined", function() {
            beforeEach(function () {
                withFilterReturning();
            });
            it("should return empty object", function() {
                assert.deepEqual({}, context.getInitialState());
            });
        });
    });

    describe("when calling without key",function(){

        it("should throw.",function(){

            var listenable = {
                listen: function() {},
                getInitialState: function() {}
            };

            assert.throws(function () {
                connectFilter(listenable, dummyFilter);
            }, 'Reflux.connectFilter() requires a key.');
        });

    });

    describe("when calling with key",function(){
        var initialstate = "DEFAULTDATA",
            triggerdata = "TRIGGERDATA",
            key = "KEY",
            listenable = {
                listen: sinon.spy(),
                getInitialState: sinon.stub().returns(initialstate)
            },
            context = {setState: sinon.spy()},
            result = _.extend(context,connectFilter(listenable,key,dummyFilter));

        it("should pass initial state to state correctly",function(){
            assert.deepEqual({KEY:initialstate.slice(0,2)},context.getInitialState());
        });

        result.componentDidMount();

        it("should call listen on the listenable correctly",function(){
            assert.equal(1,listenable.listen.callCount);
            assert.isFunction(listenable.listen.firstCall.args[0]);
            assert.equal(context,listenable.listen.firstCall.args[1]);
        });

        it("should send listenable callback which calls setState correctly",function(){
            listenable.listen.firstCall.args[0](triggerdata);
            assert.deepEqual([_.object([key],[triggerdata.slice(0,2)])],context.setState.firstCall.args);
        });
    });
    describe("when calling with falsy key",function(){
        var triggerdata = "TRIGGERDATA",
            key = 0,
            listenable = {listen: sinon.spy()},
            context = {setState: sinon.spy()},
            result = _.extend(context,connectFilter(listenable,key,dummyFilter));
        result.componentDidMount();
        it("should send listenable callback which calls setState correctly",function(){
            listenable.listen.firstCall.args[0](triggerdata);
            assert.deepEqual([_.object([key],[triggerdata.slice(0,2)])],context.setState.firstCall.args);
        });
    });
});
