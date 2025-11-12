// Константы и типы
const STORAGE_KEYS = {
    reports: 'motodiag_reports',
    inspections: 'motodiag_inspections',
    form: 'motodiag_form',
    settings: 'motodiag_settings',
};

const BRANDS = [
    'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'Harley-Davidson', 'BMW', 
    'KTM', 'Ducati', 'Triumph', 'Royal Enfield', 'Kymco', 'CFMoto', 
    'Sym', 'Bajaj', 'TVS', 'Benelli', 'Moto Guzzi', 'MV Agusta', 
    'Aprilia', 'Gas Gas', 'Sherco', 'Beta', 'Zero', 'Indian', 
    'Husqvarna', 'Brough Superior', 'Bimota', 'Cagiva', 'Gilera', 
    'Polaris', 'BRP', 'Loncin', 'Lifan', 'Zongshen', 'Hyosung', 
    'UM', 'AJP', 'Aermacchi', 'AJS', 'Alfer', 'American IronHorse', 
    'Apollo', 'Arch Motorcycle', 'Arctic Leopard', 'Arlen Ness', 
    'Asiawing', 'Aston Martin', 'Ataki', 'Aurus', 'Avantis', 'BSE', 
    'Bashan', 'Big Bear Choppers', 'Borile', 'Boss Hoss', 'Brabus', 
    'Brammo', 'Buell', 'Bultaco', 'CCM', 'Confederate', 'Curtiss', 
    'Daelim', 'Derbi', 'Dnepr', 'EBR', 'Ecoget', 'Ecosse', 
    'Energica', 'Excelsior-Henderson', 'Fantic', 'Fischer', 'Fosti', 
    'Ghezzi & Brian', 'Groza', 'Hercules', 'Horex', 'Irbis', 'IZH', 
    'Jawa', 'Keeway', 'Kreidler', 'Laverda', 'Maico', 'Malaguti', 
    'Matchless', 'Megelli', 'Minsk', 'Moto Morini', 'MZ', 'Norton', 
    'Oset', 'Ossa', 'Patron', 'Peugeot', 'Pitster Pro', 'Puch', 
    'QJ Motor', 'Rieju', 'Rokon', 'Sachs', 'Simson', 'Stark Future', 
    'Stels', 'Super Soco', 'Sur-ron', 'SWM', 'TM Racing', 'Tomos', 
    'Ural', 'Vepr', 'Vertigo', 'Voge', 'Von Dutch', 'Zundapp', 
    'Zweirad-Union', 'Cleveland Cyclewerks', 'Другая марка'
];

const MODELS_BY_BRAND = {
    Honda: [
        'CB125F', 'CB300R', 'CB500X', 'CB650R', 'CBR500R', 'CBR650R', 
        'CBR1000RR-R Fireblade', 'CRF300L', 'CRF450R', 'Africa Twin', 
        'Gold Wing', 'Rebel 500', 'Rebel 1100', 'PCX160', 'ADV160', 
        'Forza 350', 'CT125', 'Monkey 125', 'Super Cub C125', 'NM4 Vultus', 
        'VFR800F', 'RC213V-S', 'CRF1100L', 'CRF250R', 'CRF150R', 
        'Wave 110', 'Dio', 'Activa 6G', 'Shine 100', 'Dream', 'Cliq', 
        'Grazia', 'X-Blade', 'Hornet 2.0', 'SP 125', 'Unicorn', 
        'CB200X', 'H\'Ness CB350', 'CB350 RS', 'Gold Wing Tour', 
        'CRF450X', 'CRF250L Rally', 'CRF50F', 'XR650L', 'CBR250R', 
        'CB1000R', 'NC750X', 'Integra', 'VFR1200F', 'VFR1200X', 
        'CBR600RR', 'CB400 Super Four', 'CB1100', 'ST1300', 'VT750S', 
        'Shadow Aero', 'Fury', 'Rune', 'F6B', 'Valkyrie', 'Grom', 
        'MSX125', 'DN-01', 'NM5', 'CBR1000F', 'VTR1000F', 'CBR1100XX', 
        'CX500', 'GL500', 'VF750', 'VFR400', 'CBR400', 'CB400SF', 
        'CB1300', 'Bros 400', 'Bros 650', 'Revere 450', 'Transalp 450', 
        'XL600V', 'XL700V', 'Deauville 650', 'NT700', 'Pan European', 
        'ST1100', 'Silver Wing 600', 'PS250', 'Big Ruckus 250', 
        'Faze 250', 'Helix 250', 'Jazz 250', 'Lead 250', 'Dylan 125', 
        'Giorno 125', 'Joker 125', 'Today 50', 'Ape 50', 'Dax 125', 
        'Gorilla 125', 'Motra 125', 'Motocompacto', 'Gyro', 'Gyro Canopy', 
        'Street 750', 'Steed 400'
    ],
    Yamaha: [
        'MT-07', 'MT-09', 'YZF-R1', 'YZF-R6', 'YZF-R3', 'XMAX', 
        'TMAX', 'Tracer 9', 'XSR900', 'Bolt', 'VMAX', 'WR250R', 
        'XT250', 'Super Ténéré', 'Niken', 'TW200', 'SR400', 'FJR1300', 
        'V-Star 250', 'V-Star 650', 'V-Star 950', 'Road Star', 'Raider', 
        'Stryker', 'Star Venture', 'YZ450F', 'YZ250F', 'YZ125', 
        'PW50', 'TT-R50', 'TT-R110', 'TT-R125', 'XT125', 'XT660', 
        'XT1200Z', 'XJ6', 'FZ6', 'FZ1', 'FJR1300A', 'FZ8', 'FZ-09', 
        'FZ-07', 'XSR700', 'XSR900', 'TDM900', 'TRX850', 'TZR250', 
        'RZ350', 'RD350', 'XS650', 'XJ650', 'XJ750', 'XJ900', 'XJ1100', 
        'Virago 250', 'Virago 535', 'Virago 750', 'Virago 1100', 
        'DragStar 400', 'DragStar 650', 'DragStar 1100', 'Royal Star', 
        'Venture', 'Grizzly', 'Kodiak', 'Rhino', 'Wolverine', 'YFZ450', 
        'Banshee', 'Raptor 250', 'Raptor 700', 'Blaster', 'Warrior', 
        'Big Bear', 'Bruin', 'Grizzy', 'Kodiak'
    ],
    Kawasaki: [
        'Ninja ZX-10R', 'Ninja 650', 'Z900', 'Versys 650', 'Vulcan S', 
        'KLX230', 'Ninja 400', 'Z400', 'Ninja 300', 'Z300', 'Ninja 250', 
        'Z250', 'Ninja 125', 'Z125', 'Versys 1000', 'Vulcan 900', 
        'Vulcan 1700', 'Concours 14', 'KLR650', 'KLX300', 'KLX140', 
        'KLX110', 'KX450', 'KX250', 'KX100', 'KX65', 'Brute Force', 
        'Mule', 'Teryx', 'Prairie', 'Bayou', 'Lakota', 'KFX', 'Jet Ski'
    ],
    Suzuki: [
        'GSX-R1000', 'GSX-R750', 'GSX-S1000', 'V-Strom 650', 'SV650', 
        'Hayabusa', 'GSX-R600', 'GSX-R125', 'GSX-S750', 'V-Strom 1050', 
        'Boulevard M109R', 'Boulevard C50', 'Boulevard S40', 'DR-Z400', 
        'DR650', 'VanVan 200', 'Address', 'Burgman', 'Skywave', 'Gemma', 
        'Lets', 'UZ', 'GR', 'RA', 'ST', 'GT', 'TS', 'RM-Z', 'QuadSport', 
        'KingQuad', 'Eiger'
    ],
    'Harley-Davidson': [
        'Street Glide', 'Sportster', 'Fat Boy', 'Softail', 'Pan America', 
        'Road King', 'Electra Glide', 'Road Glide', 'Breakout', 
        'Low Rider', 'Fat Bob', 'Street Bob', 'Iron 883', 'Forty-Eight', 
        'Roadster', 'SuperLow', '1200 Custom', 'Nightster', 'Forty-Eight Special', 
        'Softail Slim', 'Deluxe', 'Heritage Classic', 'Fat Boy Special', 
        'Breakout 114', 'Low Rider S', 'Street Bob 114', 'Fat Bob 114', 
        'Sport Glide', 'Softail Standard', 'CVO Street Glide', 'CVO Road Glide', 
        'CVO Limited', 'Tri Glide Ultra', 'Freewheeler', 'LiveWire'
    ],
    BMW: [
        'S1000RR', 'R1250GS', 'F900R', 'R18', 'C400X', 'R1250RT', 
        'R1250R', 'R1250RS', 'F850GS', 'F750GS', 'G310R', 'G310GS', 
        'K1600GT', 'K1600B', 'R nineT', 'R18 Classic', 'R18 B', 
        'R18 Transcontinental', 'C400GT', 'C650GT', 'C evolution'
    ],
    KTM: [
        '1290 Super Duke R', '790 Duke', '390 Duke', '690 Enduro', 
        '1290 Super Adventure', '890 Adventure', '390 Adventure', 
        '250 Adventure', 'RC 390', 'RC 125', '125 Duke', '200 Duke', 
        '450 SX-F', '350 SX-F', '250 SX-F', '125 SX', '85 SX', '65 SX', 
        '50 SX', '300 EXC', '250 EXC', '150 EXC', '125 EXC', 'Freeride', 
        'X-Bow'
    ],
    Ducati: [
        'Panigale V4', 'Monster', 'Scrambler', 'Multistrada', 'Streetfighter', 
        'Diavel', 'Hypermotard', 'Supersport', 'Panigale V2', 'Superleggera V4', 
        'XDiavel', 'DesertX', 'Streetfighter V4', 'Monster SP', 'Scrambler 1100', 
        'Scrambler 800', 'Multistrada V4', 'Panigale 1299', '1199 Panigale', 
        '1098', '899 Panigale', '848', '796', '696', '620', '600', '400', 
        '350', '250', '160', '125', 'Ducati 999', 'Ducati 998', 'Ducati 996', 
        'Ducati 916', 'Ducati 900', 'Ducati 750', 'Ducati 500', 'Ducati 350', 
        'Ducati 250', 'Ducati 125', 'Ducati 100', 'Ducati 50'
    ],
    Triumph: [
        'Street Triple', 'Speed Triple', 'Tiger 900', 'Bonneville', 
        'Rocket 3', 'Trident 660', 'Tiger 1200', 'Scrambler 1200', 
        'Bonneville T120', 'Bonneville T100', 'Thruxton', 'Bonneville Bobber', 
        'Bonneville Speedmaster', 'Rocket 3 GT', 'Rocket 3 R', 'Tiger Sport 660', 
        'Street Twin', 'Speed Twin', 'Scrambler 900', 'Thruxton RS', 
        'Bonneville Speed Twin', 'Daytona', 'Sprint', 'Legend', 'Thunderbird', 
        'America', 'Speedmaster', 'Bonneville SE', 'Bonneville Black', 
        'Bonneville Scrambler', 'Bonneville T100 Black', 'Bonneville T120 Black'
    ],
    'Royal Enfield': [
        'Classic 350', 'Meteor 350', 'Bullet 350', 'Interceptor 650', 
        'Continental GT 650', 'Himalayan', 'Classic 500', 'Bullet 500', 
        'Thunderbird', 'Continental GT 535', 'Himalayan 450', 'Scram 411', 
        'Hunter 350', 'Bullet 500 ES', 'Classic 500 Signals', 'Meteor 350 Fireball', 
        'Interceptor 650 Canyon', 'Continental GT 650 Dual Tone', 
        'Himalayan Gravel', 'Bullet 350 X', 'Classic 350 X', 'Meteor 350 Stellar', 
        'Interceptor 650 Mark 2', 'Continental GT 650 Mark 2', 'Himalayan AD
