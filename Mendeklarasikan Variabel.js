//! untuk mendeklarasikan variabel dalam javascript ada 3 cara :
/*  dengan keyword const , let dan var..
    setiap keyword memiliki perbedaan ...
*/

//* var 
var nama = "alex"
var nama ="george"
console.log(`nama = ${nama}`);
 /* keyword var sangat tidak konsisten nilainya...pada umumnya ketika kita mendeklarasikan nama variabel yang
     sama harusnya terjadi pesan eror..jika program kita masih sederhana tentu ini bukan sebuah masalah..
     tapi saat program sudah kompleks, maka tentu kita akan bingung..otak mumet...sariawan dan bibir pecah-pecah

     di atas, kita deklarasikan variabel dengan keyword var dan nama variabel nama...jika di jalankan maka "george" yg akan keluar
*/

//* let
let umur = 20
    umur = 21
console.log(`umur = ${umur}`);
/* keyword let..tidak seperti var...jika kita membuat variabel dengan nama yang sama, maka akan ada pesan eror..
   tetapi..nilai dari let bisa di ubah (tidak konstan) seperti contoh di atas...nilai dari umur awalnya 20 kita bisa ubah ke 21..
   */

//* const
const alamat = "oebufu"
console.log(`alamat = ${alamat}`);
