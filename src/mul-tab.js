const n = parseInt(process.argv[2]);
for(let i=1; i<= 12;i++){
    let line = '';
    for(let j = 2;j<=n;j++){
        line += `${i*j}`.padStart(5,' ');
    }
    console.log(line);
}