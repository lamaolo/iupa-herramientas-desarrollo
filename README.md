LEEME!
======

El archivo README
------------------

El archivo `README.md` suele estar en la carpeta raíz de todo proyecto y contiene documentación acerca del proyecto en sí. Esto puede incluir guias de instalación y puesta en marcha del mismo, o pasos previos como instalación de otras herramientas y cualquier otra documentación general que sea relevante.

El tipo de un archivo `README.md` se denomina **markdown** (cualquier archivo con terminación o extensión `.md`).

El formato de un archivo **markdown** es conveniente para todo tipo de documentación porque **es un formato de texto simple**, es más o menos amigable a los ojos humanos y se puede leer usando cualquier herramienta de texto básica.

Al mismo tiempo, se pueden usar ciertos caracteres especiales para añadir formato al texto (**negrita**, *cursiva*, ~~tachado~~ y mucho más) para aquellas herramientas de texto que _sepan_ leer el formato `markdown`.

También soporta la inclusión de imágenes o links de internet. Por ejemplo aquí está el link de wikipedia acerca del formato [Markdown](https://es.wikipedia.org/wiki/Markdown).

> VSCODE tiene incluido un _visualizador_ de archivos markdown! Y soporta emojis! 🤓🤓🤓. Puede abrirse utilizando la combinación de teclas: `Control + Shift + V`. También se puede abrir haciendo click con el botón secundario sobre el tab (o pestaña) del archivo en la barra superior.


Un Proyecto VSCODE
------------------

Un proyecto en vscode es básicamente cualquier carpeta en nuestra PC que contenga en su raíz otra carpeta llamada `.vscode`. Esta carpeta `.vscode` debe contener a su vez un archivo llamado `settings.json`. Este archivo debe estar en formato [JSON](https://es.wikipedia.org/wiki/JSON). En este archivo iremos sumando nuestras preferencias de usuario y otros items de configuración con los que podemos "personalizar" el comportamiento de vscode para el proyecto.


El proyecto más simple puede crearse entonces creando la carpeta `.vscode` que contenga un archivo `settings.json` que al menos contenga el siguiente contenido:

```json
{}
```

El formato JSON
---------------
El formato [JSON](https://es.wikipedia.org/wiki/JSON) es un archivo de texto que tiene una estructura. Esta estructura se le es dada usando algunos caracteres especiales (caracteres que tienen un significado particular en el formato JSON). El contenido de un archivo JSON generalmente inicia con el caracter `{` o bien con `[`. Estos son caracteres de _apertura_, lo que significa que al final de cual sea el dato que pongamos después de estos, tiene que existir un caracter de cierre, que para este caso serán `}` y `]` respectivamente. Los datos encerrados entre `{}` se denominan objetos, mientras que los encerrados entre `[]` se denominan listas.

Ejemplo de una **lista** en formato JSON"
```json
["peras", "manzanas", "naranjas"]
```

Ejemplo de un **objeto** en formato JSON"
```json
{
    "spanish": "Hola mundo",
    "english": "Hello World",
    "frutas": ["peras", "manzanas", "naranjas"],
    "cantidad": 3
}
```

> El formato JSON es ampliamente utilizado en el mundo del desarrollo web. Es usado para configurar herramientas, para enviar datos a traves de internet o para el almacenamiento de datos en general. También es usado ampliamente por el lenguaje de programación [javascript](https://es.wikipedia.org/wiki/JavaScript).

## Referencias y Links

- [Formato JSON (wikipedia)](https://es.wikipedia.org/wiki/JSON)
- [Formato Markdown (wikipedia)](https://es.wikipedia.org/wiki/Markdown)
- [Atajos de teclado para VSCODE (PDF)](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [Lenguaje Javascript (wikipedia)](https://es.wikipedia.org/wiki/JavaScript).