describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('should return the number of vowels and there is a palindrome ', function(){
            expect(app.generateMessage('kajak')).toEqual({vowel:2, palindrome:true});
            expect(app.generateMessage('ala')).toEqual({vowel:2, palindrome:true});
            expect(app.generateMessage('seedees')).toEqual({vowel:4, palindrome:true});
        });
        it('should return the number of vowels and there is not a palindrome',function(){
            expect(app.generateMessage('kokos')).toEqual({vowel:2, palindrome:false});
            expect(app.generateMessage('Kowalski')).toEqual({vowel:3, palindrome:false});
            expect(app.generateMessage('wyraz')).toEqual({vowel:2, palindrome:false});
        });

    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function(){
                spyOn(app, 'isPalindrome');
                app.isPalindrome('kajak');
            });
            it('should call isPalindrome function', function(){
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('kajak');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.callThrough();
                app.generateMessage('wyraz');
            });
            it('should call isPalindrome function when generateMessage function is called',function(){
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('wyraz');
            });
        });

        describe('and.returnValue', function () {
            var czy_ok=true;
            beforeAll(function(){
                spyOn(app,'isPalindrome').and.returnValue(true);
            });
            it('should call isPalindrome and return true',function(){
                czy_ok = app.isPalindrome('zaraz');
                expect(czy_ok).toBe(true);
            });
            it('should call generateMessage and isPalindrome should return true',function(){
                czy_ok = app.generateMessage('zaraz');
                expect(czy_ok).toEqual({vowel:2 ,palindrome:true})
            });
        });

        describe('and.callFake', function () {
            var czy_ok=true;
            beforeAll(function(){
                spyOn(app,'isPalindrome').and.callFake(function(str){
                    var strTemp = 'kajak',  //str.toLowerCase(),
                        strLength = strTemp.length;
                    if (str === '') {
                        return false;
                    }
                    var halfLength = (strLength % 2 === 0) ? (strLength / 2) : ((strLength - 1) / 2);
                    for (var i = 0; i < halfLength; i++) {
                        if (strTemp[i] !== strTemp.slice(-1 - i)[0]) {
                            return false;
                        }
                    }
                    return true;
                });
            });
            it ('should call isPalindrome fake function',function(){
                czy_ok= app.isPalindrome('nowy');
                expect(czy_ok).toBe(true);
            });
            it('should call generateMessage and isPalindrome fake function',function(){
                czy_ok = app.generateMessage('nowy');
                expect(czy_ok).toEqual({vowel:2,palindrome:true})
            });
        });

        describe('calls.count()', function () {
            var czy_ok=true;
            beforeAll(function(){
                spyOn(app,'isPalindrome').and.callThrough();
            });
            it('should notice that isPalindrome function is call',function(){
                czy_ok = app.isPalindrome('jeden');
                expect(app.isPalindrome.calls.count()).toBe(1);
            });
            it('should notice that isPalindrome is call when generateMesage is call',function(){
                czy_ok=app.generateMessage('jeden');
                expect(app.isPalindrome.calls.count()).toEqual(2);
            });
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function(){
                spyOn(app,'vowelCount');
                app.vowelCount('rower');
            });
            it('should call vowelCount function',function(){
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('rower');
            })
        });

        describe('and.callThrough', function () {
            beforeAll(function(){
                spyOn(app,'vowelCount').and.callThrough();
                app.generateMessage('palindrom');
            });
            it('should call vowelCount function when generateMessage is call',function(){
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('palindrom');
            })
        });

        describe('and.returnValue', function () {
            var numberOfVowels;
            beforeAll(function(){
                spyOn(app,'vowelCount').and.returnValue(3);
            });
            it('should call vowelCount and return 3',function(){
                numberOfVowels=app.vowelCount('kakao');
                expect(numberOfVowels).toBe(3);
            });
            it('should call generateMessege nad vowelCount should return 3',function(){
                numberOfVowels = app.generateMessage('kakao');
                expect(numberOfVowels).toEqual({vowel: 3,palindrome:false});
            });
        });

        describe('and.callFake', function () {
            var numberOfVowels;
            beforeAll(function() {
                spyOn(app,'vowelCount').and.callFake(function(str){
                    var vowelList = 'aeiouy', //AEIOUY',
                        vovCount = 0;
                    for (var i = 0, strLength = str.length; i < strLength; i++) {
                        if (vowelList.indexOf(str[i]) !== -1) {
                            vovCount++;
                        }
                    }
                    return vovCount;
                });
            });
            it('should call vowelCount fake function', function(){
                numberOfVowels = app.vowelCount("KakaO");
                expect(numberOfVowels).toBe(2);
            });
            it('should call generateMessage and vowelCount fake function', function(){
                numberOfVowels = app.generateMessage('KakaO');
                expect(numberOfVowels).toEqual({vowel:2, palindrome:false});
            });
        });

        describe('calls.count()', function () {
            var numberOfVowels;
            beforeAll(function(){
                spyOn(app,'vowelCount').and.callThrough();
            });
            it('should notice that call vawelCount is call',function(){
                numberOfVowels = app.vowelCount('kajak');
                expect(app.vowelCount.calls.count()).toBe(1);
            });
            it('should notice that vowelCount is call when generateMessage is call', function(){
                numberOfVowels = app.generateMessage('kajak');
                expect(app.vowelCount.calls.count()).toEqual(2);
            });
        });
    });

});




