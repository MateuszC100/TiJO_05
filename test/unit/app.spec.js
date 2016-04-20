describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {

    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });

    describe('toHaveBeenisPalindrome',function(){
        beforeAll(function(){
            spyOn(app,'isPalindrome');
            app.isPalindrome('zaraz');
        });
        it('counting vowels',function(){
            expect(app.isPalindrome).toHaveBeenCalled();
            expect(app.isPalindrome).toHaveBeenCalledWith('zaraz');
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {
        });
    });

    describe('toHaveBeenvowelCount',function(){
        beforeAll(function(){
            spyOn(app,'vowelCount');
            app.vowelCount('dalej');
        });
        it('counting vowels',function(){
            expect(app.vowelCount).toHaveBeenCalled();
            expect(app.vowelCount).toHaveBeenCalledWith('dalej');
        });
    });


});

