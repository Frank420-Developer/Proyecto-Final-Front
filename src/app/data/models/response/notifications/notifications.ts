export interface NotificationsToSendModel{
    title: string,
    description: string,
    programmed: string,
    concurrent: string,
}

export interface NotificationsSentModel{
    title: string,
    description: string,
    addedBy: string,
    sent: string,
}