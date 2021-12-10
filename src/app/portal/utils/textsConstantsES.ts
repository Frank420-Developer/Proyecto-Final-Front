export const LOGIN = {
    TITLE: 'Fábrica de Talento',
    DESCRIPTION: 'Inicia sesión con tu cuenta NAAT'
};

export const MENU = {
    WELCOME_TITLE: 'Hola,',
    DEFAULT_USER: 'Andrea Reyes',
    ICON_EXPAND: 'expand_more',
    ITEMS: [
        {
            TITLE: 'Proyectos',
            PATH_PAGE: 'proyectos',
            ICON_ITEM: 'description',
        },
        {
            TITLE: 'Equipos de trabajo',
            PATH_PAGE: 'equipos',
            ICON_ITEM: 'groups'  
        },
        {
            TITLE: 'Actividades',
            PATH_PAGE: 'actividades',
            ICON_ITEM: 'list'  
        },
        {
            TITLE: 'Noticias',
            PATH_PAGE: 'noticias',
            ICON_ITEM: 'newspaper'  
        },
        {
            TITLE: 'Clientes',
            PATH_PAGE: 'clientes',
            ICON_ITEM: 'crop_free'  
        },
        {
            TITLE: 'Usuarios',
            PATH_PAGE: 'usuarios',
            ICON_ITEM: 'account_circle'  
        },
        {
            TITLE: 'Notificaciones',
            PATH_PAGE: 'notificaciones',
            ICON_ITEM: 'sms'  
        }
    ]
};

export const PROJECTS = {
    TITLE: 'Proyectos',
    TABLE_HEADERS: [
        'Cliente','Proyecto',/*'Horas Invertidas',*/'Detalle','Estatus','Acciones'
    ],
    SUBMENU: {
        TITLE_DETAIL: 'Detalle proyecto',
        TITLE_ACTIVITY: 'Actividades',
        CLIENT: 'Cliente',
        PROJECT: 'Proyecto',
        HOURS: 'Horas totales',
        COLLABORATORS: 'Colaboradores',
        PREVIOUS_PAGE: '../../../proyectosPrincipal',
        ROUTE_DETAIL: '../detalleProyecto',
    }
    
};

export const PROJECT_DETAIL = {
    TABLE_HEADERS: [
        'Colaborador','Área','Actividades','Último registro','Horas','Ver'
    ]
}

export const WORK_TEAM = {
    TITLE: 'Equipos de Trabajo',
    TABLE_HEADERS: [
        'Área','Líder','Colaboradores','Actividades','Detalle'
    ],
}

export const ACTIVITIES = {
    TITLE: 'Actividades',
    TABLE_HEADERS: [
        'Colaborador','Área','Proyecto en el mes','Horas en el mes','Detalle'
    ],
}

export const NEWS = {
    TITLE: 'Noticias',
    TABLE_HEADERS: [
        'Noticia','Titulo','Autor','Fecha de publicacion','Acciones'
    ],
    TABS: {
        ACTIVES: 'Activas',
        DRAFTS: 'Borradores',
        SUSPENDS: 'Suspendidas'
    }
}

export const CLIENTES = {
    TITLE: 'Clientes',
    TABLE_HEADERS: [
        'Cliente','Fecha de registro','Agregado por','Proyectos','Detalle'
    ],
}

export const USERS = {
    TITLE: 'Usuarios',
    TABLE_HEADERS: [
        'Nombre','Correo','Agregado','Permisos','Status','Acciones'
    ],
}

export const NOTIFICATIONS = {
    TITLE: 'Notificaciones',
    TITLE_TABLE_ONE: 'POR ENVIAR',
    TABLE_HEADERS: [
        'Titulo','Descripción','Programado','Concurrente','Detalles ','Acciones'
    ],
    TITLE_TABLE_TWO: 'ENVIADOS',
    TABLE_HEADERS_TWO: [
        'Titulo','Descripción','Agregado por', 'Enviado','Acciones'
    ],
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

export const DIALOG_ADD_PROJECT = {
    TITLE: 'Agregar proyecto',
    CLIENT: 'Cliente',
    PROJECT_NAME: 'Nombre del proyecto'
};

export const DIALOG_ADD_WORKTEAMS = {
    TITLE: 'Agregar equipo de trabajo',
    SECOND_TITLE_COLLABORATORS: 'Colaboradores',
    AREA: 'Área',
    EMAIL_LEADER: 'Correo electrónico del líder',
    ADD_COLLABORATORS: 'Agrega los colaboradores',
    ADD_ACTIVITIES: 'Agrega las actividades',
    COLLABORATORS_ADDED: 'Colaboradores agregados',
    ACTIVITIES_ADDED: 'Actividades agregadas'
}

export const DIALOG_ADD_CLIENT = {
    TITLE: 'Agregar cliente',
    CLIENT_NAME: 'Cliente',
    
}

export const DIALOG_ADD_NOTIFICATION = {
    TITLE: 'Agregar notificacion',
    HEADLINE: 'Título (16 caracteres máximo)',
    DESCRIPTION: 'Descripción (27 caracteres máximo)',
    TYPE: 'Tipo',
    DATE: 'Fecha',
    HOUR: 'Hora',
    
}

export const DIALOG_ADD_NEW = {
    TITLE: 'Agregar noticia',
    HEADLINE: 'Título',
    DESCRIPTION: 'Descripción',
    IMG_THUMB_TITLE: 'Thumb',
    IMG_PRINCIPAL_TITLE: 'Imagen principal',
    IMG_DESCRIPTION_UPLOAD: 'Sube ',
    IMG_UPLOAD: 'o arrastra la imagen formato .PNG .JPG',
    IMG_SIZE_SM: '166px de ancho máximo',
    IMG_SIZE_L:'656px de ancho máximo'
    
}

export const ERROR_MESSAGE = {
    PROJECT_LIST_COMPLETE: 'No se pueden añadir más de 5 proyectos',
    INPUT_INVALID_FORMAT: 'No se permite el uso de caracteres especiales y/o números',
    INVALID_FILE_FORMAT: 'Formato de archivo invalido, sólo se permite la carga de imagenes JPG o PNG',
    BAD_REQUEST: 'Hubo una falla al conectarse al servidor, por favor, vuelve a intentar.',
    BAD_INSERT: 'Lo sentimos, no se pudo agregar el elemento de forma satisfactoria.',
    INVALID_SCREEN: 'El formato de pantalla no es válido para la visualización del contenido, prueba en un dispositivo diferente!',
};