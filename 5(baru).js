// Buatlah sebuah fungsi untuk membuat Bilangan Matriks dengan ordo yang sudah ditentukan. Kemudian jumlahkan bilangan tersebut masing - masing secara diagonal dan kalikan hasil kedua jumlah bilangan diagonal tersebut
// Input: createMatrix(3)
// Output: 

function createMatrix(num) {
    var res=[]
    var temp=[]
    var count = 0
    for (var i = 1; i <= num; i++){

      for (var j = 1; j <= num; j++){
        count++
        res.push(count)
        }
    }
    var temp2=[]
    for(var i=0;i<res.length;i++){
        if(res[i]%2 !==0){
            temp.push(res[i])
        }
    }
   var hasil1=temp[0] + temp[2] +temp[4]
   var hasil2=temp[3] + temp[2]+temp[1]
   var hasil3= hasil1 * hasil2
    
    return hasil3
    
    }
console.log(createMatrix(3))