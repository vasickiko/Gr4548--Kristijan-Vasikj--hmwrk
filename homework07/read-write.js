const fs = require("fs");

const read = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, data)=>{
            if(err) reject(err);
            data = JSON.parse(data);
            resolve(data);
        })                                                                                                                             
    })
}

const write = (fileName, fileData) => {
    return new Promise((resolve, reject) => {
        fileData= JSON.stringify(fileData);

        fs.writeFile(fileName, fileData, (err)=>{
            if(err) reject(err);
            resolve();
        })
    })
}


module.exports = {
    read,
    write,
}