let time =0;
let spinPositions = [ '|', '/', '-', '\\']

// loop through spin positions
//print each one with an increasing time delay
//start tim delay at 0 and increase by 50 with each loop

for (let i = 0; i < spinPositions.length; i++){
  setTimeout(() => {
  process.stdout.write(`\r${spinPositions[i]}   `);    //    
}, time);
time+=200
}
