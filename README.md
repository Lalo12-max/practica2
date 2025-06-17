# Deploy from a branch

## ¿Qué es esto?
Esta página sirve para **Deploy from a branch** en GitHub Pages.

## ¿Cómo funciona?
- ✅ Archivos HTML, CSS, JS directos
- ✅ Sin build process
- ✅ GitHub Pages los sirve tal como están
- ✅ Deploy inmediato

## Estructura del proyecto
sitio-simple/
├── index.html    ← Página principal
├── style.css     ← Estilos
├── script.js     ← Funcionalidad
└── README.md     ← Este archivo




## Comparación con React

| Aspecto | Sitio Simple | Proyecto React |
|---------|-------------|----------------|
| **Archivos** | HTML, CSS, JS directo | JSX, componentes |
| **Deploy** | Deploy from branch | GitHub Actions |
| **Build** | No necesario | npm run build |
| **Carga** | Instantánea | Requiere procesamiento |
| **Complejidad** | Baja | Media-Alta |


## Cómo usar
1. Sube estos archivos a GitHub
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch"
4. Elige rama main
5. ¡Listo!

## Ventajas
- ⚡ **Rápido**: Sin tiempo de build
- 🔧 **Simple**: Sin configuración
- 📝 **Directo**: Lo que subes es lo que se ve



## Cuándo usar cada método

### Usa "Deploy from Branch" cuando:
- Tienes un sitio simple
- Usas HTML, CSS, JS directo
- No necesitas frameworks
- Quieres simplicidad máxima

### Usa "GitHub Actions" cuando:
- Usas React, Vue, Angular, etc.
- Necesitas compilar/transpilar código
- Usas herramientas de build
- Tienes un proyecto complejo

---
*Ejemplo creado para demostrar la diferencia entre métodos de deploy en GitHub Pages*

git init
git add .
git commit -m "Configurar GitHub Pages con flujo de trabajo CI/CD"
git remote add origin https://github.com/Lalo12-max/practica.git
git branch -M main
git push -u origin main