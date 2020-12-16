var readBooksPromise = require('./promises.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
		// metode hell
// Lanjutkan code untuk menjalankan function readBooksPromise 
// readBooksPromise(9000, books[0]).then(
// 	function (sisaWaktu) {
// 		readBooksPromise(sisaWaktu, books[1]).then(
// 			function (sisaWaktu) {
// 				readBooksPromise(sisaWaktu, books[2]).then(
// 					function (sisaWaktu) {

// 					})
// 					.catch(function (err) {
// 						console.log(err)
// 					})
					
// 			})
// 	})

		// rekursif
function mulaiBaca(i, sisaWaktu) {
	readBooksPromise(sisaWaktu, books[i]).then(
		function (sisaWaktu) {
			if (i <= books.length-2) {
				i++
				mulaiBaca(i, sisaWaktu)
			}
		}).catch(function (err) {
			console.log(err)
		})
}
mulaiBaca(0, 10000)