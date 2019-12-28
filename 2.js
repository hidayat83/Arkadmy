// Pada sebuah form, terdapat 3 buah field yaitu: Nama, Umur dan Username. Buatlah method/function untuk memvalidasi field-field tersebut, dengan requirement sebagai berikut:
// ●   	Disarankan menggunakan REGEX
// Format Nama: minimal 3 huruf dan harus huruf kapital semuanya
// Format Umur: 2 digit angka
// ●   	Format Username: merupakan kombinasi dari 4 huruf kecil lalu diikuti underscore/garis bawah “_” atau titik “.” dan 3 digit angka
// Clue:
// Peserta hanya diminta membuat function validasi, tidak boleh membuat form HTML.
// Examples:
// -        is_name_valid(“TIARA”)
// 	return true
// -        is_age_valid(21)
// 	return true
// -        is_username_valid(“yani_333”)
// 	return true
// -        is_username_valid(“dian.11”)
// 	return false

function something(str1) {
    var name = str1
    console.log(name)
    for (var i = 0; i < name.length; i++) {
        console.log(name[i])
        if (name.length < 3) {
            return false
        } else {
            return true
        }
    }
}
console.log(something('TIARA'))

function something1(num) {
    var age = num
    if (age < 100) {
        return true
    } else {
        return false
    }
}
console.log(something1(21))

function user(str) {
    var set = str
    var abjd = 'abcdefghijklmnopqrstuvwxyz'
    var angka = '012345678090'
    var count1 = 0
    var count2 = 0
    for (var i = 0; i < set.length; i++) {
        for (var j = 0; j < abjd.length; j++) {
            for (var k = 0; k < angka.length; k++) {
                if (str[i] === abjd[j]) {
                    count1++
                }
                if(str[i]===angka[k]){
                    
                    count2++
                }
            }
        }

                        if (count1 < 3 && count2<2){
                            return false
                        }else if(count1 > 3  && count2 >2){
                            return true
                        }
                    }
    }

console.log(user('yani_333'))
console.log(user('dian.11'))