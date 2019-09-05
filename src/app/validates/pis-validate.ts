import { AbstractControl } from '@angular/forms';
 
export function IsPIS(pis: AbstractControl) {
 
    let total: number = 0;
    let resto: any = 0;
    let numPIS: any;
    let strResto: string = "";
    let ftap: any = "3298765432";
    var i;
    
    numPIS = pis.value.toString();
    numPIS = numPIS.replace(/\./gi, "");
    numPIS = numPIS.replace(/\-/gi, "");
			
	if (!numPIS || numPIS < 11) {
        return { PISError: true };
	}
	
	for (i = 0; i <= 9; i++) {
		let resultado = (numPIS.slice(i,i + 1)) * (ftap.slice(i,i + 1));
		total = total + resultado;
	}
	
	resto = (total % 11);
	
	if (resto != 0) {
		resto = 11 - resto;
	}
	
	if (resto == 10 || resto == 11) {
		strResto = resto + "";
		resto = strResto.slice(1, 2);
	}
	
	if (resto != (numPIS.slice(10, 11))){
        return { PISError: true };
	}
    
    // return true;
    return null;
}
 
function ValidaPis(pis) {
	
	if (!IsPIS(pis)) {
		console.log("PIS INVALIDO ", pis);
	} else {
		console.log("PIS VALIDO ", pis);
	}
}