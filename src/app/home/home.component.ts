import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const tabs = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.package-card');

    // Initialize first tab as active
    if (tabs.length > 0 && cards.length > 0) {
      tabs[0].classList.add('active');
      cards[0].classList.add('active');
    }

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and cards
        tabs.forEach((t) => t.classList.remove('active'));
        cards.forEach((c) => c.classList.remove('active'));

        // Add active class to clicked tab
        const tabId = (tab as HTMLElement).getAttribute('data-tab');
        tab.classList.add('active');

        if (tabId) {
          const card = document.getElementById(`${tabId}-card`);
          if (card) {
            card.classList.add('active');
          }
        }
      });
    });

    // Hover effect
    cards.forEach((card) => {
      const cardEl = card as HTMLElement;

      cardEl.addEventListener('mouseenter', () => {
        if (cardEl.classList.contains('active')) {
          cardEl.style.transform = 'translateY(-5px)';
          cardEl.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
        }
      });

      cardEl.addEventListener('mouseleave', () => {
        if (cardEl.classList.contains('active')) {
          cardEl.style.transform = 'translateY(0)';
          cardEl.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        }
      });
    });
  }
}
