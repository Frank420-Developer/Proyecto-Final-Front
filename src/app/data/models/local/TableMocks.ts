import { WorkTeamListResponse } from '../response/workTeam/WorkTeamResponse';

export const WORK_TEAM: WorkTeamListResponse[] = [
    {
        area: 'Producción',
        leader: 'brandon@naat.com',
        collaborators: '10',
        activities: '10'
    }, {
        area: 'Diseño',
        leader: 'felipe@naat.com',
        collaborators: '10',
        activities: '10'
    }, {
        area: 'UX/UI',
        leader: 'francisco@naat.com',
        collaborators: '10',
        activities: '10'
    }, {
        area: 'Testing',
        leader: 'fernando@naat.com',
        collaborators: '10',
        activities: '10'
    }, {
        area: 'Ventas',
        leader: 'jonathan@naat.com',
        collaborators: '10',
        activities: '10'
    }, {
        area: 'Recursos Humanos',
        leader: 'mariet@naat.com',
        collaborators: '10',
        activities: '10'
    }, {
        area: 'Finanzas',
        leader: 'oscar@naat.com',
        collaborators: '10',
        activities: '10'
    }, {
        area: 'Marketing',
        leader: 'uriel@naat.com',
        collaborators: '10',
        activities: '10'
    }, {
        area: 'Desarrollo',
        leader: 'victor@naat.com',
        collaborators: '10',
        activities: '10'
    }
];

export const NOTIFICATION_TO_SEND = [
    {
        title: '¡Registra tus horas!',
        description: 'Ya casi acaba el día, no olvides registrar tus horas.',
        programmed: '2021-11-14T12:32:21.66',
        concurrent: 'Diario'
    },
    {
        title: 'Actividades semanales',
        description: 'Tenemos una nueva agenda para esta semana, conócela.',
        programmed: '2021-11-05T04:27:15.827',
        concurrent: 'Semanal'
    },
    {
        title: 'Sesión Técnica',
        description: '¿Ya te registraste para las sesiones de seguridad?',
        programmed: '2021-10-28T04:55:34.54',
        concurrent: 'Única vez'
    }
];

export const NOTIFICATION_SENT = [
    {
        title: 'Actividades Semanales',
        description: '¿Ya te registraste para las sesiones de seguridad?',
        addedBy: 'cchavarria@gmail.com',
        sent: '2021-10-28T04:27:20.196'
    },
    {
        title: 'Actividades Semanales',
        description: '¿Ya te registraste para las sesiones de seguridad?',
        addedBy: 'vfuentes@gmail.com',
        sent: '2021-10-28T01:36:44.905'
    },
    {
        title: 'Actividades Semanales',
        description: '¿Ya te registraste para las sesiones de seguridad?',
        addedBy: 'lmartinez@gmail.com',
        sent: '2021-10-28T01:33:35.989'
    },
    {
        title: 'Actividades Semanales',
        description: '¿Ya te registraste para las sesiones de seguridad?',
        addedBy: 'dpuga@gmail.com',
        sent: '2021-10-28T00:54:46.145'
    }
];
