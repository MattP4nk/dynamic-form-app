# Dynamic Form App

**Dynamic Form App** es una aplicacion web que genera formularios dinámicamente a partir de un archivo JSON. Permite a los usuarios completar y enviar formularios, y guarda las respuestas para su posterior uso.

---

## Tecnologías Utilizadas

- **TypeScript** – Lenguaje tipado para un código escalable y mantenible  
- **Vue 3** – Framework progresivo para interfaces web  
- **Vuetify** – Librería de componentes con diseño Material Design  
- **Axios** – Cliente HTTP para enviar y recibir datos  
- **Pinia** – Manejo de estado moderno para Vue

---

## Funcionalidades

- **Generación Dinámica de Formularios** – Construye cualquier formulario a partir de un JSON
- **Guardado de Formularios Completados** – Guarda las respuestas de los formularios y encuestas
- **Soporte para JSON Personalizado** – Puedes cargar tu propio JSON para crear formularios únicos.

---

##  Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/MattP4nk/dynamic-form-app.git
cd dynamic-form-app
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

---

## Uso

Después de iniciar la aplicacion:

- Se mostrara un formulario de ejemplo por defecto.
- Puedes escribir tu propio JSON para generar un form personalizado.
- Los datos ingresados se guardarán al enviar el formulario (ya sea localmente o en un servidor, según la configuración).

### Ejemplo de JSON

```json
{
    "formTitle": "Registro de Usuario",
    "fields": [
        {
            "name": "nombre",
            "label": "Nombre y Apellido",
            "type": "text",
            "default": "",
            "maxLength": 50,
            "required": true,
            "validations": [
                {
                    "type": "required",
                    "message": "El nombre es obligatorio."
                },
                {
                    "type": "minLength",
                    "value": 3,
                    "message": "El nombre debe tener al menos 3 caracteres."
                },
                {
                    "type": "regex",
                    "pattern": "^[a-zA-ZáéíóúÁÉÍÓÚ\\s]+$",
                    "message": "El nombre solo puede contener letras y espacios."
                },
                {
                    "type": "complex",
                    "rules": [
                        {
                            "noNumbers": true
                        }
                    ],
                    "message": "El nombre no debe contener números."
                }
            ]
        },
        {
            "name": "mail",
            "label": "Mail",
            "type": "email",
            "default": "",
            "maxLength": 30,
            "required": true,
            "validations": [
                {
                    "type": "required",
                    "message": "El mail es obligatorio."
                },
                {
                    "type": "regex",
                    "pattern": "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
                    "message": "El formato del mail es inválido."
                }
            ]
        },
        {
            "name": "birthday",
            "label": "Date of Birth",
            "type": "date",
            "default": "",
            "maxLength": 30,
            "required": true,
            "validations": [
                {
                    "type": "required",
                    "message": "La fecha de nacimiento es obligatoria."
                }
            ]
        },
        {
            "name": "telefono",
            "label": "Teléfono",
            "type": "number",
            "default": "",
            "required": true,
            "validations": [
                {
                    "type": "required",
                    "message": "El teléfono es obligatorio."
                },
                {
                    "type": "minLength",
                    "value": 7,
                    "message": "El teléfono debe tener al menos 7 dígitos."
                }
            ]
        },
        {
            "name": "vivienda",
            "label": "Vivienda",
            "type": "selectable",
            "default": "",
            "required": true,
            "options": [
                "Casa",
                "Departamento"
            ],
            "validations": [
                {
                    "type": "required",
                    "message": "La selección de vivienda es obligatoria."
                }
            ]
        },
        {
            "name": "ToS",
            "label": "I accept the terms of service",
            "type": "checkbox",
            "validations": [
                {
                    "type": "accepted",
                    "message": "Aceptar es obligatorio."
                }
            ]
        }
    ]
}
```

Puedes pegar tu JSON personalizado en la interfaz y el formulario se generará automáticamente.