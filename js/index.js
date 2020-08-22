function checkNgto(x) {
	var flag = true;
	if (x < 2) flag = false;
	else {
		for (var i = 2; i <= Math.sqrt(x); i++) {
			if (x % i == 0) {
				flag = false;
				break;
			}
		}
	}
	return flag;
}

function check() {
	var input = document.getElementById("nguyento");
	checkNgto(input.value)
		? alert(`${input.value} la so nguyen to`)
		: alert("khong phai so nguyen to");
}
