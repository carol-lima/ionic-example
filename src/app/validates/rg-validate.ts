import { AbstractControl } from '@angular/forms';

export function IsRG(control: AbstractControl) {

    if (control.value === '11.111.111-1' ||
        control.value === '22.222.222-2' ||
        control.value === '33.333.333-3' ||
        control.value === '44.444.444-4' ||
        control.value === '55.555.555-5' ||
        control.value === '66.666.666-6' ||
        control.value === '77.777.777-7' ||
        control.value === '88.888.888-8' ||
        control.value === '99.999.999-9' ||
        control.value === '00.000.000-0') {
            return { RGError: true };            
    } else {
        return null;
    }
}



