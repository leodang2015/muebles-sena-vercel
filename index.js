const INITIAL_CLIENTES = [
  {
    id: 'cli-001',
    tipoDocumento: 'Cédula de Ciudadanía',
    numeroDocumento: '1020456789',
    nombreCompleto: 'Camila Restrepo',
    password: 'alpes123',
    telefonoResidencia: '6013234567',
    telefonoCelular: '3157894561',
    direccion: 'Carrera 15 # 85-12',
    ciudadResidencia: 'Bogotá',
    departamento: 'Cundinamarca',
    pais: 'Colombia',
    profesion: 'Diseñadora de Interiores',
    email: 'camila.restrepo@example.com',
    isJuridica: false,
    perteneceEmpresa: false
  },
  {
    id: 'cli-002',
    tipoDocumento: 'Cédula de Ciudadanía',
    numeroDocumento: '91234567',
    nombreCompleto: 'Carlos Gómez',
    password: 'alpes123',
    telefonoResidencia: '6077245678',
    telefonoCelular: '3004567890',
    direccion: 'Calle 12 # 4-50 Centro',
    ciudadResidencia: 'San Gil',
    departamento: 'Santander',
    pais: 'Colombia',
    profesion: 'Comerciante',
    email: 'carlos.gomez@example.com',
    isJuridica: false,
    perteneceEmpresa: false
  },
  {
    id: 'cli-003',
    tipoDocumento: 'NIT',
    numeroDocumento: '900123456-1',
    nombreCompleto: 'Constructora Alpes S.A.S.',
    password: 'alpes123',
    telefonoResidencia: '6024889900',
    telefonoCelular: '3112223344',
    direccion: 'Avenida Sexta Norte # 22N-50',
    ciudadResidencia: 'Cali',
    departamento: 'Valle del Cauca',
    pais: 'Colombia',
    profesion: 'Constructor',
    email: 'compras@construalpes.com',
    isJuridica: true,
    perteneceEmpresa: false,
    nit: '900123456-1'
  },
  {
    id: 'cli-004',
    tipoDocumento: 'Cédula de Ciudadanía',
    numeroDocumento: '43567890',
    nombreCompleto: 'Diana Ospina',
    password: 'alpes123',
    telefonoResidencia: '6042661122',
    telefonoCelular: '3109876543',
    direccion: 'Calle 10 # 36-24 El Poblado',
    ciudadResidencia: 'Medellín',
    departamento: 'Antioquia',
    pais: 'Colombia',
    profesion: 'Arquitecta',
    email: 'diana.ospina@example.com',
    isJuridica: false,
    perteneceEmpresa: false
  }
];

const INITIAL_MUEBLES = [
  {
    referencia: 'MESONAT001',
    nombre: 'Mesa Ovalada estilo griego',
    descripcion: 'Mesa ovalada de comedor con un elegant diseño de estilo griego clásico, ideal para brindar un toque de sofisticación a tus espacios interiores.',
    tipo: 'Interior',
    material: 'Madera',
    dimensiones: 'Alto: 140 cm, Ancho: 40 cm, Profundidad: 55 cm',
    color: 'Natural',
    peso: 30000,
    foto: 'images/mesa_natural.jpg',
    precio: 140000,
    stock: 2
  },
  {
    referencia: 'MESOCAO001',
    nombre: 'Mesa Ovalada estilo griego (Caoba)',
    descripcion: 'Mesa ovalada con un elegante estilo griego, exquisitamente terminada en un acabado caoba rojizo oscuro que resalta las finas vetas de la madera selecta.',
    tipo: 'Interior',
    material: 'Madera',
    dimensiones: 'Alto: 140 cm, Ancho: 40 cm, Profundidad: 55 cm',
    color: 'Caoba',
    peso: 30000,
    foto: 'images/mesa_caoba.jpg',
    precio: 140000,
    stock: 3
  },
  {
    referencia: 'MESOAVE001',
    nombre: 'Mesa Ovalada estilo griego (Avellana)',
    descripcion: 'Mesa ovalada con un elegante estilo griego y patas de columna tallada, en un matiz avellana cálido y profundo ideal para salones prestigiosos.',
    tipo: 'Interior',
    material: 'Madera',
    dimensiones: 'Alto: 140 cm, Ancho: 60 cm, Profundidad: 55 cm',
    color: 'Avellana',
    peso: 60000,
    foto: 'images/mesa_avellana.jpg',
    precio: 180000,
    stock: 1
  },
  {
    referencia: 'SILAEXT001',
    nombre: 'Silla Exterior Imperial',
    descripcion: 'Sustentable e inmune al clima, esta silla de exterior está diseñada en aluminio fundido de alta pureza tratado con pintura electrostática en polvo súper resistente.',
    tipo: 'Exterior',
    material: 'Aluminio fundido',
    dimensions: 'Alto: 90 cm, Ancho: 55 cm, Profundidad: 55 cm',
    dimensiones: 'Alto: 90 cm, Ancho: 55 cm, Profundidad: 55 cm',
    color: 'Gris Antracita',
    peso: 8000,
    foto: 'images/silla_exterior.jpg',
    precio: 90000,
    stock: 10
  },
  {
    referencia: 'SOFAEXT002',
    nombre: 'Sofá Modular de Jardín Premium',
    descripcion: 'Sofá elegante elaborado de mimbre sintético (rattan) de alta resistencia contra rayos UV, con almohadones rellenados de espuma de alta densidad impermeables.',
    tipo: 'Exterior',
    material: 'Mimbre Sintético',
    dimensiones: 'Alto: 85 cm, Ancho: 180 cm, Profundidad: 80 cm',
    color: 'Beige',
    peso: 25000,
    foto: 'images/sofa_exterior.jpg',
    precio: 450000,
    stock: 4
  },
  {
    referencia: 'SILAGRI001',
    nombre: 'Silla Griega Imperial Caoba',
    descripcion: 'Silla de comedor aristocrática de estilo griego clásico, finamente tallada en madera de caoba lustrada y tapizada con un sofisticado tejido damasco en tono crema dorado.',
    tipo: 'Interior',
    material: 'Madera de Caoba',
    dimensions: 'Alto: 105 cm, Ancho: 52 cm, Profundidad: 55 cm',
    dimensiones: 'Alto: 105 cm, Ancho: 52 cm, Profundidad: 55 cm',
    color: 'Caoba / Oro',
    peso: 9500,
    foto: 'images/silla_griega.jpg',
    precio: 135000,
    stock: 8
  },
  {
    referencia: 'CRECLAS001',
    nombre: 'Credenza Neoclásica Premium',
    descripcion: 'Espectacular aparador o credenza clásica de madera noble con finas molduras talladas e incrustaciones doradas neoclásicas, aportando gran suntuosidad y almacenamiento.',
    tipo: 'Interior',
    material: 'Madera Noble',
    dimensiones: 'Alto: 90 cm, Ancho: 160 cm, Profundidad: 45 cm',
    color: 'Nogal Oscuro / Oro',
    peso: 45000,
    foto: 'images/credenza_clasica.jpg',
    precio: 680000,
    stock: 2
  },
  {
    referencia: 'MESTEXT001',
    nombre: 'Mesa de Té Imperial Oxford',
    descripcion: 'Lujoso juego de mesa de té circular para exterior confeccionado en aluminio de fundición ornamental blanco, acompañado de sillas de encaje metálico, inmune a la corrosión.',
    tipo: 'Exterior',
    material: 'Aluminio fundido',
    dimensiones: 'Alto: 75 cm, Ancho: 80 cm, Profundidad: 80 cm',
    color: 'Blanco Imperial',
    peso: 18000,
    foto: 'images/mesa_te_blanca.jpg',
    precio: 320000,
    stock: 3
  }
];

const INITIAL_PEDIDOS = [
  {
    id: 'ORD-2026-001',
    fecha: '2026-06-15',
    clienteId: 'cli-001',
    clienteNombre: 'Camila Restrepo',
    ciudad: 'Bogotá',
    items: [
      {
        referencia: 'MESONAT001',
        nombre: 'Mesa Ovalada estilo griego',
        cantidad: 1,
        precioUnitario: 140000,
        total: 140000,
        tipo: 'Interior'
      },
      {
        referencia: 'SILAEXT001',
        nombre: 'Silla Exterior Imperial',
        cantidad: 2,
        precioUnitario: 90000,
        total: 180000,
        tipo: 'Exterior'
      }
    ],
    valorTotal: 320000,
    formaPago: 'Tarjeta de Crédito',
    descripcionCompra: 'Compra de 1 Mesa Griega Natural y 2 Sillas de Exterior Imperial'
  },
  {
    id: 'ORD-2026-002',
    fecha: '2026-06-16',
    clienteId: 'cli-003',
    clienteNombre: 'Constructora Alpes S.A.S.',
    ciudad: 'Cali',
    items: [
      {
        referencia: 'MESOCAO001',
        nombre: 'Mesa Ovalada estilo griego (Caoba)',
        cantidad: 2,
        precioUnitario: 140000,
        total: 280000,
        tipo: 'Interior'
      },
      {
        referencia: 'SOFAEXT002',
        nombre: 'Sofá Modular de Jardín Premium',
        cantidad: 1,
        precioUnitario: 450000,
        total: 450000,
        tipo: 'Exterior'
      }
    ],
    valorTotal: 730000,
    formaPago: 'Cuenta Corriente',
    descripcionCompra: 'Compra corporativa de mobiliario para oficinas de recreación'
  },
  {
    id: 'ORD-2026-003',
    fecha: '2026-06-17',
    clienteId: 'cli-002',
    clienteNombre: 'Carlos Gómez',
    ciudad: 'San Gil',
    items: [
      {
        referencia: 'MESOAVE001',
        nombre: 'Mesa Ovalada estilo griego (Avellana)',
        cantidad: 1,
        precioUnitario: 180000,
        total: 180000,
        tipo: 'Interior'
      }
    ],
    valorTotal: 180000,
    formaPago: 'Cuenta de Ahorros / PSE',
    descripcionCompra: 'Compra personal de mesa estilo griego avellana selecta'
  },
  {
    id: 'ORD-2026-004',
    fecha: '2026-06-17',
    clienteId: 'cli-004',
    clienteNombre: 'Diana Ospina',
    ciudad: 'Medellín',
    items: [
      {
         referencia: 'SILAEXT001',
         nombre: 'Silla Exterior Imperial',
         cantidad: 4,
         precioUnitario: 90000,
         total: 360000,
         tipo: 'Exterior'
      }
    ],
    valorTotal: 360000,
    formaPago: 'Tarjeta de Crédito',
    descripcionCompra: 'Lote de 4 Sillas Exterior Imperial'
  }
];

const INITIAL_COMENTARIOS = [
  {
    id: 'com-001',
    referencia: 'MESONAT001',
    autor: 'Camila Restrepo',
    calificacion: 5,
    texto: 'Excelente calidad de la madera y acabados impecables. El tono natural le da mucha calidez a mi comedor.',
    fecha: '2026-07-15'
  },
  {
    id: 'com-002',
    referencia: 'MESONAT001',
    autor: 'Andrés Gómez',
    calificacion: 5,
    texto: 'Muy robusta y de acabados finos estilo griego. Llegó perfectamente empacada a Medellín.',
    fecha: '2026-08-01'
  },
  {
    id: 'com-003',
    referencia: 'SOFAEXT002',
    autor: 'Felipe Morales',
    calificacion: 5,
    texto: 'Ideal para la terraza de la finca. El mimbre sintético aguanta lluvia y sol sin decolorarse.',
    fecha: '2026-07-28'
  },
  {
    id: 'com-004',
    referencia: 'CRECLAS001',
    autor: 'Constructora Alpes S.A.S.',
    calificacion: 5,
    texto: 'Espectacular credenza. Las molduras neoclásicas se ven muy elegantes en la sala de juntas.',
    fecha: '2026-06-25'
  },
  {
    id: 'com-005',
    referencia: 'SILAGRI001',
    autor: 'Diana Ospina',
    calificacion: 4,
    texto: 'Muy cómoda y el tapizado damasco en dorado es hermoso. Superó mis expectativas.',
    fecha: '2026-07-04'
  }
];


// ========================================== STATE MANAGEMENT ==========================================

let state = {
  muebles: [],
  clientes: [],
  pedidos: [],
  comentarios: [],
  currentCliente: null,
  carrito: [],
  
  // Navigation: 'store' | 'detail' | 'cart' | 'checkout' | 'success' | 'profile' | 'purchases'
  currentView: 'store',
  
  // Filters variables
  searchQuery: '',
  filterType: 'Todos',
  filterMaterial: 'Todos',
  
  // Selected detail
  selectedMueble: null,
  buyQty: 1,
  
  // Last placed order for invoice screen
  lastPlacedOrder: null
};

function initDB() {
  try {
    const savedMuebles = localStorage.getItem('alpes_muebles');
    state.muebles = savedMuebles ? JSON.parse(savedMuebles) : INITIAL_MUEBLES;
    
    // Auto-update migration for safe and active image URLs
    state.muebles = state.muebles.map(item => {
      const fresh = INITIAL_MUEBLES.find(m => m.referencia === item.referencia);
      if (fresh) {
        item.foto = fresh.foto;
      } else {
        // Fallback for custom added items in user localStorage
        if (item.foto) {
          item.foto = item.foto.replace(/^\/?public\//, '');
        }
      }
      return item;
    });
  } catch (e) {
    state.muebles = INITIAL_MUEBLES;
  }

  try {
    const savedClientes = localStorage.getItem('alpes_clientes');
    state.clientes = savedClientes ? JSON.parse(savedClientes) : INITIAL_CLIENTES;
  } catch (e) {
    state.clientes = INITIAL_CLIENTES;
  }

  try {
    const savedPedidos = localStorage.getItem('alpes_pedidos');
    state.pedidos = savedPedidos ? JSON.parse(savedPedidos) : INITIAL_PEDIDOS;
  } catch (e) {
    state.pedidos = INITIAL_PEDIDOS;
  }

  try {
    const savedComentarios = localStorage.getItem('alpes_comentarios');
    state.comentarios = savedComentarios ? JSON.parse(savedComentarios) : INITIAL_COMENTARIOS;
  } catch (e) {
    state.comentarios = INITIAL_COMENTARIOS;
  }

  try {
    const savedCurrent = localStorage.getItem('alpes_current_cliente');
    state.currentCliente = savedCurrent ? JSON.parse(savedCurrent) : null;
  } catch (e) {
    state.currentCliente = null;
  }

  try {
    const savedCart = localStorage.getItem('alpes_carrito');
    state.carrito = savedCart ? JSON.parse(savedCart) : [];
  } catch (e) {
    state.carrito = [];
  }

  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('alpes_muebles', JSON.stringify(state.muebles));
  localStorage.setItem('alpes_clientes', JSON.stringify(state.clientes));
  localStorage.setItem('alpes_pedidos', JSON.stringify(state.pedidos));
  localStorage.setItem('alpes_comentarios', JSON.stringify(state.comentarios));
  
  if (state.currentCliente) {
    localStorage.setItem('alpes_current_cliente', JSON.stringify(state.currentCliente));
  } else {
    localStorage.removeItem('alpes_current_cliente');
  }
  
  localStorage.setItem('alpes_carrito', JSON.stringify(state.carrito));
}

// Helpers for Ratings and Comments
function getProductComments(referencia) {
  return (state.comentarios || []).filter(c => c.referencia === referencia);
}

function getProductRating(referencia) {
  const list = getProductComments(referencia);
  if (list.length === 0) return { avg: 5.0, count: 0 };
  const sum = list.reduce((acc, c) => acc + c.calificacion, 0);
  const avg = (sum / list.length).toFixed(1);
  return { avg: parseFloat(avg), count: list.length };
}

function starsHTML(n) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= n) {
      html += `<i data-lucide="star" class="w-4 h-4 text-amber-500 fill-amber-400 inline"></i>`;
    } else {
      html += `<i data-lucide="star" class="w-4 h-4 text-stone-300 inline"></i>`;
    }
  }
  return html;
}

// Format COP Currency
function formatCOP(number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
}


// ========================================== DOM READY CONTROLLER ==========================================

window.navigatetoView = navigatetoView;

function startApp() {
  window.navigatetoView = navigatetoView;
  // Initialize Database
  initDB();

  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Initialize UI Bindings
  initPrimaryDOM();
  
  // Render current states
  navigatetoView(state.currentView);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}


// ========================================== CORE NAVIGATION VIEW SWITCHER ==========================================

function navigatetoView(view) {
  state.currentView = view;
  
  // Query all screen wrappers
  const screenStore = document.getElementById('view-store');
  const screenDetail = document.getElementById('view-detail');
  const screenCart = document.getElementById('view-cart');
  const screenProfile = document.getElementById('view-profile');
  const screenCheckout = document.getElementById('view-checkout');
  const screenSuccess = document.getElementById('view-success');
  const screenPurchases = document.getElementById('view-purchases');

  // Hide all screens
  screenStore.classList.add('hidden');
  screenDetail.classList.add('hidden');
  screenCart.classList.add('hidden');
  screenProfile.classList.add('hidden');
  screenCheckout.classList.add('hidden');
  screenSuccess.classList.add('hidden');
  screenPurchases.classList.add('hidden');

  // Show active screen
  if (view === 'store') {
    screenStore.classList.remove('hidden');
    renderStoreGrid();
    renderMaterialFilterOptions();
  } else if (view === 'detail') {
    screenDetail.classList.remove('hidden');
    renderDetailedProduct();
  } else if (view === 'cart') {
    screenCart.classList.remove('hidden');
    renderCartList();
  } else if (view === 'profile') {
    screenProfile.classList.remove('hidden');
    renderProfileScreen();
  } else if (view === 'checkout') {
    screenCheckout.classList.remove('hidden');
    renderCheckoutScreen();
  } else if (view === 'success') {
    screenSuccess.classList.remove('hidden');
    renderSuccessInvoice();
  } else if (view === 'purchases') {
    screenPurchases.classList.remove('hidden');
    renderPurchasesHistory();
  }

  // Update Global Navigation and State Badges
  renderGlobalHeaderState();
  
  // Always scroll to top on screen transitions
  window.scrollTo({ top: 0, behavior: 'smooth' });
  lucide.createIcons();
}

function renderGlobalHeaderState() {
  const headerSessionArea = document.getElementById('header-session-area');
  const cartBadgeCount = document.getElementById('cart-badge-count');
  const mobileCartBadgeCount = document.getElementById('mobile-cart-badge-count');
  
  const totalCartQty = state.carrito.reduce((sum, item) => sum + item.cantidad, 0);
  const totalCartCost = state.carrito.reduce((sum, item) => sum + (item.mueble.precio * item.cantidad), 0);

  // Update header cart text
  if (cartBadgeCount) {
    cartBadgeCount.textContent = totalCartQty;
  }
  if (mobileCartBadgeCount) {
    mobileCartBadgeCount.textContent = totalCartQty;
  }

  // Update header registration area
  if (state.currentCliente) {
    const isJuridicaText = state.currentCliente.isJuridica ? '<span class="ml-1 bg-amber-800 text-amber-50 text-[9px] px-1.5 py-0.5 rounded font-black tracking-wider uppercase">JURÍDICA</span>' : '';
    const isWorkerText = state.currentCliente.perteneceEmpresa ? '<span class="ml-1 bg-emerald-800 text-white text-[9px] px-1.5 py-0.5 rounded font-black tracking-wider uppercase">TRABAJADOR</span>' : '';

    headerSessionArea.innerHTML = `
      <div class="flex flex-wrap items-center gap-3">
        <div class="text-right">
          <p class="text-[10px] text-stone-500 font-mono leading-none">Sesión activa ${isJuridicaText} ${isWorkerText}</p>
          <p class="text-xs font-bold text-stone-200">${state.currentCliente.nombreCompleto}</p>
        </div>
        <div class="flex gap-1">
          <button id="hdr-btn-profile" class="bg-amber-800 hover:bg-amber-700 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1.5 rounded-lg transition">
            Perfil
          </button>
          <button id="hdr-btn-purchases" class="bg-stone-800 hover:bg-stone-700 text-stone-300 text-[10px] sm:text-xs px-2.5 py-1.5 rounded-lg transition font-medium">
            Historial
          </button>
          <button id="hdr-btn-logout" class="text-xs text-red-400 hover:text-red-300 font-bold px-1.5 Transition">
            Salir
          </button>
        </div>
      </div>
    `;

    document.getElementById('hdr-btn-profile').addEventListener('click', () => navigatetoView('profile'));
    document.getElementById('hdr-btn-purchases').addEventListener('click', () => navigatetoView('purchases'));
    document.getElementById('hdr-btn-logout').addEventListener('click', () => {
      state.currentCliente = null;
      state.carrito = [];
      saveToLocalStorage();
      renderGlobalHeaderState();
      alert('Sesión cerrada con éxito.');
      navigatetoView('store');
    });

  } else {
    // Guest view
    headerSessionArea.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="hidden lg:inline text-[11px] text-stone-400 font-light">Se requiere registro para facturar:</span>
        <button id="hdr-btn-login" class="bg-amber-800 hover:bg-amber-900 border border-amber-700 text-amber-50 text-xs font-semibold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 transition shadow-sm">
          <i data-lucide="log-in" class="w-3.5 h-3.5"></i>
          Ingresar / Registrarse
        </button>
      </div>
    `;

    document.getElementById('hdr-btn-login').addEventListener('click', () => navigatetoView('profile'));
  }
  
  // Sync quick cart text inside store summary
  const subtotalCartStoreText = document.getElementById('subtotal-cart-store-text');
  if (subtotalCartStoreText) {
    if (totalCartCost > 0) {
      subtotalCartStoreText.classList.remove('hidden');
      subtotalCartStoreText.textContent = formatCOP(totalCartCost);
    } else {
      subtotalCartStoreText.classList.add('hidden');
    }
  }

  lucide.createIcons();
}


// ========================================== DOM HANDLERS INITIALIZATION ==========================================

function initPrimaryDOM() {
  // Store Search box
  const storeSearch = document.getElementById('store-search');
  storeSearch.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderStoreGrid();
  });

  // Store filter types buttons (Todos, Interior, Exterior)
  const fTypeTodos = document.getElementById('ftype-todos');
  const fTypeInterior = document.getElementById('ftype-interior');
  const fTypeExterior = document.getElementById('ftype-exterior');

  function setTypeFilter(t, activeBtn) {
    state.filterType = t;
    
    // reset styling
    fTypeTodos.className = 'text-xs px-3 py-1.5 rounded-lg font-medium text-stone-600 hover:bg-stone-200 transition';
    fTypeInterior.className = 'text-xs px-3 py-1.5 rounded-lg font-medium text-stone-600 hover:bg-stone-200 transition';
    fTypeExterior.className = 'text-xs px-3 py-1.5 rounded-lg font-medium text-stone-600 hover:bg-stone-200 transition';
    
    activeBtn.className = 'text-xs px-3 py-1.5 rounded-lg font-bold text-white bg-amber-800 transition shadow-xs';
    renderStoreGrid();
  }

  fTypeTodos.addEventListener('click', () => setTypeFilter('Todos', fTypeTodos));
  fTypeInterior.addEventListener('click', () => setTypeFilter('Interior', fTypeInterior));
  fTypeExterior.addEventListener('click', () => setTypeFilter('Exterior', fTypeExterior));

  // Store Material dropdown filter
  const filterMaterialSelect = document.getElementById('store-f-material');
  filterMaterialSelect.addEventListener('change', (e) => {
    state.filterMaterial = e.target.value;
    renderStoreGrid();
  });

  // Reset parameters
  document.getElementById('reset-global-data-btn').addEventListener('click', () => {
    if (confirm('¿Desea restablecer todos los registros (clientes, muebles y pedidos) a sus valores de fábrica iniciales de SENA? Se borrarán datos ingresados recientemente.')) {
      state.muebles = [...INITIAL_MUEBLES];
      state.clientes = [...INITIAL_CLIENTES];
      state.pedidos = [...INITIAL_PEDIDOS];
      state.currentCliente = null;
      state.carrito = [];
      saveToLocalStorage();
      alert('Toda la información del taller ha sido restaurada con éxito.');
      navigatetoView('store');
    }
  });

  // View Cart trigger in Store Page
  document.getElementById('store-cart-toggle').addEventListener('click', () => navigatetoView('cart'));
  
  // Direct back button in Details Screen
  document.getElementById('det-back-btn').addEventListener('click', () => navigatetoView('store'));
  
  // Direct back button in Cart Screen
  document.getElementById('cart-back-btn').addEventListener('click', () => navigatetoView('store'));
  document.getElementById('cart-keep-shopping-btn').addEventListener('click', () => navigatetoView('store'));
  
  // Direct back button in Registration Profile Screen
  document.getElementById('profile-back-btn').addEventListener('click', () => navigatetoView('store'));
  
  // Direct back button in Purchases History Screen
  document.getElementById('purchases-back-btn').addEventListener('click', () => navigatetoView('store'));
}

function renderMaterialFilterOptions() {
  const filterMaterialSelect = document.getElementById('store-f-material');
  // Cache current selected
  const activeSelected = state.filterMaterial;

  const uniqueMaterials = Array.from(new Set(state.muebles.map(m => m.material).filter(Boolean)));
  
  filterMaterialSelect.innerHTML = '<option value="Todos">Material: Todos</option>';
  uniqueMaterials.forEach(mat => {
    const opt = document.createElement('option');
    opt.value = mat;
    opt.textContent = mat;
    if (mat === activeSelected) opt.selected = true;
    filterMaterialSelect.appendChild(opt);
  });
}


// ========================================== CATALOG/STORE GRID (SUBVIEW 1) ==========================================

function renderStoreGrid() {
  const gridContainer = document.getElementById('store-product-grid');
  const countLabel = document.getElementById('store-product-count');
  const emptyView = document.getElementById('store-empty-search');
  
  // Apply filtering rules
  const filtered = state.muebles.filter(m => {
    const matchesSearch = m.nombre.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          m.referencia.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          m.material.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesType = state.filterType === 'Todos' || m.tipo === state.filterType;
    const matchesMaterial = state.filterMaterial === 'Todos' || m.material === state.filterMaterial;
    return matchesSearch && matchesType && matchesMaterial;
  });

  countLabel.textContent = `Mostrando ${filtered.length} de ${state.muebles.length} diseños de alta gama`;
  gridContainer.innerHTML = '';

  if (filtered.length === 0) {
    emptyView.classList.remove('hidden');
    return;
  } else {
    emptyView.classList.add('hidden');
  }

  filtered.forEach(mueble => {
    const card = document.createElement('div');
    card.id = `mueble-card-${mueble.referencia}`;
    card.className = 'bg-white border border-stone-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group h-full';
    
    // Build availability indicators & rating data
    const ratingData = getProductRating(mueble.referencia);
    let labelBadge = '';
    let stockOverlay = '';
    
    if (mueble.stock === 0) {
      stockOverlay = `
        <div class="absolute inset-0 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center z-10">
          <span class="bg-red-600 text-stone-50 text-xs font-bold px-4 py-2 rounded-xl tracking-wider">AGOTADO</span>
        </div>
      `;
    } else if (mueble.stock <= 2) {
      labelBadge = `
        <div class="absolute bottom-3 left-3 bg-red-100/95 text-red-800 text-[10px] font-bold py-1 px-2.5 rounded-md shadow-xs border border-red-200 z-10 animate-pulse">
          ¡ÚLTIMAS ${mueble.stock} UNIDADES!
        </div>
      `;
    }

    card.innerHTML = `
      <div class="relative aspect-[4/3] bg-stone-100 overflow-hidden">
         <img 
          src="${mueble.foto || 'images/logo_alpes.jpg'}" 
          onerror="this.onerror=null; this.src='images/logo_alpes.jpg';"
          alt="${mueble.nombre}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        >
        <div class="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] uppercase tracking-widest font-black font-display text-stone-800 py-1 px-3 rounded-full shadow-xs z-10 border border-stone-200/50">
          ${mueble.tipo}
        </div>
        <div class="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-xs text-amber-400 text-[10px] font-bold py-1 px-2.5 rounded-full shadow-xs z-10 border border-stone-700/60 flex items-center gap-1 font-mono">
          <i data-lucide="star" class="w-3 h-3 fill-amber-400"></i>
          <span>${ratingData.avg}</span>
          <span class="text-stone-300">(${ratingData.count})</span>
        </div>
        ${labelBadge}
        ${stockOverlay}
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md font-bold uppercase border border-stone-200/30">
              REF: ${mueble.referencia}
            </span>
            <span class="text-[11px] text-stone-500 border border-stone-200 rounded-md px-1.5 py-0.2 select-none font-medium bg-stone-50">
              ${mueble.material}
            </span>
          </div>
          
          <h3 class="font-display text-base font-extrabold text-stone-900 mb-1 group-hover:text-amber-900 transition-colors">
            ${mueble.nombre}
          </h3>
          
          <p class="text-xs text-stone-600 line-clamp-3 font-light mb-4 leading-relaxed">
            ${mueble.descripcion || 'Sin descripción detallada disponible.'}
          </p>
        </div>

        <div>
          <div class="flex items-baseline justify-between border-t border-stone-100 pt-3 mb-3">
            <span class="text-[10px] text-stone-400 uppercase tracking-wider font-semibold font-mono">Precio COP:</span>
            <span class="text-base font-display font-black text-amber-950">
              ${formatCOP(mueble.precio)}
            </span>
          </div>

          <div class="flex items-center gap-1.5">
            <button
              id="c-view-btn-${mueble.referencia}"
              class="flex-1 bg-stone-100 hover:bg-amber-50 hover:text-amber-900 text-stone-700 text-xs font-semibold py-2.5 rounded-xl transition border border-transparent hover:border-amber-200/60 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <i data-lucide="message-square" class="w-3.5 h-3.5 text-amber-700"></i>
              Ver & Opinar
            </button>
            ${mueble.stock > 0 ? `
              <button
                id="c-add-btn-${mueble.referencia}"
                class="bg-amber-800 hover:bg-amber-900 text-amber-50 text-xs font-bold py-2.5 px-3 rounded-xl transition shadow-xs flex items-center gap-1 cursor-pointer font-mono"
                title="Añadir 1 Unidad al Carrito"
              >
                + <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    gridContainer.appendChild(card);
    
    // Bind Event Listeners
    document.getElementById(`c-view-btn-${mueble.referencia}`).addEventListener('click', () => {
      state.selectedMueble = mueblesFindRef(mueble.referencia);
      state.buyQty = 1;
      navigatetoView('detail');
    });
    
    const addButton = document.getElementById(`c-add-btn-${mueble.referencia}`);
    if (addButton) {
      addButton.addEventListener('click', () => {
        addItemToShoppingBag(mueble.referencia, 1);
      });
    }
  });

  lucide.createIcons();
}

function mueblesFindRef(ref) {
  return state.muebles.find(m => m.referencia === ref);
}


// ========================================== DETAILED SCREEN (SUBVIEW 2) ==========================================

function renderDetailedProduct() {
  const m = state.selectedMueble;
  if (!m) {
    navigatetoView('store');
    return;
  }

  const container = document.getElementById('detailed-content');
  const productComments = getProductComments(m.referencia);
  const ratingInfo = getProductRating(m.referencia);

  let commentsHTML = '';
  if (productComments.length === 0) {
    commentsHTML = `
      <div class="bg-stone-50 border border-dashed border-stone-200 rounded-3xl p-8 text-center space-y-2">
        <div class="w-12 h-12 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-2">
          <i data-lucide="message-square-plus" class="w-6 h-6"></i>
        </div>
        <h4 class="font-display font-bold text-stone-800 text-sm">Aún no hay opiniones sobre este mueble</h4>
        <p class="text-xs text-stone-500 font-light max-w-sm mx-auto">Sé la primera persona en calificar este diseño y dejar un comentario para la comunidad SENA.</p>
      </div>
    `;
  } else {
    commentsHTML = productComments.map(c => `
      <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-3xs space-y-2.5">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-amber-900 text-amber-100 font-black text-xs flex items-center justify-center font-display border border-amber-800 shadow-3xs shrink-0">
              ${c.autor ? c.autor.charAt(0).toUpperCase() : 'A'}
            </div>
            <div>
              <span class="font-bold text-xs text-stone-900 block leading-tight font-display">${c.autor}</span>
              <span class="text-[9px] text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.2 rounded font-mono font-semibold">Cliente Verificado</span>
            </div>
          </div>
          <span class="text-[10px] text-stone-400 font-mono font-medium">${c.fecha}</span>
        </div>

        <div class="flex items-center gap-1.5 text-amber-500">
          ${starsHTML(c.calificacion)}
          <span class="text-[10px] font-bold text-stone-600 font-mono ml-1">${c.calificacion}/5</span>
        </div>

        <p class="text-xs text-stone-700 leading-relaxed font-normal bg-stone-50/60 p-3 rounded-xl border border-stone-100">
          "${c.texto}"
        </p>
      </div>
    `).join('');
  }
  
  let buyControls = '';
  if (m.stock > 0) {
    buyControls = `
      <div class="bg-stone-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold text-stone-600 pl-2">Cantidad a comprar:</span>
          
          <div class="flex items-center gap-1 bg-white px-2.5 py-1.5 rounded-xl border border-stone-200">
            <button 
              id="det-qty-minus"
              class="text-stone-500 hover:text-stone-800 font-extrabold px-2.5 text-lg select-none cursor-pointer"
            >
              -
            </button>
            <span id="det-qty-value" class="font-mono text-sm w-10 text-center font-bold text-stone-900">${state.buyQty}</span>
            <button 
              id="det-qty-plus"
              class="text-stone-500 hover:text-stone-800 font-extrabold px-2.5 text-lg select-none cursor-pointer"
            >
              +
            </button>
          </div>
        </div>

        <button 
          id="det-add-cart-btn"
          class="bg-amber-800 hover:bg-amber-900 text-amber-50 text-xs font-bold px-6 py-3 rounded-xl transition shadow-sm flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
        >
          <i data-lucide="shopping-bag" class="w-4 h-4"></i>
          Añadir al Carrito
        </button>
      </div>
    `;
  } else {
    buyControls = `
      <div class="p-4 bg-red-50 rounded-2xl border border-red-100 text-center text-xs font-semibold text-red-800">
        Lo sentimos. No es posible realizar pedidos para esta referencia pues no cuenta con existencias en el inventario actual.
      </div>
    `;
  }

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Left side: product image -->
      <div class="lg:col-span-5 rounded-3xl overflow-hidden bg-stone-100 border border-stone-200">
        <img 
          src="${m.foto || 'images/logo_alpes.jpg'}" 
          onerror="this.onerror=null; this.src='images/logo_alpes.jpg';"
          alt="${m.nombre}" 
          class="w-full h-full object-cover aspect-[4/3]"
        >
      </div>

      <!-- Right side: technical features -->
      <div class="lg:col-span-7 flex flex-col justify-between">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="bg-amber-100 text-amber-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-amber-200/40">
              MUEBLE DE ${m.tipo.toUpperCase()}
            </span>
            <span class="bg-stone-100 text-stone-500 text-[10px] font-mono px-3 py-1 rounded-full border border-stone-200 font-bold">
              REF: ${m.referencia}
            </span>
          </div>

          <h2 class="font-display text-2xl md:text-3xl font-black text-stone-900 mb-3 leading-tight">
            ${m.nombre}
          </h2>

          <p class="text-sm font-light text-stone-600 mb-6 leading-relaxed">
            ${m.descripcion || 'Elegancia refinada para sus ambientes.'}
          </p>

          <!-- Specifications Table -->
          <div class="bg-stone-50 rounded-2xl p-4 border border-stone-200/60 mb-6 font-medium text-stone-700 text-xs">
            <h4 class="text-stone-400 font-bold text-[10px] uppercase tracking-widest border-b border-stone-200 pb-1.5 mb-3">Ficha de Especificaciones</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              <div>
                <p class="text-stone-400 font-normal mb-0.5">Material de base:</p>
                <p class="font-bold text-stone-800 font-display">${m.material}</p>
              </div>
              <div>
                <p class="text-stone-400 font-normal mb-0.5">Tono / Acabado:</p>
                <p class="font-bold text-stone-800">${m.color}</p>
              </div>
              <div>
                <p class="text-stone-400 font-normal mb-0.5">Dimensiones:</p>
                <p class="font-mono text-stone-800 text-[11px]">${m.dimensiones}</p>
              </div>
              <div>
                <p class="text-stone-400 font-normal mb-0.5">Peso estimado:</p>
                <p class="font-mono text-stone-800">${m.peso >= 1000 ? `${m.peso / 1000} kg` : `${m.peso} g`}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between border-y border-stone-100 py-3 mb-6">
            <div>
              <span class="text-[10px] text-stone-400 block mb-0.5 uppercase tracking-wider font-semibold font-mono">Precio de Venta</span>
              <span class="text-xl font-display text-amber-950 font-black">${formatCOP(m.precio)}</span>
            </div>

            <div class="text-right">
              <span class="text-[10px] text-stone-400 block mb-0.5 uppercase tracking-wider font-semibold font-mono">Inventario real</span>
              ${m.stock > 0 ? `
                <span class="bg-emerald-100 font-mono text-emerald-800 text-[10px] uppercase font-black px-2 py-0.5 rounded border border-emerald-200 shadow-3xs">
                  ${m.stock} unidades en stock
                </span>
              ` : `
                <span class="bg-red-100 font-mono text-red-800 text-[10px] uppercase font-black px-2 py-0.5 rounded border border-red-200 shadow-3xs">
                  Sin Existencia
                </span>
              `}
            </div>
          </div>

          ${buyControls}
        </div>
      </div>
    </div>

    <!-- SECCIÓN DE OPINIONES Y COMENTARIOS DE CLIENTES -->
    <div class="mt-12 pt-8 border-t border-stone-200 space-y-8">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-stone-900 text-stone-100 p-6 rounded-3xl shadow-sm">
        <div class="flex items-center gap-4">
          <div class="bg-amber-600/30 text-amber-400 p-3.5 rounded-2xl border border-amber-500/20 shrink-0">
            <i data-lucide="message-square" class="w-7 h-7"></i>
          </div>
          <div>
            <h3 class="font-display font-black text-xl text-white">Opiniones y Comentarios de Clientes</h3>
            <p class="text-xs text-stone-400 font-light mt-0.5">Valoraciones reales verificadas para la referencia ${m.referencia}</p>
          </div>
        </div>
        <div class="flex items-center gap-3 bg-stone-950 px-5 py-3 rounded-2xl border border-stone-800 shrink-0">
          <div class="text-3xl font-black text-amber-400 font-display">${ratingInfo.avg}</div>
          <div>
            <div class="flex items-center gap-0.5 text-amber-400">
              ${starsHTML(Math.round(ratingInfo.avg))}
            </div>
            <span class="text-[10px] text-stone-400 font-mono font-bold block mt-0.5">${ratingInfo.count} ${ratingInfo.count === 1 ? 'opinión' : 'opiniones'}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- FORMULARIO DE NUEVO COMENTARIO -->
        <div class="lg:col-span-5 bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
          <h4 class="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
            <i data-lucide="edit-3" class="w-4 h-4 text-amber-700"></i>
            Escribir un Comentario
          </h4>
          <p class="text-xs text-stone-500 font-light leading-relaxed">Comparta su experiencia de uso o sugerencias sobre este producto.</p>
          
          <form id="comment-form" class="space-y-4">
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">Calificación (*)</label>
              <div class="flex items-center gap-1.5" id="star-picker-container">
                <button type="button" data-star="1" class="star-pick-btn p-1 text-amber-500 transition cursor-pointer">
                  <i data-lucide="star" class="w-6 h-6 fill-amber-400"></i>
                </button>
                <button type="button" data-star="2" class="star-pick-btn p-1 text-amber-500 transition cursor-pointer">
                  <i data-lucide="star" class="w-6 h-6 fill-amber-400"></i>
                </button>
                <button type="button" data-star="3" class="star-pick-btn p-1 text-amber-500 transition cursor-pointer">
                  <i data-lucide="star" class="w-6 h-6 fill-amber-400"></i>
                </button>
                <button type="button" data-star="4" class="star-pick-btn p-1 text-amber-500 transition cursor-pointer">
                  <i data-lucide="star" class="w-6 h-6 fill-amber-400"></i>
                </button>
                <button type="button" data-star="5" class="star-pick-btn p-1 text-amber-500 transition cursor-pointer">
                  <i data-lucide="star" class="w-6 h-6 fill-amber-400"></i>
                </button>
              </div>
              <input type="hidden" id="comment-rating-val" value="5">
            </div>

            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">Nombre o Apodo (*)</label>
              <input type="text" id="comment-author-input" required class="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-700" placeholder="Ej. Carlos Mendoza" value="${state.currentCliente ? state.currentCliente.nombreCompleto : ''}">
            </div>

            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">Comentario u Opinión (*)</label>
              <textarea id="comment-text-input" required rows="3" class="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-normal focus:outline-none focus:border-amber-700" placeholder="Escriba aquí los detalles de su experiencia con este mueble..."></textarea>
            </div>

            <button type="submit" class="w-full bg-amber-800 hover:bg-stone-900 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-xs flex items-center justify-center gap-2 cursor-pointer">
              <i data-lucide="send" class="w-3.5 h-3.5"></i>
              Publicar Opinión
            </button>
          </form>
        </div>

        <!-- LISTA DE COMENTARIOS PUBLICADOS -->
        <div class="lg:col-span-7 space-y-3">
          ${commentsHTML}
        </div>
      </div>
    </div>
  `;

  // Bind quantifiers click listeners
  if (m.stock > 0) {
    const qtyValueSpan = document.getElementById('det-qty-value');
    
    document.getElementById('det-qty-minus').addEventListener('click', () => {
      if (state.buyQty > 1) {
        state.buyQty--;
        qtyValueSpan.textContent = state.buyQty;
      }
    });

    document.getElementById('det-qty-plus').addEventListener('click', () => {
      if (state.buyQty < m.stock) {
        state.buyQty++;
        qtyValueSpan.textContent = state.buyQty;
      } else {
        alert(`Lo sentimos, el inventario para este artículo está limitado a ${m.stock} unidades.`);
      }
    });

    document.getElementById('det-add-cart-btn').addEventListener('click', () => {
      addItemToShoppingBag(m.referencia, state.buyQty);
    });
  }

  // Star rating selector logic
  const starBtns = document.querySelectorAll('.star-pick-btn');
  starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const starNum = parseInt(btn.getAttribute('data-star'), 10);
      const ratingHiddenInput = document.getElementById('comment-rating-val');
      if (ratingHiddenInput) ratingHiddenInput.value = starNum;
      
      starBtns.forEach(sb => {
        const sVal = parseInt(sb.getAttribute('data-star'), 10);
        const icon = sb.querySelector('i');
        if (sVal <= starNum) {
          sb.classList.remove('text-stone-300');
          sb.classList.add('text-amber-500');
          if (icon) {
            icon.classList.add('fill-amber-400');
          }
        } else {
          sb.classList.remove('text-amber-500');
          sb.classList.add('text-stone-300');
          if (icon) {
            icon.classList.remove('fill-amber-400');
          }
        }
      });
    });
  });

  // Comment Form Submit Handler
  const commentForm = document.getElementById('comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const authorInput = document.getElementById('comment-author-input');
      const textInput = document.getElementById('comment-text-input');
      const ratingInput = document.getElementById('comment-rating-val');
      
      const autorVal = authorInput ? authorInput.value.trim() : '';
      const textoVal = textInput ? textInput.value.trim() : '';
      const ratingVal = ratingInput ? (parseInt(ratingInput.value, 10) || 5) : 5;
      
      if (!autorVal) {
        alert('Por favor ingrese su nombre o apodo.');
        return;
      }
      if (!textoVal || textoVal.length < 3) {
        alert('Por favor ingrese un comentario válido (mínimo 3 caracteres).');
        return;
      }

      const newCom = {
        id: 'com-' + Date.now(),
        referencia: m.referencia,
        autor: autorVal,
        calificacion: ratingVal,
        texto: textoVal,
        fecha: new Date().toISOString().split('T')[0]
      };

      state.comentarios.unshift(newCom);
      saveToLocalStorage();
      
      // Re-render detailed product view to update comments and rating average
      renderDetailedProduct();
    });
  }

  lucide.createIcons();
}


// ========================================== SHOPPING CART WORKFLOW (SUBVIEW 3) ==========================================

function addItemToShoppingBag(reference, requestedQuantity) {
  if (!state.currentCliente) {
    alert('⚠️ Advertencia: Debe iniciar sesión para agregar productos al carrito de compras.');
    navigatetoView('profile');
    return;
  }

  const m = mueblesFindRef(reference);
  if (!m) return;

  const existingItem = state.carrito.find(item => item.mueble.referencia === reference);
  const currentQuantityInCart = existingItem ? existingItem.cantidad : 0;
  const targetQuantity = currentQuantityInCart + requestedQuantity;

  if (targetQuantity > m.stock) {
    alert(`ACCESO DE INVENTARIO RESTRINGIDO: No podemos despachar ${requestedQuantity} unidad(es) de "${m.nombre}". La cantidad agregada supera el inventario real de bodega (${m.stock} unidades en existencia).`);
    return;
  }

  if (existingItem) {
    existingItem.cantidad = targetQuantity;
  } else {
    state.carrito.push({
      mueble: m,
      cantidad: requestedQuantity
    });
  }

  saveToLocalStorage();
  renderGlobalHeaderState();
  alert(`¡Se agregó exitosamente "${m.nombre}" (${requestedQuantity} unidad/es) a su canasta de compra!`);
}

function renderCartList() {
  const cartTableBody = document.getElementById('cart-table-body');
  const cartSummarySide = document.getElementById('cart-summary-side');
  
  if (state.carrito.length === 0) {
    cartTableBody.innerHTML = `
      <tr>
        <td class="py-12 text-center" colspan="4">
          <div class="mx-auto text-stone-300 w-12 h-12 mb-3">
            <i data-lucide="shopping-bag" class="w-12 h-12"></i>
          </div>
          <p class="text-stone-400 font-serif italic text-base mb-4">No tiene elementos agregados a su carrito de compras.</p>
          <button id="cart-go-shopping-empty" class="bg-stone-800 hover:bg-stone-950 text-stone-50 text-xs font-bold px-5 py-2.5 rounded-xl transition cursor-pointer">
            Ver Catálogo de Muebles
          </button>
        </td>
      </tr>
    `;
    cartSummarySide.innerHTML = `
      <div class="bg-stone-50 border border-stone-200 rounded-3xl p-6 text-center text-xs text-stone-400 italic">
        Agregue muebles para calcular su cotización formal.
      </div>
    `;

    document.getElementById('cart-go-shopping-empty').addEventListener('click', () => navigatetoView('store'));
    lucide.createIcons();
    return;
  }

  cartTableBody.innerHTML = '';
  
  state.carrito.forEach(item => {
    const tr = document.createElement('tr');
    tr.className = 'border-b border-stone-100 last:border-0 hover:bg-stone-50/50 transition';
    
    tr.innerHTML = `
      <td class="py-4 pr-3 flex items-center gap-3">
        <div class="w-16 h-12 rounded-lg overflow-hidden bg-stone-150 border shrink-0">
          <img src="${item.mueble.foto || 'images/logo_alpes.jpg'}" onerror="this.onerror=null; this.src='images/logo_alpes.jpg';" alt="${item.mueble.nombre}" class="w-full h-full object-cover">
        </div>
        <div>
          <p class="text-[9px] font-mono text-stone-400 font-bold uppercase leading-none mb-1">REF: ${item.mueble.referencia} • ${item.mueble.tipo}</p>
          <h4 class="font-display font-black text-xs text-stone-900 leading-tight">${item.mueble.nombre}</h4>
          <p class="text-[10px] font-mono text-zinc-500 mt-0.5">U. Precio: ${formatCOP(item.mueble.precio)}</p>
        </div>
      </td>
      <td class="py-4 text-center">
        <div class="inline-flex items-center bg-stone-100 rounded-lg p-1 border border-stone-200">
          <button id="cart-minus-${item.mueble.referencia}" class="text-stone-500 hover:text-stone-900 font-extrabold px-1.5 cursor-pointer">-</button>
          <span class="font-mono text-xs w-6 text-center font-bold text-stone-800">${item.cantidad}</span>
          <button id="cart-plus-${item.mueble.referencia}" class="text-stone-500 hover:text-stone-900 font-extrabold px-1.5 cursor-pointer">+</button>
        </div>
      </td>
      <td class="py-4 text-right font-display font-black text-amber-950 text-xs">
        ${formatCOP(item.mueble.precio * item.cantidad)}
      </td>
      <td class="py-4 text-center">
        <button id="cart-trash-${item.mueble.referencia}" class="text-stone-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition cursor-pointer">
          <i data-lucide="trash-2" class="w-3.5 h-3.5 inline"></i>
        </button>
      </td>
    `;
    
    cartTableBody.appendChild(tr);

    // Bind item adjusters event listeners
    document.getElementById(`cart-minus-${item.mueble.referencia}`).addEventListener('click', () => {
      modifyCartQuantity(item.mueble.referencia, item.cantidad - 1);
    });

    document.getElementById(`cart-plus-${item.mueble.referencia}`).addEventListener('click', () => {
      modifyCartQuantity(item.mueble.referencia, item.cantidad + 1);
    });

    document.getElementById(`cart-trash-${item.mueble.referencia}`).addEventListener('click', () => {
      removeCartRow(item.mueble.referencia);
    });
  });

  // Calculate prices
  const subtotal = state.carrito.reduce((sum, item) => sum + (item.mueble.precio * item.cantidad), 0);
  
  cartSummarySide.innerHTML = `
    <div class="bg-stone-50 border border-stone-200 rounded-3xl p-6 shadow-2z">
      <h3 class="font-display font-black text-sm text-stone-800 mb-4 border-b border-stone-200 pb-2 flex items-center gap-1">
        <i data-lucide="check-square" class="w-4 h-4 text-amber-800"></i>
        Resumen de la Orden
      </h3>
      
      <div class="space-y-2.5 text-xs text-stone-600 font-medium mb-5">
        <div class="flex justify-between">
          <span class="font-normal text-stone-400">Total artículos:</span>
          <span class="font-mono text-stone-800 font-bold">${state.carrito.reduce((sum, item) => sum + item.cantidad, 0)} items</span>
        </div>
        <div class="flex justify-between">
          <span class="font-normal text-stone-400">Subtotal muebles:</span>
          <span class="font-mono text-stone-800 font-bold">${formatCOP(subtotal)}</span>
        </div>
        <div class="flex justify-between text-emerald-800 font-extrabold bg-emerald-50 p-1 rounded border border-emerald-100">
          <span>Envío nacional:</span>
          <span class="uppercase text-[9px] bg-emerald-100 px-2 rounded py-0.5">Gratuito</span>
        </div>
        <div class="border-t border-stone-200 pt-3 flex justify-between text-sm font-display font-black text-stone-900">
          <span>VALOR TOTAL (COP):</span>
          <span class="text-amber-950">${formatCOP(subtotal)}</span>
        </div>
      </div>

      <div class="space-y-2">
        <button id="cart-checkout-btn" class="w-full bg-amber-800 hover:bg-amber-900 border border-amber-700 text-amber-50 text-xs font-bold py-3 rounded-xl transition uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
          <i data-lucide="credit-card" class="w-4 h-4"></i>
          Proceder a Facturación
        </button>
        <button id="cart-reset-action" class="w-full bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 text-xs font-bold py-2.5 rounded-xl transition uppercase tracking-widest flex items-center justify-center gap-1 px-3 cursor-pointer">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          Cancelar / Vaciar Carrito
        </button>
      </div>
    </div>
  `;

  document.getElementById('cart-checkout-btn').addEventListener('click', () => {
    triggerCheckoutFlow();
  });

  document.getElementById('cart-reset-action').addEventListener('click', () => {
    if (confirm('¿Está totalmente seguro que desea desestimar la orden y vaciar el carrito de compras actual?')) {
      state.carrito = [];
      saveToLocalStorage();
      renderGlobalHeaderState();
      navigatetoView('store');
      alert('La orden de compra ha sido cancelada.');
    }
  });

  lucide.createIcons();
}

function modifyCartQuantity(ref, newQty) {
  const item = state.carrito.find(i => i.mueble.referencia === ref);
  if (!item) return;

  if (newQty <= 0) {
    removeCartRow(ref);
    return;
  }

  if (newQty > item.mueble.stock) {
    alert(`Lo sentimos. La bodega de Muebles los Alpes tiene actualmente limitada esta referencia a un stock máximo de ${item.mueble.stock} unidades.`);
    return;
  }

  item.cantidad = newQty;
  saveToLocalStorage();
  renderCartList();
  renderGlobalHeaderState();
}

function removeCartRow(ref) {
  state.carrito = state.carrito.filter(item => item.mueble.referencia !== ref);
  saveToLocalStorage();
  renderCartList();
  renderGlobalHeaderState();
}

function triggerCheckoutFlow() {
  if (!state.currentCliente) {
    navigatetoView('profile');
    alert('AUTENTICACIÓN REQUERIDA: Deberá registrar sus datos o ingresar como cliente registrado para proseguir a la pasarela de facturación.');
    return;
  }

  // Double check stock availability
  for (const item of state.carrito) {
    const realProduct = mueblesFindRef(item.mueble.referencia);
    if (!realProduct || realProduct.stock < item.cantidad) {
      alert(`Bodega informa anomalía: No contamos con suficiente stock para el mueble "${item.mueble.nombre}". Existencias reales: ${realProduct ? realProduct.stock : 0} unidad(es). Ajuste o modifique su carrito de compras antes de pagar.`);
      return;
    }
  }

  navigatetoView('checkout');
}


// ========================================== PROFILE & AUTHENTICATION SCREEN (SUBVIEW 4) ==========================================

function renderProfileScreen() {
  const profileContainer = document.getElementById('profile-container');
  
  if (state.currentCliente) {
    // Show logged in profile allowing editing
    profileContainer.innerHTML = `
      <div class="bg-stone-50 border p-6 rounded-3xl mb-6">
        <h3 class="font-display font-black text-stone-900 text-sm mb-4 border-b pb-2 flex items-center gap-1">
          <i data-lucide="user-check" class="w-4 h-4 text-amber-800"></i>
          Ficha Registral de Cliente
        </h3>
        
        <form id="edit-profile-form" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="text-[10px] font-bold text-stone-400 block mb-1">Nombre Completo (*)</label>
              <input type="text" id="prof-nombre" class="w-full px-3 py-2 bg-white border rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-700" value="${state.currentCliente.nombreCompleto}" required>
            </div>
            <div>
              <label class="text-[10px] font-bold text-stone-400 block mb-1">Correo Electrónico (*)</label>
              <input type="email" id="prof-email" class="w-full px-3 py-2 bg-white border rounded-xl text-xs font-mono font-medium focus:outline-none focus:border-amber-700" value="${state.currentCliente.email}" required>
            </div>
            <div>
              <label class="text-[10px] font-bold text-stone-400 block mb-1">Dirección de Despacho u Oficina (*)</label>
              <input type="text" id="prof-direccion" class="w-full px-3 py-2 bg-white border rounded-xl text-xs font-medium focus:outline-none focus:border-amber-700" value="${state.currentCliente.direccion}" required>
            </div>
            <div>
              <label class="text-[10px] font-bold text-stone-400 block mb-1">Ciudad de Despacho (*)</label>
              <input type="text" id="prof-ciudad" class="w-full px-3 py-2 bg-white border rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-700" value="${state.currentCliente.ciudadResidencia}" required>
            </div>
            <div>
              <label class="text-[10px] font-bold text-stone-400 block mb-1">Teléfono Fijo / Residencia (*)</label>
              <input type="text" id="prof-telefono" class="w-full px-3 py-2 bg-white border rounded-xl text-xs font-mono focus:outline-none focus:border-amber-700" value="${state.currentCliente.telefonoResidencia}" required>
            </div>
            <div>
              <label class="text-[10px] font-bold text-stone-400 block mb-1">Teléfono Celular</label>
              <input type="text" id="prof-celular" class="w-full px-3 py-2 bg-white border rounded-xl text-xs font-mono focus:outline-none focus:border-amber-700" value="${state.currentCliente.telefonoCelular || ''}">
            </div>
            <div>
              <label class="text-[10px] font-bold text-stone-400 block mb-1">Profesión / Oficio</label>
              <input type="text" id="prof-profesion" class="w-full px-3 py-2 bg-white border rounded-xl text-xs focus:outline-none focus:border-amber-700" value="${state.currentCliente.profesion || ''}">
            </div>
            <div>
              <label class="text-[10px] font-bold text-stone-400 block mb-1">¿Pertenece al Taller (Trabajador)?</label>
              <div class="flex items-center gap-2 h-9">
                <input type="checkbox" id="prof-empresa" class="w-4 h-4 accent-amber-800" ${state.currentCliente.perteneceEmpresa ? 'checked' : ''}>
                <span class="text-xs text-stone-600 font-medium select-none">Habilitar privilegios de empleado</span>
              </div>
            </div>
          </div>

          <div class="pt-2 flex justify-between gap-4">
            <button type="submit" class="bg-amber-800 hover:bg-amber-900 text-white rounded-xl px-4 py-2.5 text-xs font-extrabold transition flex items-center gap-1 shadow-sm cursor-pointer">
              <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
              Actualizar Mi Perfil
            </button>
            <button type="button" id="prof-btn-logout-inside" class="bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 rounded-xl px-4 py-2.5 text-xs font-semibold transition cursor-pointer">
              Cerrar Sesión Actual
            </button>
          </div>
        </form>
      </div>
    `;

    document.getElementById('edit-profile-form').addEventListener('submit', (e) => {
      e.preventDefault();
      
      state.currentCliente.nombreCompleto = document.getElementById('prof-nombre').value.trim();
      state.currentCliente.email = document.getElementById('prof-email').value.trim();
      state.currentCliente.direccion = document.getElementById('prof-direccion').value.trim();
      state.currentCliente.ciudadResidencia = document.getElementById('prof-ciudad').value.trim();
      state.currentCliente.telefonoResidencia = document.getElementById('prof-telefono').value.trim();
      state.currentCliente.telefonoCelular = document.getElementById('prof-celular').value.trim();
      state.currentCliente.profesion = document.getElementById('prof-profesion').value.trim();
      state.currentCliente.perteneceEmpresa = document.getElementById('prof-empresa').checked;

      // Update in global list
      const idx = state.clientes.findIndex(c => c.id === state.currentCliente.id);
      if (idx !== -1) {
        state.clientes[idx] = { ...state.currentCliente };
      }

      saveToLocalStorage();
      alert('Información del perfil actualizada exitosamente.');
      navigatetoView('store');
    });

    document.getElementById('prof-btn-logout-inside').addEventListener('click', () => {
      state.currentCliente = null;
      state.carrito = [];
      saveToLocalStorage();
      renderGlobalHeaderState();
      alert('Se cerró la sesión correctamente.');
      navigatetoView('store');
    });

  } else {
    // Show login or Registration screen
    profileContainer.innerHTML = `
      <div class="max-w-4xl mx-auto bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
        
        <!-- Tab Navigation Header -->
        <div class="flex border-b border-stone-200 bg-stone-50/70 p-1.5 gap-1.5 select-none">
          <button id="btn-tab-credential" type="button" class="flex-1 text-center py-2.5 px-3 rounded-xl text-xs font-bold transition duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-stone-900 bg-white shadow-3xs border border-stone-100">
            <i data-lucide="key-round" class="w-3.5 h-3.5 text-amber-800"></i>
            <span>Iniciar Sesión</span>
          </button>
          
          <button id="btn-tab-register" type="button" class="flex-1 text-center py-2.5 px-3 rounded-xl text-xs font-bold transition duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100">
            <i data-lucide="user-plus" class="w-3.5 h-3.5 text-stone-400"></i>
            <span>Registrarse</span>
          </button>
          
          <button id="btn-tab-quick" type="button" class="flex-1 text-center py-2.5 px-3 rounded-xl text-xs font-bold transition duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-stone-400"></i>
            <span>Ingreso Rápido</span>
          </button>
          
          <button id="btn-tab-admin" type="button" class="flex-1 text-center py-2.5 px-3 rounded-xl text-xs font-bold transition duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100">
            <i data-lucide="shield-alert" class="w-3.5 h-3.5 text-stone-400"></i>
            <span>Administrador</span>
          </button>
        </div>

        <div class="p-6 md:p-8">
          
          <!-- PANEL 1: CLIENT CREDENTIAL LOGIN -->
          <div id="panel-credential" class="space-y-5">
            <div class="max-w-md mx-auto space-y-4">
              <div class="text-center space-y-1">
                <h3 class="font-display font-black text-stone-900 text-sm">Acceso al Portal de Clientes</h3>
                <p class="text-stone-400 text-[11px] font-light leading-relaxed">Ingrese sus credenciales de cliente registrado (Cédula/NIT y contraseña).</p>
              </div>
              
              <div id="login-error-box" class="bg-red-50 border border-red-100 text-red-700 p-3 rounded-xl text-xs font-semibold leading-relaxed hidden flex gap-2 items-start">
                <i data-lucide="alert-circle" class="w-4 h-4 text-red-600 shrink-0 mt-0.5"></i>
                <span id="login-error-msg"></span>
              </div>

              <form id="client-credential-login-form" class="space-y-4">
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Identificación o Correo (*)</label>
                    <span class="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Oportunidades: <span id="client-login-attempts-cnt">3</span> de 3
                    </span>
                  </div>
                  <div class="relative">
                    <i data-lucide="mail" class="absolute left-3.5 top-3 text-stone-400 w-4 h-4"></i>
                    <input type="text" id="login-identifier" class="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-700 focus:bg-white transition" placeholder="Ej. 1020456789 o correo@example.com" required>
                  </div>
                </div>

                <div>
                  <label class="text-[10px] font-bold text-stone-400 block mb-1 uppercase tracking-wider">Contraseña de Acceso (*)</label>
                  <div class="relative">
                    <i data-lucide="lock" class="absolute left-3.5 top-3 text-stone-400 w-4 h-4"></i>
                    <input type="password" id="login-password" class="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-700 focus:bg-white transition" placeholder="••••••••" required>
                  </div>
                  <span class="text-[10px] text-stone-400 mt-1 block leading-tight font-mono">💡 Cuentas iniciales del sistema: clave <b>alpes123</b></span>
                </div>

                <button type="submit" id="btn-submit-client-login" class="w-full bg-amber-800 hover:bg-stone-900 text-white rounded-xl px-4 py-2.5 text-xs font-extrabold transition shadow-sm uppercase tracking-widest cursor-pointer">
                  Ingresar a mi Cuenta
                </button>
              </form>
            </div>
          </div>

          <!-- PANEL 2: CLIENT REGISTRATION -->
          <div id="panel-register" class="hidden space-y-5">
            <div class="space-y-4">
              <div class="text-center space-y-1">
                <h3 class="font-display font-black text-stone-900 text-sm">Registrar Nuevo Cliente</h3>
                <p class="text-stone-400 text-[11px] font-light leading-relaxed">Complete los datos obligatorios y defina su contraseña para matricularse en Muebles los Alpes.</p>
              </div>

              <div id="reg-error-box" class="bg-red-50 border border-red-100 text-red-700 p-3 rounded-xl text-xs font-semibold leading-relaxed hidden flex gap-2 items-start">
                <i data-lucide="alert-circle" class="w-4 h-4 text-red-600 shrink-0 mt-0.5"></i>
                <span id="reg-error-msg"></span>
              </div>

              <form id="profile-registration-form" class="space-y-3.5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">Tipo Documento (*)</label>
                    <select id="reg-tipodoc" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs focus:outline-none focus:border-amber-700">
                      <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                      <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                      <option value="NIT">NIT (Persona Jurídica)</option>
                      <option value="Pasaporte">Pasaporte</option>
                    </select>
                  </div>
                  <div>
                    <label id="reg-doc-label" class="text-[10px] font-bold text-stone-400 block mb-1">Número Documento (*)</label>
                    <input type="text" id="reg-numdoc" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs font-mono font-bold focus:outline-none focus:border-amber-700" placeholder="Ej. 1020456" required>
                  </div>
                  <div class="md:col-span-2">
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">Nombre Completo o Razón Social (*)</label>
                    <input type="text" id="reg-nombre" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-700" placeholder="Ej. Camila Restrepo" required>
                  </div>
                  <div>
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">Crear Contraseña (*)</label>
                    <input type="password" id="reg-password" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-700" placeholder="Mínimo 4 caracteres" required minlength="4">
                  </div>
                  <div>
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">Confirmar Contraseña (*)</label>
                    <input type="password" id="reg-confirm-password" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-700" placeholder="Repita la contraseña" required minlength="4">
                  </div>
                  <div>
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">Correo Electrónico (*)</label>
                    <input type="email" id="reg-email" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs font-mono focus:outline-none focus:border-amber-700" placeholder="correo@ejemplo.com" required>
                  </div>
                  <div>
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">Dirección (*)</label>
                    <input type="text" id="reg-direccion" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs focus:outline-none focus:border-amber-700" placeholder="Calle 12 # 4-5 Centro" required>
                  </div>
                  <div>
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">Ciudad (*)</label>
                    <input type="text" id="reg-ciudad" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-700" placeholder="Ej. San Gil" required>
                  </div>
                  <div>
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">Departamento (*)</label>
                    <input type="text" id="reg-dep" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs focus:outline-none focus:border-amber-700" placeholder="Ej. Santander" required>
                  </div>
                  <div>
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">Teléfono de Residencia (*)</label>
                    <input type="text" id="reg-telefono" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs font-mono focus:outline-none focus:border-amber-700" placeholder="Ej. 6012435" required>
                  </div>
                  <div>
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">Teléfono Celular</label>
                    <input type="text" id="reg-celular" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs font-mono focus:outline-none focus:border-amber-700" placeholder="Ej. 3154561">
                  </div>
                  <div>
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">Profesión / Ocupación</label>
                    <input type="text" id="reg-profesion" class="w-full px-2.5 py-1.5 bg-stone-50 border rounded-xl text-xs focus:outline-none focus:border-amber-700" placeholder="Ej. Administrador">
                  </div>
                  <div>
                    <label class="text-[10px] font-bold text-stone-400 block mb-1">¿Es Trabajador del Taller?</label>
                    <div class="flex items-center gap-2 h-7.5">
                      <input type="checkbox" id="reg-empresa" class="w-4 h-4 accent-amber-800">
                      <span class="text-xs text-stone-500 select-none font-medium">Habilitar privilegios de empleado</span>
                    </div>
                  </div>
                </div>

                <button type="submit" class="w-full bg-amber-800 hover:bg-stone-900 text-white rounded-xl px-4 py-2.5 text-xs font-extrabold transition shadow-sm uppercase tracking-widest cursor-pointer">
                  Registrar Cliente e Iniciar Sesión
                </button>
              </form>
            </div>
          </div>

          <!-- PANEL 3: QUICK LOGIN -->
          <div id="panel-quick" class="hidden space-y-4">
            <div class="text-center space-y-1 mb-2">
              <h3 class="font-display font-black text-stone-900 text-sm">Ingreso Rápido de Simulación</h3>
              <p class="text-stone-400 text-[11px] font-light leading-relaxed">Seleccione un cliente simulado de las bases iniciales de Alpes para iniciar sesión (autenticación rápida):</p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="quick-log-list">
               <!-- Script dynamically populates clients options -->
            </div>
          </div>

          <!-- PANEL 4: ADMIN PORTAL LOGIN -->
          <div id="panel-admin" class="hidden">
            <div class="max-w-md mx-auto space-y-4">
              <div class="text-center space-y-1">
                <h3 class="font-display font-black text-stone-900 text-sm">Consola de Administración</h3>
                <p class="text-stone-400 text-[11px] font-light leading-relaxed font-mono">Ingrese sus credenciales de taller para habilitar reportes y analítica.</p>
              </div>

              <div id="admin-error-box" class="bg-red-50 border border-red-100 text-red-700 p-3 rounded-xl text-xs font-semibold leading-relaxed hidden flex gap-2 items-start">
                <i data-lucide="alert-circle" class="w-4 h-4 text-red-600 shrink-0 mt-0.5"></i>
                <span id="admin-error-msg"></span>
              </div>

              <form id="admin-portal-login-form" class="space-y-4">
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Contraseña de Administrador (*)</label>
                    <span class="text-[10px] font-mono font-bold text-stone-800 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                      Oportunidades: <span id="admin-portal-attempts-cnt">3</span> de 3
                    </span>
                  </div>
                  <div class="relative">
                    <i data-lucide="lock" class="absolute left-3.5 top-3 text-stone-400 w-4 h-4"></i>
                    <input type="password" id="admin-password" class="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-700 focus:bg-white transition" placeholder="Contraseña requerida" required>
                  </div>
                  <span class="text-[10px] text-stone-400 mt-1 block leading-tight font-mono">💡 Clave por defecto de consola: <b>admin123</b></span>
                </div>

                <button type="submit" id="btn-submit-admin-portal" class="w-full bg-stone-900 hover:bg-stone-950 text-white rounded-xl px-4 py-2.5 text-xs font-extrabold transition shadow-sm uppercase tracking-widest cursor-pointer">
                  Acceder a la Consola
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    `;

    // Tabs Control Logic
    const btnTabCredential = document.getElementById('btn-tab-credential');
    const btnTabRegister = document.getElementById('btn-tab-register');
    const btnTabQuick = document.getElementById('btn-tab-quick');
    const btnTabAdmin = document.getElementById('btn-tab-admin');

    const panelCredential = document.getElementById('panel-credential');
    const panelRegister = document.getElementById('panel-register');
    const panelQuick = document.getElementById('panel-quick');
    const panelAdmin = document.getElementById('panel-admin');

    function setActiveTab(activeBtn, activePanel) {
      [btnTabCredential, btnTabRegister, btnTabQuick, btnTabAdmin].forEach(btn => {
        btn.className = 'flex-1 text-center py-2.5 px-3 rounded-xl text-xs font-bold transition duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100';
      });
      [panelCredential, panelRegister, panelQuick, panelAdmin].forEach(panel => {
        panel.classList.add('hidden');
      });

      activeBtn.className = 'flex-1 text-center py-2.5 px-3 rounded-xl text-xs font-bold transition duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-stone-900 bg-white shadow-3xs border border-stone-100';
      activePanel.classList.remove('hidden');
      
      lucide.createIcons();
    }

    btnTabCredential.addEventListener('click', () => setActiveTab(btnTabCredential, panelCredential));
    btnTabRegister.addEventListener('click', () => setActiveTab(btnTabRegister, panelRegister));
    btnTabQuick.addEventListener('click', () => setActiveTab(btnTabQuick, panelQuick));
    btnTabAdmin.addEventListener('click', () => setActiveTab(btnTabAdmin, panelAdmin));

    // Form Client Credentials Login Action (3 Attempts Security Guard)
    const credentialForm = document.getElementById('client-credential-login-form');
    const loginErrorBox = document.getElementById('login-error-box');
    const loginErrorMsg = document.getElementById('login-error-msg');
    let clientAttemptsLeft = 3;
    let clientLockTimer = null;

    credentialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      loginErrorBox.classList.add('hidden');
      
      const identifier = document.getElementById('login-identifier').value.trim();
      const passVal = document.getElementById('login-password').value;
      const submitBtn = document.getElementById('btn-submit-client-login');
      const idInput = document.getElementById('login-identifier');
      const passInput = document.getElementById('login-password');

      if (!identifier || !passVal) return;

      const foundClient = state.clientes.find(c => 
        c.numeroDocumento === identifier || 
        c.email.toLowerCase() === identifier.toLowerCase()
      );

      if (!foundClient) {
        loginErrorMsg.textContent = 'No existe una cuenta registrada con esa identificación o correo electrónico. Por favor regístrese.';
        loginErrorBox.classList.remove('hidden');
        return;
      }

      const expectedPass = foundClient.password || 'alpes123';
      if (passVal === expectedPass) {
        state.currentCliente = foundClient;
        saveToLocalStorage();
        alert(`¡Autenticación exitosa! Bienvenido de vuelta, ${foundClient.nombreCompleto}.`);
        if (state.carrito.length > 0) {
          navigatetoView('cart');
        } else {
          navigatetoView('store');
        }
      } else {
        clientAttemptsLeft--;
        document.getElementById('client-login-attempts-cnt').textContent = clientAttemptsLeft;

        if (clientAttemptsLeft > 0) {
          loginErrorMsg.textContent = `Contraseña incorrecta. Le quedan ${clientAttemptsLeft} de 3 oportunidades. Clave inicial: alpes123`;
          loginErrorBox.classList.remove('hidden');
        } else {
          idInput.disabled = true;
          passInput.disabled = true;
          submitBtn.disabled = true;
          submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

          let secondsLeft = 30;
          loginErrorMsg.textContent = `¡Ha superado las 3 oportunidades! Por seguridad, el sistema está bloqueado por ${secondsLeft} segundos.`;
          loginErrorBox.classList.remove('hidden');

          clientLockTimer = setInterval(() => {
            secondsLeft--;
            if (secondsLeft > 0) {
              loginErrorMsg.textContent = `¡Ha superado las 3 oportunidades! Por seguridad, el sistema está bloqueado por ${secondsLeft} segundos.`;
            } else {
              clearInterval(clientLockTimer);
              clientAttemptsLeft = 3;
              document.getElementById('client-login-attempts-cnt').textContent = '3';
              idInput.disabled = false;
              passInput.disabled = false;
              submitBtn.disabled = false;
              submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
              passInput.value = '';
              loginErrorMsg.textContent = 'Bloqueo finalizado. Dispone de 3 nuevas oportunidades para intentar ingresar.';
              loginErrorBox.classList.remove('hidden');
            }
          }, 1000);
        }
      }
    });

    // Form Admin Password Portal Login Action (3 Attempts Security Guard)
    const adminLoginForm = document.getElementById('admin-portal-login-form');
    const adminErrorBox = document.getElementById('admin-error-box');
    const adminErrorMsg = document.getElementById('admin-error-msg');
    let adminPortalAttemptsLeft = 3;
    let adminPortalTimer = null;

    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      adminErrorBox.classList.add('hidden');

      const passInput = document.getElementById('admin-password');
      const submitBtn = document.getElementById('btn-submit-admin-portal');
      const passVal = passInput.value;

      if (passVal === 'admin123') {
        localStorage.setItem('alpes_admin_session', 'true');
        alert('¡Acceso concedido a la Consola Administrativa!');
        window.location.href = 'admin.html';
      } else {
        adminPortalAttemptsLeft--;
        document.getElementById('admin-portal-attempts-cnt').textContent = adminPortalAttemptsLeft;

        if (adminPortalAttemptsLeft > 0) {
          adminErrorMsg.textContent = `Contraseña incorrecta. Le quedan ${adminPortalAttemptsLeft} de 3 oportunidades. Clave por defecto: admin123`;
          adminErrorBox.classList.remove('hidden');
        } else {
          passInput.disabled = true;
          submitBtn.disabled = true;
          submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

          let secondsLeft = 30;
          adminErrorMsg.textContent = `¡Ha superado las 3 oportunidades! Acceso a consola bloqueado por ${secondsLeft} segundos.`;
          adminErrorBox.classList.remove('hidden');

          adminPortalTimer = setInterval(() => {
            secondsLeft--;
            if (secondsLeft > 0) {
              adminErrorMsg.textContent = `¡Ha superado las 3 oportunidades! Acceso a consola bloqueado por ${secondsLeft} segundos.`;
            } else {
              clearInterval(adminPortalTimer);
              adminPortalAttemptsLeft = 3;
              document.getElementById('admin-portal-attempts-cnt').textContent = '3';
              passInput.disabled = false;
              submitBtn.disabled = false;
              submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
              passInput.value = '';
              adminErrorMsg.textContent = 'Bloqueo finalizado. Dispone de 3 nuevas oportunidades para intentar.';
              adminErrorBox.classList.remove('hidden');
            }
          }, 1000);
        }
      }
    });

    // Populate quick login list
    const quickLogWrap = document.getElementById('quick-log-list');
    state.clientes.forEach(client => {
      const isJuridicaBadg = client.isJuridica ? '<span class="bg-amber-800 text-white text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded">Corp</span>' : '';
      const isWorkerBadg = client.perteneceEmpresa ? '<span class="bg-emerald-800 text-white text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded">Emp</span>' : '';
      
      const qBtn = document.createElement('button');
      qBtn.className = 'text-left bg-stone-50 border border-stone-200 p-3 rounded-2xl hover:border-amber-700 hover:bg-amber-50/15 text-stone-800 text-xs font-semibold flex items-center justify-between transition cursor-pointer';
      qBtn.innerHTML = `
        <div class="min-w-0 flex-1">
          <p class="font-display font-bold leading-tight flex items-center gap-1.5 truncate">
            <span>${client.nombreCompleto}</span>
            <span class="inline-flex gap-1 shrink-0">${isJuridicaBadg} ${isWorkerBadg}</span>
          </p>
          <p class="text-[9px] font-mono font-light text-stone-500 mt-1">ID: ${client.numeroDocumento} • ${client.ciudadResidencia}</p>
        </div>
        <i data-lucide="chevron-right" class="w-4 h-4 text-stone-400 shrink-0 ml-2"></i>
      `;
      
      qBtn.addEventListener('click', () => {
        let attempts = 3;
        let passInput = prompt(`Autenticación requerida para ${client.nombreCompleto}.\nIngrese su contraseña (Clave por defecto: alpes123):\nOportunidades restantes: ${attempts} de 3`);
        
        while (passInput !== null) {
          const expected = client.password || 'alpes123';
          if (passInput === expected) {
            state.currentCliente = client;
            saveToLocalStorage();
            alert(`¡Autenticación exitosa! Bienvenido/a ${client.nombreCompleto}.`);
            if (state.carrito.length > 0) {
              navigatetoView('cart');
            } else {
              navigatetoView('store');
            }
            break;
          } else {
            attempts--;
            if (attempts > 0) {
              passInput = prompt(`Contraseña incorrecta. Le quedan ${attempts} de 3 oportunidades.\nIngrese su contraseña para ${client.nombreCompleto} (Simulación: alpes123):`);
            } else {
              alert('¡Ha agotado las 3 oportunidades de ingreso rápido para esta cuenta!');
              break;
            }
          }
        }
      });

      quickLogWrap.appendChild(qBtn);
    });

    // Custom form input modifiers for NIT / Persona Jurídica logic
    const regTipoDoc = document.getElementById('reg-tipodoc');
    const regDocLabel = document.getElementById('reg-doc-label');
    const numDocInput = document.getElementById('reg-numdoc');

    regTipoDoc.addEventListener('change', () => {
      if (regTipoDoc.value === 'NIT') {
        regDocLabel.textContent = 'NIT de la Empresa (*)';
        numDocInput.placeholder = 'Ej. 900123456-1';
      } else {
        regDocLabel.textContent = 'Número Documento (*)';
        numDocInput.placeholder = 'Ej. 1020456';
      }
    });

    // Handle submit registration with password creation
    const regForm = document.getElementById('profile-registration-form');
    const errorBox = document.getElementById('reg-error-box');
    const regErrorMsg = document.getElementById('reg-error-msg');

    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      errorBox.classList.add('hidden');

      const tipoDocumento = regTipoDoc.value;
      const numeroDocumento = numDocInput.value.trim();
      const nombreCompleto = document.getElementById('reg-nombre').value.trim();
      const password = document.getElementById('reg-password').value;
      const confirmPassword = document.getElementById('reg-confirm-password').value;
      const email = document.getElementById('reg-email').value.trim();
      const direccion = document.getElementById('reg-direccion').value.trim();
      const ciudadResidencia = document.getElementById('reg-ciudad').value.trim();
      const departamento = document.getElementById('reg-dep').value.trim();
      const telefonoResidencia = document.getElementById('reg-telefono').value.trim();
      const telefonoCelular = document.getElementById('reg-celular').value.trim();
      const profesion = document.getElementById('reg-profesion').value.trim();
      const perteneceEmpresa = document.getElementById('reg-empresa').checked;
      const isJuridica = (tipoDocumento === 'NIT');

      if (password !== confirmPassword) {
        regErrorMsg.textContent = 'Las contraseñas no coinciden. Por favor verifique ambas claves ingresadas.';
        errorBox.classList.remove('hidden');
        return;
      }

      if (password.length < 4) {
        regErrorMsg.textContent = 'La contraseña debe tener una longitud mínima de 4 caracteres.';
        errorBox.classList.remove('hidden');
        return;
      }

      // Check for document duplicates
      const duplicate = state.clientes.find(c => c.numeroDocumento === numeroDocumento);
      if (duplicate) {
        regErrorMsg.textContent = `Ya existe un registro de cliente nacional en Muebles los Alpes con el número de documento ${numeroDocumento}. Por favor inicie sesión.`;
        errorBox.classList.remove('hidden');
        return;
      }

      const freshNewClient = {
        id: `cli-${Date.now()}`,
        tipoDocumento,
        numeroDocumento,
        nombreCompleto,
        password,
        email,
        direccion,
        ciudadResidencia,
        departamento,
        telefonoResidencia,
        telefonoCelular,
        profesion,
        perteneceEmpresa,
        isJuridica,
        pais: 'Colombia'
      };

      state.clientes.push(freshNewClient);
      state.currentCliente = freshNewClient;
      saveToLocalStorage();
      
      alert(`¡Registro y Apertura de Sesión Exitosos! Bienvenido/a ${nombreCompleto}. Ha iniciado sesión con la contraseña creada.`);
      
      if (state.carrito.length > 0) {
        navigatetoView('cart');
      } else {
        navigatetoView('store');
      }
    });
  }

  lucide.createIcons();
}


// ========================================== CHECKOUT PASSAGE SCREEN (SUBVIEW 5) ==========================================

function renderCheckoutScreen() {
  if (!state.currentCliente || state.carrito.length === 0) {
     navigatetoView('store');
     return;
  }

  const container = document.getElementById('checkout-form-container');
  const subtotal = state.carrito.reduce((sum, item) => sum + (item.mueble.precio * item.cantidad), 0);

  // Set checkout panel layout
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Left side: dynamic billing fields -->
      <div class="lg:col-span-8 bg-white border p-5 rounded-3xl">
        <h3 class="font-display font-black text-xs text-stone-900 mb-4 pb-1 border-b uppercase pb-1 flex items-center gap-1.5">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-800"></i>
          Selección de Pasarela / Método de Pago Bancario
        </h3>
        
        <div class="flex gap-4 mb-5 p-1 bg-stone-100 rounded-2xl w-fit" id="pay-mode-switches">
          <button id="chk-pay-card" type="button" class="text-xs px-3.5 py-1.5 rounded-xl font-bold text-white bg-amber-800 transition shadow-3xs cursor-pointer">Tarjeta Crédito</button>
          <button id="chk-pay-pse" type="button" class="text-xs px-3.5 py-1.5 rounded-xl font-medium text-stone-600 hover:bg-stone-200 transition cursor-pointer">PSE / Ahorros</button>
          <button id="chk-pay-current" type="button" class="text-xs px-3.5 py-1.5 rounded-xl font-medium text-stone-600 hover:bg-stone-200 transition cursor-pointer">Cuenta Corriente</button>
        </div>

        <form id="checkout-payment-form" class="space-y-4">
          <!-- CARD SECTION DIV -->
          <div id="payment-card-block" class="space-y-3">
            <h4 class="text-[10px] uppercase tracking-widest font-extrabold text-stone-400 mb-2">Datos de Tarjeta Crédito / Débito</h4>
            <div class="grid grid-cols-2 gap-3.5 text-xs text-stone-700">
              <div class="col-span-2">
                <label class="text-[10px] font-bold text-stone-400 block mb-1">Nombre Tarjetahabiente (*)</label>
                <input type="text" id="pay-card-name" class="w-full px-3 py-2 bg-stone-50 border rounded-xl text-xs sm:text-xs font-semibold focus:outline-none focus:border-amber-700" placeholder="Ej. Camila Restrepo" required>
              </div>
              <div class="col-span-2">
                <label class="text-[10px] font-bold text-stone-400 block mb-1">Número de Tarjeta (*)</label>
                <input type="text" id="pay-card-num" class="w-full px-3 py-2 bg-stone-50 border rounded-xl text-xs font-mono font-bold focus:outline-none focus:border-amber-700" placeholder="XXXX XXXX XXXX XXXX" required>
              </div>
              <div>
                <label class="text-[10px] font-bold text-stone-400 block mb-1">CVV / Código de Seguridad (*)</label>
                <input type="password" id="pay-card-cvv" class="w-full px-3 py-2 bg-stone-50 border rounded-xl text-xs font-mono focus:outline-none focus:border-amber-700" placeholder="Eg. 123" required>
              </div>
              <div>
                <label class="text-[10px] font-bold text-stone-400 block mb-1">Vencimiento Mes/Año (*)</label>
                <div class="flex gap-1">
                  <select id="pay-card-m" class="w-full px-2 py-2 bg-stone-50 border rounded-xl text-xs focus:outline-none focus:border-amber-700">
                    <option value="01">01 - Ene</option><option value="02">02 - Feb</option><option value="03">03 - Mar</option>
                    <option value="04">04 - Abr</option><option value="05">05 - May</option><option value="06">06 - Jun</option>
                    <option value="07">07 - Jul</option><option value="08">08 - Ago</option><option value="09">09 - Sep</option>
                    <option value="10">10 - Oct</option><option value="11">11 - Nov</option><option value="12">12 - Dic</option>
                  </select>
                  <select id="pay-card-y" class="w-full px-2 py-2 bg-stone-50 border rounded-xl text-xs focus:outline-none focus:border-amber-700">
                    <option value="2026">2026</option><option value="2027">2027</option>
                    <option value="2028">2028</option><option value="2029">2029</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="text-[10px] font-bold text-stone-400 block mb-1">Número de Cuotas (*)</label>
                <select id="pay-card-cuotas" class="w-full px-3 py-2 bg-stone-50 border rounded-xl text-xs focus:outline-none">
                  <option value="1">1 pago único (Sin interés)</option>
                  <option value="3">3 Cuotas mensuales</option>
                  <option value="6">6 Cuotas</option>
                  <option value="12">12 Cuotas</option>
                </select>
              </div>
            </div>
          </div>

          <!-- PSE SECTION DIV -->
          <div id="payment-pse-block" class="space-y-3 hidden">
             <h4 class="text-[10px] uppercase tracking-widest font-extrabold text-stone-400 mb-2">Pasarela PSE y Transferencia Electrónica</h4>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs text-stone-700">
               <div>
                 <label class="text-[10px] font-bold text-stone-400 block mb-1">Entidad Bancaria (*)</label>
                 <select id="pay-pse-bank" class="w-full px-3 py-2 bg-stone-50 border rounded-xl text-xs text-stone-800 font-semibold focus:outline-none focus:border-amber-705">
                   <option value="Bancolombia">Bancolombia S.A.</option>
                   <option value="Banco de Bogotá">Banco de Bogotá</option>
                   <option value="Davivienda">Davivienda</option>
                   <option value="BBVA">BBVA Colombia</option>
                   <option value="Scotiabank Colpatria">Scotiabank Colpatria</option>
                   <option value="Nequi / Daviplata">Billetera Nequi / Daviplata</option>
                 </select>
               </div>
               <div>
                  <label class="text-[10px] font-bold text-stone-400 block mb-1">Número de Celular Vinculado a PSE (*)</label>
                  <input type="text" id="pay-pse-tel" class="w-full px-3 py-2 bg-stone-50 border rounded-xl text-xs font-mono font-bold" placeholder="Ej. 3004561223">
               </div>
             </div>
          </div>

          <!-- CURRENT ACCOUNT DIV -->
          <div id="payment-current-block" class="space-y-3 hidden">
             <h4 class="text-[10px] uppercase tracking-widest font-extrabold text-stone-400 mb-2">Pago Corporativo de Cuenta Corriente</h4>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700">
               <div>
                 <label class="text-[10px] font-bold text-stone-400 block mb-1">Número de Cuenta Corriente (*)</label>
                 <input type="text" id="pay-curr-num" class="w-full px-3 py-2 bg-stone-50 border rounded-xl text-xs font-mono font-bold" placeholder="Ej. 120-43567-43">
               </div>
               <div>
                  <label class="text-[10px] font-bold text-stone-400 block mb-1">NIT Empresa Asociada (*)</label>
                  <input type="text" id="pay-curr-nit" class="w-full px-3 py-2 bg-stone-50 border rounded-xl text-xs font-mono font-medium" placeholder="Eg. 900123456-1">
               </div>
               <div class="md:col-span-2 p-3 bg-amber-50 border border-amber-100 rounded-xl text-[11px] text-amber-900 font-light leading-relaxed">
                  Autorización Directa: Al procesar este pedido debitará directamente el importe de la cuenta consolidada asignada en Muebles los Alpes. Se revisará coincidencia con la ficha de cliente para aprobar facturación.
               </div>
             </div>
          </div>

          <!-- Action block button -->
          <div class="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
            <button type="submit" class="bg-amber-800 hover:bg-amber-900 text-white rounded-xl px-5 py-3 text-xs font-extrabold transition shadow-sm uppercase tracking-wider flex items-center gap-1.5 cursor-pointer">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
              Confirmar y Efectuar Pago Oficial
            </button>
            <button id="pay-cancel-btn" type="button" class="border border-stone-300 hover:bg-stone-50 text-stone-600 rounded-xl px-4 py-2.5 text-xs font-semibold transition cursor-pointer">
              Volver al Carrito
            </button>
          </div>
        </form>
      </div>

      <!-- Right side: summary and delivery info -->
      <div class="lg:col-span-4 space-y-4">
        <!-- Billing specs -->
        <div class="bg-stone-50 border p-5 rounded-3xl">
          <h4 class="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold mb-3 border-b pb-1.5">Ficha de Envío</h4>
          <div class="text-xs space-y-2 text-stone-700">
            <p><span class="text-stone-400 font-normal">Destinatario:</span> <span class="font-bold font-display">${state.currentCliente.nombreCompleto}</span></p>
            <p><span class="text-stone-400 font-normal">Dirección:</span> <span class="font-medium">${state.currentCliente.direccion}</span></p>
            <p><span class="text-stone-400 font-normal">Ciudad/Destino:</span> <span class="font-bold">${state.currentCliente.ciudadResidencia}, ${state.currentCliente.departamento}</span></p>
            <p><span class="text-stone-400 font-normal">Contacto:</span> <span class="font-mono text-[11px]">${state.currentCliente.telefonoResidencia} / ${state.currentCliente.telefonoCelular || 'N/A'}</span></p>
          </div>
        </div>

        <!-- Total summary review card -->
        <div class="bg-amber-900 text-amber-50 p-5 rounded-3xl shadow-sm">
          <h4 class="text-[10px] uppercase font-mono tracking-widest text-amber-300 font-bold mb-3 border-b border-amber-800 pb-1.5">Resumen de Cuenta</h4>
          <div class="text-xs space-y-2 mb-4 font-medium">
             <div class="flex justify-between">
               <span class="text-amber-200">Total muebles:</span>
               <span class="font-mono font-bold">${formatCOP(subtotal)}</span>
             </div>
             <div class="flex justify-between text-yellow-300">
               <span>Envío:</span> 
               <span class="text-[9px] uppercase font-black bg-yellow-400/25 px-1.5 rounded py-0.5">Gratis</span>
             </div>
             <div class="border-t border-amber-800 pt-2 flex justify-between text-sm font-display font-black text-white">
               <span>Total Neto:</span>
               <span>${formatCOP(subtotal)}</span>
             </div>
          </div>
        </div>
      </div>

    </div>
  `;

  // Handle pay switch selectors logic
  let activeMethod = 'Tarjeta de Crédito';
  
  const switchCard = document.getElementById('chk-pay-card');
  const switchPse = document.getElementById('chk-pay-pse');
  const switchCurrent = document.getElementById('chk-pay-current');

  const cardBlock = document.getElementById('payment-card-block');
  const pseBlock = document.getElementById('payment-pse-block');
  const currentBlock = document.getElementById('payment-current-block');

  const cardNameInput = document.getElementById('pay-card-name');
  const cardNumInput = document.getElementById('pay-card-num');
  const cardCvvInput = document.getElementById('pay-card-cvv');

  const pseTelInput = document.getElementById('pay-pse-tel');
  const currNumInput = document.getElementById('pay-curr-num');
  const currNitInput = document.getElementById('pay-curr-nit');

  function selectMethod(method, activeBtn) {
    activeMethod = method;
    
    // Reset switch controls classes
    switchCard.className = 'text-xs px-3.5 py-1.5 rounded-xl font-medium text-stone-600 hover:bg-stone-200 transition cursor-pointer';
    switchPse.className = 'text-xs px-3.5 py-1.5 rounded-xl font-medium text-stone-600 hover:bg-stone-200 transition cursor-pointer';
    switchCurrent.className = 'text-xs px-3.5 py-1.5 rounded-xl font-medium text-stone-600 hover:bg-stone-200 transition cursor-pointer';

    activeBtn.className = 'text-xs px-3.5 py-1.5 rounded-xl font-bold text-white bg-amber-800 transition shadow-3xs cursor-pointer';

    // Hide all forms
    cardBlock.classList.add('hidden');
    pseBlock.classList.add('hidden');
    currentBlock.classList.add('hidden');

    // Deactive required options
    cardNameInput.required = false;
    cardNumInput.required = false;
    cardCvvInput.required = false;
    pseTelInput.required = false;
    currNumInput.required = false;
    currNitInput.required = false;

    if (method === 'Tarjeta de Crédito') {
      cardBlock.classList.remove('hidden');
      cardNameInput.required = true;
      cardNumInput.required = true;
      cardCvvInput.required = true;
    } else if (method === 'Cuenta de Ahorros / PSE') {
      pseBlock.classList.remove('hidden');
      pseTelInput.required = true;
    } else if (method === 'Cuenta Corriente') {
      currentBlock.classList.remove('hidden');
      currNumInput.required = true;
      currNitInput.required = true;
    }
  }

  switchCard.addEventListener('click', () => selectMethod('Tarjeta de Crédito', switchCard));
  switchPse.addEventListener('click', () => selectMethod('Cuenta de Ahorros / PSE', switchPse));
  switchCurrent.addEventListener('click', () => selectMethod('Cuenta Corriente', switchCurrent));

  // Initialize Card Defaults
  selectMethod('Tarjeta de Crédito', switchCard);

  // Return to Cart button click
  document.getElementById('pay-cancel-btn').addEventListener('click', () => navigatetoView('cart'));

  // Submit payment form workflow
  document.getElementById('checkout-payment-form').addEventListener('submit', (e) => {
    e.preventDefault();

    if (!state.currentCliente || state.carrito.length === 0) return;

    // Simulate database invoice registration
    const orderNum = `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const todaySimpleString = '2026-06-22'; // Match current calendar context date

    const itemsPurchased = state.carrito.map(item => ({
      referencia: item.mueble.referencia,
      nombre: item.mueble.nombre,
      cantidad: item.cantidad,
      precioUnitario: item.mueble.precio,
      total: item.mueble.precio * item.cantidad,
      tipo: item.mueble.tipo
    }));

    const listDescriptions = state.carrito.map(i => `${i.cantidad}x ${i.mueble.nombre}`).join(', ');
    const purchaseDescription = `Pedido de ${listDescriptions}`;

    const nuevoPedido = {
      id: orderNum,
      fecha: todaySimpleString,
      clienteId: state.currentCliente.id,
      clienteNombre: state.currentCliente.nombreCompleto,
      ciudad: state.currentCliente.ciudadResidencia,
      items: itemsPurchased,
      valorTotal: subtotal,
      formaPago: activeMethod,
      descripcionCompra: purchaseDescription
    };

    // DECREMENT STOCK Bodega IN REAL catalog state
    state.carrito.forEach(CartItem => {
      const dbProductIndex = state.muebles.findIndex(m => m.referencia === CartItem.mueble.referencia);
      if (dbProductIndex !== -1) {
        state.muebles[dbProductIndex].stock = Math.max(0, state.muebles[dbProductIndex].stock - CartItem.cantidad);
      }
    });

    // Save and push changes to local storage
    state.pedidos.unshift(nuevoPedido);
    state.lastPlacedOrder = nuevoPedido;
    state.carrito = []; // Reset shopping cart
    
    saveToLocalStorage();
    alert('SENA FACTURADOR AUTOMÁTICO: El pago ha sido aprobado de manera exitosa y debitado de la entidad asociada.');
    navigatetoView('success');
  });

  lucide.createIcons();
}


// ========================================== SUCCESS SCREEN (SUBVIEW 6) ==========================================

function renderSuccessInvoice() {
  const ord = state.lastPlacedOrder;
  if (!ord) {
    navigatetoView('store');
    return;
  }

  const invoiceContainer = document.getElementById('success-invoice-box');
  
  let orderRowsHTML = '';
  ord.items.forEach(it => {
    orderRowsHTML += `
      <tr class="text-xs text-stone-700 leading-normal">
        <td class="py-2 text-left">${it.nombre} <span class="font-mono text-[10px] text-stone-400 font-bold block">Ref: ${it.referencia}</span></td>
        <td class="py-2 text-center font-mono font-bold">${it.cantidad}</td>
        <td class="py-2 text-right font-mono">${formatCOP(it.precioUnitario)}</td>
        <td class="py-2 text-right font-bold text-amber-950 font-mono">${formatCOP(it.total)}</td>
      </tr>
    `;
  });

  invoiceContainer.innerHTML = `
    <!-- Top icon check -->
    <div class="text-center mb-6">
      <div class="inline-flex bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full p-4.5 mb-3.5 shadow-2xs">
        <i data-lucide="check-circle" class="w-12 h-12 animate-bounce"></i>
      </div>
      <h2 class="font-display font-black text-stone-900 text-xl md:text-2xl tracking-wide leading-tight">¡Confirmación de Transacción Exitosa!</h2>
      <p class="text-xs text-stone-500 leading-normal mt-1">Su orden de compra e-commerce ha sido validada y remitida al Centro de Distribución.</p>
    </div>

    <!-- Receipt paper box -->
    <div class="relative bg-amber-50/20 border border-amber-900/15 rounded-3xl p-6 shadow-sm overflow-hidden border-dashed bg-radial max-w-xl mx-auto">
      
      <!-- Print Header banner -->
      <div class="border-b border-amber-900/10 pb-3 mb-4.5 flex items-center justify-between">
        <div>
          <h4 class="font-display text-amber-900 font-black text-sm tracking-widest uppercase">Muebles los Alpes</h4>
          <span class="text-[9px] font-mono tracking-wider font-semibold text-stone-400">Taller Nacional de Carpintería — SENA</span>
        </div>
        <div class="text-right">
          <p class="text-[10px] font-mono text-stone-400 font-bold leading-none">DOCUMENTO EQUIVALENTE</p>
          <span class="bg-amber-800 text-amber-50 font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs block mt-1">${ord.id}</span>
        </div>
      </div>

      <!-- General details client -->
      <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-stone-600 mb-4.5 border-b pb-4 border-amber-900/10">
        <div>
          <p class="text-[9px] font-bold text-stone-400 font-mono leading-none uppercase">Fecha Comprobante:</p>
          <p class="font-semibold text-stone-800 font-mono mt-0.5">${ord.fecha}</p>
        </div>
        <div>
          <p class="text-[9px] font-bold text-stone-400 font-mono leading-none uppercase">Canal de Pago Directo:</p>
          <p class="font-semibold text-stone-800 mt-0.5">${ord.formaPago}</p>
        </div>
        <div class="col-span-2">
          <p class="text-[9px] font-bold text-stone-400 font-mono leading-none uppercase">Titular / Cliente:</p>
          <p class="font-extrabold text-stone-900 mt-0.5 font-display">${ord.clienteNombre}</p>
        </div>
        <div class="col-span-2">
          <p class="text-[9px] font-bold text-stone-400 font-mono leading-none uppercase">Destino de Despacho:</p>
          <p class="font-medium text-stone-700 mt-0.5">${state.currentCliente ? state.currentCliente.direccion : 'N/A'}, ${ord.ciudad} (Colombia)</p>
        </div>
      </div>

      <!-- Item rows -->
      <div class="mb-4.5 border-b pb-3 border-amber-900/10">
        <p class="text-[9px] font-bold text-stone-400 font-mono leading-none uppercase mb-2">Detalle de Bienes Adquiridos:</p>
        <table class="w-full">
           <thead>
             <tr class="text-[9px] font-mono font-bold text-stone-400 uppercase border-b border-stone-200/50">
               <th class="py-1 text-left">Concepto</th>
               <th class="py-1 text-center">Cant.</th>
               <th class="py-1 text-right">U. Cost</th>
               <th class="py-1 text-right">Total</th>
             </tr>
           </thead>
           <tbody>
              ${orderRowsHTML}
           </tbody>
        </table>
      </div>

      <!-- Grand sum total -->
      <div class="flex justify-between items-baseline pt-1">
         <span class="text-xs font-serif font-extrabold text-stone-900 uppercase">Valor Neto Cancelado Directo (COP):</span>
         <span class="text-lg font-display font-black text-amber-900 font-mono">${formatCOP(ord.valorTotal)}</span>
      </div>
    </div>

    <!-- Print back and reset buttons -->
    <div class="flex justify-center gap-3 mt-8">
      <button id="success-go-home-btn" class="bg-stone-900 hover:bg-stone-950 text-white rounded-xl px-6 py-3 text-xs font-black transition shadow-sm uppercase tracking-wider cursor-pointer">
        Volver a la Tienda Principal
      </button>
      <button id="success-print-btn" onclick="window.print()" class="border border-stone-300 hover:bg-stone-100 text-stone-700 rounded-xl px-5 py-3 text-xs font-black transition flex items-center gap-1 cursor-pointer">
        <i data-lucide="printer" class="w-4 h-4"></i>
        Imprimir Remisión
      </button>
    </div>
  `;

  document.getElementById('success-go-home-btn').addEventListener('click', () => {
    state.lastPlacedOrder = null;
    navigatetoView('store');
  });

  lucide.createIcons();
}


// ========================================== PURCHASES HISTORY (SUBVIEW 7) ==========================================

function renderPurchasesHistory() {
  if (!state.currentCliente) {
    navigatetoView('store');
    return;
  }

  const listContainer = document.getElementById('purchases-history-list');
  const countBadge = document.getElementById('purchases-history-count');
  
  // Filter historic orders
  const filteredOrders = state.pedidos.filter(ord => ord.clienteId === state.currentCliente.id);
  countBadge.textContent = filteredOrders.length;
  listContainer.innerHTML = '';

  if (filteredOrders.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-10 bg-stone-50 border rounded-3xl" id="purchases-empty-view">
        <div class="mx-auto text-stone-300 w-10 h-10 mb-2">
           <i data-lucide="package" class="w-10 h-10"></i>
        </div>
        <p class="text-stone-400 italic text-xs font-serif">Aún no registra facturas o compras realizadas con su usuario en Muebles los Alpes.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  filteredOrders.forEach(ord => {
    const listCard = document.createElement('div');
    listCard.className = 'bg-white border rounded-2xl p-4 hover:border-amber-700/40 transition shadow-2xs';
    
    let subrecordsHTML = '';
    ord.items.forEach(it => {
      subrecordsHTML += `
        <div class="flex justify-between items-center text-[11px] border-b last:border-0 border-stone-100 py-1.5 font-medium leading-none">
          <p class="text-stone-700">${it.nombre} <span class="text-[9px] font-mono text-stone-400 font-bold ml-1">Ref: ${it.referencia}</span></p>
          <div class="flex gap-4">
            <span class="text-stone-500 font-mono">${it.cantidad} unidad/es</span>
            <span class="text-amber-955 font-bold font-mono">${formatCOP(it.total)}</span>
          </div>
        </div>
      `;
    });

    listCard.innerHTML = `
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-2 mb-3 gap-2">
        <div>
          <span class="bg-stone-100 text-stone-800 font-mono text-[9px] font-bold px-2 py-0.5 rounded-lg border border-stone-200">${ord.id}</span>
          <span class="text-[10px] text-stone-400 font-mono ml-2">Emitida el ${ord.fecha}</span>
        </div>
        <div class="text-right">
          <p class="text-[10px] text-stone-400 leading-none mb-0.5 uppercase tracking-widest font-mono">Modo de Pago</p>
          <p class="text-xs font-bold text-stone-800">${ord.formaPago}</p>
        </div>
      </div>

      <div class="space-y-1 mb-3">
         ${subrecordsHTML}
      </div>

      <div class="flex justify-between items-baseline mt-4 border-t pt-2 border-stone-200 border-dashed">
         <span class="text-xs text-stone-400 font-medium font-mono uppercase tracking-wider">Valor total de la transacción:</span>
         <span class="font-display font-black text-amber-950 text-sm font-mono">${formatCOP(ord.valorTotal)}</span>
      </div>
    `;

    listContainer.appendChild(listCard);
  });

  lucide.createIcons();
}

