# NCQ TODO List Web

## Tecnologias

- [Angular version 17.0.0.]("https://angular.dev/overview")
- [flowbite version 2.1.1.]("https://flowbite.com/docs/getting-started/introduction/)
- [tailwindcss 3.3.5.]("https://tailwindcss.com/docs/installation")

## Requerimientos

- [NodeJS version 18.16.0+]("https://nodejs.org/en/")
- NPM version 9.5.1
- [Angular CLI version 17.0.0]("https://angular.io/cli")

## Configuracion

Solo requiere definir la url de el API en el archivo `environment` en el directorio `/src/environments`

```typescript
export const environment = {
  apiUrl: "https://localhost:7291/api/v1",
};
```

## Development server

Ejecuta el comando `ng serve` en el proyecto raiz. Navegar a la siguente url `http://localhost:4200/`.
