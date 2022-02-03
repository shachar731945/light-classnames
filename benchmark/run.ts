import Benchmark from "benchmark";
import {benchmarkCases} from "../tests/testCases";
import lightClassNames from "../src/light-classnames";

const suite = new Benchmark.Suite('classnames official benchmark');

suite.on("cycle", function(event: Benchmark.Event) {
    const name =  event.target.name;

    if (name === undefined) return;

    const timestamp = event.timeStamp;
    console.log(String(event.target));
    
});

benchmarkCases.forEach((testCase) => {
    suite.add(testCase.name, function() {
        lightClassNames(testCase.value);
    });
});

suite.run();
