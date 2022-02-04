export type TruthyArgumentType = string | object | number;
export type ArgumentType = TruthyArgumentType | null | undefined;

type lcnType = (...args: ArgumentType[]) => string;

// using `arguments` instead normal spread operator (...) due to performance reasons.
const lightClassNames: lcnType = function(): string {
    let finalString = '', index = 0, argumentsLength = arguments.length, key;

    // using while instead of forloop for better performance.
    while (index < argumentsLength) {
        const arg: ArgumentType = arguments[index];
        if (arg) {
            if (typeof arg === 'object') {
                // iterating over object with for-in again in order to improve performance.
                for (key in arg) {
                    if (arg[key as keyof typeof arg]) {
                        finalString && (finalString += ' ');
                        finalString += key;
                    }
                }
            } else {
                finalString && (finalString += ' ');
                finalString += arg;
            }
        }
        index++;
    }

    return finalString;
};

export default lightClassNames;