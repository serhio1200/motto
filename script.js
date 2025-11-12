// В модуле формы добавьте обработчики для новых полей
function init() {
  // ... существующий код ...
  
  // Обработчики для пробега (конвертация км/мили)
  const mileageKmEl = document.getElementById('mileage_km');
  const mileageMilesEl = document.getElementById('mileage_miles');
  
  if (mileageKmEl) {
    mileageKmEl.addEventListener('input', function() {
      const km = parseFloat(this.value) || 0;
      const miles = km * 0.621371;
      if (mileageMilesEl) mileageMilesEl.value = miles.toFixed(0);
      updateMileageDisplay();
    });
  }
  
  if (mileageMilesEl) {
    mileageMilesEl.addEventListener('input', function() {
      const miles = parseFloat(this.value) || 0;
      const km = miles * 1.60934;
      if (mileageKmEl) mileageKmEl.value = km.toFixed(0);
      updateMileageDisplay();
    });
  }
  
  // Обработчики для подсказок классов и коробок передач
  const classSelect = document.getElementById('motorcycle_class');
  const transmissionSelect = document.getElementById('transmission_type');
  const classTooltip = document.getElementById('class_tooltip');
  const transmissionTooltip = document.getElementById('transmission_tooltip');
  
  if (classSelect && classTooltip) {
    classSelect.addEventListener('change', function() {
      const selectedOption = this.options[this.selectedIndex];
      const tooltip = selectedOption.getAttribute('data-tooltip');
      if (tooltip) {
        classTooltip.textContent = tooltip;
        classTooltip.style.display = 'block';
        // Автоматически скрыть подсказку через 5 секунд
        setTimeout(() => {
          classTooltip.style.display = 'none';
        }, 5000);
      } else {
        classTooltip.style.display = 'none';
      }
    });
  }
  
  if (transmissionSelect && transmissionTooltip) {
    transmissionSelect.addEventListener('change', function() {
      const selectedOption = this.options[this.selectedIndex];
      const tooltip = selectedOption.getAttribute('data-tooltip');
      if (tooltip) {
        transmissionTooltip.textContent = tooltip;
        transmissionTooltip.style.display = 'block';
        // Автоматически скрыть подсказку через 5 секунд
        setTimeout(() => {
          transmissionTooltip.style.display = 'none';
        }, 5000);
      } else {
        transmissionTooltip.style.display = 'none';
      }
    });
  }
  
  // ... остальной существующий код ...
}

function updateMileageDisplay() {
  const mileageKm = document.getElementById('mileage_km')?.value;
  const mileageMiles = document.getElementById('mileage_miles')?.value;
  const kmDisplay = document.getElementById('mileage_km_display');
  const milesDisplay = document.getElementById('mileage_miles_display');
  
  if (mileageKm && kmDisplay) {
    const miles = (parseFloat(mileageKm) * 0.621371).toFixed(0);
    kmDisplay.textContent = `${miles} миль`;
  }
  
  if (mileageMiles && milesDisplay) {
    const km = (parseFloat(mileageMiles) * 1.60934).toFixed(0);
    milesDisplay.textContent = `${km} км`;
  }
}
