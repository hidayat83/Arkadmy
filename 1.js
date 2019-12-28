// Buatlah sebuah method/function yang menerima dua parameter yakni String (untuk nama) dan angka (untuk umur) lalu me-return biodata asli Anda, dengan ketentuan sebagai berikut:
// name (String, diambil dari parameter pertama)
// age (Number, diambil dari parameter ke dua)
// address (String)
// hobbies (Array)
// is_married (Boolean)
// list_school (Array of Object) with key name, year_in, year_out, and major (if any, if no set “null” )
// skills (Array of Obj) with key skill_name and level (beginner, advanced, expert)
// interest_in_coding (Boolean)
// 	Return value harus berformat JSON dan sesuai ketentuan di atas.
// Pada readme sebutkan kegunaan JSON pada REST API.
// Berikut adalah contoh dari JSON format: https://api.bukalapak.com/v2/products/f3vi.json

function something(str,num){
    var biodataObj = {
        "name": str,
        "Age": num,
        "address": 'Sunter Jaya ,Jakarta Utara ',
        "hobbies": [
          'Ngoding', 'Browsing', 'Olahraga', 'Adventure' 
        ],
        "is_married": false,
        "list_school": [
            {
          "highSchool": 'SMAN Budi Utomo Jombang,2009-20012',
          "university": 'Universtas Bsi,2014-2019'
        }
    ],
        "skill": [
          {
            "HTML5": "70 %",
            "CSS": "70 %",
            "Javascript": "70 %",
            "C++": "50 %",
          }
        ]
      }
    
      return biodataObj
}
console.log(something('Sinung Hidayat',25))