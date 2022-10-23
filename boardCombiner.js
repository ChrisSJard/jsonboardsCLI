/*
* 1. CLI that accepts a directory as an input 
* 2. Combine all board lists inside the JSON files into a single JSON output
* 3. Order the board list alphabetically first by vendor, and then by name
* 4 Include metadata in the JSON output under a _metadata object including:
* 5 The total number of unique vendors
* 6 The total number of boards
* 7 Output the resultant JSON
*/


const fs = require("fs").promises;
const sys = require("fs");
const path = require("path");
const prompt = require('prompt-sync')({sigint: true});

async function main(inputPath) {
    const newObject = {"boards" :[],
                   "_metadata" : {
                    "total_vendors":0,
                    "total_boards": 0
    }};
    inputPath
    const dirLocation = inputPath;
    const files = await directoryReader(dirLocation);
    for (let file of files) {
        if (path.extname(file) === ".json"){
            const data = await fileReader(dirLocation, file);
            newObject.boards =[...newObject.boards, ...data.boards];
        }
    }
    newObject._metadata.total_boards = newObject.boards.length;
    newObject._metadata.total_vendors = newObject.boards.map(item => item.vendor).filter((value, index, self) => self.indexOf(value) === index).length;
    sortBoards(newObject);
    WriteToFile(dirLocation,newObject);
    console.log("Output file generated");
};

function sortBoards(newObject){
    newObject.boards.sort( (obj1, obj2) => {
        if (obj1.vendor > obj2.vendor){
            return 1;
        }else if ( obj1.vendor < obj2.vendor){
            return -1;
        }
    
        if (obj1.name > obj2.name){
            return 1
        }else if (obj1.name < obj2.name){
            return -1
        }else{
            return 0;
        }
    });
}

async function WriteToFile(dirLocation,newObject){
    fs.writeFile(path.join(dirLocation, 'output.json'), JSON.stringify(newObject));
}

async function directoryReader(name){
    return files = await fs.readdir(name);
}

async function fileReader(dirLocation, file){
    const jsonString = await fs.readFile(path.join(dirLocation, file), 'utf-8');
    return JSON.parse(jsonString);
}

let runner = true;
do{
    const input = prompt('Enter path to directory or Enter"exit": ');
    if (input === "exit") {
        runner = false;
    }else{
        try {
            const inputPath = path.resolve(input).split(path.sep).join("/");
            if (sys.statSync(inputPath).isDirectory()){
                main(inputPath);
                runner = false;
            }   
        }catch (error) {
            console.log(`The input path ${error.path} is not a valid input!`);
        }
    }
} while(runner)
