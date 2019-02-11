import { Component } from "@angular/core";

@Component({
    selector : "touch-page",
    template : `<div class="gestures" (click)="onElementClicked()">
    
    Click me
  </div>
  <div class="gestures" (tap)="onElementClicked()">
      
      Tap me
    </div>
    <div class="gestures" (press)="onElementPressed()">
        
        longpress me
      </div>
      <button (click)="onClick()"
          ion-button 
          color="primary">
            Primary color button
  </button>
  <button (click)="onClick()"
          ion-button 
          outline
          large
          color="secondary">
            Secondary color outline large button
  </button>
  <button (click)="onClick()"
          ion-button 
          clear
          full
          color="secondary">
            Secondary color clear full button
  </button>
  <button (click)="onClick()"
          ion-button 
          round
          block
          color="secondary">
            Secondary color round block button
  </button>
  <button (click)="onClick()"
  ion-button 
  round
  block
  color="secondary"
  icon-only 
  icon-left >
  <ion-icon name="home"></ion-icon>
    Secondary color round block button with icon 
</button>
<hr>
<ion-list>
  <ion-item>
    A normal list
  </ion-item>
  <button ion-item>
    A button item
  </button>
</ion-list>
<ion-list>
    <ion-item>
      <ion-icon name="star"item-left ></ion-icon>
      <h1>The heading</h1>
     <p>A normal item</p>>
    </ion-item>
    <button ion-item>
      <ion-avatar>
        <img src="../../../resources/icon.png">
      </ion-avatar>
      A button item
    </button>
  </ion-list>
  <ion-list no-lines inset >
      <ion-item>
        A normal list with no lins in between
      </ion-item>
      <button ion-item>
        A button item
      </button>
    </ion-list>
    <hr>
    <ion-item-group>
      <ion-item-divider>A</ion-item-divider>
        <ion-item>
          Apples
        </ion-item>
        <ion-item>
          Avocados
        </ion-item>
        <ion-item-divider>B</ion-item-divider>
        <ion-item>Bananas</ion-item>
        <ion-item>Berries</ion-item>
      </ion-item-group>
      <ion-list>
        <ion-list-header>Privacy</ion-list-header>
        <ion-item>Tracking</ion-item>
        <ion-item>Personal image</ion-item>
        
      </ion-list>
      <ion-list>
          <ion-list-header>Sharing</ion-list-header>
          <ion-item>Tracking</ion-item>
          <ion-item>Personal image</ion-item>
          
        </ion-list>
        <ion-grid>
          <ion-row>
            <ion-col width-20>first column</ion-col>
            <ion-col>Second colomn</ion-col>
          </ion-row>
          <ion-row>
              <ion-col offset-50>first column</ion-col>
              <ion-col>Second colomn</ion-col>
            </ion-row>
        </ion-grid>
        `
})
export class TochComponent {
    
    onClick() {
        console.log("Button clicked!");
      }
      onElementClicked() {
        console.log("i'm clicked /touched");
      }
      onElementPressed() {
        console.log("i was long pressed"); 
      }
    
}