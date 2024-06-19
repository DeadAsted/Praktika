document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
  
      header.addEventListener('click', function() {
        // Закрываем все элементы аккордеона
        accordionItems.forEach(i => {
          if (i !== item) {
            i.classList.remove('open');
            i.querySelector('.accordion-content').style.display = 'none';
          }
        });
  
        // Открываем или закрываем текущий элемент аккордеона
        item.classList.toggle('open');
        const content = item.querySelector('.accordion-content');
        content.style.display = item.classList.contains('open') ? 'block' : 'none';
      });
    });
  });
  