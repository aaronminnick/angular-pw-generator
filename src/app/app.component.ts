import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onLettersToggle() {
    this.includeLetters = !this.includeLetters;
  }

  onNumbersToggle() {
    this.includeNumbers = !this.includeNumbers;
  }

  onSymbolsToggle() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    console.log(this);
    this.password = 'password';
  }
}
