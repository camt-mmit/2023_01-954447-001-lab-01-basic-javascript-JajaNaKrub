const n = parseInt(process.argv[2]);
for(let i=1; i<= n;i++){
    let line = '';
    for(let k = n; k>i;k--){
        line += " ";
    }
    line += '*';
    for(let j = 1; j < 2*(i-1);j++){
        line += " ";
    }
    if(i==1){
        line += " ";
    }else{
        line += "*";
    }
    console.log(line);
}
for(let i=n-1; i>= 1;i--){
    let line = '';
    for(let k = n; k>i;k--){
        line += " ";
    }
    line += '*';
    for(let j = 1; j < 2*(i-1);j++){
        line += " ";
    }
    if(i==1){
        line += " ";
    }else{
        line += "*";
    }
    console.log(line);
}