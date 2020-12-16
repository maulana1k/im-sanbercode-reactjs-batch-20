var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
	//metode hell
// readBooks(10000, books[0], function(sisaWaktu){
// 	readBooks(sisaWaktu ,books[1], function (sisaWaktu) {
// 		readBooks(sisaWaktu , books[2], function (sisaWaktu) {
// 			readBooks(sisaWaktu, books[3], function (sisaWaktu) {
// 			})
// 		})
// 	})
	
// })

	//rekursif
function mulaiBaca(i, sisaWaktu) {
	readBooks(sisaWaktu, books[i], function(sisaWaktu){
		if (i <= books.length-2 ) {
			i++
			mulaiBaca(i, sisaWaktu)
		}
		
	}) 
}
mulaiBaca(0, 10000)
