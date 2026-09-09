# Calculadora con TypeScript y GitHub Actions

Taller 1 de Pruebas de Software, partes 1 y 2. Fork del [proyecto base de paolavallejo](https://github.com/paolavallejo/simple-cicd-typescript).

**Sitio publicado:** https://mateoloperaortiz.github.io/simple-cicd-typescript/

## Parte 1

Se habilitaron Actions y GitHub Pages con Source = GitHub Actions. Un cambio en este README activó el pipeline original y permitió comprobar la suma en el sitio publicado.

- Commit inicial verificado: `2db2e9a`.
- [Workflow original aprobado](https://github.com/Mateoloperaortiz/simple-cicd-typescript/actions/runs/34376185574).

## Parte 2

La calculadora permite sumar, restar, multiplicar y dividir números positivos, negativos, cero y decimales. Los campos vacíos muestran un mensaje de validación. Dividir por cero lanza `Error("No se puede dividir por cero")`, que la interfaz muestra sin conservar el resultado anterior.

Las cuatro funciones están en `sum.ts` y se exponen en `window`. Las pruebas de `sum.test.ts` cargan el mismo `sum.js` compilado que usa el navegador. El despliegue sigue copiando únicamente `index.html` y `sum.js` a `site/`.

## Ejecutar las comprobaciones

```sh
npm ci
npm run lint
npm test -- --verbose
npm run build
```

Después de compilar, abrir `index.html` en el navegador. No se deben versionar los archivos JavaScript generados, que están excluidos mediante `.gitignore`.

## Pipeline

Cada push a `main` ejecuta instalación, lint, pruebas, compilación y despliegue a Pages. En los pull requests se ejecuta CI sin publicar el sitio. El paso Test muestra cada caso y su operación mediante la salida detallada de Jest.
