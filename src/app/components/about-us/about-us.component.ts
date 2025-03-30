import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'fdw-about-us',
  standalone: true,
  imports: [NgOptimizedImage,],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  protected readonly abouts = signal<{name:string, content: string | number}[]>([
    {name:<string>"Nom :", content:<string>"Grégory Tahir"},
    {name:<string>"Job :", content:<string>"Développeur web JavaScript"},
    {name:<string>"Age :", content:<string | number> 39 + ` Ans`},
    {name:<string>"Ville :", content:<string>"Essonnes, Île-de-France"}
  ])
}
