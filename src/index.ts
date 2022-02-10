export type TruthyArgumentType = string | object | number;
export type ArgumentType = TruthyArgumentType | null | undefined;

// using `arguments` instead normal spread operator (...) due to performance reasons.
/** Calculates the classNames based on series of arguments */
const lightClassNames: (...args: ArgumentType[]) => string = function () {
    let classNames = '', index = 0, argumentsLength = arguments.length, key;

    // using while instead of for-loop for better performance.
    while (index < argumentsLength) {
        const arg: ArgumentType = arguments[index];
        if (arg) {
            if (typeof arg === 'object') {
                // iterating over object with for-in. In order to improve performance.
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