/* MODELS */
import { NotificationsSentModel, NotificationsToSendModel } from "../response/notifications/notifications";
import { ProjectDetailMock } from "../response/projects/projects";
import { WorkTeamListResponse } from "../response/workTeam/workTeam-response";

export const WORK_TEAM: WorkTeamListResponse[] = [
    {
        area: 'Producción',
        leader: 'fvera@na-at.com.mx',
        collaborators: '10',
        activities: '10',
    },
    {
        area: 'Diseño',
        leader: 'fcarillo@na-at.com.mx',
        collaborators: '15',
        activities: '5',
    },
    {
        area: 'UX/UI',
        leader: 'onunez@na-at.com.mx',
        collaborators: '5',
        activities: '5',
    },
    {
        area: 'Testing',
        leader: 'ulugo@na-at.com.mx',
        collaborators: '7',
        activities: '12',
    },
    {
        area: 'Ventas',
        leader: 'frivera@na-at.com.mx',
        collaborators: '13',
        activities: '10',
    },
    {
        area: 'Recursos Humanos',
        leader: 'jpadilla@na-at.com.mx',
        collaborators: '15',
        activities: '13',
    },
    {
        area: 'Finanzas',
        leader: 'mpina@na-at.com.mx',
        collaborators: '12',
        activities: '10',
    },
    {
        area: 'Marketing',
        leader: 'vmorales@na-at.com.mx',
        collaborators: '14',
        activities: '14',
    },
    {
        area: 'Desarrollo',
        leader: 'brojas@na-at.com.mx',
        collaborators: '16',
        activities: '20',
    }
];

export const NOTIFICATION_TO_SEND: NotificationsToSendModel[] = [
    {
        title: '¡Registra tus horas!',
        description:'Ya casi acaba el día no olvides registrar tus horas',
        programmed:'2021-11-14T12:32:21.666',
        concurrent:'Diario',
    },
    {
        title: 'Actividades Semanales',
        description:'Tenemos una nueva agenda para esta semana, conocela.',
        programmed:'2021-11-05T04:27:15.827',
        concurrent:'Semanal',
    },
    {
        title: 'Sesión Técnica',
        description:'¿Ya te registraste para las sesiones de seguridad?',
        programmed:'2021-10-28T04:55:34.542',
        concurrent:'Única vez',
    },
];

export const NOTIFICATIONS_SENT: NotificationsSentModel[] = [
    {
        title:'Actividades Semanales',
        description:'¿Ya te registraste para las sesiones de seguridad?',
        addedBy:'cchavarria@na-at.com.mx',
        sent:'2021-10-28T04:27:20.196'
    },
    {
        title:'Actividades Semanales',
        description:'¿Ya te registraste para las sesiones de seguridad?',
        addedBy:'vfuentes@na-at.com.mx',
        sent:'2021-10-28T01:36:44.905'
    },
    {
        title:'Actividades Semanales',
        description:'¿Ya te registraste para las sesiones de seguridad?',
        addedBy:'dpuga@na-at.com.mx',
        sent:'2021-10-29T01:36:44.905'
    },
    {
        title:'Actividades Semanales',
        description:'¿Ya te registraste para las sesiones de seguridad?',
        addedBy:'lmartinez@na-at.com.mx',
        sent:'2021-11-02T01:36:44.905'
    },
];


export const PROJECT_DETAIL_MOCK: ProjectDetailMock[] = [
    {
        collaborator: 'fvera@na-at.com.mx',
        area: 'Diseño',
        activities: 4,
        lastRegister: '2021-11-14T12:32:21.666',
        hours: 80
    },
    {
        collaborator: 'fcarrillo@na-at.com.mx',
        area: 'UX/UI',
        activities: 2,
        lastRegister: '2021-11-20T12:32:21.666',
        hours: 30
    },
    {
        collaborator: 'frivera@na-at.com.mx',
        area: 'Desarrollo',
        activities: 6,
        lastRegister: '2021-11-24T12:32:21.666',
        hours: 50
    },
    {
        collaborator: 'vmorales@na-at.com.mx',
        area: 'Ventas',
        activities: 8,
        lastRegister: '2021-11-27T12:32:21.666',
        hours: 80
    },
    {
        collaborator: 'onunez@na-at.com.mx',
        area: 'Testing',
        activities: 2,
        lastRegister: '2021-11-30T12:32:21.666',
        hours: 45
    },
    {
        collaborator: 'mpina@na-at.com.mx',
        area: 'Desarrollo',
        activities: 7,
        lastRegister: '2021-12-01T12:32:21.666',
        hours: 30
    },
    {
        collaborator: 'mfabian@na-at.com.mx',
        area: 'Ventas',
        activities: 2,
        lastRegister: '2021-12-04T12:32:21.666',
        hours: 10
    },
    {
        collaborator: 'jpadilla@na-at.com.mx',
        area: 'Diseño',
        activities: 10,
        lastRegister: '2021-12-10T12:32:21.666',
        hours: 50
    },
    {
        collaborator: 'brojas@na-at.com.mx',
        area: 'Testing',
        activities: 2,
        lastRegister: '2021-12-12T12:32:21.666',
        hours: 60
    },
    {
        collaborator: 'ulugo@na-at.com.mx',
        area: 'UX/UI',
        activities: 6,
        lastRegister: '2021-12-14T12:32:21.666',
        hours: 30
    },
]