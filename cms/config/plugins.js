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
                    user: 'nntan2002@gmail.com',
                    pass: 'etgzblggduwfftqn',
                },
            },
            settings: {
                defaultFrom: 'nntan2002@gmail.com',
                defaultReplyTo: 'nntan2002@gmail.com',
            },
        },
    },
});