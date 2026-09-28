# Mi Portafolio Profesional

## 🚀 Descripción
Portafolio profesional minimalista y moderno construido con Astro + Tailwind CSS.

## 📋 Estructura del Proyecto

```
src/
├── components/      # Componentes reutilizables
│   ├── Layout.astro
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Projects.astro
│   ├── Skills.astro
│   ├── Experience.astro
│   └── Footer.astro
├── pages/           # Páginas del sitio
│   └── index.astro  # Página principal
├── styles/          # Estilos globales
│   └── global.css
└── data/            # Datos personalizables
    └── profile.ts   # ¡Edita este archivo con tus datos!
```

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📝 Personalización

1. **Datos personales**: Edita `src/data/profile.ts` con tu información
2. **Colores y estilos**: Modifica `tailwind.config.js`
3. **Componentes**: Ajusta cada componente en `src/components/`
4. **Secciones**: Agrega o quita secciones en `src/pages/index.astro`

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Framework preset: Astro
3. Deploy automático

### Render
1. Crea un nuevo Static Site
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📄 Licencia
MIT
