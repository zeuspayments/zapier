module.exports = {
    type: 'custom',
    connectionLabel: '{{server_url}}',
    test: {
        url: '{{bundle.authData.server_url}}/api/v1/server/info',
        method: 'GET',
        params: {
        },
        headers: {
            Authorization: 'token {{bundle.authData.api_key}}'
        },
        body: {},
        removeMissingValuesFrom: {},
        // TODO validate the API key. Does it have all the Store ID permissions? Nothing more? Nothing less?
    },
    fields: [
        {
            computed: false,
            key: 'server_url',
            required: true,
            label: 'ZEUSPay Server URL',
            type: 'string',
            helpText: 'Enter your ZEUSPay Server URL.',
            default: 'https://app.zeuspay.com',
        },
        {
            computed: false,
            key: 'api_key',
            required: true,
            label: 'API Key',
            type: 'string',
            helpText: 'You can create an API key by going to **My Account > API Keys** in ZEUSPay. \n' +
                '[Learn more about selecting the right permissions.](https://github.com/zeuspayments/zapier#which-permissions-should-i-choose-for-my-api-key)',

        }
    ],
    customConfig: {},
};
