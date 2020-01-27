import FDObjectModel from "../orm/FDObjectModel";


// this function converts raw csv data to array of objects
function processDataFromFile(data) {
    if (data) {
        let split = data.split('\n');
        let headers = split.shift();
        return split.map((item, index) => {
            let obj = new FDObjectModel();
            let subArr = item.split('","');
            let keys = Object.getOwnPropertyNames(obj);
            let tmp = keys;
            if (keys.length > subArr.length) {
                tmp = subArr;
            }
            for (let i = 0; i < tmp.length; i++) {
                obj[keys[i]] = subArr[i];
            }
            return obj;
        });
    }
    return null;
}

export {processDataFromFile}