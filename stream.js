import fs from 'fs';

// create read stream
const readStream =fs.createReadStream("input.txt","utf-8");

// read data chunk
readStream.on("data",(chunk)=>{
    console.log(" Read data chunk :"+chunk);
})

// write stream
const writeStream=fs.createWriteStream("output.txt");
writeStream.write("write stream operation");