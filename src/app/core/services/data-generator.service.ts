import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataGeneratorService {
  constructor() {}

  public getRandomAvatar = () => {
    return `https://api.adorable.io/avatars/${Math.floor(
      Math.random() * Math.floor(1000)
    )}`;
  };

  public getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
}
