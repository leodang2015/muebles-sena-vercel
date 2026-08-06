/**
 * Muebles los Alpes — Consola Administrativa Standalone (SENA)
 * Archivo de Lógica / Controladora JavaScript (admin.js)
 */

// ========================================== CONSTANTES Y DATOS INICIALES ==========================================

// No se usan enlaces externos de Unsplash para evitar desajustes con las descripciones reales.

const INITIAL_CLIENTES = [
  {
    id: 'cli-001',
    tipoDocumento: 'Cédula de Cédula de Ciudadanía',
    numeroDocumento: '1020456789',
    nombreCompleto: 'Camila Restrepo',
    telefonoResidencia: '6013234567',
    telefonoCelular: '3157894561',
    direccion: 'Carrera 15 # 85-12',
    ciudadResidencia: 'Bogotá',
    departamento: 'Cundinamarca',
    pais: 'Colombia',
    profesion: 'Diseñadora de Interiores',
    email: 'camila.restrepo@example.com',
    isJuridica: false
  },
  {
    id: 'cli-002',
    tipoDocumento: 'Cédula de Cédula de Ciudadanía',
    numeroDocumento: '91234567',
    nombreCompleto: 'Carlos Gómez',
    telefonoResidencia: '6077245678',
    telefonoCelular: '3004567890',
    direccion: 'Calle 12 # 4-50 Centro',
    ciudadResidencia: 'San Gil',
    departamento: 'Santander',
    pais: 'Colombia',
    profesion: 'Comerciante',
    email: 'carlos.gomez@example.com',
    isJuridica: false
  },
  {
    id: 'cli-003',
    tipoDocumento: 'NIT',
    numeroDocumento: '900123456-1',
    nombreCompleto: 'Constructora Alpes S.A.S.',
    telefonoResidencia: '6024889900',
    telefonoCelular: '3112223344',
    direccion: 'Avenida Sexta Norte # 22N-50',
    ciudadResidencia: 'Cali',
    departamento: 'Valle del Cauca',
    pais: 'Colombia',
    profesion: 'Constructor',
    email: 'compras@construalpes.com',
    isJuridica: true,
    nit: '900123456-1'
  },
  {
    id: 'cli-004',
    tipoDocumento: 'Cédula de Cédula de Ciudadanía',
    numeroDocumento: '43567890',
    nombreCompleto: 'Diana Ospina',
    telefonoResidencia: '6042661122',
    telefonoCelular: '3109876543',
    direccion: 'Calle 10 # 36-24 El Poblado',
    ciudadResidencia: 'Medellín',
    departamento: 'Antioquia',
    pais: 'Colombia',
    profesion: 'Arquitecta',
    email: 'diana.ospina@example.com',
    isJuridica: false
  }
];

const INITIAL_MUEBLES = [
  {
    referencia: 'MESONAT001',
    nombre: 'Mesa Ovalada estilo griego',
    descripcion: 'Mesa ovalada de comedor con un elegante diseño de estilo griego clásico, ideal para brindar un toque de sofisticación a tus espacios interiores.',
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
    descripcion: 'Mesa ovalada con un elegante estilo griego and patas de columna tallada, en un matiz avellana cálido y profundo ideal para salones prestigiosos.',
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
    dimensions: 'Alto: 85 cm, Ancho: 180 cm, Profundidad: 80 cm',
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


// ========================================== GLOBAL STATE ==========================================

let state = {
  muebles: [],
  clientes: [],
  pedidos: [],
  isWorker: true,
  currentTab: 'muebles'
};

// Handle Loading
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

  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('alpes_muebles', JSON.stringify(state.muebles));
  localStorage.setItem('alpes_clientes', JSON.stringify(state.clientes));
  localStorage.setItem('alpes_pedidos', JSON.stringify(state.pedidos));
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


// ========================================== ELEMENT SELECTORS & ASSIGNMENT ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Database
  initDB();

  const sessionActive = localStorage.getItem('alpes_admin_session') === 'true';
  if (!sessionActive) {
    // Hide all normal content
    const originalChildren = Array.from(document.body.children);
    originalChildren.forEach(child => {
      if (child.tagName !== 'SCRIPT') {
        child.classList.add('hidden');
      }
    });

    // Create login guard
    const guardDiv = document.createElement('div');
    guardDiv.id = 'admin-login-guard';
    guardDiv.className = 'w-full';
    guardDiv.innerHTML = `
<div class="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center p-6 relative overflow-hidden font-sans">
  <div class="absolute w-96 h-96 rounded-full bg-amber-600/10 blur-3xl -top-12 -left-12"></div>
  <div class="absolute w-96 h-96 rounded-full bg-stone-800/20 blur-3xl -bottom-12 -right-12"></div>

  <div class="max-w-md w-full bg-stone-900 border border-stone-800 rounded-3xl p-8 shadow-2xl relative z-10 space-y-6">
    <div class="text-center space-y-3">
      <div class="w-16 h-16 rounded-2xl bg-amber-950 border border-amber-800/20 flex items-center justify-center mx-auto shadow-md">
        <i data-lucide="shield-alert" class="w-8 h-8 text-amber-500"></i>
      </div>
      
      <div class="space-y-1">
        <h1 class="text-xl font-display font-black text-white tracking-wide">Muebles los Alpes</h1>
        <p class="text-[11px] font-mono text-stone-400 uppercase tracking-widest">Consola de Control • Acceso Restringido</p>
      </div>
    </div>

    <div id="admin-gate-error-box" class="bg-red-950/45 border border-red-900/35 text-red-200 p-3.5 rounded-xl text-xs font-semibold leading-relaxed hidden flex gap-2.5 items-start">
      <i data-lucide="alert-circle" class="w-4 h-4 text-red-500 shrink-0 mt-0.5"></i>
      <span id="admin-gate-error-msg"></span>
    </div>

    <form id="admin-gate-login-form" class="space-y-4">
      <div class="space-y-1.5">
        <div class="flex items-center justify-between">
          <label class="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold block">Contraseña Administrativa</label>
          <span class="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/50">
            Oportunidades: <span id="admin-gate-attempts-cnt">3</span> de 3
          </span>
        </div>
        <div class="relative">
          <i data-lucide="lock" class="absolute left-3.5 top-3.5 text-stone-500 w-4 h-4"></i>
          <input type="password" id="admin-gate-password" class="w-full pl-10 pr-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700/35 transition placeholder-stone-600" placeholder="••••••••" required>
        </div>
        <p class="text-[10px] text-stone-500 mt-1 block leading-tight font-mono">Clave por defecto de consola: <b>admin123</b></p>
      </div>

      <button type="submit" id="admin-gate-submit-btn" class="w-full bg-amber-800 hover:bg-amber-700 active:bg-amber-900 text-white rounded-xl py-3 text-xs font-extrabold transition shadow-md uppercase tracking-wider cursor-pointer flex items-center justify-center gap-1.5">
        <i data-lucide="key-round" class="w-3.5 h-3.5"></i>
        <span>Autenticar y Acceder</span>
      </button>
    </form>

    <div class="pt-4 border-t border-stone-800 text-center">
      <a href="index.html" class="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white font-medium transition">
        <i data-lucide="arrow-left" class="w-4 h-4"></i>
        <span>Volver a la Tienda</span>
      </a>
    </div>
  </div>
</div>
    `;
    document.body.appendChild(guardDiv);
    lucide.createIcons();

    const gateForm = document.getElementById('admin-gate-login-form');
    const gateErrorBox = document.getElementById('admin-gate-error-box');
    const gateErrorMsg = document.getElementById('admin-gate-error-msg');
    let gateAttemptsLeft = 3;
    let gateLockTimer = null;

    gateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      gateErrorBox.classList.add('hidden');

      const passInput = document.getElementById('admin-gate-password');
      const submitBtn = document.getElementById('admin-gate-submit-btn');
      const passVal = passInput.value;

      if (passVal === 'admin123') {
        localStorage.setItem('alpes_admin_session', 'true');
        alert('¡Acceso administrativo concedido!');
        guardDiv.remove();
        originalChildren.forEach(child => {
          // Do not unhide modals on login restoration
          if (!child.id || !child.id.startsWith('modal-')) {
            child.classList.remove('hidden');
          }
        });
        // Boot normal admin app
        bootAdminApp();
      } else {
        gateAttemptsLeft--;
        document.getElementById('admin-gate-attempts-cnt').textContent = gateAttemptsLeft;

        if (gateAttemptsLeft > 0) {
          gateErrorMsg.textContent = `Contraseña incorrecta. Le quedan ${gateAttemptsLeft} de 3 oportunidades. Clave por defecto: admin123`;
          gateErrorBox.classList.remove('hidden');
        } else {
          passInput.disabled = true;
          submitBtn.disabled = true;
          submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

          let secondsLeft = 30;
          gateErrorMsg.textContent = `¡Ha agotado las 3 oportunidades! Por seguridad, la consola está bloqueada. Reintente en ${secondsLeft} segundos.`;
          gateErrorBox.classList.remove('hidden');

          gateLockTimer = setInterval(() => {
            secondsLeft--;
            if (secondsLeft > 0) {
              gateErrorMsg.textContent = `¡Ha agotado las 3 oportunidades! Por seguridad, la consola está bloqueada. Reintente en ${secondsLeft} segundos.`;
            } else {
              clearInterval(gateLockTimer);
              gateAttemptsLeft = 3;
              document.getElementById('admin-gate-attempts-cnt').textContent = '3';
              passInput.disabled = false;
              submitBtn.disabled = false;
              submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
              passInput.value = '';
              gateErrorMsg.textContent = 'Bloqueo finalizado. Dispone de 3 nuevas oportunidades para intentar ingresar.';
              gateErrorBox.classList.remove('hidden');
            }
          }, 1000);
        }
      }
    });
  } else {
    bootAdminApp();
  }

  function bootAdminApp() {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Add logout button dynamically in the top header widgets
    const widgetsWrap = document.querySelector('.admin-widgets');
    if (widgetsWrap) {
      const logoutBtn = document.createElement('button');
      logoutBtn.className = 'admin-btn-reset bg-red-700 hover:bg-red-800 text-white flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer';
      logoutBtn.style.backgroundColor = '#b91c1c';
      logoutBtn.style.color = '#ffffff';
      logoutBtn.innerHTML = `
        <i data-lucide="log-out" class="w-3.5 h-3.5 text-white"></i>
        <span>Cerrar Sesión</span>
      `;
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('alpes_admin_session');
        alert('Sesión administrativa cerrada.');
        window.location.reload();
      });
      widgetsWrap.appendChild(logoutBtn);
      lucide.createIcons();
    }

    // DOM Elements Tab navigation
  const tabMueblesBtn = document.getElementById('tab-muebles-btn');
  const tabClientesBtn = document.getElementById('tab-clientes-btn');
  const tabPreciosBtn = document.getElementById('tab-precios-btn');
  const tabReportesBtn = document.getElementById('tab-reportes-btn');

  const sectMuebles = document.getElementById('sect-muebles');
  const sectClientes = document.getElementById('sect-clientes');
  const sectPrecios = document.getElementById('sect-precios');
  const sectReportes = document.getElementById('sect-reportes');

  // Set initial Dates for Reports
  const currentDate = new Date();
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString().split('T')[0];
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).toISOString().split('T')[0];
  document.getElementById('report-start-date').value = firstDay;
  document.getElementById('report-end-date').value = lastDay;

  // TAB CONTROLLERS
  function switchTab(target) {
    state.currentTab = target;
    
    // reset visibility
    sectMuebles.classList.add('hidden');
    sectClientes.classList.add('hidden');
    sectPrecios.classList.add('hidden');
    sectReportes.classList.add('hidden');

    tabMueblesBtn.className = 'admin-tab-btn inactive';
    tabClientesBtn.className = 'admin-tab-btn inactive';
    tabPreciosBtn.className = 'admin-tab-btn inactive';
    tabReportesBtn.className = 'admin-tab-btn inactive';

    if (target === 'muebles') {
      sectMuebles.classList.remove('hidden');
      tabMueblesBtn.className = 'admin-tab-btn active';
      renderMuebles();
    } else if (target === 'clientes') {
      sectClientes.classList.remove('hidden');
      tabClientesBtn.className = 'admin-tab-btn active';
      renderClientes();
    } else if (target === 'precios') {
      sectPrecios.classList.remove('hidden');
      tabPreciosBtn.className = 'admin-tab-btn active';
      renderBulkPrecios();
    } else if (target === 'reportes') {
      sectReportes.classList.remove('hidden');
      tabReportesBtn.className = 'admin-tab-btn active';
      populateClientSelectorOptions();
      generateReport();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Register Tab Click Listeners
  tabMueblesBtn.addEventListener('click', () => switchTab('muebles'));
  tabClientesBtn.addEventListener('click', () => switchTab('clientes'));
  tabPreciosBtn.addEventListener('click', () => switchTab('precios'));
  tabReportesBtn.addEventListener('click', () => switchTab('reportes'));

  // ESCALATE PRIVILEGES OVERRIDE
  const workerModeCb = document.getElementById('worker-mode-cb');
  const privilegeBadge = document.getElementById('privilege-badge');
  const privilegeDesc = document.getElementById('privilege-desc');
  const privilegeIcon = document.getElementById('privilege-icon');
  const privilegeBg = document.getElementById('privilege-bg');

  function updatePrivilegesUI(isWorker) {
    state.isWorker = isWorker;
    workerModeCb.checked = isWorker;

    if (isWorker) {
      privilegeBadge.className = 'bg-emerald-50 text-emerald-800 border border-emerald-100 px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider';
      privilegeBadge.textContent = 'Trabajador de la Empresa (Activo)';
      privilegeDesc.textContent = 'Permisos autoritarios: Usted puede registrar nuevos muebles, editar inventario global, realizar aumentos de precios masivos y dar de baja a clientes sin restricciones.';
      privilegeBg.className = 'bg-amber-800 text-amber-50 p-2.5 rounded-xl shrink-0';
      privilegeIcon.setAttribute('data-lucide', 'unlock');
    } else {
      privilegeBadge.className = 'bg-stone-100 text-stone-500 border border-stone-200 px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider';
      privilegeBadge.textContent = 'Cliente / Sin Privilegios de Empresa';
      privilegeDesc.textContent = 'Modo pasivo. No puede registrar ni eliminar muebles del catálogo, ni realizar la baja de clientes que poseen compras relacionales registradas.';
      privilegeBg.className = 'bg-stone-200 text-stone-400 p-2.5 rounded-xl shrink-0';
      privilegeIcon.setAttribute('data-lucide', 'lock');
    }
    lucide.createIcons();

    // Rerender active view
    if (state.currentTab === 'muebles') renderMuebles();
    if (state.currentTab === 'clientes') renderClientes();
  }

  workerModeCb.addEventListener('change', (e) => {
    updatePrivilegesUI(e.target.checked);
  });

  // RESTORE DEFAULT BUTTON
  document.getElementById('reset-data-btn').addEventListener('click', () => {
    if (confirm('¿Desea restablecer todos los registros (clientes, muebles y pedidos) a sus valores de fábrica iniciales de SENA? Se borrarán datos ingresados recientemente.')) {
      state.muebles = [...INITIAL_MUEBLES];
      state.clientes = [...INITIAL_CLIENTES];
      state.pedidos = [...INITIAL_PEDIDOS];
      saveToLocalStorage();
      alert('Toda la información del taller ha sido restaurada con éxito.');
      switchTab(state.currentTab);
    }
  });


  // ========================================== RENDER MUEBLES TAB (TAB 1) ==========================================

  const mueblesSearchInput = document.getElementById('muebles-search-input');
  const mueblesTbody = document.getElementById('muebles-tbody');
  const mueblesEmpty = document.getElementById('muebles-empty');

  function renderMuebles() {
    const filterText = mueblesSearchInput.value.trim().toLowerCase();
    const filtered = state.muebles.filter(m => 
      m.nombre.toLowerCase().includes(filterText) ||
      m.referencia.toLowerCase().includes(filterText) ||
      m.material.toLowerCase().includes(filterText)
    );

    mueblesTbody.innerHTML = '';
    
    if (filtered.length === 0) {
      mueblesEmpty.classList.remove('hidden');
    } else {
      mueblesEmpty.classList.add('hidden');
      filtered.forEach(m => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-stone-50/50 transition';
        tr.id = `mrow-${m.referencia}`;
        tr.innerHTML = `
          <td class="py-3.5 px-6 font-mono font-bold text-amber-900">
            <button class="hover:underline text-left cursor-pointer view-mbtn" data-ref="${m.referencia}">
              ${m.referencia}
            </button>
          </td>
          <td class="py-3.5 px-6 font-serif font-bold text-stone-900">${m.nombre}</td>
          <td class="py-3.5 px-6">
            <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${
              m.tipo === 'Interior' ? 'bg-teal-50 text-teal-800 border border-teal-100' : 'bg-orange-50 text-orange-800 border border-orange-100'
            }">
              ${m.tipo}
            </span>
          </td>
          <td class="py-3.5 px-6 text-stone-500">${m.material}</td>
          <td class="py-3.5 px-6 font-mono text-stone-400 text-[11px] max-w-[200px] truncate" title="${m.dimensiones}">${m.dimensiones}</td>
          <td class="py-3.5 px-6 text-right space-x-1.5 whitespace-nowrap">
            <button class="text-stone-500 hover:text-stone-800 p-1.5 hover:bg-stone-100 rounded-lg transition cursor-pointer view-mbtn" data-ref="${m.referencia}" title="Ver Ficha Técnica">
              <i data-lucide="info" class="w-3.5 h-3.5 inline"></i>
            </button>
            <button class="${state.isWorker ? 'text-blue-600 hover:text-blue-800 hover:bg-blue-50' : 'text-stone-300 cursor-not-allowed'} p-1.5 rounded-lg transition cursor-pointer edit-mbtn" data-ref="${m.referencia}" title="Modificar">
              <i data-lucide="edit-3" class="w-3.5 h-3.5 inline"></i>
            </button>
            <button class="${state.isWorker ? 'text-red-500 hover:text-red-800 hover:bg-red-50' : 'text-stone-400 cursor-not-allowed'} p-1.5 rounded-lg transition cursor-pointer delete-mbtn" data-ref="${m.referencia}" title="Eliminar del catálogo">
              <i data-lucide="trash-2" class="w-3.5 h-3.5 inline"></i>
            </button>
          </td>
        `;

        mueblesTbody.appendChild(tr);
      });
    }

    lucide.createIcons();
    registerMuebleTableEvents();
  }

  mueblesSearchInput.addEventListener('input', renderMuebles);

  // Mueble popups trigger attachments
  function registerMuebleTableEvents() {
    // View Technical specs popup
    document.querySelectorAll('.view-mbtn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const ref = btn.getAttribute('data-ref');
        const m = state.muebles.find(item => item.referencia === ref);
        if (m) {
          document.getElementById('md-v-ref').textContent = m.referencia;
          document.getElementById('md-v-nombre').textContent = m.nombre;
          document.getElementById('md-v-tipo').textContent = m.tipo;
          document.getElementById('md-v-material').textContent = m.material;
          document.getElementById('md-v-dimensiones').textContent = m.dimensiones;
          document.getElementById('md-v-color').textContent = m.color;
          document.getElementById('md-v-peso').textContent = `${m.peso}g (${m.peso / 1000} kg)`;
          document.getElementById('md-v-precio').textContent = formatCOP(m.precio);
          document.getElementById('md-v-stock').textContent = `${m.stock} unidades`;
          document.getElementById('md-v-descripcion').textContent = m.descripcion || 'Sin descripción redactada.';
          
          document.getElementById('modal-view-mueble').classList.remove('hidden');
        }
      });
    });

    // Edit button trigger
    document.querySelectorAll('.edit-mbtn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!state.isWorker) {
          alert('RESTRICCIÓN DE SEGURIDAD: Solo los trabajadores de Muebles los Alpes pueden editar el catálogo consolidado.');
          return;
        }
        const ref = btn.getAttribute('data-ref');
        const m = state.muebles.find(item => item.referencia === ref);
        if (m) {
          openMuebleForm(true, m);
        }
      });
    });

    // Delete button trigger
    document.querySelectorAll('.delete-mbtn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!state.isWorker) {
          alert('RESTRICCIÓN DE SEGURIDAD: Solo trabajadores autorizados pueden remover muebles del catálogo Alpes.');
          return;
        }
        const ref = btn.getAttribute('data-ref');
        openDeleteMuebleModal(ref);
      });
    });
  }

  // CLOSE VIEW MODAL
  document.getElementById('close-view-mueble-btn').addEventListener('click', () => {
    document.getElementById('modal-view-mueble').classList.add('hidden');
  });

  // MUEBLE DIALOG EDIT / CREATE WORKER WRAPPERS
  const modalFormMueble = document.getElementById('modal-form-mueble');
  const mdFTitle = document.getElementById('md-f-title');
  const formIsEdit = document.getElementById('form-is-edit');
  const furnitureForm = document.getElementById('mueble-form');
  const muebleFormError = document.getElementById('mueble-form-error');

  // Handle form image mode toggles & downloader
  const toggleImgUploadBtn = document.getElementById('toggle-img-upload');
  const toggleImgPresetsBtn = document.getElementById('toggle-img-presets');
  const toggleImgGenerateBtn = document.getElementById('toggle-img-generate');

  const wrapperImgUpload = document.getElementById('wrapper-img-upload');
  const wrapperImgPresets = document.getElementById('wrapper-img-presets');
  const wrapperImgGenerate = document.getElementById('wrapper-img-generate');
  
  const fFotoFile = document.getElementById('f-foto-file');
  const fFileName = document.getElementById('f-file-name');
  
  const fFoto = document.getElementById('f-foto');
  const fFotoManual = document.getElementById('f-foto-manual');
  const imgPreview = document.getElementById('mueble-form-img-preview');
  const imgPathText = document.getElementById('mueble-form-img-path');

  const btnGenerateAi = null;
  const aiProgressBox = null;
  const aiProgressBar = null;
  const aiProgressStatus = null;
  const aiProgressPercent = null;

  function updateFormImage(url) {
    fFoto.value = url;
    imgPathText.textContent = url || '(Sin imagen)';
    if (url) {
      imgPreview.src = url;
      imgPreview.setAttribute('onerror', "this.onerror=null; this.src='images/logo_alpes.jpg';");
      imgPreview.classList.remove('opacity-40');
    } else {
      imgPreview.src = 'images/logo_alpes.jpg';
      imgPreview.classList.add('opacity-40');
    }
  }

  // Toggle buttons highlight
  toggleImgUploadBtn.addEventListener('click', () => {
    toggleImgUploadBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 bg-white text-stone-900 shadow-xs";
    toggleImgPresetsBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 text-stone-500 hover:text-stone-800";
    toggleImgGenerateBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 text-stone-500 hover:text-stone-800";
    wrapperImgUpload.classList.remove('hidden');
    wrapperImgPresets.classList.add('hidden');
    wrapperImgGenerate.classList.add('hidden');
  });

  toggleImgPresetsBtn.addEventListener('click', () => {
    toggleImgPresetsBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 bg-white text-stone-900 shadow-xs";
    toggleImgUploadBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 text-stone-500 hover:text-stone-800";
    toggleImgGenerateBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 text-stone-500 hover:text-stone-800";
    wrapperImgPresets.classList.remove('hidden');
    wrapperImgUpload.classList.add('hidden');
    wrapperImgGenerate.classList.add('hidden');
  });

  toggleImgGenerateBtn.addEventListener('click', () => {
    toggleImgGenerateBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 bg-white text-stone-900 shadow-xs";
    toggleImgUploadBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 text-stone-500 hover:text-stone-800";
    toggleImgPresetsBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 text-stone-500 hover:text-stone-800";
    wrapperImgGenerate.classList.remove('hidden');
    wrapperImgUpload.classList.add('hidden');
    wrapperImgPresets.classList.add('hidden');
  });

  fFotoFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      fFileName.textContent = `Archivo: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
      fFileName.classList.remove('hidden');
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Url = event.target.result;
        updateFormImage(base64Url);
      };
      reader.readAsDataURL(file);
    }
  });

  fFotoManual.addEventListener('input', () => {
    updateFormImage(fFotoManual.value.trim());
  });

  // Attach direct clicks to presets
  document.querySelectorAll('.preset-item').forEach(button => {
    button.addEventListener('click', (e) => {
      const url = button.getAttribute('data-url');
      updateFormImage(url);
      
      button.classList.add('border-amber-600', 'ring-2', 'ring-amber-200');
      setTimeout(() => {
        button.classList.remove('border-amber-600', 'ring-2', 'ring-amber-200');
      }, 800);
    });
  });

  function openMuebleForm(isEdit, item = null) {
    muebleFormError.classList.add('hidden');
    muebleFormError.textContent = '';
    
    // Reset tabs view to default (Upload)
    wrapperImgUpload.classList.remove('hidden');
    wrapperImgPresets.classList.add('hidden');
    wrapperImgGenerate.classList.add('hidden');
    toggleImgUploadBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 bg-white text-stone-900 shadow-xs";
    toggleImgPresetsBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 text-stone-500 hover:text-stone-800";
    toggleImgGenerateBtn.className = "flex-1 py-2 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 text-stone-500 hover:text-stone-800";
    if (aiProgressBox) aiProgressBox.classList.add('hidden');
    fFileName.classList.add('hidden');
    fFileName.textContent = '';
    fFotoFile.value = '';

    if (isEdit && item) {
      mdFTitle.textContent = `Modificar Mueble REF: ${item.referencia}`;
      formIsEdit.value = 'true';
      document.getElementById('f-ref').value = item.referencia;
      document.getElementById('f-ref').disabled = true; // Cannot edit uniform composite primary key
      document.getElementById('f-nombre').value = item.nombre;
      document.getElementById('f-tipo').value = item.tipo;
      document.getElementById('f-material').value = item.material;
      document.getElementById('f-dimensiones').value = item.dimensiones;
      document.getElementById('f-color').value = item.color;
      document.getElementById('f-peso').value = item.peso;
      document.getElementById('f-precio').value = item.precio;
      document.getElementById('f-stock').value = item.stock;
      document.getElementById('f-descripcion').value = item.descripcion || '';
      
      const fotoVal = item.foto || 'images/mesa_natural.jpg';
      updateFormImage(fotoVal);
      fFotoManual.value = fotoVal;
    } else {
      mdFTitle.textContent = 'Registrar Nuevo Mueble en el Catálogo';
      formIsEdit.value = 'false';
      document.getElementById('f-ref').value = '';
      document.getElementById('f-ref').disabled = false;
      document.getElementById('f-nombre').value = '';
      document.getElementById('f-tipo').value = 'Interior';
      document.getElementById('f-material').value = '';
      document.getElementById('f-dimensiones').value = 'Alto: 100 cm, Ancho: 50 cm, Profundidad: 50 cm';
      document.getElementById('f-color').value = '';
      document.getElementById('f-peso').value = '';
      document.getElementById('f-precio').value = '';
      document.getElementById('f-stock').value = '';
      document.getElementById('f-descripcion').value = '';
      
      updateFormImage('images/mesa_natural.jpg');
      fFotoManual.value = 'images/mesa_natural.jpg';
    }
    modalFormMueble.classList.remove('hidden');
  }

  document.getElementById('add-mueble-btn').addEventListener('click', () => {
    if (!state.isWorker) {
      alert('RESTRICCIÓN DE SEGURIDAD: Solo trabajadores autorizados pueden de forma remota agregar nuevos modelos.');
      return;
    }
    openMuebleForm(false);
  });

  document.getElementById('close-form-mueble-btn').addEventListener('click', () => {
    modalFormMueble.classList.add('hidden');
  });

  furnitureForm.addEventListener('submit', (e) => {
    e.preventDefault();
    muebleFormError.classList.add('hidden');

    const isEdit = formIsEdit.value === 'true';
    const ref = document.getElementById('f-ref').value.trim();
    const nombre = document.getElementById('f-nombre').value.trim();
    const tipo = document.getElementById('f-tipo').value;
    const material = document.getElementById('f-material').value.trim();
    const dimensiones = document.getElementById('f-dimensiones').value.trim();
    const color = document.getElementById('f-color').value.trim();
    const peso = Number(document.getElementById('f-peso').value);
    const precio = Number(document.getElementById('f-precio').value);
    const stock = Number(document.getElementById('f-stock').value);
    const foto = document.getElementById('f-foto').value.trim() || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600';
    const descripcion = document.getElementById('f-descripcion').value.trim();

    if (!isEdit) {
      // Validate unique key constraint
      const alreadyExists = state.muebles.some(m => m.referencia.toUpperCase() === ref.toUpperCase());
      if (alreadyExists) {
        muebleFormError.textContent = `RECORTE DE AUDITORÍA: El código de referencia '${ref}' ya se encuentra asignado en el sistema nacional de Muebles los Alpes.`;
        muebleFormError.classList.remove('hidden');
        return;
      }

      const freshMueble = { referencia: ref, nombre, tipo, material, dimensiones, color, peso, precio, stock, foto, descripcion };
      state.muebles.push(freshMueble);
    } else {
      const idx = state.muebles.findIndex(m => m.referencia === ref);
      if (idx !== -1) {
        state.muebles[idx] = {
          ...state.muebles[idx],
          nombre, tipo, material, dimensiones, color, peso, precio, stock, foto, descripcion
        };
      }
    }

    saveToLocalStorage();
    modalFormMueble.classList.add('hidden');
    renderMuebles();
    alert(isEdit ? 'El mueble ha sido modificado exitosamente.' : 'Mueble agregado al catálogo Alpes de manera exitosa.');
  });


  // DELETE MUEBLE POPUP HANDLERS
  const modalDeleteMueble = document.getElementById('modal-delete-mueble');
  const delMuebleRef = document.getElementById('del-mueble-ref');

  function openDeleteMuebleModal(ref) {
    delMuebleRef.value = ref;
    modalDeleteMueble.classList.remove('hidden');
  }

  document.getElementById('close-del-mueble-btn').addEventListener('click', () => {
    modalDeleteMueble.classList.add('hidden');
  });

  document.getElementById('confirm-del-mueble-btn').addEventListener('click', () => {
    const ref = delMuebleRef.value;
    state.muebles = state.muebles.filter(m => m.referencia !== ref);
    saveToLocalStorage();
    modalDeleteMueble.classList.add('hidden');
    renderMuebles();
    alert('Mueble eliminado del catálogo exitosamente.');
  });


  // ========================================== RENDER CLIENTES TAB (TAB 2) ==========================================

  const clientesSearchInput = document.getElementById('clientes-search-input');
  const clientesTbody = document.getElementById('clientes-tbody');
  const clientesEmpty = document.getElementById('clientes-empty');
  const totalClientesBadge = document.getElementById('total-clientes-badge');

  function renderClientes() {
    const filterText = clientesSearchInput.value.trim().toLowerCase();
    const filtered = state.clientes.filter(c => 
      c.nombreCompleto.toLowerCase().includes(filterText) ||
      c.numeroDocumento.includes(filterText) ||
      c.email.toLowerCase().includes(filterText)
    );

    totalClientesBadge.textContent = state.clientes.length;
    clientesTbody.innerHTML = '';

    if (filtered.length === 0) {
      clientesEmpty.classList.remove('hidden');
    } else {
      clientesEmpty.classList.add('hidden');
      filtered.forEach(c => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-stone-50/55 transition';
        tr.id = `crow-${c.id}`;
        tr.innerHTML = `
          <td class="py-3.5 px-6">
            <span class="bg-stone-150 bg-stone-100 text-stone-700 px-2.5 py-1 rounded text-[10px] font-mono font-bold">
              ${c.tipoDocumento === 'NIT' ? 'NIT' : 'CC/CE'}
            </span>
          </td>
          <td class="py-3.5 px-6 font-mono font-bold text-stone-800">${c.numeroDocumento}</td>
          <td class="py-3.5 px-6 font-semibold text-stone-950 flex flex-wrap items-center gap-2">
            ${c.nombreCompleto}
            ${c.isJuridica ? '<span class="bg-amber-800 text-amber-50 text-[9px] px-1 rounded uppercase tracking-wider font-extrabold">Jurídica</span>' : ''}
            ${c.perteneceEmpresa ? '<span class="bg-emerald-800 text-white text-[9px] px-1.5 py-0.5 rounded-md uppercase tracking-wider font-extrabold shadow-2xs">Trabajador</span>' : ''}
          </td>
          <td class="py-3.5 px-6 font-mono font-light text-stone-600">${c.email}</td>
          <td class="py-3.5 px-6 font-mono text-stone-400">${c.telefonoResidencia || 'N/A'}</td>
          <td class="py-3.5 px-6 text-right space-x-1.5 whitespace-nowrap">
            <button class="bg-amber-50 hover:bg-amber-100 text-amber-900 px-2.5 py-1.5 rounded-lg transition inline-flex items-center gap-1 text-[11px] font-bold cursor-pointer edit-cbtn" data-id="${c.id}">
              <i data-lucide="edit-3" class="w-3 h-3"></i>
              Editar
            </button>
            <button class="bg-red-50 hover:bg-red-100 text-red-700 px-2.5 py-1.5 rounded-lg transition inline-flex items-center gap-1 text-[11px] font-bold cursor-pointer delete-cbtn" data-id="${c.id}">
              <i data-lucide="trash-2" class="w-3 h-3"></i>
              Eliminar
            </button>
          </td>
        `;
        clientesTbody.appendChild(tr);
      });
    }

    lucide.createIcons();
    registerClientesTableEvents();
  }

  clientesSearchInput.addEventListener('input', renderClientes);

  function registerClientesTableEvents() {
    // Edit Client Mode trigger
    document.querySelectorAll('.edit-cbtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const c = state.clientes.find(cli => cli.id === id);
        if (c) {
          openEditClienteModal(c);
        }
      });
    });

    // Delete Client trigger (with orders check)
    document.querySelectorAll('.delete-cbtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openDeleteClienteModal(id);
      });
    });
  }

  // EDIT CLIENT DIALOG CODES (MODAL 4)
  const modalEditCliente = document.getElementById('modal-edit-cliente');
  const editClienteForm = document.getElementById('edit-cliente-form');

  function openEditClienteModal(c) {
    document.getElementById('fc-id').value = c.id;
    document.getElementById('fc-nombre').value = c.nombreCompleto;
    document.getElementById('fc-email').value = c.email;
    document.getElementById('fc-direccion').value = c.direccion;
    document.getElementById('fc-telefono').value = c.telefonoResidencia || '';
    document.getElementById('fc-celular').value = c.telefonoCelular || '';
    document.getElementById('fc-ciudad').value = c.ciudadResidencia || '';
    document.getElementById('fc-empresa').value = c.perteneceEmpresa ? 'si' : 'no';

    modalEditCliente.classList.remove('hidden');
  }

  document.getElementById('close-edit-cliente-btn').addEventListener('click', () => {
    modalEditCliente.classList.add('hidden');
  });

  editClienteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('fc-id').value;
    const nombreCompleto = document.getElementById('fc-nombre').value.trim();
    const email = document.getElementById('fc-email').value.trim();
    const direccion = document.getElementById('fc-direccion').value.trim();
    const telefonoResidencia = document.getElementById('fc-telefono').value.trim();
    const telefonoCelular = document.getElementById('fc-celular').value.trim();
    const ciudadResidencia = document.getElementById('fc-ciudad').value.trim();
    const perteneceEmpresa = document.getElementById('fc-empresa').value === 'si';

    const idx = state.clientes.findIndex(cli => cli.id === id);
    if (idx !== -1) {
      state.clientes[idx] = {
        ...state.clientes[idx],
        nombreCompleto, email, direccion, telefonoResidencia, telefonoCelular, ciudadResidencia, perteneceEmpresa
      };
      saveToLocalStorage();
      alert('Información del cliente actualizada exitosamente.');
      modalEditCliente.classList.add('hidden');
      renderClientes();
    }
  });


  // DEL CLIENT WITH COMPROMISED RELATIONAL DATABASE COERCION (MODAL_CLIENT_RESTRAINT)
  const modalDeleteCliente = document.getElementById('modal-delete-cliente');
  const delClientId = document.getElementById('del-client-id');
  const delClientNormal = document.getElementById('del-client-normal');
  const delClientRestrained = document.getElementById('del-client-restrained');
  const delOptIsWorker = document.getElementById('del-opt-is-worker');
  const delOptIsClient = document.getElementById('del-opt-is-client');

  function openDeleteClienteModal(clientId) {
    delClientId.value = clientId;
    
    // Check if client has purchase records
    const hasPurchases = state.pedidos.some(order => order.clienteId === clientId);

    if (hasPurchases) {
      delClientNormal.classList.add('hidden');
      delClientRestrained.classList.remove('hidden');
      
      if (state.isWorker) {
        delOptIsWorker.classList.remove('hidden');
        delOptIsClient.classList.add('hidden');
      } else {
        delOptIsWorker.classList.add('hidden');
        delOptIsClient.classList.remove('hidden');
      }
    } else {
      delClientNormal.classList.remove('hidden');
      delClientRestrained.classList.add('hidden');
    }

    modalDeleteCliente.classList.remove('hidden');
  }

  // Close triggers
  const closeDelC1 = document.getElementById('close-del-client-btn');
  const closeDelC2 = document.getElementById('close-del-client-restrained-btn');
  const closeDelC3 = document.getElementById('cancel-del-client-restrained-btn');

  function closeDelMod() {
    modalDeleteCliente.classList.add('hidden');
  }

  closeDelC1.addEventListener('click', closeDelMod);
  closeDelC2.addEventListener('click', closeDelMod);
  closeDelC3.addEventListener('click', closeDelMod);

  // Escalate directly from modal
  document.getElementById('escalate-privilege-btn').addEventListener('click', () => {
    updatePrivilegesUI(true);
    alert('Modo Trabajador Activado. Ahora puede realizar la baja del cliente.');
    closeDelMod();
    openDeleteClienteModal(delClientId.value);
  });

  // Normal Confirm
  document.getElementById('confirm-del-client-btn').addEventListener('click', () => {
    const cid = delClientId.value;
    state.clientes = state.clientes.filter(cli => cli.id !== cid);
    saveToLocalStorage();
    closeDelMod();
    renderClientes();
    alert('Cliente retirado exitosamente de la base de datos Alpes.');
  });

  // Authoritarian worker bypass force delete client and all orders
  const forceDelClientBtn = document.getElementById('force-del-client-btn');
  
  function executeForceDelete() {
    const cid = delClientId.value;
    // Remove orders assigned to client
    state.pedidos = state.pedidos.filter(order => order.clienteId !== cid);
    // Remove client
    state.clientes = state.clientes.filter(cli => cli.id !== cid);
    
    saveToLocalStorage();
    closeDelMod();
    renderClientes();
    alert('SENA ACCESO CONCEDIDO: Se forzó el borrado relacional. El cliente y su historial de facturación han sido dados de baja de Muebles los Alpes.');
  }

  forceDelClientBtn.addEventListener('click', executeForceDelete);


  // ========================================== RENDER PRECIOS TAB (TAB 3) ==========================================

  const bulkPreciosContainer = document.getElementById('bulk-precios-container');

  function renderBulkPrecios() {
    bulkPreciosContainer.innerHTML = '';

    state.muebles.forEach(m => {
      const row = document.createElement('div');
      row.className = 'grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b border-stone-100 pb-4 last:border-0 last:pb-0 font-medium';
      
      row.innerHTML = `
        <!-- Image & Ref -->
        <div class="md:col-span-5 flex items-center gap-3">
          <img src="${m.foto || 'images/logo_alpes.jpg'}" onerror="this.onerror=null; this.src='images/logo_alpes.jpg';" alt="${m.nombre}" class="w-12 h-10 object-cover rounded-lg bg-stone-100 border shrink-0">
          <div>
            <p class="font-mono text-[10px] text-stone-400 font-bold">REF: ${m.referencia}</p>
            <p class="font-serif text-xs text-stone-900 font-extrabold">${m.nombre}</p>
          </div>
        </div>

        <!-- Price Input -->
        <div class="md:col-span-4 flex items-center gap-1.5">
          <span class="text-stone-400 text-xs w-24 text-right md:w-auto shrink-0 font-light">Precio ($):</span>
          <div class="relative flex-1">
            <span class="absolute left-3 top-2.5 text-stone-400 text-xs font-mono font-bold">$</span>
            <input type="number" data-ref="${m.referencia}" class="f-price-input w-full pl-6 pr-3 py-2 bg-stone-50 border rounded-xl text-xs font-mono font-bold" value="${m.precio}">
          </div>
        </div>

        <!-- Stock Input -->
        <div class="md:col-span-3 flex items-center gap-1.5">
          <span class="text-stone-400 text-xs w-24 text-right md:w-auto shrink-0 font-light">Existencia:</span>
          <input type="number" data-ref="${m.referencia}" class="f-stock-input w-full px-3 py-2 bg-stone-50 border rounded-xl text-xs font-mono font-bold" value="${m.stock}">
        </div>
      `;

      bulkPreciosContainer.appendChild(row);
    });
  }

  // RESTORE ORIGINAL ACTIONS
  document.getElementById('reset-bulk-btn').addEventListener('click', () => {
    renderBulkPrecios();
    alert('Se descartaron las modificaciones temporales de inventario.');
  });

  // SAVE BULK ACTION
  document.getElementById('save-bulk-btn').addEventListener('click', () => {
    const priceInputs = document.querySelectorAll('.f-price-input');
    const stockInputs = document.querySelectorAll('.f-stock-input');

    let processedCount = 0;

    // Map through elements
    priceInputs.forEach(pInput => {
      const ref = pInput.getAttribute('data-ref');
      const sInput = Array.from(stockInputs).find(s => s.getAttribute('data-ref') === ref);

      if (sInput) {
        const freshPrice = Math.max(0, Number(pInput.value));
        const freshStock = Math.max(0, Number(sInput.value));

        const mIdx = state.muebles.findIndex(m => m.referencia === ref);
        if (mIdx !== -1) {
          state.muebles[mIdx].precio = freshPrice;
          state.muebles[mIdx].stock = freshStock;
          processedCount++;
        }
      }
    });

    saveToLocalStorage();
    alert(`Se guardaron exitosamente para ${processedCount} muebles las modificaciones de unidades y precios.`);
    switchTab('precios');
  });


  // ========================================== RENDER ANALÍTICA & REPORTES (TAB 4) ==========================================

  const reportTypeSel = document.getElementById('report-type-sel');
  const reportStartDate = document.getElementById('report-start-date');
  const reportEndDate = document.getElementById('report-end-date');
  const reportCitySel = document.getElementById('report-city-sel');
  const reportClientSel = document.getElementById('report-client-sel');

  const filterWrapperCity = document.getElementById('filter-wrapper-city');
  const filterWrapperClient = document.getElementById('filter-wrapper-client');
  const filterWrapperType = document.getElementById('filter-wrapper-type');

  const viewportVentas = document.getElementById('viewport-ventas');
  const viewportMasVendido = document.getElementById('viewport-mas-vendido');
  const viewportHistorial = document.getElementById('viewport-historial');

  const reportDocTitle = document.getElementById('report-doc-title');
  const repDocGenerated = document.getElementById('rep-doc-generated');
  const repDocStart = document.getElementById('rep-doc-start');
  const repDocEnd = document.getElementById('rep-doc-end');
  const repDocSegment = document.getElementById('rep-doc-segment');

  // Listeners to trigger changes dynamically
  reportTypeSel.addEventListener('change', () => {
    const rt = reportTypeSel.value;
    
    // adjust visual filters visibility
    if (rt === 'ventas') {
      filterWrapperCity.classList.remove('hidden');
      filterWrapperClient.classList.add('hidden');
      filterWrapperType.classList.add('hidden');

      viewportVentas.classList.remove('hidden');
      viewportMasVendido.classList.add('hidden');
      viewportHistorial.classList.add('hidden');
    } else if (rt === 'mas_vendido') {
      filterWrapperCity.classList.remove('hidden');
      filterWrapperClient.classList.add('hidden');
      filterWrapperType.classList.remove('hidden');

      viewportVentas.classList.add('hidden');
      viewportMasVendido.classList.remove('hidden');
      viewportHistorial.classList.add('hidden');
    } else if (rt === 'historial') {
      filterWrapperCity.classList.add('hidden');
      filterWrapperClient.classList.remove('hidden');
      filterWrapperType.classList.add('hidden');

      viewportVentas.classList.add('hidden');
      viewportMasVendido.classList.add('hidden');
      viewportHistorial.classList.remove('hidden');
    }

    generateReport();
  });

  // Dynamic Trigger adjustments
  reportStartDate.addEventListener('change', generateReport);
  reportEndDate.addEventListener('change', generateReport);
  reportCitySel.addEventListener('change', generateReport);
  reportClientSel.addEventListener('change', generateReport);
  document.querySelectorAll('input[name="repmuebletyp"]').forEach(radio => {
    radio.addEventListener('change', generateReport);
  });

  // Load clients options
  function populateClientSelectorOptions() {
    // Keep initial selected item if exists
    const currentVal = reportClientSel.value;
    reportClientSel.innerHTML = '<option value="">-- Seleccionar un Cliente --</option>';

    state.clientes.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.nombreCompleto} (Doc ID: ${c.numeroDocumento})`;
      reportClientSel.appendChild(opt);
    });

    reportClientSel.value = currentVal;
  }

  // ANALYTIC CORE CALCULATIONS
  function generateReport() {
    const rt = reportTypeSel.value;
    const sDate = reportStartDate.value;
    const eDate = reportEndDate.value;
    const city = reportCitySel.value;
    const clientSelected = reportClientSel.value;
    const groupRadioVal = document.querySelector('input[name="repmuebletyp"]:checked')?.value || 'Todos';

    // Update document print metadata
    const todayStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
    repDocGenerated.textContent = todayStr;
    repDocStart.textContent = sDate;
    repDocEnd.textContent = eDate;
    repDocSegment.textContent = rt === 'historial' ? 'N/A' : city;

    if (rt === 'ventas') {
      reportDocTitle.textContent = 'Reporte Diario De Ventas Consolidadas';
      compileVentasDaily(sDate, eDate, city);
    } else if (rt === 'mas_vendido') {
      reportDocTitle.textContent = 'Reporte Producto Más Vendido';
      compileMasVendido(sDate, eDate, city, groupRadioVal);
    } else if (rt === 'historial') {
      reportDocTitle.textContent = 'Historial de Movimientos de Cliente';
      compileHistorialCliente(clientSelected);
    }
  }

  // 1. VENTAS DIARIAS ACCRUAL
  function compileVentasDaily(start, end, city) {
    let interiorSum = 0;
    let exteriorSum = 0;
    let interiorList = [];
    let exteriorList = [];

    // Filter relevant orders
    const subset = state.pedidos.filter(order => {
      const fitDate = order.fecha >= start && order.fecha <= end;
      const fitCity = city === 'Todas' || order.ciudad === city;
      return fitDate && fitCity;
    });

    subset.forEach(order => {
      order.items.forEach(it => {
        const itemType = it.tipo || 'Interior';
        if (itemType === 'Interior') {
          interiorSum += it.total;
          const exists = interiorList.find(x => x.ref === it.referencia);
          if (exists) {
            exists.qty += it.cantidad;
            exists.totalCost += it.total;
          } else {
            interiorList.push({
              name: it.nombre,
              ref: it.referencia,
              qty: it.cantidad,
              unitCost: it.precioUnitario,
              totalCost: it.total
            });
          }
        } else {
          exteriorSum += it.total;
          const exists = exteriorList.find(x => x.ref === it.referencia);
          if (exists) {
            exists.qty += it.cantidad;
            exists.totalCost += it.total;
          } else {
            exteriorList.push({
              name: it.nombre,
              ref: it.referencia,
              qty: it.cantidad,
              unitCost: it.precioUnitario,
              totalCost: it.total
            });
          }
        }
      });
    });

    const grandTotal = interiorSum + exteriorSum;

    // Render Metrics
    document.getElementById('val-sum-interior').textContent = formatCOP(interiorSum);
    document.getElementById('val-sum-exterior').textContent = formatCOP(exteriorSum);
    document.getElementById('val-grand-total').textContent = formatCOP(grandTotal);

    // Distribution graph
    const chartNoTraffic = document.getElementById('ventas-no-traffic');
    const chartContainerList = document.getElementById('ventas-distribution-chart');

    if (grandTotal > 0) {
      chartContainerList.classList.remove('hidden');
      chartNoTraffic.classList.add('hidden');

      const intPct = (interiorSum / grandTotal) * 100;
      const extPct = (exteriorSum / grandTotal) * 100;

      document.getElementById('txt-pct-interior').textContent = `${formatCOP(interiorSum)} (${intPct.toFixed(0)}%)`;
      document.getElementById('txt-pct-exterior').textContent = `${formatCOP(exteriorSum)} (${extPct.toFixed(0)}%)`;

      document.getElementById('bar-pct-interior').style.width = `${intPct}%`;
      document.getElementById('bar-pct-exterior').style.width = `${extPct}%`;
    } else {
      chartContainerList.classList.add('hidden');
      chartNoTraffic.classList.remove('hidden');
    }

    // Populate interior table
    const tblBodyInterior = document.getElementById('tbl-body-interior');
    tblBodyInterior.innerHTML = '';
    if (interiorList.length === 0) {
      tblBodyInterior.innerHTML = '<tr><td colspan="5" class="py-4 text-center italic text-stone-400">No se registran ventas interiores.</td></tr>';
    } else {
      interiorList.forEach(it => {
        tblBodyInterior.innerHTML += `
          <tr class="hover:bg-stone-50/50">
            <td class="py-2.5 px-4 font-serif font-semibold text-stone-900 text-left">${it.name}</td>
            <td class="py-2.5 px-4 text-stone-400 font-bold text-left">${it.ref}</td>
            <td class="py-2.5 px-4 text-center text-stone-900 font-bold">${it.qty}</td>
            <td class="py-2.5 px-4 text-right">${formatCOP(it.unitCost)}</td>
            <td class="py-2.5 px-4 text-right font-bold text-amber-950">${formatCOP(it.totalCost)}</td>
          </tr>
        `;
      });
    }

    // Populate exterior table
    const tblBodyExterior = document.getElementById('tbl-body-exterior');
    tblBodyExterior.innerHTML = '';
    if (exteriorList.length === 0) {
      tblBodyExterior.innerHTML = '<tr><td colspan="5" class="py-4 text-center italic text-stone-400">No se registran ventas exteriores.</td></tr>';
    } else {
      exteriorList.forEach(it => {
        tblBodyExterior.innerHTML += `
          <tr class="hover:bg-stone-50/50">
            <td class="py-2.5 px-4 font-serif font-semibold text-stone-900 text-left">${it.name}</td>
            <td class="py-2.5 px-4 text-stone-400 font-bold text-left">${it.ref}</td>
            <td class="py-2.5 px-4 text-center text-stone-900 font-bold">${it.qty}</td>
            <td class="py-2.5 px-4 text-right">${formatCOP(it.unitCost)}</td>
            <td class="py-2.5 px-4 text-right font-bold text-amber-950">${formatCOP(it.totalCost)}</td>
          </tr>
        `;
      });
    }
  }

  // 2. PRODUCTO MAS VENDIDO
  function compileMasVendido(start, end, city, filterType) {
    let salesMap = {}; // mapping by ref code
    
    const subset = state.pedidos.filter(order => {
      const fitDate = order.fecha >= start && order.fecha <= end;
      const fitCity = city === 'Todas' || order.ciudad === city;
      return fitDate && fitCity;
    });

    subset.forEach(order => {
      order.items.forEach(it => {
        const itemType = it.tipo || 'Interior';
        
        // Filter type grouping assertion (all, interior, exterior)
        if (filterType !== 'Todos' && itemType !== filterType) {
          return; 
        }

        if (salesMap[it.referencia]) {
          salesMap[it.referencia].qty += it.cantidad;
        } else {
          salesMap[it.referencia] = {
            ref: it.referencia,
            name: it.nombre,
            type: itemType,
            qty: it.cantidad
          };
        }
      });
    });

    // Sort descending
    const leaderRank = Object.values(salesMap).sort((a,b) => b.qty - a.qty);

    const mvChampionBox = document.getElementById('mv-champion-box');
    const mvTbody = document.getElementById('mv-tbody');

    mvTbody.innerHTML = '';

    if (leaderRank.length === 0) {
      mvChampionBox.classList.add('hidden');
      mvTbody.innerHTML = '<tr><td colspan="5" class="p-8 text-center italic text-stone-400">Sin tráfico registrado para esta categoría de muebles en este ciclo fiscal.</td></tr>';
    } else {
      mvChampionBox.classList.remove('hidden');
      const champ = leaderRank[0];
      
      // Champion rendering
      document.getElementById('mv-champion-name').textContent = champ.name;
      document.getElementById('mv-champion-meta').textContent = `Ref: ${champ.ref} • ${champ.type}`;
      document.getElementById('mv-champion-qty').textContent = `${champ.qty} unidades`;

      leaderRank.forEach((item, idx) => {
        mvTbody.innerHTML += `
          <tr class="hover:bg-stone-50/50">
            <td class="py-2.5 px-4 text-stone-400 font-bold text-left">#${idx + 1}</td>
            <td class="py-2.5 px-4 font-bold text-stone-900 text-left">${item.ref}</td>
            <td class="py-2.5 px-4 font-serif font-semibold text-stone-800 text-left">${item.name}</td>
            <td class="py-2.5 px-4 text-left">${item.type}</td>
            <td class="py-2.5 px-4 text-center text-amber-900 font-bold">${item.qty} u.</td>
          </tr>
        `;
      });
    }
  }

  // 3. HISTORIAL DE REPORTE COMPRA POR CLIENTE
  const infoHNoSelected = document.getElementById('historial-no-selected');
  const infoHEmpty = document.getElementById('historial-empty');
  const infoHContent = document.getElementById('historial-content');

  function compileHistorialCliente(clientId) {
    if (!clientId) {
      infoHNoSelected.classList.remove('hidden');
      infoHEmpty.classList.add('hidden');
      infoHContent.classList.add('hidden');
      return;
    }

    infoHNoSelected.classList.add('hidden');

    const clientOrders = state.pedidos.filter(order => order.clienteId === clientId);

    if (clientOrders.length === 0) {
      infoHEmpty.classList.remove('hidden');
      infoHContent.classList.add('hidden');
    } else {
      infoHEmpty.classList.add('hidden');
      infoHContent.classList.remove('hidden');

      infoHContent.innerHTML = '';
      clientOrders.forEach(order => {
        let itemsHtml = '';
        order.items.forEach(it => {
          itemsHtml += `
            <div class="flex justify-between pl-4 border-l-2 border-amber-800/20 font-mono text-[11px] py-0.5">
              <span>${it.cantidad}x ${it.nombre} (${it.tipo || 'Interior'})</span>
              <span class="font-bold text-stone-800">${formatCOP(it.total)}</span>
            </div>
          `;
        });

        infoHContent.innerHTML += `
          <div class="border rounded-2xl p-4 bg-stone-50/20 hover:border-amber-200 transition">
            <div class="flex flex-wrap items-center justify-between border-b pb-2 mb-3 gap-2">
              <div class="font-mono text-xs">
                <span class="font-bold text-amber-950 text-sm">Cód Factura: ${order.id}</span>
                <span class="text-stone-400 block mt-0.5">Operación: ${order.fecha} • Envíos: ${order.ciudad}</span>
              </div>
              <div class="text-right font-mono">
                <span class="text-stone-400 text-[10px] block font-light">Pago: ${order.formaPago}</span>
                <span class="font-serif font-black text-stone-900 text-sm">${formatCOP(order.valorTotal)}</span>
              </div>
            </div>

            <div class="space-y-1.5 text-xs">
              <p class="font-sans font-bold text-stone-400 mb-2">Desglose de Compra:</p>
              ${itemsHtml}
            </div>
          </div>
        `;
      });
    }
  }

  // TRIGGER FIRST BOOT RENDER
  switchTab('muebles');
  }
});
