/* MODELS */
import { NotificationsSentModel, NotificationsToSendModel } from "../response/notifications/notifications";

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
