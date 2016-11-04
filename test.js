const fs = require('fs');

const path = process.argv[2];
const sizes = [];
fs.readdir(path, (_, files) => {
   files.forEach((currFile) => {
      fs.stat(`${path}${currFile}`, (_, stats) => {
         sizes.push(stats.size);
         sizes.sort((a,b) => {
            return a-b;
         })
         for(let i of [1,2,3,4,5]) {
            
         }
      })
   })
});
