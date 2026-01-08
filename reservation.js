export function reservationTable() {
  const modal = document.querySelector('.modal-overlay');
  
  // Устанавливаем минимальную дату (сегодня)
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('date').setAttribute('min', today);

  // Обработчики событий
  const closeModal = () => {
    modal.classList.add('close');
    document.body.style.overflow = '';
  };

  // Обработка отправки формы
  modal.querySelector('.reservation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const reservationData = Object.fromEntries(formData);
    
    // Здесь можно добавить отправку данных на сервер
    console.log('Данные бронирования:', reservationData);
    
    // Показываем сообщение об успехе
    showSuccessMessage();
    closeModal();
  });

  // Функция показа сообщения об успехе
  function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-notification';
    successMessage.innerHTML = `
      <div class="success-content">
        <div class="success-icon">✓</div>
        <h4>Бронирование отправлено!</h4>
        <p>Мы свяжемся с вами в ближайшее время для подтверждения.</p>
      </div>
    `;

    const successStyles = `
      <style>
        .success-notification {
          position: fixed;
          top: 20px;
          right: 20px;
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          z-index: 3000;
          animation: slideInRight 0.5s ease;
          border-left: 4px solid #27ae60;
        }

        .success-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .success-icon {
          width: 40px;
          height: 40px;
          background-color: #27ae60;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .success-content h4 {
          margin: 0 0 0.5rem 0;
          color: var(--primary-color);
        }

        .success-content p {
          margin: 0;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .success-notification {
            top: 10px;
            right: 10px;
            left: 10px;
            right: 10px;
          }
        }
      </style>
    `;

    document.head.insertAdjacentHTML('beforeend', successStyles);
    document.body.appendChild(successMessage);

    // Автоматически убираем уведомление через 5 секунд
    setTimeout(() => {
      successMessage.style.animation = 'slideInRight 0.5s ease reverse';
      setTimeout(() => {
        if (document.body.contains(successMessage)) {
          document.body.removeChild(successMessage);
        }
      }, 500);
    }, 5000);
  }

  // Фокус на первом поле
  setTimeout(() => {
    document.getElementById('name').focus();
  }, 100);
}