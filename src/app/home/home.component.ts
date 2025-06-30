import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink,TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{
  arrowUp = false;

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

  // ngAfterViewInit(): void {
  //   const tabs = document.querySelectorAll('.tab');
  //   const cards = document.querySelectorAll('.package-card');

    // Initialize first tab as active
    // if (tabs.length > 0 && cards.length > 0) {
    //   tabs[0].classList.add('active');
    //   cards[0].classList.add('active');
    // }

    // tabs.forEach((tab) => {
    //   tab.addEventListener('click', () => {
    //     // Remove active class from all tabs and cards
    //     tabs.forEach((t) => t.classList.remove('active'));
    //     cards.forEach((c) => c.classList.remove('active'));

    //     // Add active class to clicked tab
    //     const tabId = (tab as HTMLElement).getAttribute('data-tab');
    //     tab.classList.add('active');

    //     if (tabId) {
    //       const card = document.getElementById(`${tabId}-card`);
    //       if (card) {
    //         card.classList.add('active');
    //       }
    //     }
    //   });
    // });

    // Hover effect
    // cards.forEach((card) => {
    //   const cardEl = card as HTMLElement;

    //   cardEl.addEventListener('mouseenter', () => {
    //     if (cardEl.classList.contains('active')) {
    //       cardEl.style.transform = 'translateY(-5px)';
    //       cardEl.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
    //     }
    //   });

    //   cardEl.addEventListener('mouseleave', () => {
    //     if (cardEl.classList.contains('active')) {
    //       cardEl.style.transform = 'translateY(0)';
    //       cardEl.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    //     }
    //   });
    // });
  }


