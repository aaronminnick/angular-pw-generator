import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pwLength = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onLengthInput(value : string) {
    this.pwLength = parseInt(value) || 0;
  }

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
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) validChars += letters;
    if (this.includeNumbers) validChars += numbers;
    if (this.includeSymbols) validChars += symbols;

    let generatedPW = '';
    for (let i = 0; i < this.pwLength; i++) {
      generatedPW += validChars[Math.floor(Math.random()*validChars.length)];
    }

    this.password = generatedPW;
  }
}
