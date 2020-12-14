//soal 1
{
	var kataPertama = "saya"
	var kataKedua = "senang"
	var kataKetiga = "belajar"
	var kataKeempat = "javascript"
	var kata4Upper = kataKeempat.toUpperCase()
	var out1 = kataPertama+ " " + kataKedua+" "+kataKetiga+" "+kata4Upper

	console.log(out1)
}
//soal 2
{
	var one = "1"
	var two ="2"
	var four = "4"
	var five = "5"
	var numOne = Number(one)
	var numTwo = Number(two)
	var numFour = Number(four)
	var numFive = Number(five)
	var sum = numOne+numTwo+numFour+numFive
	console.log(sum)
}
//soal 3
{
	var kalimat = "wah javascript itu keren sekali"
	var kata1 = kalimat.substring(0,3)
	var kata2 = kalimat.substring(4,14)
	var kata3 = kalimat.substring(15,18)
	var kata4 = kalimat.substring(19,24)
	var kata5 = kalimat.substring(25,31)
	
	console.log("kalimatPertama: " + kata1)
	console.log("kalimatKedua: " + kata2)
	console.log("kalimatKetiga: " + kata3)
	console.log("kalimatKeempat: " + kata4)
	console.log("kalimatKelima: " + kata5)
}
//soal 4
{
	// var nilai = prompt('isi nilai')
	var nilai = 100
	if (nilai>=80) {
		indeks = "A"
	}else if (nilai>=70 && nilai <80) {
			indeks = "B"
	}else if (nilai>=60 && nilai <70) {
			indeks = "C"
	}else if (nilai>=50 && nilai <60) {
			indeks = "D"
	}else{ indeks = "E"}

	console.log(indeks)
}
//soal 5
{
	var tanggal = 22
	var bulan = 7
	var tahun = 2020
	switch(bulan){
		case 1:{ bulan = "Januari";break;}
		case 2:{ bulan = "Februari";break;}
		case 3:{ bulan = "Maret";break;}
		case 4:{ bulan = "April";break;}
		case 5:{ bulan = "Mei";break;}
		case 6:{ bulan = "Juni";break;}
		case 7:{ bulan = "Juli";break;}
		case 8:{ bulan = "Agustus";break;}
		case 9:{ bulan = "September";break;}
		case 10:{ bulan = "Oktober";break;}
		case 11:{ bulan = "November";break;}
		case 12:{ bulan = "Desember";break;}
	}
	var dateTime = tanggal+' '+bulan+' '+tahun
	console.log(dateTime)
}

