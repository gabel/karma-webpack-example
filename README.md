# karma-webpack-example

##Installation

```npm install```

## Run

```
npm run test
```

Remove --single-run to keep karma running. It will watch any changes on the test files and rerun instantly.

Output

```
> karma-webpack-example@1.0.0 test karma-webpack-example
> node ./node_modules/karma/bin/karma start --single-run --browsers PhantomJS

INFO [karma]: Karma v0.12.31 server started at http://localhost:9876/
INFO [launcher]: Starting browser PhantomJS
INFO [PhantomJS 1.9.8 (your OS)]: Connected on socket g34oTr_PlQaujbE5WlIJ with id 16200709

  hexColorLuminance
    V should return a luminanced color
    V should change the background of an element

PhantomJS 1.9.8 (your OS): Executed 2 of 2 SUCCESS (0.005 secs / 0 secs)
TOTAL: 2 SUCCESS

```