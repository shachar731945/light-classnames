export type TruthyArgumentType = string | object | number;
export type ArgumentType = TruthyArgumentType | null | undefined;

type lcnType = (...args: ArgumentType[]) => string;

const lightClassNames: lcnType = function(): string {
    let finalString = '', i = 0, l = arguments.length, key;

    while (i < l) {
        const arg: ArgumentType = arguments[i];
        if (arg) {
            if (typeof arg === 'object') {
                for (key in arg) {
                    if (arg[key as keyof object]) {
                        finalString && (finalString += ' ');
                        finalString += key;
                    }
                }
            } else {
                finalString && (finalString += ' ');
                finalString += arg;
            }
        }
        i++;
    }

    return finalString;
};

export default lightClassNames;