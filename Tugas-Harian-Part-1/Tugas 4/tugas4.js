//soal 1
var text1 = ""
console.log('looping pertama')
for ( var i = 1; i <20; i++ ) {
	if (i % 2 == 0) {
		text1 += i + " - I Love Coding " + '\n'
	}
}         
console.log(text1)
					

console.log('looping kedua')
var text2 = ""
for (var i = 20; i > 0; i--) {
	if (i % 2 == 0) {
		text2 += i + ' - I Will Become Fronted Developer ' + '\n'
	}
}         
console.log(text2)
					

//soal 2
var a = ""
for (var i = 1; i < 20; i++) {
	if (i % 2 != 0 && i % 3 == 0) {
		a += i + ' - I Love Coding ' + '\n'
	}else if (i % 2 == 0) {
		a += i + ' - Berkualitas ' + '\n'
	}else{
		a += i + ' - Santai ' + '\n'
	}
 }        
 console.log(a)
					
//soal 3
var text2 = ''
var c = 7
for (a = 1; a < c; a++) {
	for (b = 1; b < a; b++) {
		text2 += ' # ' 
	}
	text2 += '\n' + '\n'
}         
console.log(text2)

//soal 4
var kalimat = 'saya sangat senang belajar javascript'
var arr = kalimat.split(' ')
console.log(arr)

//soal 5
var buah = ''
var daftarBuah = ['2.apel' ,'5.jeruk', '3.anggur', '4.semangka', '1.mangga']
var sortBuah = daftarBuah.sort()
for (var i = 0; i < sortBuah.length; i++) {
	buah += sortBuah[i] + '\n'
}         
console.log(buah)
