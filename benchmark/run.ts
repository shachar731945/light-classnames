import Benchmark from "benchmark";
import {benchmarkCases} from "../tests/testCases";
import lightClassNames from "../";

const suite = new Benchmark.Suite('classnames official benchmark');

suite.on("cycle", function(event: Benchmark.Event) {
    console.log(String(event.target));
});

benchmarkCases.forEach((testCase) => {
    suite.add(testCase.name, function() {
        lightClassNames(testCase.value);
    });
});

suite.run();
