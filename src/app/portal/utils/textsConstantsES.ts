export const LOGIN = {
    TITLE: 'Firma Autografa Digital',
    DESCRIPTION: 'Inicia sesión con tu cuenta NAAT'
};

export const MENU = {
    WELCOME_TITLE: 'Bienvenid@,',
    DEFAULT_USER: '',
    ICON_EXPAND: 'expand_more',
    ITEMS: [
        {
            TITLE: 'Crear Firma',
            PATH_PAGE: 'crearFirma',
            ICON_ITEM: 'history_edu',
        },
        {
            TITLE: 'Procesos',
            PATH_PAGE: 'procesos',
            ICON_ITEM: 'fact_check'  
        },
        {
            TITLE: 'Permisos',
            PATH_PAGE: 'permisos',
            ICON_ITEM: 'settings'  
        }
    ]
};

export const CREAR_FIRMA = {
    TITLE: 'Crear Firma',
    LABELS: {
        NOMBRE: 'Nombre',
        EMAIL: 'Correo',
        PHONE: 'Telefono' 
    },
    TABLE_HEADERS: [
        'ID', 'REQUISITION_ID','TICKET', 'VER'
    ]
}

export const DETALLE_FIRMA = {
    ID_CLIENT: 'Cliente Id',
    CONTRACT_NAME: 'Nombre del Contrato',
    OWNER_NAME: 'Nombre del propietario',
    SIGNERS_TITLE: 'Firmantes',
    SIGNERS: {
        NAME: 'Nombre',
        MAIL: 'Correo',
        PHONE: 'Teléfono'
    },
    STATUS: 'Status'
}

export const BUTTONS ={
    LOGIN_ACTION: 'Iniciar sesión',
    ACTIONS_INACTIVE: 'Suspender',
    ACTIONS_ACTIVE: 'Activar',
    VIEW: 'Ver',
    ADD_PROJECT: '+ Agregar Proyecto',
    ADD: 'Agregar',
    ADD_CLIENT: 'Agregar cliente',
    ADD_USER: 'Agregar usuario',
    ADD_NOTIFICATION: 'Agregar notificaciones',
    ADD_NOTICE: 'Agregar Noticia',
    ADD_MORE: 'Agregar otro',
    OK: 'OK',
    DELETE_INACTIVE: 'Suspender | Eliminar',
    LOGOUT: 'Cerrar sesión',
    PUBLISH: 'Publicar',
    SAVE_AS_DRAFT: 'Guardar borrador',

};

export const STATUS = {
    ACTIVE: 'Activado',
    INACTIVE: 'Suspendido'
};

export const INPUTS = {
    USER_EMAIL: 'Correo',
    USER_PASSWORD: 'Contraseña',
    SEARCH: 'Buscar',
    PROJECTS: 'proyectos',
    USERS: 'usuarios',
    NEWS: 'noticia',
};



export const ERROR_MESSAGE = {
    // PROJECT_LIST_COMPLETE: 'No se pueden añadir más de 5 proyectos',
    // INPUT_INVALID_FORMAT: 'No se permite el uso de caracteres especiales y/o números',
    // INVALID_FILE_FORMAT: 'Formato de archivo invalido, sólo se permite la carga de imagenes JPG o PNG',
    // BAD_REQUEST: 'Hubo una falla al conectarse al servidor, por favor, vuelve a intentar.',
    // BAD_INSERT: 'Lo sentimos, no se pudo agregar el elemento de forma satisfactoria.',
    // INVALID_SCREEN: 'El formato de pantalla no es válido para la visualización del contenido, prueba en un dispositivo diferente!',
    INVALID_NAME_INPUT: 'El nombre no cumple con la longuitud requerida',
    INVALID_EMAIL_INPUT: 'Debe ingresar un email valido',
    INVALID_PHONE_INPUT: 'El numero no cumple con las caracteristicas solicitadas'
};