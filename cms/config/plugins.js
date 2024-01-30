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
                    
                },
            },
            settings: {
                defaultFrom: 'digital@bcagroup.net',
                defaultReplyTo: 'digital@bcagroup.net',
            },
        },
    },

    'preview-button': {
        enabled: true,
        config: {
            contentTypes: [
                {
                    uid: 'api::post.post',
                    draft: {
                        url: 'https://sventure.vn/preview-tin-tuc',
                        type: 'post',
                        query: {
                            slug: '{Slug}',
                        },
                    },
                    published: {
                        url: 'https://sventure.vn/tin-tuc/{Slug}',
                    },
                },

            ],
        },
    },
});
