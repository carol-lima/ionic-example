import { AbstractControl } from '@angular/forms';
 
export function IsFullName(fullName: AbstractControl) {

	// Não valida se o campo for vazio
	if (fullName.value == undefined || fullName.value.trim() == ''){
		return null;
	}

	// Separa o nome completo pelo espaço
	var splitted = fullName.value.toString().split(" ", 2); 

	// Verifica se o primeiro nome não está preenchido com espaço
    if (splitted[0].trim() == '') {
        return { FullNameError: true };            
    }	 

	// Verifica se o array possui informação na posição 1. 
    if (splitted[1] == undefined || splitted[1].trim() == '') {
        return { FullNameError: true };            
	}
	
	return null;

}
 
