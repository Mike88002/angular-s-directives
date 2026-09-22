import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    queryParam = input('myapp', {alias: 'appSafeLink'});
    
    constructor() {
        console.log('safe link directive is active!');
    }

    onConfirmLeavePage(event: MouseEvent) {
        const confirm = window.confirm('Do you want to leave this page?');
        if (confirm){
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
            return;
        } 
        event?.preventDefault();
    }
}