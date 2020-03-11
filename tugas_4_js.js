function tinggibadan (){
var	budi = 160;
var fiki = 165;
var aan = 180;
	if (budi > fiki) {
		if (budi > aan) {
		console.log("budi tertinggi dari semuanya")
		}else {
			console.log("budi tertinggi kedua")}
	}else{
		if (budi < aan) {
		console.log("budi terpedek")
		}else{
			console.log("budi terpendek kedua")

		}
	}
	if (fiki > budi) {
		if (fiki > aan) {
		console.log("fiki tertinggi dari semuanya")
		}else {
			console.log("fiki tertinggi kedua")}
	}else{
		if (fiki < aan) {
		console.log("fiki terpedek")
		}else{
			console.log("fiki terpendek kedua")

		}
	}
	if (aan > budi) {
		if (aan > fiki) {
		console.log("aan tertinggi dari semuanya")
		}else {
			console.log("aan tertinggi kedua")}
	}else{
		if (aan < fiki) {
		console.log("aan terpedek")
		}else{
			console.log("aan terpendek kedua")

		}
	}


}

tinggibadan()