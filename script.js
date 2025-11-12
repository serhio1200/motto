// Дополнения к существующему коду

app.modules.enhancedForm = (function() {
    // База данных марок и моделей
    const motorcycleDatabase = {
        "Honda": ["CB125F", "CB300R", "CB500X", "CB650R", "CBR500R", "CBR650R", "CBR1000RR-R Fireblade", /* ... полный список */],
        "Yamaha": ["MT-07", "MT-09", "MT-10", "YZF-R1", "YZF-R6", "YZF-R3", "XMAX", "TMAX", /* ... полный список */],
        // ... все остальные марки из вашего списка
    };

    // Данные для тултипов
    const tooltips = {
        motorcycle_class: `
            <strong>Классы мотоциклов:</strong><br><br>
            <strong>Спортивные (Sport):</strong> Для скорости и резкой езды по асфальту, агрессивная посадка.<br>
            <strong>Голые (Naked):</strong> Мотоциклы без обтекателей, с прямой посадкой, для города и активной езды.<br>
            <strong>Круизеры / Чопперы:</strong> Низкая посадка, для неспешной езды по трассе, акцент на стиле.<br>
            <!-- ... остальные классы ... -->
        `,
        transmission_type: `
            <strong>Типы коробок передач:</strong><br><br>
            <strong>Механическая:</strong> Водитель вручную с помощью рычага сцепления и педали переключения передач.<br>
            <strong>Автоматическая:</strong> Водитель не управляет сцеплением (Honda DCT, скутеры с вариатором).<br>
            <strong>Полуавтоматическая:</strong> У мотоцикла нет рычага сцепления, но есть педаль или кнопка переключения.<br>
        `,
        // ... остальные тултипы
    };

    function init() {
        initializeBrands();
        initializeTooltips();
        setupMileageConversion();
        setupAuctionFields();
        setupFileUpload();
    }

    function initializeBrands() {
        const brandSelect = document.getElementById('brand');
        if (!brandSelect) return;

        // Очищаем и заполняем список марок
        brandSelect.innerHTML = '<option value="">-- Выберите марку --</option>';
        
        Object.keys(motorcycleDatabase).sort().forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandSelect.appendChild(option);
        });

        // Добавляем опцию "Другая марка"
        const otherOption = document.createElement('option');
        otherOption.value = 'Другая марка';
        otherOption.textContent = 'Другая марка';
        brandSelect.appendChild(otherOption);
    }

    function setupMileageConversion() {
        const mileageInput = document.getElementById('mileage');
        const mileageUnit = document.getElementById('mileage_unit');
        const conversionDisplay = document.getElementById('mileageConversion');

        if (!mileageInput || !mileageUnit || !conversionDisplay) return;

        function updateConversion() {
            const value = parseFloat(mileageInput.value);
            if (isNaN(value)) {
                conversionDisplay.textContent = '';
                return;
            }

            if (mileageUnit.value === 'km') {
                const miles = (value * 0.621371).toFixed(1);
                conversionDisplay.textContent = `${miles} тыс. миль`;
            } else {
                const km = (value * 1.60934).toFixed(1);
                conversionDisplay.textContent = `${km} тыс. км`;
            }
        }

        mileageInput.addEventListener('input', updateConversion);
        mileageUnit.addEventListener('change', updateConversion);
    }

    function setupAuctionFields() {
        const auctionType = document.getElementById('auction_type');
        const auctionFields = document.getElementById('auctionFields');

        if (!auctionType || !auctionFields) return;

        auctionType.addEventListener('change', function() {
            const showFields = this.value === 'Аукцион Японии' || this.value === 'Аукцион США (битый)';
            auctionFields.classList.toggle('hidden', !showFields);
        });
    }

    function setupFileUpload() {
        const fileInput = document.getElementById('document_upload');
        const filesList = document.getElementById('uploaded_files');

        if (!fileInput || !filesList) return;

        fileInput.addEventListener('change', function(e) {
            filesList.innerHTML = '';
            Array.from(e.target.files).forEach((file, index) => {
                const fileItem = document.createElement('div');
                fileItem.className = 'uploaded-file-item';
                fileItem.innerHTML = `
                    <span>${file.name}</span>
                    <button type="button" onclick="removeFile(${index})">🗑️</button>
                `;
                filesList.appendChild(fileItem);
            });
        });
    }

    function removeFile(index) {
        // Логика удаления файла из списка
        const fileInput = document.getElementById('document_upload');
        const files = Array.from(fileInput.files);
        files.splice(index, 1);
        
        // Создаем новый FileList (это упрощенная версия, в реальности нужно использовать DataTransfer)
        const dt = new DataTransfer();
        files.forEach(file => dt.items.add(file));
        fileInput.files = dt.files;
        
        // Обновляем список
        setupFileUpload();
    }

    return {
        init,
        motorcycleDatabase,
        tooltips
    };
})();

// Инициализация нового модуля
document.addEventListener('DOMContentLoaded', function() {
    app.modules.enhancedForm.init();
});