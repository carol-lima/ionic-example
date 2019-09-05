import { AbstractControl } from '@angular/forms';

export function IsTelefone(control: AbstractControl) {

    const regexp = new RegExp(/^\(\d{2}\) \d{4,5}-\d{4}$/gi); 
    const retorno = regexp.test(control.value);
    
    if (!retorno ||
        control.value === '(11) 11111-1111' ||
        control.value === '(11) 1111-1111'  ||
        control.value === '(22) 22222-2222' ||
        control.value === '(22) 2222-2222'  ||
        control.value === '(33) 33333-3333' ||
        control.value === '(33) 3333-3333'  ||
        control.value === '(44) 44444-4444' ||
        control.value === '(44) 4444-4444'  ||
        control.value === '(55) 55555-5555' ||
        control.value === '(55) 5555-5555'  ||
        control.value === '(66) 66666-6666' ||
        control.value === '(66) 6666-6666'  ||
        control.value === '(77) 77777-7777' ||
        control.value === '(77) 7777-7777'  ||
        control.value === '(88) 88888-8888' ||
        control.value === '(88) 8888-8888'  ||
        control.value === '(99) 99999-9999' ||
        control.value === '(99) 9999-9999') {
            return { TelefoneError: true };            
    } else {
        return null;
    }
}



