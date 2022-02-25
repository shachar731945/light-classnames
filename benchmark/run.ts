import Benchmark from "benchmark";

import {benchmarkCases} from "../tests/testCases";
import lightClassNames from "../";

const suite = new Benchmark.Suite('light-classnames benchmark');

suite.on("cycle", (event: Benchmark.Event) => {
    console.log(String(event.target));
});

benchmarkCases.forEach((testCase) => {
    suite.add(testCase.name, () => {
        lightClassNames(testCase.value);
    });
});

suite.run();