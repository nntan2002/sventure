'use strict';

module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'digital@bcagroup.net',
                    pass: 'qqtlhzdvghazhtyk',
                },
            },
            settings: {
                defaultFrom: 'digital@bcagroup.net',
                defaultReplyTo: 'digital@bcagroup.net',
            },
        },
    },
});