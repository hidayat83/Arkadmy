// Buatlah fungsi/method untuk mengurutkan angka dari kecil ke besar. Parameter yang diberikan adalah string yang berisi deret angka. Parameter juga bisa berisi huruf/string di dalamnya. Fungsi harus menghapus/menghilangkan string yang mungkin ada di dalam parameter tersebut. Jika tidak ada angka di dalam string maka outputnya adalah “No number found in parameter!”.
// Input		: sortNumber(“48172a94”)
// Output 	: 1244789


// Input		: sortNumber(“abc”)
// Output	: “No number found in parameter!” 


// Input		: sortNumber(“94a”)
// Output	: 49
 function something(inp){
     var number='1234567890'
     var temp=[]
    for(var i=0;i<inp.length;i++){
        for(var j=0;j<number.length;j++){
            if(inp[i]===number[j]){
                temp.push(inp[i])
            }
        }
    }
    // console.log(temp)
    temp.sort()
    var temp2=''
    for(var i=0;i<temp.length;i++){
        temp2 += temp[i]
    }
    if( temp.length===0){
        return 'No number found in parameter'
    }else{

    return  temp2
    }
}
 console.log(something('48172a94'))
 console.log(something('94a'))
 console.log(something('abc'))