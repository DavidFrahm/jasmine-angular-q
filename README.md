# jasmine-angular-q

Helper functions for dealing with AngularJS promises in Jasmine specs

## Install

Install using NPM:

    $ npm install jasmine-angular-q --save-dev

## Usage

### spyOnAndResolve

```
    var firebaseAuthWithPasswordSpy = jasmineQ.spyOnAndResolve(FirebaseService.auth, '$authWithPassword', {some: "return properties"}, $q);

    scope.login({some: "user credentials"});
    scope.$digest();

    expect(firebaseAuthWithPasswordSpy).toHaveBeenCalled();
    expect(scope.success).toBe(true);
```

_TODO: Add example of other matchers here._
