import {Component, signal, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'fdw-competences',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent implements AfterViewInit {
  @ViewChild('competencesContainer', {static: true}) competencesContainer!: ElementRef;
  protected readonly competencesFront = signal<{src:string, alt:string}[]>([
    {src:"assets/Images/html.svg", alt:"HTML 5"},
    {src:"assets/Images/css.svg", alt:"CSS 3"},
    {src:"assets/Images/tailwind.webp", alt:"Tailwind CSS"},
    {src:"assets/Images/js.svg", alt:"JavaScript"},
    {src:"assets/Images/angular.svg", alt:"Angular"},
    {src:"assets/Images/Nextjs.webp", alt:"Next.js"}
])

  ngAfterViewInit() {
    if (!this.competencesContainer?.nativeElement) return;

    const images = this.competencesContainer.nativeElement.querySelectorAll('img');

    gsap.fromTo(images,
      {opacity: 0, x: -100, rotate: -360},
      {
        opacity: 1, x: 0, rotate: 0, duration: 1, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: {
          trigger: this.competencesContainer.nativeElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }
}
