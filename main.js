
import { reservationTable } from './reservation.js'



window.addEventListener("DOMContentLoaded", () => {
  // Плавная прокрутка для навигации
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Обработчик кнопки бронирования
  const reserveBtn = document.getElementById('reserveBtn');
  const openModal = document.querySelector(".modal-overlay")
  if (reserveBtn) {
    reserveBtn.addEventListener('click', () => {
      openModal.classList.toggle("close")
      document.body.style.overflow = 'hidden';
    });
  }
  // закрытие модал
  const modalCancel = document.querySelector(".modal-cancel")
    // Закрытие по кнопке отмена
  modalCancel.addEventListener('click', () => {
      openModal.classList.toggle("close")
      document.body.style.overflow = '';

  });
  // Закрытие по Escape
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
        openModal.classList.add("close")
        document.body.style.overflow = '';
    }
  };
  document.addEventListener('keydown', handleEscape);
  // закрытие модалки по подложке
  openModal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      openModal.classList.toggle("close");
      document.body.style.overflow = '';
    }
});

  // Эффект прозрачности шапки при прокрутке
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(248, 250, 252, 0.1))';
        header.style.backdropFilter = 'blur(15px)';
        header.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.15)';
        header.style.border = '0px';
      } else {
        header.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.90))';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 2px 10px rgba(59, 130, 246, 0.1)';
      }
    }
  });

  // Мобильное меню (базовая функциональность)
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('open');
      });
    });
  }
})