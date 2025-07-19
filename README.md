# EXT ALLOY EDITOR OVERRIDE: Corrector para Alloy Editor en Liferay

![Logo del Proyecto](logo/logo.svg)

[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Una extensión de navegador para corregir errores en la funcionalidad de tablas del editor Alloy en Liferay 7.2.1, mediante la sobreescritura de archivos JavaScript específicos.

---

## Tabla de Contenidos

- [Acerca del Proyecto](#acerca-del-proyecto)
  - [Construido Con](#construido-con)
- [Empezando](#empezando)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación](#instalación)
- [Uso](#uso)
- [Cómo Funciona](#cómo-funciona)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Acerca del Proyecto

Esta extensión fue creada para solucionar un problema específico con las tablas en el editor de texto **Alloy Editor** utilizado en **Liferay 7.2.1**. El problema se origina en el archivo `alloy-editor-no-ckeditor-min.js`, y esta herramienta lo soluciona de forma no invasiva.

En lugar de modificar los archivos del portal de Liferay directamente, la extensión intercepta la solicitud de red de este archivo y la reemplaza con una versión corregida (`override.js`) que se encuentra dentro de la extensión.

### Construido Con

Este es un proyecto minimalista que utiliza tecnologías web estándar:

*   JavaScript (Vanilla)
*   HTML5
*   CSS3

---

## Empezando

Para poner en marcha una copia local, sigue estos sencillos pasos.

### Prerrequisitos

Necesitas un navegador basado en Chromium que soporte extensiones de Manifest V3.
*   Google Chrome
*   Microsoft Edge

### Instalación

Como es una extensión en desarrollo, se instala de la siguiente manera:

1.  Clona el repositorio:
    ```sh
    git clone https://github.com/gaston38kpo/ext-alloy-editor-override.git
    ```
2.  Abre tu navegador y ve a la página de extensiones:
    *   En Chrome: `chrome://extensions`
    *   En Edge: `edge://extensions`
3.  Activa el **Modo de desarrollador** (generalmente es un interruptor en la esquina superior derecha).
4.  Haz clic en el botón **"Cargar descomprimida"**.
5.  Selecciona la carpeta del proyecto que acabas de clonar.

¡Listo! La extensión ya estará instalada y activa en tu navegador.

---

## Uso

Una vez instalada, la extensión funcionará automáticamente.

1.  Navega a una página de tu portal Liferay 7.2.1 que utilice el Alloy Editor.
2.  Por defecto, la sobreescritura está **activada** y el error de las tablas debería estar corregido.
3.  Para controlar la extensión, haz clic en su icono en la barra de herramientas del navegador. Se abrirá un popup.
    *   **Interruptor (Enable/Disable):** Te permite activar o desactivar la sobreescritura del archivo. Si lo desactivas, Liferay cargará su archivo original.
    *   **Botón "Refresh Page":** Recarga la pestaña actual para aplicar los cambios del interruptor.

!Popup de la extensión

---

## Cómo Funciona

La extensión utiliza la API `declarativeNetRequest` de Chrome para lograr su objetivo de una manera eficiente y segura, sin necesidad de permisos para leer el contenido de las páginas.

1.  **Service Worker (`service-worker.js`):** Al instalarse o al iniciar el navegador, el service worker comprueba si la extensión debe estar activada (según lo guardado en `chrome.storage.local`).
2.  **Regla de Redirección:**
    *   Si está **activada**, instala una regla con `ID: 1`.
    *   Esta regla intercepta cualquier petición de red cuyo `urlFilter` coincida con `*/alloy-editor-no-ckeditor-min.js*`.
    *   La acción de la regla es de tipo `redirect`, y redirige la petición al archivo local `/override.js` de la extensión.
    *   Si está **desactivada**, la regla con `ID: 1` se elimina, permitiendo que la petición original continúe sin cambios.
3.  **Popup (`popup/`):** La interfaz del popup permite al usuario modificar el estado (activado/desactivado) guardado en `chrome.storage.local` y, en consecuencia, actualizar la regla de redirección.

---

## Licencia

Distribuido bajo la Licencia MIT. Consulta `LICENSE` para obtener más información.

---

## Contacto

Gastón Giacobini

Enlace del Proyecto: https://github.com/gaston38kpo/ext-alloy-editor-override
