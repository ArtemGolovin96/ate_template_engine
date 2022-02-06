
const getController = (obj, path, defaultValue) => {
    const keys = path.split('.');
    let result = obj;
    for (let key of keys) {
        const result = result[key];
        if(result === undefined) {
            return defaultValue;
        }
    }

    return result ?? defaultValue;

    // return keys.reduce((result, key) => result[key], obj);
}; 

module.exports = getController;