✨Repositorio con el proyecto de Cypress hecho en clase✨

✨** **El proyecto original está elaborado en una versión muy antigua de cypress (cypress@9.5.1) por lo que la finalidad de este Proyecto es aportar una versión mucho más actualizada (cypress@13.6.3) con el fin de solucionar problemas de instalación o ejecución de pruebas y así evitar los famosos “breaking changes” entre versiones. 
Este proyecto cuenta con los fundamentos explicados por el docente, pero aplicados a la última versión del momento.** **✨

☝️Al momento de clonar el repositorio recuerde instalar los node modules:
```node
npm install
```
☝️ Para ejecutar el proyecto puede usar:
```node
 npm run test:ui
```
☝️El proyecto cuenta con todas las clases vistas, separadas por temas y casos. Lo que permite mejor lectura del Código y organización de archivos.

☝️El archivo “jsconfig.json” contiene una instrucción para VSCode con el fin que adopte la sintaxis de Cypress, por lo que permite autocompletar y realizar sugerencias.
```javascript
// Allow VsCode to recognize Cypress syntax
{
  "include": ["./node_modules/cypress", "cypress/**/*.js"]
}
```
☝️ La página de demoQA contiene mucho spam de anuncios por que le las pruebas en algunas ocasiones se demoran en cargar y fallan, para mitigar este problema la mayoría de las pruebas contiene un hook de este estilo:
```javascript
  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
  });
```
☝️Debido a que la clase de Dropdowns contiene una url de una página que ya no existe, fue remplazada por otra página que permite practicar y realizar el ejercicio visto en clase.

✨_ _En caso de que falten temas o recursos importantes, no dude en contactarse conmigo para su posterior actualización._ _✨
