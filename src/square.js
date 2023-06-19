const n = parseInt(process.argv[2]);
for(let i=1; i<= n;i++){
    let line = '';
    if(i==1 || i==n){
        for(let j = 1; j<=n;j++){
            line += "?";
        }
    }else{
        for(let j = 1; j==1;j++){
            line += "?";
            for(let k = 1;k<n-1;k++){
                line += " ";
            }
        }
        line += "?";
    }

    console.log(line);
}