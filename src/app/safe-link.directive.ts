import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    constructor() {
        console.log('safe link directive is active!');
    }

    onConfirmLeavePage(event: MouseEvent) {
        const confirm = window.confirm('Do you want to leave this page?');
        if (confirm){
            return;
        } 
        event?.preventDefault();
    }
}