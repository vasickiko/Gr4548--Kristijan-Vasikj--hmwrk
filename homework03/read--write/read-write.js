const fs = require("fs");

// First write
const writeFile = (fileName, data) => {
    return new Promise((resolve, reject)=>{
        fs.writeFile(fileName, data, (err)=>{
            if(err) reject(err);
            else resolve();
        })
    })
}

// First read
const readFile = (fileName) => {
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, "utf-8", (err, data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}

// Append
const appendFile = (fileName, data) => {
    return new Promise((resolve, reject)=>{
        fs.appendFile (fileName, data, (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

// Second read
const readAfterAppend = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}

module.exports = {
    writeFile,
    readFile,
    appendFile,
    readAfterAppend, 
}

