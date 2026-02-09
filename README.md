# reto-bx-frontend
Frontend del desafío técnico **BX**, desarrollado con **React + Vite**.  
La aplicación permite a los usuarios votar (like / dislike) por personajes de distintos universos de forma aleatoria.

---

## 🧩 Descripción
La aplicación muestra un personaje aleatorio perteneciente a una de las siguientes categorías:

- Pokémon
- Rick and Morty
- Superhéroes

El usuario puede seleccionar la categoría, visualizar el personaje y emitir un voto positivo o negativo.  
Luego de votar, se carga automáticamente un nuevo personaje.

El frontend consume una API propia desarrollada en Node.js (backend del reto).

---

## 🚀 Tecnologías utilizadas

- **React**
- **Vite**
- **Sass (SCSS)**
- **Axios**
- **react-icons**
- **react-hot-toast**

---

## 🎨 Características de la interfaz
- Interfaz clara y minimalista
- Card centrada con imagen y nombre del personaje
- Selector de categoría
- Botones de voto con microinteracciones
- Skeleton loader para evitar saltos visuales
- Notificaciones tipo *toast* para feedback al usuario
- Diseño responsive (desktop y mobile)
- Manejo de imágenes fallback (especialmente para superhéroes)

---

## 🔌 Conexión con el backend
El frontend consume los siguientes endpoints principales:

- Obtener personaje aleatorio por categoría
- Registrar voto (like / dislike)

La URL del backend se configura mediante variables de entorno.

---
## Configuración de Variables de Ambiente
1.- Crear archivo `.env`  
2.- Copiar el contenido de `.env.example` y pegarlo en el archivo `.env`

## IMPORTANTE
Asegúrate de que el backend esté corriendo antes de iniciar el frontend.

▶️ Instalación y ejecución
1.- Instalar dependencias:
npm install

2.- Ejecutar el proyecto en modo desarrollo:
npm run dev

3.- Abrir en el navegador:
http://localhost:5173

### Responsive
La aplicación está optimizada para pantallas móviles, manteniendo una experiencia consistente y cómoda para el usuario.

### Autor
Desarrollado por Roberto Marihuán Crisóstomo
Desafío técnico BX