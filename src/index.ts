export type TruthyArgument = string | object | number;
export type Argument = TruthyArgument | null | undefined;

// Using `arguments` instead normal spread operator (...) due to performance reasons.
/** Calculates the classNames based on series of arguments */
const lightClassNames: (...args: Argument[]) => string = function () {
    let classNames = '', index = 0, argumentsLength = arguments.length, key;

    // Using while instead of for-loop for better performance.
    while (index < argumentsLength) {
        const arg: Argument = arguments[index];
        if (arg) {
            if (typeof arg === 'object') {
                // Iterating over object with for-in. This is in order to improve performance.
                for (key in arg) {
                    if (arg[key as keyof typeof arg]) {
                        if (classNames) classNames += ' ';
                        classNames += key;
                    }
                }
            } else {
                if (classNames) classNames += ' ';
                classNames += arg;
            }
        }
        index++;
    }

    return classNames;
};

export default lightClassNames;