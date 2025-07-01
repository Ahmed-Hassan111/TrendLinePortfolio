import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink,TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', animate('0.5s ease-out')),
    ]),
  ],
})
export class HomeComponent implements OnInit,AfterViewInit{
  arrowUp = false;
  state = 'active'; // Trigger animation on load
  reasons = [
    { text: 'Home.WhyChooseUSReason1' },
    { text: 'Home.WhyChooseUSReason2' },
    { text: 'Home.WhyChooseUSReason3' },
    { text: 'Home.WhyChooseUSReason4' },
  ];

  ngOnInit() {
    // Animation trigger can be managed here if needed
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = '*'; // Triggers animation
    }, 100); // Small delay to allow DOM render
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // إذا كنت في الأسفل أظهر سهم للأعلى، إذا كنت في الأعلى أظهر سهم للأسفل
    this.arrowUp = window.pageYOffset > 100;
  }

  scrollArrowAction() {
    if (this.arrowUp) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }
  }


