/*
 * Copyright © 2013 David Frahm, @DavidFrahm,
 * https://github.com/DavidFrahm
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var jasmineQ = {

    q: null,

    useQ: function(q) {
       this.q = q
    },

    spyOnAndResolve: function(source, target, retval, q) {
       q = q || this.q;

       return spyOn(source, target).and.callFake(function() {
           var deferred = q.defer();
           deferred.resolve(retval);
           return deferred.promise;
       });
    },

    spyOnAndReject: function(source, target, retval, q) {
       q = q || this.q;

       return spyOn(source, target).and.callFake(function() {
           var deferred = q.defer();
           deferred.reject(retval);
           return deferred.promise;
       });
    },

    createPromiseResolvingSpy: function(q, retval) {
        return jasmine.createSpy().and.callFake(function() {
            var deferred = q.defer();
            deferred.resolve(retval);
            return deferred.promise;
        });
    },

    createPromiseRejectingSpy: function(q, retval) {
        return jasmine.createSpy().and.callFake(function() {
            var deferred = q.defer();
            deferred.reject(retval);
            return deferred.promise;
        });
    },

    createResourcePromiseResolvingSpy: function(q, retval) {
        return jasmine.createSpy().and.callFake(function() {
            var deferred = q.defer();
            deferred.resolve(retval);
            return {$promise: deferred.promise};
        });
    },

    createResourcePromiseRejectingSpy: function(q, retval) {
        return jasmine.createSpy().and.callFake(function() {
            var deferred = q.defer();
            deferred.reject(retval);
            return {$promise: deferred.promise};
        });
    }
};
