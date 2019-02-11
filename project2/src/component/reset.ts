import { Component, Output, EventEmitter } from "@angular/core";

@Component ({
    selector : "reset-page",
    template : `<button ion-button color="danger" (click)="onReset('all')">Reset All</button>
    <button ion-button color="danger" (click)="onReset('tap')">Reset 'Taps'</button>
    <button ion-button color="danger" (click)="onReset('press')">Reset 'Presses'</button>`
})
export class ResetComponent {
    @Output() didReset = new EventEmitter<string>();
    onReset(type: string) {
        this.didReset.emit(type);
    }
}