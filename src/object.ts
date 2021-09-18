import arraysClassNames from "./arrays";
import validatorType from "./validatorType";

const objectClassNames = (object: {string: validatorType}): string => {
    return arraysClassNames(Object.entries(object));
};

export default objectClassNames;