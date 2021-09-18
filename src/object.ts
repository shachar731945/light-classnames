import arraysClassNames from "./arrays";

const objectClassNames = (object: object): string => {
    return arraysClassNames(Object.entries(object));
};

export default objectClassNames;