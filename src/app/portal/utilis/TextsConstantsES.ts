export const LOGIN = {
    TITLE: 'Fábrica de talento',
    DESCRIPTION: 'Inicia sesión con tu cuenta NAAT'
};

export const MENU = {
    WELCOME_TITLE: 'Hola,',
    DEFAULT_USER: 'Usuario',
    ITEMS: [
        {
            TITLE: 'Proyectos',
            PATH_PAGE: 'proyectos',
            ICON_ITEM: 'description'
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
        'Cliente', 'Proyecto', 'Horas invertidas', 'Detalle', 'Estatus', 'Acciones'
    ],
    SUBMENU: {
        TITLE_DETAIL: 'Detalle proyecto',
        TITLE_ACTIVITY: 'Actividades',
        CLIENT: 'Cliente',
        PROJECT: 'Proyecto',
        TOTAL_HOURS: 'Horas totales',
        COLLABORATORS: 'Colaboradores'
    }
};

export const WORK_TEAM = {
    TITLE: 'Equipos de trabajo',
    TABLE_HEADERS: [
        'Área', 'Líder', 'Colaboradores', 'Actividades', 'Detalle'
    ]
};

export const ACTIVITIES = {
    TITLE: 'Actividades',
    TABLE_HEADERS: [
        'Colaborador', 'Área', 'Proyecto en el mes', 'Horas en el mes', 'Detalle'
    ]
};

export const NEWS = {
    TITLE: 'Noticias',
    TABLE_HEADERS: [
        'Noticia', 'Título', 'Autor', 'Fecha de publicación', 'Acciones'
    ],
    TABS: {
        ACTIVE: 'Activas',
        DRAFTS: 'Borradores',
        SUSPENDED: 'Suspendidas'
    }
};

export const CLIENTS = {
    TITLE: 'Clientes'
};

export const USERS = {
    TITLE: 'Usuarios'
};

export const NOTIFICATIONS = {
    TITLE: 'Notificaciones'
};

export const DIALOG_PROJECTS = {
    TITLE: 'Agregar proyecto',
    CLIENT: 'Cliente',
    PROJECT_NAME: 'Nombre del proyecto'
};

export const INPUTS = {
    SEARCH: 'Buscar',
    SEARCH_PROJECT: 'proyecto',
    SEARCH_NEWS: 'noticia',
    SEARCH_USERS: 'usuarios'
};

export const BUTTONS = {
    ACTIONS_INACTIVE: 'Suspender',
    ACTIONS_ACTIVE: 'Activar',
    VIEW: 'Ver',
    ADD_PROJECT: '+ Agregar proyecto',
    ADD_CLIENT: '+ Agregar cliente',
    ADD_USER: '+ Agregar usuario',
    ADD_NOTIFICATION: '+ Agregar notificacion',
    ADD: 'Agregar',
    ADD_MORE: 'Agregar otro',
    OK: 'Ok',
};

export const STATUS = {
    ACTIVE: 'Activado',
    INACTIVE: 'Suspendido'
};

export const ERROR_MESSAGE = {
    PROJECTS_LIST_COMPLETE: 'No puedes ingresar otro proyecto, sólo se permite la carga de 5 proyectos nuevos.',
    INPUT_INVALID_FORMAT: 'No se permite el uso de caracteres especiales y números.'
};
