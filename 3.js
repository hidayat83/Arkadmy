// Buatlah fungsi untuk menampilkan huruf Vocal dan Konsonant seperti dibawah ini.
// Input 		:  printWords(‘ARKADEMY’)
// Output		: 
// A
// A
// E
// R
// K
// D
// M
// Y


    var vokal = 'AIUEO';
    var tmpVokal = '';
    var tmpKonsonan = '';
    var cek = false;
    function vokalKonsonan(str) {
        for (var i = 0; i < str.length; i++) {
            cek = false;
            for (var j = 0; j < vokal.length; j++) {
                if (str[i] === vokal[j]) {
                    cek = true;
                }
            }
            if (cek) {
                tmpVokal += str[i];
            } else {
                tmpKonsonan += str[i];
            }
        }
        var tamp=''
        var baru= tmpVokal + tmpKonsonan;
        for(var i=0;i<baru.length;i++){
        tamp += baru[i]
        tamp+= '\n'
        }
        
        return tamp
    }
    console.log(vokalKonsonan('ARKADEMY'));

