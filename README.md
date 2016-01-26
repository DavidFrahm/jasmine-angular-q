# jasmine-angular-q

**Note: I don't think there's much use for this library anymore, since $q.when() makes the spyOn() a one-liner, like this:**

```
   spyOn(SomeService, 'someMethod').and.returnValue($q.when({some: "return object"}));
```

Helper functions for dealing with AngularJS promises in Jasmine specs

## Install

Install using NPM:

    $ npm install jasmine-angular-q --save-dev

## Usage

### spyOnAndResolve

```
    var firebaseAuthWithPasswordSpy = jasmineQ.spyOnAndResolve(FirebaseService.auth, '$authWithPassword', {some: "return object"}, $q);

    scope.login({some: "user credentials"});
    scope.$digest();

    expect(firebaseAuthWithPasswordSpy).toHaveBeenCalled();
    expect(scope.success).toBe(true);
```

_TODO: Add example of other matchers here._
