const { log } = require("console");
const fs = require("fs")
//  creating a file
// Sync - blocking operation
// fs.writeFileSync("./text.txt", "this file is created through file.js with sync")  // it can also rewrite
// // Async - non - blocking operation
// fs.writeFile("./text.txt", "this file is created through file.js with  async", (err)=>{})  // it can also rewrite


//  reading a file
// sync
// const result = fs.readFileSync("./text.txt", "utf-8") // here utf-8 is code which convert file(binary) into readable(human readable) format
// console.log(result);


// async
// fs.readFile("./text.txt", "utf-8", (err, result)=>{
//     if(err){
//         console.log("error occured", err);
        
//     }else{
//         console.log(result);
        
//     }
// }),


//  adding item in same file
// fs.appendFileSync("./text.txt",new Date().getDate().toLocaleString())
// fs.appendFileSync("./text.txt",`${Date.now()} Hey There\n`)


//  copy a file
// fs.cpSync("./text.txt", "./copy.txt")


//  delete a file
// fs.unlinkSync("./copy.txt")
// console.log(fs.statSync("./text.txt"))

//  creating a folder
// fs.mkdirSync("folder")



// ----------------
//  eg of blocking operation
// console.log("1");
// const result = fs.readFileSync("./copy.txt", "utf-8")
// console.log(result);

// console.log("2");

// // eg of non - blocking
// console.log("1");
// fs.readFile("./copy.txt", "utf-8", (err, result)=>{
//     console.log(result);
    
// })
// console.log("2");



// -------------------------------
//  for taking information of your operating system
const os = require("os")
console.log(os.cpus().length);
// answer - 8, means you can increase ypou thread(worker) pool size upto 12,  by default thread pool size - 4



