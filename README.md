# SpreadTest


### Install dependencies

```
npm install
```

### To run cypress tests

Below you have the steps to follow to run cypress successfully.

- To open cypress app in headed mode.

```
npm run test
```

- To runs the tests in a headless mode on demo and generate a mochawesome report.

```
npm run cypress-regression-run:demo
```

Note that the above command will delete existing reports locally first and then generate new onces.


### Commands

| Description                          | Command                        |
|--------------------------------------|--------------------------------|
| Run on demo Headless                 | `npm run testdemo:headless`    |
| Run on staging Headless              | `npm run teststage:headless`   |
| Run on demo with cypress app (UI)     | `npm run testdemo:headed`      |
| Run on staging with cypress app (UI) | `npm run teststage:headed`     |
| To Stop Running tests :              | `Ctrl+C` in the running terminal |
