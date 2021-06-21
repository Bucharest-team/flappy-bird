/* eslint-disable  */
const selfSigned = require('openssl-self-signed-certificate');
import https from 'https';

import devHosts from './src/server/hosts.json';
import { findIP } from './src/server/utils/network';
import { makeStartLogsText } from './src/server/utils/make-start-logs-text';

const { server } = require('./build/server');

const { PORT = 443, NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';

const APP_HOSTS = ['localhost'];

if (isDev) {
    const devLocalIP = findIP();
    if (devLocalIP) {
        APP_HOSTS.push(devLocalIP);
    }

    https
        .createServer({ key: selfSigned.key, cert: selfSigned.cert }, server)
        .listen(PORT, '0.0.0.0' as any, () => {
            console.log(
                makeStartLogsText(
                    APP_HOSTS.concat(...devHosts.map(({ host }) => host)),
                    'https',
                    PORT
                )
            );
        });
} else {
    server.listen(PORT, () => {
        console.log(makeStartLogsText(APP_HOSTS, 'http', PORT));
    });
}
