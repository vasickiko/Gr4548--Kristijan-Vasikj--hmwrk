const { writeFile, readFile, appendFile } = require("./read-write");

async function runFunction() {
    try{ 
        // First read
        await writeFile("data.txt", "John Doe")
        const read1 = await readFile("data.txt")
        console.log('First read -->', read1)
        // Second read
        await appendFile("data.txt", " 25 years")
        const read2 = await readFile("data.txt")
        console.log('Second read -->', read2)
    }catch(err){
        console.log("Error:", err);
    }
}

runFunction();
