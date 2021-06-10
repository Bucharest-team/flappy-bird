/* eslint-disable  */
const selfSigned = require('openssl-self-signed-certificate');
import { Express } from 'express';
import https from 'https';

import devHosts from '../hosts.json';
import { findIP } from './network';
import { makeStartLogsText } from './make-start-logs-text';

interface Options {
    server: Express;
}

const { PORT = 8080, NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';

const APP_HOSTS = ['localhost'];

if (isDev) {
    const devLocalIP = findIP();
    if (devLocalIP) {
        APP_HOSTS.push(devLocalIP);
    }
}

export function startApp({ server }: Options) {
    if (isDev) {
        https
            .createServer({ key: selfSigned.key, cert: selfSigned.cert }, server)
            .listen(PORT, '0.0.0.0' as any, () => {
                console.log(makeStartLogsText(
                    APP_HOSTS.concat(...devHosts.map(({ host }) => host)),
                    'https',
                    PORT
                ));
            });
        return;
    }

    server.listen(PORT, () => {
        console.log(makeStartLogsText(APP_HOSTS, 'http', PORT));
    });
}
