//nilai awal loop
let i = 1
//total
let sum = 0
//batas loop
let n = 10
//nilai awal deret geometri
let a = 4
//rasio deret geometri
let r = 3

//akan eksekusi hingga kondisi false
while(i <= n){
    //penambhan nilai total
    sum = sum + a
    //perkalian dengan rasio
    a = a * r
    //increment nilai i
    i++
}

//tampilan nilai terakhir sum saat loop berhenti
console.log(sum);