[![Build Status](https://travis-ci.org/gabel/karma-webpack-example.svg?branch=master)](https://travis-ci.org/gabel/karma-webpack-example)

# karma-webpack-example

Karma + Webpack + Mocha + Chai + Istanbul

## Installation

```npm install```

## Run

```
npm test
```

Use `npm test -- --no-single-run` to keep karma running. It will watch any changes on the test files and rerun instantly.

Output

```
$ npm test

> karma-webpack-example@1.0.0 test /Users/d060690/karma-webpack-example
> node ./node_modules/karma/bin/karma start --single-run --browsers PhantomJS

# ...

03 02 2017 08:31:17.038:INFO [karma]: Karma v1.4.1 server started at http://0.0.0.0:9876/
03 02 2017 08:31:17.044:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
03 02 2017 08:31:17.067:INFO [launcher]: Starting browser PhantomJS
03 02 2017 08:31:18.045:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket yME3wmuxdm0t5GHIAAAA with id 92073047

  hexColorLuminance
    ✓ should return a luminanced color
    ✓ should change the background of an element

PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 2 of 2 SUCCESS (0.02 secs / 0.002 secs)
TOTAL: 2 SUCCESS


-----------------------|----------|----------|----------|----------|----------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------------------|----------|----------|----------|----------|----------------|
 Example/              |    83.33 |       50 |      100 |    83.33 |                |
  hexColorLuminance.js |    83.33 |       50 |      100 |    83.33 |       10,14,17 |
-----------------------|----------|----------|----------|----------|----------------|
All files              |    83.33 |       50 |      100 |    83.33 |                |
-----------------------|----------|----------|----------|----------|----------------|


=============================== Coverage summary ===============================
Statements   : 83.33% ( 15/18 )
Branches     : 50% ( 5/10 )
Functions    : 100% ( 3/3 )
Lines        : 83.33% ( 15/18 )
================================================================================
```

## Gulp

added usage in a gulp scenario

try it via "npm run test-gulp" or simply "gulp" in the
projects directory if you have gulp installed globally

## Istanbul Coverage

![Istanbul-HTML-Coverage](docs/assets/istanbul-coverage-html.png)
