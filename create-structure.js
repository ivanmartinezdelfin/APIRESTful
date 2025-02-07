const fs = require('fs');
const path = require('path');

// Se asume que el script se ejecuta en la raíz del proyecto
const baseDir = process.cwd();

// Definición de la estructura del proyecto:
// Si el valor es una cadena (incluso vacía) se crea un archivo.
// Si el valor es null se crea un directorio vacío.
const structure = {
  // Archivos de configuración y raíz
  'package.json': '',
  'package-lock.json': '',
  'LICENSE': '',
  '.env': '',
  '.env.example': '',
  '.nvmrc': '',
  'nodemon.json': '',
  'README.md': '',
  '.gitignore': '',
  '.eslintrc.js': '',
  '.eslintignore': '',
  '.prettierrc': '',
  '.editorconfig': '',
  'Dockerfile': '',
  'docker-compose.yml': '',
  '.gitlab-ci.yml': '',
  'app.js': '',

  // Scripts para levantar el servidor
  'bin': null,
  'bin/www': '',

  // Archivos estáticos y vistas
  'public': null,
  'views': null,

  // Código fuente
  'src': null,
  // Configuración de la aplicación y base de datos (CI/CD, variables de entorno, etc.)
  'src/config': null,
  'src/config/appConfig.js': '',
  'src/config/database.js': '',

  // Controladores (incluyen lógica de autenticación, productos, órdenes, etc.)
  'src/controllers': null,
  'src/controllers/userController.js': '',
  'src/controllers/productController.js': '',
  'src/controllers/orderController.js': '',

  // Modelos (por ejemplo, para usuarios, productos y órdenes)
  'src/models': null,
  'src/models/userModel.js': '',
  'src/models/productModel.js': '',
  'src/models/orderModel.js': '',

  // Middlewares (autenticación, manejo de errores, caching, etc.)
  'src/middlewares': null,
  'src/middlewares/authMiddlewares.js': '',
  'src/middlewares/errorMiddleware.js': '',

  // Rutas de la API
  'src/routes': null,
  'src/routes/userRoutes.js': '',
  'src/routes/productRoutes.js': '',
  'src/routes/orderRoutes.js': '',

  // Servicios (lógica de negocio)
  'src/services': null,
  'src/services/userServices.js': '',
  'src/services/productServices.js': '',
  'src/services/orderServices.js': '',

  // Utilidades (helpers, loggers, etc.)
  'src/utils': null,
  'src/utils/logger.js': '',
  'src/utils/helpers.js': '',

  // Pruebas (testing)
  'tests': null,
  'tests/example.test.js': '',

  // Documentación (incluye temas de seguridad, contribución, etc.)
  'docs': null,
  'docs/CHANGELOG.md': '',
  'docs/CONTRIBUTING.md': '',
  'docs/CODE_OF_CONDUCT.md': '',
  'docs/SECURITY.md': ''
};

// Función para crear la estructura de directorios y archivos
Object.entries(structure).forEach(([relativePath, content]) => {
  const fullPath = path.join(baseDir, relativePath);

  if (content === null) {
    // Crear directorio
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`Directorio creado: ${fullPath}`);
    } else {
      console.log(`El directorio ya existe: ${fullPath}`);
    }
  } else {
    // Crear archivo (asegurándose de que el directorio padre exista)
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Archivo creado: ${fullPath}`);
    } else {
      console.log(`El archivo ya existe: ${fullPath}`);
    }
  }
});

console.log('Estructura del proyecto creada exitosamente.');