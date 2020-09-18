var tinggi1 = 200
var tinggi2 = 150
var tinggi3 = 160

console.log("Nilai Tinggi 1 adalah ", tinggi1)
console.log("Nilai Tinggi 2 adalah ", tinggi2)
console.log("Nilai Tinggi 3 adalah ", tinggi3)

console.log("Urutan dari tertinggi ke terendah")

if(tinggi1 > tinggi2){
	if(tinggi1 > tinggi3){
		console.log("Paling tinggi adalah ", tinggi1)
		if(tinggi3 > tinggi2){
			console.log("Urutan Tinggi adalah ", tinggi1, ", ", tinggi3, ", ", tinggi2)
		}		
	}else{
		console.log("Paling tinggi adalah ", tinggi3)
		console.log("Urutan Tinggi adalah ", tinggi3, ", ", tinggi1, ", ", tinggi2)
	}
}else{
	if(tinggi2>tinggi3){
		console.log("Paling tinggi adalah ", tinggi2)
		if(tinggi3>tinggi1){
			console.log("Urutan Tinggi adalah ", tinggi2, ", ", tinggi3, ", ", tinggi1)	
		}else{
			console.log("Urutan Tinggi adalah ", tinggi2, ", ", tinggi1, ", ", tinggi3)
		}
	}else{
		console.log("Paling tinggi adalah ", tinggi3)
		console.log("Urutan Tinggi adalah ", tinggi3, ", ", tinggi2, ", ", tinggi1)
	}
}
