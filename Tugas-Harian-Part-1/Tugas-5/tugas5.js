//soal 1
console.log('jawaban 1')
function halo(){
	return 'Halo Sanbers!'
}
console.log(halo())

//soal 2
console.log('jawaban 2')
function kalikan(x, y) {
	return x*y
}
var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

//soal 3
console.log('jawaban 3')
function introduce(a,b,c,d) {
	return 'Nama saya ' + a + ', umur saya '+b+'tahun,' 
			+ 'alamat saya di ' + c + ', dan saya punya hobi ' + d + '!'
}
var nama = "Jhon"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
var perkenalan = introduce(nama,age,address,hobby)
console.log(perkenalan)

//soal 4
console.log('jawaban 4')
var arrayDataPeserta = ['Asep', 'laki-laki', 'baca buku', 1922]

var dataPeserta = {}
dataPeserta.nama = arrayDataPeserta[0]
dataPeserta.gender = arrayDataPeserta[1]
dataPeserta.hobby = arrayDataPeserta[2]
dataPeserta['tanggal lahir'] = arrayDataPeserta[3]
console.log(dataPeserta)

//soal 5
console.log('jawaban 5')
var buahBuahan = [
	{
		nama : 'Strawberry',
		warna : 'merah',
		adaBiji : 'tidak',
		harga : 9000
	},
	{
		nama : 'Jeruk',
		warna : 'oranye',
		adaBiji : 'ada',
		harga : 8000
	},
	{
		nama : 'Semangka',
		warna : 'merah & hijau',
		adaBiji : 'ada',
		harga : 10000
	},
	{
		nama : 'Pisang',
		warna : 'kuning',
		adaBiji : 'tidak',
		harga : 5000
	},
]
console.log(buahBuahan[0])

//soal 6
console.log('jawaban 6')
var dataFilm = []

function uploadFilm(judul,durasi,genre,tahun) {
	return dataFilm.push({
		'judul film' : judul,
		durasi : durasi,
		genre : genre,
		'tahun terbit' : tahun
	})
}
var film = [uploadFilm('Avengers:Endgame', '3 jam 2 menit', 'Laga/Fiksi', 2019 ),
		   	uploadFilm('Star Wars:Rise of The SkyWalker', '2 jam 22 menit', 'Ilmiah/Fiksi', 2019 ),
		   	uploadFilm('Avatar', '2 jam 42 menit', 'Ilmiah/Fiksi', 2009 ),
		   	uploadFilm('Despicable Me 3', '1 jam 36 menit', 'Komedi/Fiksi', 2017 )]
			
console.log(dataFilm)
