// script.js - Логика приложения МотоДиагностика PRO

// Модульная архитектура с базовой обработкой ошибок
const app = {
    modules: {},
    config: {
        modelsDatabase: {
            "Honda": ["CB125F", "CB300R", "CB500X", "CB650R", "CBR500R", "CBR650R", "CBR1000RR-R Fireblade", "CRF300L", "CRF450R", "Africa Twin", "Gold Wing", "Rebel 500", "Rebel 1100", "PCX160", "ADV160", "Forza 350", "CT125", "Monkey 125", "Super Cub C125", "NM4 Vultus", "VFR800F", "RC213V-S", "CRF1100L", "CRF250R", "CRF150R", "Wave 110", "Dio", "Activa 6G", "Shine 100", "Dream", "Cliq", "Grazia", "X-Blade", "Hornet 2.0", "SP 125", "Unicorn", "CB200X", "H'Ness CB350", "CB350 RS", "Gold Wing Tour", "CRF450X", "CRF250L Rally", "CRF50F", "XR650L", "CBR250R", "CB1000R", "NC750X", "Integra", "VFR1200F", "VFR1200X", "CBR600RR", "CB400 Super Four", "CB1100", "ST1300", "VT750S", "Shadow Aero", "Fury", "Rune", "F6B", "Valkyrie", "Grom", "MSX125", "DN-01", "NM5", "CBR1000F", "VTR1000F", "CBR1100XX", "CX500", "GL500", "VF750", "VFR400", "CBR400", "CB400SF", "CB1300", "Bros 400", "Bros 650", "Revere 450", "Transalp 450", "XL600V", "XL700V", "Deauville 650", "NT700", "Pan European", "ST1100", "Silver Wing 600", "PS250", "Big Ruckus 250", "Faze 250", "Helix 250", "Jazz 250", "Lead 250", "Dylan 125", "Giorno 125", "Joker 125", "Today 50", "Ape 50", "Dax 125", "Gorilla 125", "Motra 125", "Motocompacto", "Gyro", "Gyro Canopy", "Street 750", "Steed 400", "Другая модель"],
            "Yamaha": ["MT-07", "MT-09", "MT-10", "MT-15", "MT-125", "YZF-R1", "YZF-R6", "YZF-R7", "YZF-R3", "YZF-R125", "XMAX", "TMAX", "NMAX", "TRACER 9", "TRACER 7", "TRACER 900", "XSR900", "XSR700", "XSR155", "Tenere 700", "XT660Z", "XT1200Z", "WR250R", "WR450F", "YZ450F", "YZ250F", "YZ125", "TW200", "SR400", "Bolt", "VMAX", "V Star 250", "V Star 650", "V Star 950", "Road Star", "Star Venture", "YBR125", "YZF-R25", "FZ1", "FZ6", "FZ8", "FZ16", "FZ-S", "Fascino", "RayZR", "Alpha", "Cygnus", "Aerox", "NVX", "Gear", "FreeGo", "Cuxi", "Jog", "Axis", "BWS", "BW'S", "Crypton", "Jupiter", "Mio", "Soul", "Vino", "Xeon", "YZF-R15", "YZ85", "YZ65", "PW50", "TT-R50", "TT-R110", "TT-R125", "XT250", "XT350", "XT500", "XT600", "XTZ750", "XV250", "XV535", "XV750", "XV950", "XV1600", "XV1700", "XV1900", "XVS650", "XVS950", "XVS1300", "XVZ1300", "YQ50", "YZF600R", "FJR1300", "FZ750", "FZR400", "FZR600", "FZR1000", "GTS1000", "RD350", "RD400", "RX100", "RX135", "RX-Z", "SDR200", "SRX600", "TDM850", "TDM900", "TRX850", "TT600", "TZR250", "Virago 250", "Virago 535", "Virago 750", "Virago 1100", "XJ600", "XJ650", "XJ750", "XJ900", "XJ1100", "XJR400", "XJR1200", "XJR1300", "XJS400", "XS400", "XS650", "XS750", "XS1100", "XT125", "XT225", "XT350", "XT500", "XT550", "XT600", "XVS125", "XVS250", "XV250", "XV535", "XV750", "XV920", "XV1000", "XV1100", "XV1600", "XV1700", "XV1900", "XZ550", "YZ80", "YZ100", "YZ125", "YZ250", "YZ400", "YZ465", "YZ490", "YZF600R", "YZF750", "YZF1000", "Другая модель"],
            "Kawasaki": ["Ninja ZX-10R", "Ninja ZX-6R", "Ninja 650", "Ninja 400", "Ninja 300", "Ninja 250", "Ninja 125", "Ninja ZX-12R", "Ninja ZX-14R", "Ninja H2", "Ninja H2R", "Z900", "Z800", "Z750", "Z650", "Z400", "Z300", "Z250", "Z125", "Z1000", "Z1000SX", "Z H2", "Versys 650", "Versys 1000", "Versys-X 300", "Vulcan S", "Vulcan 900", "Vulcan 1700", "Vulcan 2000", "W800", "ER-6n", "ER-6f", "KLX230", "KLX250", "KLX300", "KLX450", "KLR650", "KX250", "KX450", "KX85", "KX65", "KX100", "EJ800", "EN500", "ESTRELLA", "GPZ900R", "J300", "J125", "ZZR1400", "ZZR1200", "ZZR600", "ZXR400", "ZXR750", "ZXR250", "ZRX1200", "ZRX1100", "Zephyr 750", "Zephyr 550", "Zephyr 400", "EL250", "EL125", "ELIMINATOR 125", "ELIMINATOR 250", "ELIMINATOR 400", "ESTRELLA", "GPZ500S", "KR150", "KSII", "ZX-10R", "ZX-6R", "ZX-7R", "ZX-9R", "ZX-12R", "ZX-14R", "ZZR1400", "ZZR1200", "ZZR600", "ZXR400", "ZXR750", "ZXR250", "ZRX1200", "ZRX1100", "Zephyr 750", "Zephyr 550", "Zephyr 400", "EL250", "EL125", "ELIMINATOR 125", "ELIMINATOR 250", "ELIMINATOR 400", "ESTRELLA", "GPZ500S", "KR150", "KSII", "Другая модель"],
            "Suzuki": ["GSX-R1000", "GSX-R750", "GSX-R600", "GSX-R150", "GSX-R125", "GSX-S1000", "GSX-S750", "GSX-S950", "GSX-S125", "GSX250R", "GSX250", "V-Strom 650", "V-Strom 1050", "V-Strom 250", "V-Strom 800", "SV650", "SV650X", "SV1000", "SV125", "Burgman 400", "Burgman 650", "Burgman 200", "Burgman 125", "Address 110", "Address 125", "Avenis 125", "Gixxer SF 250", "Gixxer 250", "Gixxer SF 150", "Gixxer 150", "Hayabusa", "Intruder 150", "Intruder 250", "Intruder 800", "Intruder 1500", "VanVan 200", "VanVan 125", "DR-Z400", "DR-Z125", "DR-Z50", "DR650", "DR200", "RM-Z450", "RM-Z250", "RM85", "RM65", "TU250X", "GLADIUS", "GS500", "GSX1400", "GSX1300R", "GSX1100", "GSX750", "GSX400", "GSX250", "GT750", "GT550", "GT380", "GT250", "GT125", "GT50", "GV1400", "GV750", "GV250", "GV125", "GZ250", "GZ125", "LS650", "RE5", "RG500", "RG400", "RG250", "RG125", "RG50", "RM500", "RM400", "RM370", "RM250", "RM125", "RM100", "RM80", "RM50", "RGV250", "RGV1200", "SP400", "SP370", "SP250", "SP125", "ST400", "ST250", "ST125", "TC100", "TC125", "TF100", "TF125", "TF50", "TG50", "TM400", "TR125", "TS100", "TS125", "TS185", "TS250", "TS400", "TU250", "UZ50", "VZ800", "VZ1500", "VZ1600", "VZ1800", "Другая модель"],
            "Другая марка": ["Другая модель"]
        }
    },
    state: {
        reportsDatabase: [],
        inspectionsDatabase: [],
        deferredPrompt: null,
        notificationTimeouts: []
    },
    init() {
        try {
            // Безопасная загрузка из localStorage
            this.state.reportsDatabase = JSON.parse(localStorage.getItem('motodiag_reports') || '[]');
            this.state.inspectionsDatabase = JSON.parse(localStorage.getItem('motodiag_inspections') || '[]');
        } catch (e) {
            console.warn('Ошибка загрузки данных из localStorage:', e);
            this.state.reportsDatabase = [];
            this.state.inspectionsDatabase = [];
        }

        // Инициализация всех модулей с обработкой ошибок
        Object.entries(this.modules).forEach(([name, module]) => {
            try {
                if (module.init) module.init();
            } catch (e) {
                console.error(`Ошибка инициализации модуля ${name}:`, e);
                this.showError('Ошибка загрузки модуля: ' + name);
            }
        });

        // Service Worker для PWA
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('data:text/javascript,' + encodeURIComponent(`
                const CACHE_NAME = 'motodiag-v2.4.0';
                const urlsToCache = ['/', '/index.html'];
                self.addEventListener('install', event => {
                    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
                });
                self.addEventListener('fetch', event => {
                    event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
                });
            `)).catch(() => console.log('SW registration failed'));
        }

        const versionDateEl = document.getElementById('appVersionDate');
        if (versionDateEl) versionDateEl.textContent = new Date().getFullYear();
    },
    showError(message) {
        const container = document.getElementById('toastContainer');
        if (container) {
            const toast = document.createElement('div');
            toast.className = 'toast toast-warning';
            toast.textContent = message;
            container.appendChild(toast);
            setTimeout(() => toast.classList.add('show'), 10);
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 5000);
        }
    }
};

// Модуль утилит
app.modules.utils = (function() {
    let audioContext = null;
    
    function parseMoneyValue(value) {
        if (!value) return 0;
        const clean = value.toString().replace(/\s/g, '').replace(',', '.');
        return parseFloat(clean) || 0;
    }

    function formatMoney(amount) {
        return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(amount);
    }

    function escapeHtml(str) {
        return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    }

    function debounce(fn, wait) {
        let t;
        return (...args) => {
            clearTimeout(t);
            t = setTimeout(() => fn(...args), wait);
        };
    }

    function beep(durationSec = 0.1, freq = 880) {
        try {
            if (!audioContext) {
                const Ctx = window.AudioContext || window.webkitAudioContext;
                if (!Ctx) return;
                audioContext = new Ctx();
            }
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            osc.connect(gain);
            gain.connect(audioContext.destination);
            gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.06, audioContext.currentTime + 0.02);
            osc.start();
            osc.stop(audioContext.currentTime + durationSec);
        } catch (_) {}
    }

    return {
        parseMoneyValue,
        formatMoney,
        escapeHtml,
        debounce,
        beep
    };
})();

// Модуль уведомлений
app.modules.notifications = (function() {
    function showAlert(message, type = 'info') {
        try {
            const container = document.getElementById('toastContainer');
            if (!container) return;
            
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.setAttribute('role','status');
            toast.textContent = message;
            container.appendChild(toast);

            // Аудио/вибро по настройкам
            const vibrationEl = document.getElementById('vibration');
            const soundEl = document.getElementById('soundNotifications');
            if (vibrationEl && vibrationEl.checked && navigator.vibrate) navigator.vibrate(80);
            if (soundEl && soundEl.checked) app.modules.utils.beep(0.12);

            requestAnimationFrame(() => toast.classList.add('show'));
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 4000);
        } catch (e) {
            alert(message);
        }
    }
    
    function showSaveIndicator() {
        const indicator = document.getElementById('saveIndicator');
        if (indicator) {
            indicator.classList.add('visible');
            setTimeout(() => indicator.classList.remove('visible'), 2000);
        }
    }

    return {
        showAlert,
        showSaveIndicator
    };
})();

// Модуль темы
app.modules.theme = (function() {
    function init() {
        const savedTheme = localStorage.getItem('motodiag_theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        const themeCheckbox = document.getElementById('darkTheme');
        if (themeCheckbox) themeCheckbox.checked = savedTheme === 'dark';
        
        const darkThemeEl = document.getElementById('darkTheme');
        const themeToggleEl = document.getElementById('themeToggleHeader');
        
        if (darkThemeEl) darkThemeEl.addEventListener('change', toggleTheme);
        if (themeToggleEl) themeToggleEl.addEventListener('click', toggleThemeManual);
    }

    function toggleTheme() {
        const isDark = document.getElementById('darkTheme').checked;
        const theme = isDark ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('motodiag_theme', theme);
    }

    function toggleThemeManual() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        const darkThemeEl = document.getElementById('darkTheme');
        if (darkThemeEl) darkThemeEl.checked = !isDark;
        localStorage.setItem('motodiag_theme', newTheme);
    }

    return {
        init,
        toggleTheme,
        toggleThemeManual
    };
})();

// Модуль навигации
app.modules.navigation = (function() {
    function init() {
        const navTabs = document.querySelectorAll('.nav-tab');
        const tabContents = document.querySelectorAll('.tab-content');
        
        navTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                if (!tabId) return;
                
                navTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                tabContents.forEach(c => {
                    c.classList.toggle('active', c.id === `${tabId}-tab`);
                });
                
                // Обновление данных при переходе на вкладки
                if (tabId === 'database' && app.modules.database) app.modules.database.loadReportsList();
                if (tabId === 'inspections' && app.modules.inspections) app.modules.inspections.loadInspectionsList();
                if (tabId === 'stats' && app.modules.statistics) app.modules.statistics.updateStatistics();
            });
        });
    }

    return {
        init
    };
})();

// Модуль работы с формой (ОБНОВЛЕННЫЙ)
app.modules.form = (function() {
    function init() {
        try {
            // Год: макс текущий + 1
            const yearInput = document.getElementById('year');
            if (yearInput) yearInput.max = String(new Date().getFullYear() + 1);

            loadFormData();
            updateProgress();

            const brandEl = document.getElementById('brand');
            const modelEl = document.getElementById('model');
            if (brandEl && modelEl) {
                const savedBrand = brandEl.value;
                const savedModel = modelEl.value;
                if (savedBrand) updateModelOptions(savedBrand, savedModel);
            }

            const reminderTimeEl = document.getElementById('reminderTime');
            const savedReminderTime = localStorage.getItem('motodiag_reminder_time');
            if (reminderTimeEl && savedReminderTime) reminderTimeEl.value = savedReminderTime;

            // Разрешения уведомлений
            if ('Notification' in window && Notification.permission === 'default') {
                Notification.requestPermission().catch(() => {});
            }

            // Основные кнопки
            const generateBtn = document.getElementById('generateBtn');
            const copyBtn = document.getElementById('copyBtn');
            const saveToDbBtn = document.getElementById('saveToDbBtn');
            const clearFormBtn = document.getElementById('clearFormBtn');
            
            if (generateBtn) generateBtn.addEventListener('click', generateReport);
            if (copyBtn) copyBtn.addEventListener('click', copyToClipboard);
            if (saveToDbBtn) saveToDbBtn.addEventListener('click', saveReportToDatabase);
            if (clearFormBtn) clearFormBtn.addEventListener('click', clearForm);

            // Решение
            const decisionEl = document.getElementById('decision');
            if (decisionEl) decisionEl.addEventListener('change', function() {
                const fields = document.getElementById('inspectionFields');
                if (!fields) return;
                
                if (this.value === '📅 Запланировать проверку') {
                    fields.classList.remove('hidden');
                    const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
                    const dateEl = document.getElementById('inspection_date');
                    const timeEl = document.getElementById('inspection_time');
                    if (dateEl) dateEl.value = tomorrow.toISOString().split('T')[0];
                    if (timeEl) timeEl.value = '10:00';
                } else {
                    fields.classList.add('hidden');
                }
            });

            // Выбор марки и модели
            if (brandEl) brandEl.addEventListener('change', function() {
                updateModelOptions(this.value);
                const brandCustom = document.getElementById('brand_custom');
                if (brandCustom) brandCustom.classList.toggle('hidden', this.value !== 'Другая марка');
                updateProgress();
            });
            
            if (modelEl) modelEl.addEventListener('change', function() {
                const modelCustom = document.getElementById('model_custom');
                if (modelCustom) modelCustom.classList.toggle('hidden', this.value !== 'Другая модель');
                updateProgress();
            });

            // Кастомные поля марки и модели
            const brandCustomEl = document.getElementById('brand_custom');
            const modelCustomEl = document.getElementById('model_custom');
            if (brandCustomEl) brandCustomEl.addEventListener('input', updateProgress);
            if (modelCustomEl) modelCustomEl.addEventListener('input', updateProgress);

            // НОВЫЕ ОБРАБОТЧИКИ ДЛЯ КОНВЕРТЕРА ПРОБЕГА
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
            
            // НОВЫЕ ОБРАБОТЧИКИ ДЛЯ ПОДСКАЗОК КЛАССОВ И КОРОБОК ПЕРЕДАЧ
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
                        classTooltip.classList.add('show');
                        // Автоматически скрыть подсказку через 7 секунд
                        setTimeout(() => {
                            classTooltip.classList.remove('show');
                        }, 7000);
                    } else {
                        classTooltip.classList.remove('show');
                    }
                });
                
                // Закрывать подсказку при клике вне области
                document.addEventListener('click', function(e) {
                    if (!classSelect.contains(e.target) && !classTooltip.contains(e.target)) {
                        classTooltip.classList.remove('show');
                    }
                });
            }
            
            if (transmissionSelect && transmissionTooltip) {
                transmissionSelect.addEventListener('change', function() {
                    const selectedOption = this.options[this.selectedIndex];
                    const tooltip = selectedOption.getAttribute('data-tooltip');
                    if (tooltip) {
                        transmissionTooltip.textContent = tooltip;
                        transmissionTooltip.classList.add('show');
                        // Автоматически скрыть подсказку через 7 секунд
                        setTimeout(() => {
                            transmissionTooltip.classList.remove('show');
                        }, 7000);
                    } else {
                        transmissionTooltip.classList.remove('show');
                    }
                });
                
                // Закрывать подсказку при клике вне области
                document.addEventListener('click', function(e) {
                    if (!transmissionSelect.contains(e.target) && !transmissionTooltip.contains(e.target)) {
                        transmissionTooltip.classList.remove('show');
                    }
                });
            }

            // Автосохранение и прогресс
            document.querySelectorAll('#diagnosticForm input, #diagnosticForm select, #diagnosticForm textarea').forEach(el => {
                el.addEventListener('input', app.modules.utils.debounce(() => {
                    updateProgress();
                    const autoSaveEl = document.getElementById('autoSave');
                    if (autoSaveEl && autoSaveEl.checked) {
                        saveFormData();
                        app.modules.notifications.showSaveIndicator();
                    }
                }, 400));
            });
        } catch (e) {
            console.error('Ошибка инициализации формы:', e);
            app.showError('Не удалось загрузить форму');
        }
    }

    // НОВАЯ ФУНКЦИЯ ДЛЯ ОБНОВЛЕНИЯ ОТОБРАЖЕНИЯ ПРОБЕГА
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

    function updateModelOptions(brand, preselect = null) {
        const modelSelect = document.getElementById('model');
        if (!modelSelect) return;
        
        modelSelect.innerHTML = '<option value="">-- Выберите модель --</option>';
        if (brand && app.config.modelsDatabase[brand]) {
            app.config.modelsDatabase[brand].forEach(model => {
                const opt = document.createElement('option');
                opt.value = model; opt.textContent = model;
                modelSelect.appendChild(opt);
            });
        }
        const customOption = document.createElement('option');
        customOption.value = 'Другая модель';
        customOption.textContent = 'Другая модель';
        modelSelect.appendChild(customOption);

        if (preselect) {
            modelSelect.value = preselect;
            const modelCustom = document.getElementById('model_custom');
            if (modelCustom) modelCustom.classList.toggle('hidden', preselect !== 'Другая модель');
        }
    }

    function updateProgress() {
        const brandEl = document.getElementById('brand');
        const modelEl = document.getElementById('model');
        const yearEl = document.getElementById('year');
        if (!brandEl || !modelEl || !yearEl) return;

        let brandFilled = brandEl.value && brandEl.value !== '';
        let modelFilled = modelEl.value && modelEl.value !== '';
        
        if (brandEl.value === 'Другая марка') {
            const brandCustom = document.getElementById('brand_custom');
            brandFilled = brandCustom && brandCustom.value.trim() !== '';
        }
        if (modelEl.value === 'Другая модель') {
            const modelCustom = document.getElementById('model_custom');
            modelFilled = modelCustom && modelCustom.value.trim() !== '';
        }

        const filled = (brandFilled ? 1 : 0) + (modelFilled ? 1 : 0) + (yearEl.value ? 1 : 0);
        const progress = (filled / 3) * 100;
        
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressText) {
            if (progress === 100) {
                progressText.textContent = '✅ Все основные данные заполнены!';
                progressText.style.color = 'var(--success-color)';
            } else {
                progressText.textContent = `Заполнено ${filled} из 3 основных полей`;
                progressText.style.color = 'var(--text-light)';
            }
        }
    }

    function saveFormData() {
        try {
            const formData = new FormData(document.getElementById('diagnosticForm'));
            const data = {};
            for (const [k, v] of formData.entries()) data[k] = v;
            localStorage.setItem('motodiag_form_data', JSON.stringify(data));
        } catch (e) {
            console.warn('Ошибка сохранения формы:', e);
        }
    }

    function loadFormData() {
        try {
            const savedData = localStorage.getItem('motodiag_form_data');
            if (!savedData) return;
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(key => {
                const el = document.getElementById(key);
                if (el) el.value = data[key];
            });
            if (data.brand) {
                updateModelOptions(data.brand, data.model || null);
                const brandCustom = document.getElementById('brand_custom');
                const modelCustom = document.getElementById('model_custom');
                const inspectionFields = document.getElementById('inspectionFields');
                
                if (brandCustom) brandCustom.classList.toggle('hidden', data.brand !== 'Другая марка');
                if (modelCustom) modelCustom.classList.toggle('hidden', data.model !== 'Другая модель');
                if (inspectionFields) inspectionFields.classList.toggle('hidden', data.decision !== '📅 Запланировать проверку');
            }
            
            // Обновить отображение пробега после загрузки данных
            updateMileageDisplay();
        } catch (e) {
            console.warn('Ошибка загрузки формы:', e);
        }
    }

    function clearForm() {
        if (!confirm('Вы уверены, что хотите очистить все поля формы?')) return;
        
        const form = document.getElementById('diagnosticForm');
        if (form) form.reset();
        
        localStorage.removeItem('motodiag_form_data');
        
        const outputCard = document.getElementById('outputCard');
        const savingsAlert = document.getElementById('savingsAlert');
        const inspectionFields = document.getElementById('inspectionFields');
        const brandCustom = document.getElementById('brand_custom');
        const modelCustom = document.getElementById('model_custom');
        
        if (outputCard) outputCard.classList.add('hidden');
        if (savingsAlert) savingsAlert.classList.add('hidden');
        if (inspectionFields) inspectionFields.classList.add('hidden');
        if (brandCustom) brandCustom.classList.add('hidden');
        if (modelCustom) modelCustom.classList.add('hidden');
        
        updateModelOptions('', null);
        updateProgress();
        updateMileageDisplay();
        app.modules.notifications.showAlert('Форма очищена', 'success');
    }

    function validateForm() {
        let ok = true, msg = '';

        const brandEl = document.getElementById('brand');
        const modelEl = document.getElementById('model');
        const yearEl = document.getElementById('year');
        if (!brandEl || !modelEl || !yearEl) return false;

        // Базовые обязательные
        if (!brandEl.value) { ok = false; brandEl.style.borderColor = 'var(--danger-color)'; }
        else brandEl.style.borderColor = '';

        if (!modelEl.value) { ok = false; modelEl.style.borderColor = 'var(--danger-color)'; }
        else modelEl.style.borderColor = '';

        if (!yearEl.value) { ok = false; yearEl.style.borderColor = 'var(--danger-color)'; }
        else yearEl.style.borderColor = '';

        // Кастомные поля
        if (brandEl.value === 'Другая марка') {
            const bc = document.getElementById('brand_custom');
            if (bc && !bc.value.trim()) { 
                ok = false; 
                bc.style.borderColor = 'var(--danger-color)'; 
                msg = 'Укажите марку в поле "Введите марку"'; 
            } else if (bc) {
                bc.style.borderColor = '';
            }
        }
        if (modelEl.value === 'Другая модель') {
            const mc = document.getElementById('model_custom');
            if (mc && !mc.value.trim()) { 
                ok = false; 
                mc.style.borderColor = 'var(--danger-color)'; 
                msg = 'Укажите модель в поле "Введите модель"'; 
            } else if (mc) {
                mc.style.borderColor = '';
            }
        }

        // Диапазон года
        const y = parseInt(yearEl.value, 10);
        const minY = parseInt(yearEl.min || '1990', 10);
        const maxY = parseInt(yearEl.max || String(new Date().getFullYear() + 1), 10);
        if (isFinite(y) && (y < minY || y > maxY)) {
            ok = false; yearEl.style.borderColor = 'var(--danger-color)'; 
            msg = `Год выпуска должен быть между ${minY} и ${maxY}`;
        }

        // Пробег
        const mileageKmEl = document.getElementById('mileage_km');
        const mileageMilesEl = document.getElementById('mileage_miles');
        
        if (mileageKmEl && mileageKmEl.value !== '' && parseFloat(mileageKmEl.value) < 0) {
            ok = false; mileageKmEl.style.borderColor = 'var(--danger-color)'; 
            msg = 'Пробег не может быть отрицательным';
        } else if (mileageKmEl) {
            mileageKmEl.style.borderColor = '';
        }
        
        if (mileageMilesEl && mileageMilesEl.value !== '' && parseFloat(mileageMilesEl.value) < 0) {
            ok = false; mileageMilesEl.style.borderColor = 'var(--danger-color)'; 
            msg = 'Пробег не может быть отрицательным';
        } else if (mileageMilesEl) {
            mileageMilesEl.style.borderColor = '';
        }

        // Рейтинги 1-5
        ['appearance_rating','engine_rating','electronics_rating','suspension_rating'].forEach(id => {
            const el = document.getElementById(id);
            if (el && el.value !== '') {
                const v = parseInt(el.value, 10);
                if (v < 1 || v > 5) { 
                    ok = false; 
                    el.style.borderColor = 'var(--danger-color)'; 
                    msg = 'Рейтинги должны быть от 1 до 5'; 
                } else {
                    el.style.borderColor = '';
                }
            } else if (el) {
                el.style.borderColor = '';
            }
        });

        // Если планируем проверку — дата и время обязательны
        const decision = document.getElementById('decision')?.value;
        if (decision === '📅 Запланировать проверку') {
            ['inspection_date','inspection_time','inspection_address','customer_phone'].forEach(id => {
                const el = document.getElementById(id);
                if (el && !el.value.trim()) { 
                    ok = false; 
                    el.style.borderColor = 'var(--danger-color)'; 
                } else if (el) {
                    el.style.borderColor = '';
                }
            });
            if (!msg) msg = 'Укажите дату, время, адрес и телефон заказчика для проверки';
        }

        if (!ok) {
            app.modules.notifications.showAlert(msg || 'Пожалуйста, заполните все обязательные поля', 'warning');
            const generateBtn = document.getElementById('generateBtn');
            if (generateBtn) {
                generateBtn.classList.add('shake');
                setTimeout(() => generateBtn.classList.remove('shake'), 500);
            }
        }
        return ok;
    }

    function generateReport() {
        if (!validateForm()) return;
        
        try {
            const formData = new FormData(document.getElementById('diagnosticForm'));
            const data = Object.fromEntries(formData.entries());
            const report = generateReportText(data);
            
            const output = document.getElementById('output');
            const outputCard = document.getElementById('outputCard');
            const copyBtn = document.getElementById('copyBtn');
            
            if (output) output.textContent = report;
            if (outputCard) outputCard.classList.remove('hidden');
            if (copyBtn) copyBtn.classList.remove('hidden');

            calculateAndShowSavings(data);

            if (data.decision === '📅 Запланировать проверку' && app.modules.inspections) {
                app.modules.inspections.scheduleInspection(data);
            }

            if (outputCard) outputCard.scrollIntoView({ behavior: 'smooth' });
            app.modules.notifications.showAlert('Отчет успешно сгенерирован!', 'success');
        } catch (e) {
            console.error('Ошибка генерации отчета:', e);
            app.modules.notifications.showAlert('Ошибка при создании отчета', 'warning');
        }
    }

    function generateReportText(data) {
        const brand = data.brand === 'Другая марка' ? data.brand_custom : data.brand;
        const model = data.model === 'Другая модель' ? data.model_custom : data.model;
        
        let report = `🏍️ Мотоподбор, осмотр мотоцикла перед покупкой, выездная диагностика, подбор под ключ.\n`;
        report += `📞 Сергей Ландик 8 950 005-05-08\n`;
        report += `🌐 Сайт: motopodbor.ru\n\n`;
        
        report += `🏍️ ${brand} ${model}\n`;
        if (data.year) report += `📅 Год выпуска: ${data.year}\n`;
        
        // НОВЫЕ ПОЛЯ В ОТЧЕТЕ
        if (data.mileage_km) report += `🛣️ Пробег: ${data.mileage_km} км (${(parseFloat(data.mileage_km) * 0.621371).toFixed(0)} миль)\n`;
        else if (data.mileage_miles) report += `🛣️ Пробег: ${data.mileage_miles} миль (${(parseFloat(data.mileage_miles) * 1.60934).toFixed(0)} км)\n`;
        
        if (data.motorcycle_class) report += `🏷️ Класс: ${data.motorcycle_class}\n`;
        if (data.transmission_type) report += `⚙️ Тип коробки: ${data.transmission_type}\n`;
        if (data.vin) report += `🔢 VIN: ${data.vin}\n`;
        if (data.engine_number) report += `🔧 Номер двигателя: ${data.engine_number}\n`;
        if (data.license_plate) report += `🚗 Гос. номер: ${data.license_plate}\n`;
        if (data.motorcycle_origin) report += `🌍 Происхождение: ${data.motorcycle_origin}\n`;
        if (data.auction_supply) report += `🏛️ Аукцион/поставка: ${data.auction_supply}\n`;
        
        report += `\n🔍 РЕЗУЛЬТАТЫ ДИАГНОСТИКИ:\n\n`;
        const ratings = {
            '👁️ Внешний вид': data.appearance_rating,
            '⚙️ Двигатель/КПП': data.engine_rating,
            '🔌 Электрооборудование': data.electronics_rating,
            '🛠️ Подвеска': data.suspension_rating
        };
        Object.entries(ratings).forEach(([label, rating]) => {
            if (rating) {
                const r = parseInt(rating, 10);
                const stars = '★'.repeat(r) + '☆'.repeat(5 - r);
                report += `${label}: ${stars}\n`;
            }
        });
        
        report += `\n💼 ВЫВОДЫ:\n`;
        if (data.key_finding) report += `🔑 Ключевая находка: ${data.key_finding}\n`;
        if (data.expert_verdict) report += `👨‍💼 Вердикт эксперта: ${data.expert_verdict}\n`;
        if (data.decision) {
            report += `🤔 Решение: ${data.decision}\n`;
            if (data.decision === '📅 Запланировать проверку') {
                if (data.inspection_date && data.inspection_time) {
                    const inspectionDate = new Date(data.inspection_date + 'T' + data.inspection_time);
                    report += `📅 Запланированная проверка: ${inspectionDate.toLocaleString('ru-RU')}\n`;
                }
                if (data.inspection_address) report += `📍 Адрес: ${data.inspection_address}\n`;
            }
        }
        
        if (data.price || data.objective_cost || data.seller_discount || data.investment_cost) {
            report += `\n💰 ФИНАНСОВАЯ ИНФОРМАЦИЯ:\n`;
            if (data.price) report += `💵 Цена продавца: ${data.price}\n`;
            if (data.objective_cost) report += `📊 Объективная стоимость: ${data.objective_cost}\n`;
            if (data.seller_discount) report += `🎁 Скидка с продавца: ${data.seller_discount}\n`;
            if (data.investment_cost) report += `🔧 Стоимость вложений: ${data.investment_cost}\n`;
        }
        
        report += `\n────────────────────────────\n`;
        report += `📞 Готовы найти свой идеальный мотоцикл?\n`;
        report += `Звоните: 8 950 005-05-08\n`;
        report += `Мы поможем сделать правильный выбор! ✅`;
        return report;
    }

    function calculateAndShowSavings(data) {
        const price = app.modules.utils.parseMoneyValue(data.price);
        const objectiveCost = app.modules.utils.parseMoneyValue(data.objective_cost);
        const sellerDiscount = app.modules.utils.parseMoneyValue(data.seller_discount);
        const investmentCost = app.modules.utils.parseMoneyValue(data.investment_cost);
        const savingsAlert = document.getElementById('savingsAlert');

        if (price && objectiveCost && savingsAlert) {
            const savings = (objectiveCost - (price - sellerDiscount)) - investmentCost;
            if (savings > 0) {
                savingsAlert.textContent = `💵 Общая экономия для клиента: ${app.modules.utils.formatMoney(savings)}`;
                savingsAlert.classList.remove('hidden');
            } else {
                savingsAlert.classList.add('hidden');
            }
        } else if (savingsAlert) {
            savingsAlert.classList.add('hidden');
        }
    }

    function saveReportToDatabase() {
        if (!validateForm()) return;
        
        try {
            const formData = new FormData(document.getElementById('diagnosticForm'));
            const data = Object.fromEntries(formData.entries());
            const brand = data.brand === 'Другая марка' ? data.brand_custom : data.brand;
            const model = data.model === 'Другая модель' ? data.model_custom : data.model;

            const report = {
                id: Date.now().toString(),
                timestamp: new Date().toISOString(),
                ...data,
                brand, model,
                generated_text: document.getElementById('output')?.textContent || ''
            };
            
            app.state.reportsDatabase.push(report);
            localStorage.setItem('motodiag_reports', JSON.stringify(app.state.reportsDatabase));
            app.modules.notifications.showAlert('Отчет успешно сохранен в базу данных!', 'success');
            
            if (app.modules.database) app.modules.database.loadReportsList();
            if (app.modules.statistics) app.modules.statistics.updateStatistics();
        } catch (e) {
            console.error('Ошибка сохранения отчета:', e);
            app.modules.notifications.showAlert('Ошибка при сохранении отчета', 'warning');
        }
    }

    function copyToClipboard() {
        try {
            const text = document.getElementById('output')?.textContent || '';
            navigator.clipboard.writeText(text).then(() => {
                app.modules.notifications.showAlert('Отчет скопирован в буфер обмена!', 'success');
            }).catch(() => {
                const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
                document.execCommand('copy'); document.body.removeChild(ta);
                app.modules.notifications.showAlert('Отчет скопирован в буфер обмена!', 'success');
            });
        } catch (e) {
            console.error('Ошибка копирования:', e);
            app.modules.notifications.showAlert('Ошибка при копировании', 'warning');
        }
    }

    return {
        init,
        updateModelOptions,
        updateProgress,
        updateMileageDisplay,
        saveFormData,
        loadFormData,
        clearForm,
        validateForm,
        generateReport,
        generateReportText,
        calculateAndShowSavings,
        saveReportToDatabase,
        copyToClipboard
    };
})();

// Остальные модули остаются без изменений (database, inspections, statistics, report, pwa, settings, scroll)
// Модуль базы данных
app.modules.database = (function() {
    function init() {
        const searchReportsEl = document.getElementById('searchReports');
        const exportBtnEl = document.getElementById('exportBtn');
        const importBtnEl = document.getElementById('importBtn');
        
        if (searchReportsEl) searchReportsEl.addEventListener('input', loadReportsList);
        if (exportBtnEl) exportBtnEl.addEventListener('click', exportDatabase);
        if (importBtnEl) importBtnEl.addEventListener('click', importDatabase);
    }

    function loadReportsList() {
        const reportsList = document.getElementById('reportsList');
        if (!reportsList) return;
        
        const searchValue = (document.getElementById('searchReports')?.value || '').toLowerCase();

        if (app.state.reportsDatabase.length === 0) {
            reportsList.innerHTML = '<div class="text-center" style="padding: 20px; color: var(--text-light);">Нет сохраненных отчетов</div>';
            return;
        }

        const filtered = app.state.reportsDatabase.filter(r => {
            if (!searchValue) return true;
            return (
                r.brand?.toLowerCase().includes(searchValue) ||
                r.model?.toLowerCase().includes(searchValue) ||
                (r.year && String(r.year).includes(searchValue)) ||
                r.vin?.toLowerCase().includes(searchValue) ||
                r.license_plate?.toLowerCase().includes(searchValue)
            );
        }).reverse();

        if (filtered.length === 0) {
            reportsList.innerHTML = '<div class="text-center" style="padding: 20px; color: var(--text-light);">Отчеты не найдены</div>';
            return;
        }

        reportsList.innerHTML = filtered.map(report => `
            <div class="report-item">
                <div class="report-header">
                    <div class="report-title">${app.modules.utils.escapeHtml(report.brand)} ${app.modules.utils.escapeHtml(report.model)} (${app.modules.utils.escapeHtml(report.year)})</div>
                    <div class="report-actions">
                        <button class="action-btn" style="background: var(--secondary-color); color: white;" onclick="app.modules.report.viewReport('${report.id}')" aria-label="Просмотреть отчет">👁️</button>
                        <button class="action-btn" style="background: var(--warning-color); color: white;" onclick="app.modules.report.editReport('${report.id}')" aria-label="Редактировать отчет">✏️</button>
                        <button class="action-btn" style="background: var(--danger-color); color: white;" onclick="app.modules.report.deleteReport('${report.id}')" aria-label="Удалить отчет">🗑️</button>
                    </div>
                </div>
                <div class="report-meta">
                    <div>Пробег: ${report.mileage_km ? app.modules.utils.escapeHtml(report.mileage_km) + ' км' : (report.mileage_miles ? app.modules.utils.escapeHtml(report.mileage_miles) + ' миль' : '0')}</div>
                    <div>Цена: ${app.modules.utils.escapeHtml(report.price || 'Не указана')}</div>
                    <div>${report.vin ? `VIN: ${app.modules.utils.escapeHtml(report.vin)}` : 'VIN: Не указан'}</div>
                    <div>${report.license_plate ? `Номер: ${app.modules.utils.escapeHtml(report.license_plate)}` : 'Номер: Не указан'}</div>
                    <div>Класс: ${app.modules.utils.escapeHtml(report.motorcycle_class || 'Не указан')}</div>
                    <div>Решение: ${app.modules.utils.escapeHtml(report.decision || 'Не указано')}</div>
                </div>
            </div>
        `).join('');
    }

    function exportDatabase() {
        try {
            const dataStr = JSON.stringify(app.state.reportsDatabase, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.href = url;
            link.download = `motodiag_reports_${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            setTimeout(() => URL.revokeObjectURL(url), 100);
            app.modules.notifications.showAlert('База данных успешно экспортирована', 'success');
        } catch { 
            app.modules.notifications.showAlert('Ошибка при экспорте данных', 'warning');
        }
    }

    function importDatabase() {
        const input = document.createElement('input');
        input.type = 'file'; input.accept = '.json';
        input.onchange = e => {
            const file = e.target.files[0]; if (!file) return;
            const reader = new FileReader();
            reader.onload = evt => {
                try {
                    const imported = JSON.parse(evt.target.result);
                    if (!Array.isArray(imported)) throw new Error('format');
                    if (confirm(`Найдено ${imported.length} отчетов. Добавить к существующим?`)) {
                        app.state.reportsDatabase = [...app.state.reportsDatabase, ...imported];
                        localStorage.setItem('motodiag_reports', JSON.stringify(app.state.reportsDatabase));
                        loadReportsList();
                        if (app.modules.statistics) app.modules.statistics.updateStatistics();
                        app.modules.notifications.showAlert(`Успешно импортировано ${imported.length} отчетов`, 'success');
                    }
                } catch { app.modules.notifications.showAlert('Ошибка при чтении файла', 'warning'); }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    return {
        init,
        loadReportsList,
        exportDatabase,
        importDatabase
    };
})();

// Модуль проверок
app.modules.inspections = (function() {
    function init() {
        const searchInspectionsEl = document.getElementById('searchInspections');
        const exportInspectionsBtnEl = document.getElementById('exportInspectionsBtn');
        const importInspectionsBtnEl = document.getElementById('importInspectionsBtn');
        
        if (searchInspectionsEl) searchInspectionsEl.addEventListener('input', loadInspectionsList);
        if (exportInspectionsBtnEl) exportInspectionsBtnEl.addEventListener('click', exportInspections);
        if (importInspectionsBtnEl) importInspectionsBtnEl.addEventListener('click', importInspections);
        
        scheduleInspectionNotifications();
    }

    function loadInspectionsList() {
        const inspectionsList = document.getElementById('inspectionsList');
        if (!inspectionsList) return;
        
        const searchValue = (document.getElementById('searchInspections')?.value || '').toLowerCase();

        if (app.state.inspectionsDatabase.length === 0) {
            inspectionsList.innerHTML = '<div class="text-center" style="padding: 20px; color: var(--text-light);">Нет запланированных проверок</div>';
            return;
        }

        const filtered = app.state.inspectionsDatabase.filter(inspection => {
            if (!searchValue) return true;
            return (
                inspection.brand?.toLowerCase().includes(searchValue) ||
                inspection.model?.toLowerCase().includes(searchValue) ||
                inspection.inspection_address?.toLowerCase().includes(searchValue)
            );
        }).sort((a, b) => new Date(a.inspection_date + 'T' + a.inspection_time) - new Date(b.inspection_date + 'T' + b.inspection_time));

        if (filtered.length === 0) {
            inspectionsList.innerHTML = '<div class="text-center" style="padding: 20px; color: var(--text-light);">Проверки не найдены</div>';
            return;
        }

        inspectionsList.innerHTML = filtered.map(inspection => {
            const inspectionDateTime = new Date(inspection.inspection_date + 'T' + inspection.inspection_time);
            const now = new Date();
            const timeDiff = inspectionDateTime.getTime() - now.getTime();
            const hoursDiff = timeDiff / (1000 * 60 * 60);

            const isUrgent = hoursDiff < 24 && hoursDiff > 0;
            const isOverdue = timeDiff < 0 && inspection.status === 'planned';

            let statusBadge = '';
            if (inspection.status === 'completed') statusBadge = '<span class="badge badge-success">✅ Выполнено</span>';
            else if (isOverdue) statusBadge = '<span class="badge badge-warning">⚠️ Просрочено</span>';
            else if (isUrgent) statusBadge = '<span class="badge badge-warning">🔔 Срочно</span>';
            else statusBadge = '<span class="badge badge-info">📅 Запланировано</span>';

            return `
            <div class="inspection-item ${isUrgent ? 'urgent' : ''} ${inspection.status === 'completed' ? 'completed' : ''}">
                <div class="inspection-header">
                    <div class="inspection-title">${app.modules.utils.escapeHtml(inspection.brand)} ${app.modules.utils.escapeHtml(inspection.model)} (${app.modules.utils.escapeHtml(inspection.year)})</div>
                    <div class="inspection-date">${inspectionDateTime.toLocaleDateString('ru-RU')} ${app.modules.utils.escapeHtml(inspection.inspection_time)}</div>
                </div>
                <div class="inspection-details">
                    <div><strong>Адрес:</strong> ${app.modules.utils.escapeHtml(inspection.inspection_address || '')}</div>
                    <div><strong>Заказчик:</strong> ${app.modules.utils.escapeHtml(inspection.customer_phone || '')}</div>
                    <div><strong>Продавец:</strong> ${app.modules.utils.escapeHtml(inspection.seller_phone || 'Не указан')}</div>
                    <div><strong>Статус:</strong> ${statusBadge}</div>
                </div>
                ${inspection.inspection_notes ? `<div style="margin-bottom: 12px;"><strong>Заметки:</strong> ${app.modules.utils.escapeHtml(inspection.inspection_notes)}</div>` : ''}
                <div class="inspection-actions">
                    <button class="action-btn" style="background: var(--secondary-color); color: white;" onclick="app.modules.inspections.viewInspection('${inspection.id}')" aria-label="Просмотреть проверку">👁️</button>
                    <button class="action-btn" style="background: var(--success-color); color: white;" onclick="app.modules.inspections.completeInspection('${inspection.id}')" aria-label="Отметить как выполнено">✅</button>
                    <button class="action-btn" style="background: var(--warning-color); color: white;" onclick="app.modules.inspections.editInspection('${inspection.id}')" aria-label="Редактировать проверку">✏️</button>
                    <button class="action-btn" style="background: var(--danger-color); color: white;" onclick="app.modules.inspections.deleteInspection('${inspection.id}')" aria-label="Удалить проверку">🗑️</button>
                </div>
            </div>`;
