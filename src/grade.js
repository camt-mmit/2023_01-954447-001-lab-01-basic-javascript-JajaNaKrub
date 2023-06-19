const score = parseFloat(process.argv[2]);
let g = '';

if(score >= 80){
    g = 'A';
}else if(score >= 70){
    g = 'B';
}else if(score >= 60){
    g = 'C';
}else if(score >= 50){
    g = 'D';
}else{
    g = 'F';
}

console.log(`Input score: ${score}`);
console.log(`Your grade is ${g}.`);


