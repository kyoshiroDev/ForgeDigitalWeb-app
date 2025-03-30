import {Component, AfterViewInit, ElementRef, ViewChild, OnInit} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Import icons Font Awasome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faSquareGithub,} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'fdw-heros-section',
  standalone: true,
  imports: [
    FontAwesomeModule, NgOptimizedImage
  ],
  templateUrl: './heros-section.component.html',
  styleUrl: './heros-section.component.css'
})

export class HerosSectionComponent implements AfterViewInit {

  @ViewChild('heroContainer', { static: false }) heroContainer!: ElementRef;
  @ViewChild('heroTitle', { static: false }) heroTitle!: ElementRef;
  @ViewChild('heroImg', { static: false }) heroImg!: ElementRef;
  @ViewChild('heroLinks', { static: false }) heroLinks!: ElementRef;

  // socials icons
  faLinkedin = faLinkedin;
  faSquareGithub = faSquareGithub;

  ngAfterViewInit() {
    if (!this.heroContainer?.nativeElement) return;

    gsap.fromTo(this.heroTitle.nativeElement.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power2.out' }
    );

    gsap.fromTo(this.heroImg.nativeElement,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
    );

    gsap.fromTo(this.heroLinks.nativeElement.children,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'elastic.out(1, 0.3)', delay: 1 }
    );
  }
}
