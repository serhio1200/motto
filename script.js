// script.js
class MotoDiagnosticaApp {
    constructor() {
        this.state = {
            theme: 'light',
            activeTab: 'report',
            form: this.createEmptyForm(),
            reports: [],
            inspections: [],
            generatedReport: '',
            searchResults: {
                brands: [],
                models: []
            },
            tooltips: {
                class: '',
                gearbox: '',
                origin: '',
                auction: ''
            }
        };
        
        this.brands = this.loadBrands();
        this.models = this.loadModels();
        this.motoClasses = this.loadMotoClasses();
        this.tooltipContent = this.loadTooltipContent();
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateBrandSelect();
        this.populateYearSelect();
        this.populateMotoClassSelect();
        this.loadFromLocalStorage();
        this.render();
    }

    createEmptyForm() {
        return {
            brand: '',
            brandCustom: '',
            model: '',
            modelCustom: '',
            year: '',
            mileage: '',
            mileageUnit: 'km',
            vin: '',
            licensePlate: '',
            motoClass: '',
            gearboxType: '',
            originCountry: '',
            auctionType: '',
            legalCheckedVia: '',
            legalStatus: '',
            legalComment: '',
            price: '',
            objectivePrice: '',
            sellerDiscount: '',
            investments: '',
            profitabilityComment: '',
            keyFinding: '',
            expertVerdict: '',
            decision: '',
            inspectionDate: '',
            inspectionTime: '',
            inspectionAddress: '',
            customerPhone: '',
            sellerPhone: '',
            inspectionNotes: ''
        };
    }

    loadBrands() {
        return [
            'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'Harley-Davidson', 'BMW', 'KTM', 
            'Ducati', 'Triumph', 'Royal Enfield', 'Kymco', 'CFMoto', 'Sym', 'Bajaj',
            'TVS', 'Benelli', 'Moto Guzzi', 'MV Agusta', 'Aprilia', 'Gas Gas', 'Sherco',
            'Beta', 'Zero', 'Indian', 'Husqvarna', 'Другая марка'
        ];
    }

    loadModels() {
        return {
            'Honda': ['CB125F', 'CB300R', 'CB500X', 'CB650R', 'CBR500R', 'CBR650R', 'CBR1000RR-R Fireblade', 'CRF300L', 'Africa Twin', 'Gold Wing', 'Rebel 500', 'Rebel 1100', 'PCX160', 'ADV160'],
            'Yamaha': ['MT-07', 'MT-09', 'YZF-R1', 'YZF-R6', 'YZF-R3', 'XMAX', 'TMAX', 'Tracer 9', 'XSR900'],
            'Kawasaki': ['Ninja ZX-10R', 'Ninja 650', 'Z900', 'Versys 650', 'Vulcan S', 'KLX230'],
            'Suzuki': ['GSX-R1000', 'GSX-R750', 'GSX-S1000', 'V-Strom 650', 'SV650', 'Hayabusa'],
            'Harley-Davidson': ['Street Glide', 'Sportster', 'Fat Boy', 'Softail', 'Pan America'],
            'BMW': ['S1000RR', 'R1250GS', 'F900R', 'R18', 'C400X'],
            'KTM': ['1290 Super Duke R', '790 Duke', '390 Duke', '690 Enduro'],
            'Ducati': ['Panigale V4', 'Monster', 'Scrambler', 'Multistrada', 'Streetfighter'],
            'Triumph': ['Street Triple', 'Speed Triple', 'Tiger 900', 'Bonneville', 'Rocket 3'],
            'Royal Enfield': ['Classic 350', 'Meteor 350', 'Himalayan', 'Interceptor 650'],
            'Другая марка': ['Другая модель']
        };
    }

    loadMotoClasses() {
        return [
            'Спортивные (Sport)',
            'Голые (Naked)',
            'Круизеры / Чопперы',
            'Туристические (Touring)',
            'Спорт-туризм (Sport-Touring)',
            'Классика / Ретро (Classic)',
            'Кафе-рейсеры (Cafe Racer)',
            'Мотокросс (Motocross)',
            'Эндуро (Enduro)',
            'Трэйл (Trail)',
            'Эдвенчер (Adventure)',
            'Супермото (Supermoto)',
            'Скутеры (Scooter)',
            'Мопеды / Легкие мотоциклы',
            'Электрические мотоциклы'
        ];
    }

    loadTooltipContent() {
        return {
            class: {
                'Спортивные (Sport)': 'Для скорости и резкой езды по асфальту, агрессивная посадка.',
                'Голые (Naked)': 'Мотоциклы без обтекателей, с прямой посадкой, для города и активной езды.',
                'Круизеры / Чопперы': 'Низкая посадка, для неспешной езды по трассе, акцент на стиле.',
                'Туристические (Touring)': 'Максимальный комфорт для дальних поездок, с багажом и защитой.',
                'Спорт-туризм (Sport-Touring)': 'Гибрид спортивного и туристического, для быстрых и дальних поездок.',
                'Классика / Ретро (Classic)': 'Внешний вид в стиле мотоциклов прошлых лет.',
                'Кафе-рейсеры (Cafe Racer)': 'Ретро-стиль с спортивными элементами, низким рулем.',
                'Мотокросс (Motocross)': 'Для гонок по грунтовым трассам, без фар и поворотников.',
                'Эндуро (Enduro)': 'Для езды по бездорожью, но с светотехникой для использования на дорогах.',
                'Трэйл (Trail)': 'Легкие внедорожники для неагрессивного покорения природы.',
                'Эдвенчер (Adventure)': 'Универсальные мотоциклы для асфальта и бездорожья, часто с большим запасом хода.',
                'Супермото (Supermoto)': 'Внедорожный мотоцикл с дорожной резиной, для агрессивной езды по городу и картодрому.',
                'Скутеры (Scooter)': 'Автоматическая коробка передач, удобство для города.',
                'Мопеды / Легкие мотоциклы': 'Маленький объем двигателя, для неспешных поездок по городу.',
                'Электрические мотоциклы': 'Тихие и экологичные, с мгновенной тягой.'
            },
            gearbox: {
                'Механическая': 'Водитель вручную с помощью рычага сцепления (на руле) и педали переключения передач (ножной рычаг) Подавляющее большинство мотоциклов.',
                'Автоматическая': 'Водитель не управляет сцеплением (нет рычага сцепление) Переключение Автоматическое или ручное по желанию. Honda DCT, скутеры с вариатором.',
                'Полуавтоматическая': 'У мотоцикла нет рычага сцепления на руле, но при этом есть педаль или кнопка, как на механической коробке. Старые мопеды, скутеры с педалями'
            },
            origin: {
                'Россия, ПТС РФ': 'Мотоцикл был новым официально ввезен в Россию дилером (импортером) и продан первому владельцу. Первым и единственным документом на мотоцикл является российский ПТС (Паспорт Транспортного Средства), выданный таможенными органами РФ.',
                'Япония': 'Мотоциклы для внутреннего японского рынка. Часто имеют ограничение максимальной скорости (~180 км/ч), спидометр только в км/ч, специфичную маркировку (надписи на японском). Могут быть "экономичные" версии двигателей. Часто оснащены катафотами на вилках.',
                'Европа': 'Мотоциклы для европейского рынка. Спидометр в км/ч, часто дублируется в милях. Соответствуют строгим экологическим нормам Евро. Комплектации могут быть богаче, чем базовые для других рынков.',
                'США': 'Мотоциклы для североамериканского рынка. Главный отличительный признак — спидометр в милях (большие цифры - mph). Фары могут иметь другой режим работы (горят всегда). Могут быть отличия в настройках двигателя и составе выхлопа.'
            },
            auction: {
                'Без аукционного листа': 'Покупка мотоцикла у частного перекупщика или небольшого дилера в стране-экспортере (чаще всего Япония) без предоставления официального отчета о состоянии.',
                'Аукцион Японии': 'Мотоцикл имеет Аукционный лист — паспорт лота (при выборе данного пункта возможность вода Номера аукционного лота или с копируемую ссылку на Лот)',
                'Аукцион США (битый)': 'Мотоцикл имеет Аукционный лист — паспорт лота (при выборе данного пункта возможность вода Номера аукционного лота или с копируемую ссылку на Лот)',
                'Европейский аукцион / дилер': 'Покупка мотоцикла у официального дилера или крупного специализированного салона в Европе (например, в Германии, Польше, Чехии и Швейцарии ) а так же частных продаж.',
                'Частник по ДКП': 'Прямая покупка у владельца мотоцикла с оформлением стандартного договора купли-продажи.'
            }
        };
    }

    setupEventListeners() {
        // Переключение темы
        document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
        
        // Навигация
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabId = e.target.getAttribute('data-tab');
                this.setActiveTab(tabId);
            });
        });
        
        // Форма отчета
        document.getElementById('report-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleGenerateReport();
        });
        
        // Поиск марки
        document.getElementById('brand').addEventListener('input', (e) => this.handleBrandSearch(e.target.value));
        document.getElementById('brand').addEventListener('change', (e) => this.handleBrandChange(e.target.value));
        
        // Поиск модели
        document.getElementById('model').addEventListener('input', (e) => this.handleModelSearch(e.target.value));
        document.getElementById('model').addEventListener('change', (e) => this.handleModelChange(e.target.value));
        
        // Пробег с конвертацией
        document.getElementById('mileage').addEventListener('input', (e) => this.handleMileageChange(e.target.value));
        document.getElementById('mileage-unit').addEventListener('change', (e) => this.handleMileageUnitChange(e.target.value));
        
        // Подсказки
        document.getElementById('moto-class').addEventListener('focus', (e) => this.showTooltip('class', e.target.value));
        document.getElementById('moto-class').addEventListener('input', (e) => this.showTooltip('class', e.target.value));
        
        document.getElementById('gearbox-type').addEventListener('focus', (e) => this.showTooltip('gearbox', e.target.value));
        document.getElementById('gearbox-type').addEventListener('change', (e) => this.showTooltip('gearbox', e.target.value));
        
        document.getElementById('origin-country').addEventListener('focus', (e) => this.showTooltip('origin', e.target.value));
        document.getElementById('origin-country').addEventListener('change', (e) => this.showTooltip('origin', e.target.value));
        
        document.getElementById('auction-type').addEventListener('focus', (e) => this.showTooltip('auction', e.target.value));
        document.getElementById('auction-type').addEventListener('change', (e) => this.showTooltip('auction', e.target.value));
        
        // Решение
        document.getElementById('decision').addEventListener('change', (e) => this.handleDecisionChange(e.target.value));
        
        // Кнопки действий
        document.getElementById('save-report').addEventListener('click', () => this.handleSaveReport());
        document.getElementById('print-report').addEventListener('click', () => this.handlePrintReport());
        document.getElementById('clear-form').addEventListener('click', () => this.handleClearForm());
        document.getElementById('copy-report').addEventListener('click', () => this.handleCopyReport());
        
        // Документы
        document.getElementById('scan-documents').addEventListener('click', () => this.handleScanDocuments());
        document.getElementById('auto-fill').addEventListener('click', () => this.handleAutoFill());
        
        // Модальные окна
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => this.hideModals());
        });
        
        document.getElementById('modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'modal-overlay') {
                this.hideModals();
            }
        });
        
        // Автосохранение
        this.setupAutoSave();
    }

    populateBrandSelect() {
        const select = document.getElementById('brand');
        this.brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            select.appendChild(option);
        });
    }

    populateYearSelect() {
        const select = document.getElementById('year');
        const currentYear = new Date().getFullYear();
        
        // Добавляем годы от 1970 до текущего + 1
        for (let year = 1970; year <= currentYear + 1; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            if (year === 2020) option.selected = true;
            select.appendChild(option);
        }
    }

    populateMotoClassSelect() {
        const select = document.getElementById('moto-class');
        this.motoClasses.forEach(className => {
            const option = document.createElement('option');
            option.value = className;
            option.textContent = className;
            select.appendChild(option);
        });
    }

    handleBrandSearch(searchTerm) {
        if (searchTerm.length < 2) {
            this.hideSearchDropdown('brand');
            return;
        }
        
        const results = this.brands.filter(brand => 
            brand.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        this.showSearchDropdown('brand', results, (selectedBrand) => {
            document.getElementById('brand').value = selectedBrand;
            this.handleBrandChange(selectedBrand);
            this.hideSearchDropdown('brand');
        });
    }

    handleBrandChange(brand) {
        this.state.form.brand = brand;
        this.state.form.brandCustom = '';
        
        // Показываем/скрываем поле для пользовательской марки
        const customContainer = document.getElementById('brand-custom-container');
        if (brand === 'Другая марка') {
            customContainer.classList.remove('hidden');
        } else {
            customContainer.classList.add('hidden');
        }
        
        // Обновляем список моделей
        this.updateModelSelect(brand);
        
        this.updateProgressBar();
        this.saveToLocalStorage();
        this.render();
    }

    updateModelSelect(brand) {
        const select = document.getElementById('model');
        select.innerHTML = '<option value="">Выберите модель</option><option value="Другая модель">Другая модель</option>';
        
        if (brand && this.models[brand]) {
            this.models[brand].forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                select.appendChild(option);
            });
        }
    }

    handleModelSearch(searchTerm) {
        const brand = this.state.form.brand;
        if (!brand || searchTerm.length < 2) {
            this.hideSearchDropdown('model');
            return;
        }
        
        const brandModels = this.models[brand] || [];
        const results = brandModels.filter(model => 
            model.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        this.showSearchDropdown('model', results, (selectedModel) => {
            document.getElementById('model').value = selectedModel;
            this.handleModelChange(selectedModel);
            this.hideSearchDropdown('model');
        });
    }

    handleModelChange(model) {
        this.state.form.model = model;
        this.state.form.modelCustom = '';
        
        // Показываем/скрываем поле для пользовательской модели
        const customContainer = document.getElementById('model-custom-container');
        if (model === 'Другая модель') {
            customContainer.classList.remove('hidden');
        } else {
            customContainer.classList.add('hidden');
        }
        
        this.updateProgressBar();
        this.saveToLocalStorage();
        this.render();
    }

    handleMileageChange(value) {
        this.state.form.mileage = value;
        this.updateMileageConversion();
        this.saveToLocalStorage();
    }

    handleMileageUnitChange(unit) {
        this.state.form.mileageUnit = unit;
        this.updateMileageConversion();
        this.saveToLocalStorage();
    }

    updateMileageConversion() {
        const mileage = parseFloat(this.state.form.mileage) || 0;
        const unit = this.state.form.mileageUnit;
        const conversionElement = document.getElementById('mileage-conversion');
        
        if (mileage > 0) {
            if (unit === 'km') {
                const miles = (mileage * 0.621371).toFixed(1);
                conversionElement.textContent = `${miles} тыс. миль`;
            } else {
                const km = (mileage * 1.60934).toFixed(1);
                conversionElement.textContent = `${km} тыс. км`;
            }
            conversionElement.classList.remove('hidden');
        } else {
            conversionElement.classList.add('hidden');
        }
    }

    showTooltip(type, value) {
        const tooltipContent = this.tooltipContent[type][value];
        const tooltipElement = document.getElementById(`${type}-tooltip`);
        
        if (tooltipContent) {
            tooltipElement.textContent = tooltipContent;
            tooltipElement.classList.remove('hidden');
            
            // Автоматическое скрытие через 5 секунд
            setTimeout(() => {
                tooltipElement.classList.add('hidden');
            }, 5000);
        } else {
            tooltipElement.classList.add('hidden');
        }
    }

    handleDecisionChange(decision) {
        this.state.form.decision = decision;
        const planContainer = document.getElementById('inspection-plan-container');
        
        if (decision === 'plan_inspection') {
            planContainer.classList.remove('hidden');
        } else {
            planContainer.classList.add('hidden');
        }
        
        this.saveToLocalStorage();
    }

    handleGenerateReport() {
        if (!this.validateForm()) return;
        
        this.state.generatedReport = this.buildReportText();
        this.showToast('Отчет успешно сгенерирован', 'success');
        this.render();
    }

    handleSaveReport() {
        if (!this.validateForm()) return;
        
        const report = {
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            ...this.state.form,
            generatedText: this.state.generatedReport || this.buildReportText()
        };
        
        this.state.reports.push(report);
        this.showToast('Отчет сохранен в базу', 'success');
        this.saveToLocalStorage();
    }

    handlePrintReport() {
        if (!this.validateForm()) return;
        
        const text = this.state.generatedReport || this.buildReportText();
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Отчет по мотоциклу</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    pre { white-space: pre-wrap; font-size: 14px; }
                </style>
            </head>
            <body>
                <h1>Отчет по мотоциклу</h1>
                <pre>${text}</pre>
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }

    handleClearForm() {
        if (confirm('Очистить все поля формы?')) {
            this.state.form = this.createEmptyForm();
            this.state.generatedReport = '';
            localStorage.removeItem('motodiag_form');
            this.showToast('Форма очищена', 'success');
            this.render();
        }
    }

    handleCopyReport() {
        if (!this.state.generatedReport) {
            this.showToast('Сначала сгенерируйте отчет', 'warning');
            return;
        }
        
        navigator.clipboard.writeText(this.state.generatedReport)
            .then(() => this.showToast('Текст скопирован в буфер', 'success'))
            .catch(() => this.showToast('Ошибка копирования', 'error'));
    }

    handleScanDocuments() {
        this.showModal('document-scanner-modal');
        // В реальном приложении здесь будет интеграция с камерой
    }

    handleAutoFill() {
        this.showToast('Функция автозаполнения в разработке', 'info');
        // В реальном приложении здесь будет интеграция с API проверки
    }

    validateForm() {
        const form = this.state.form;
        
        if (!form.brand || (form.brand === 'Другая марка' && !form.brandCustom)) {
            this.showToast('Укажите марку мотоцикла', 'warning');
            return false;
        }
        
        if (!form.model || (form.model === 'Другая модель' && !form.modelCustom)) {
            this.showToast('Укажите модель мотоцикла', 'warning');
            return false;
        }
        
        if (!form.year) {
            this.showToast('Укажите год выпуска', 'warning');
            return false;
        }
        
        return true;
    }

    buildReportText() {
        const form = this.state.form;
        const brand = form.brand === 'Другая марка' ? form.brandCustom : form.brand;
        const model = form.model === 'Другая модель' ? form.modelCustom : form.model;
        
        let text = '';
        text += '🏍️ Мотодиагностика и подбор мотоциклов в Санкт-Петербурге\n';
        text += '👨‍🔧 Эксперт: Ланк Сергей\n';
        text += '🌐 Сайт: motopodbor.ru\n';
        text += '📞 Телефон: 8 950 005-05-08\n\n';
        
        text += '🔹 Исходные данные\n';
        text += `Мотоцикл: ${brand} ${model}\n`;
        if (form.year) text += `Год выпуска: ${form.year}\n`;
        if (form.mileage) text += `Пробег: ${form.mileage} ${form.mileageUnit === 'km' ? 'тыс. км' : 'миль'}\n`;
        if (form.motoClass) text += `Класс: ${form.motoClass}\n`;
        if (form.vin) text += `VIN: ${form.vin}\n`;
        if (form.licensePlate) text += `Гос. номер: ${form.licensePlate}\n\n`;
        
        text += '🔎 Документы и юридическая чистота\n';
        if (form.legalCheckedVia) text += `Источник проверки: ${form.legalCheckedVia}\n`;
        if (form.legalStatus) text += `Статус: ${form.legalStatus}\n`;
        if (form.legalComment) text += `Комментарий: ${form.legalComment}\n\n`;
        
        text += '💰 Финансовый блок\n';
        if (form.price) text += `Цена продавца: ${form.price} руб.\n`;
        if (form.objectivePrice) text += `Объективная стоимость: ${form.objectivePrice} руб.\n`;
        if (form.sellerDiscount) text += `Ожидаемая скидка: ${form.sellerDiscount} руб.\n`;
        if (form.investments) text += `Оценка вложений: ${form.investments} руб.\n\n`;
        
        text += '💡 Итоги диагностики\n';
        if (form.keyFinding) text += `Ключевая находка: ${form.keyFinding}\n`;
        if (form.expertVerdict) text += `Вердикт эксперта: ${form.expertVerdict}\n`;
        
        return text;
    }

    updateProgressBar() {
        const form = this.state.form;
        const fields = [
            form.brand && (form.brand !== 'Другая марка' || form.brandCustom),
            form.model && (form.model !== 'Другая модель' || form.modelCustom),
            form.year
        ];
        
        const filledCount = fields.filter(Boolean).length;
        const progress = Math.round((filledCount / fields.length) * 100);
        
        document.getElementById('basic-progress').textContent = `${progress}%`;
        document.getElementById('progress-bar').style.width = `${progress}%`;
    }

    showSearchDropdown(type, items, onSelect) {
        const dropdown = document.getElementById(`${type}-search`);
        dropdown.innerHTML = '';
        
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'search-item';
            div.textContent = item;
            div.addEventListener('click', () => onSelect(item));
            dropdown.appendChild(div);
        });
        
        dropdown.classList.remove('hidden');
    }

    hideSearchDropdown(type) {
        document.getElementById(`${type}-search`).classList.add('hidden');
    }

    showModal(modalId) {
        document.getElementById('modal-overlay').classList.remove('hidden');
        document.getElementById(modalId).classList.remove('hidden');
    }

    hideModals() {
        document.getElementById('modal-overlay').classList.add('hidden');
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('hidden');
        });
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        document.getElementById('toasts').appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 4000);
    }

    toggleTheme() {
        this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
        document.body.classList.toggle('dark', this.state.theme === 'dark');
        
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.textContent = this.state.theme === 'light' ? '🌙' : '☀️';
        
        this.saveToLocalStorage();
    }

    setActiveTab(tabId) {
        this.state.activeTab = tabId;
        
        // Обновляем навигацию
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-tab') === tabId);
        });
        
        // Обновляем контент
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.id === `tab-${tabId}`);
        });
        
        this.render();
    }

    setupAutoSave() {
        const formElements = document.querySelectorAll('#report-form input, #report-form select, #report-form textarea');
        formElements.forEach(element => {
            element.addEventListener('input', () => {
                this.updateFormFromDOM();
                this.saveToLocalStorage();
            });
        });
    }

    updateFormFromDOM() {
        const form = this.state.form;
        const elements = [
            'brand', 'brand-custom', 'model', 'model-custom', 'year', 'mileage',
            'vin', 'license-plate', 'moto-class', 'gearbox-type', 'origin-country',
            'auction-type', 'legal-checked-via', 'legal-status', 'legal-comment',
            'price', 'objective-price', 'seller-discount', 'investments',
            'profitability-comment', 'key-finding', 'expert-verdict', 'decision',
            'inspection-date', 'inspection-time', 'inspection-address',
            'customer-phone', 'seller-phone', 'inspection-notes'
        ];
        
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                const key = id.replace(/-/g, '');
                form[key] = element.value;
            }
        });
        
        form.mileageUnit = document.getElementById('mileage-unit').value;
        this.updateProgressBar();
    }

    saveToLocalStorage() {
        try {
            localStorage.setItem('motodiag_state', JSON.stringify({
                theme: this.state.theme,
                form: this.state.form,
                reports: this.state.reports
            }));
        } catch (error) {
            console.error('Ошибка сохранения:', error);
        }
    }

    loadFromLocalStorage() {
        try {
            const saved = JSON.parse(localStorage.getItem('motodiag_state'));
            if (saved) {
                this.state.theme = saved.theme || 'light';
                this.state.form = { ...this.createEmptyForm(), ...saved.form };
                this.state.reports = saved.reports || [];
            }
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        }
    }

    render() {
        // Применяем тему
        document.body.classList.toggle('dark', this.state.theme === 'dark');
        document.getElementById('theme-toggle').textContent = 
            this.state.theme === 'light' ? '🌙' : '☀️';
        
        // Обновляем форму
        this.updateFormFromDOM();
        
        // Обновляем сгенерированный отчет
        const reportContainer = document.getElementById('generated-report-container');
        const noReportMessage = document.getElementById('no-report-message');
        
        if (this.state.generatedReport) {
            document.getElementById('generated-report').textContent = this.state.generatedReport;
            reportContainer.classList.remove('hidden');
            noReportMessage.classList.add('hidden');
        } else {
            reportContainer.classList.add('hidden');
            noReportMessage.classList.remove('hidden');
        }
        
        // Обновляем конвертацию пробега
        this.updateMileageConversion();
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    new MotoDiagnosticaApp();
});
