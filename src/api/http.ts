import queryStringify from './queryString';

enum METHOD {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Patch = 'PATCH',
    Delete = 'DELETE',
}

interface RequestHeaders {
    [key: string]: string
}

type Options = {
    method?: string
    data?: any
    timeout?: number
    headers?: RequestHeaders
    retries?: number
};

const DEFAULT_TIMEOUT = 5000;

class HTTPTransport {
    baseUrl: string;

    constructor(path: string) {
        this.baseUrl = path;
    }

    get(url: string, options: Options): Promise<XMLHttpRequest> {
        const { data, timeout } = options;
        return this.request(
            `${url}?${queryStringify(data)}`,
            {
                ...options,
                method: METHOD.Get,
            },
            timeout
        );
    }

    post(url: string, options: Options): Promise<XMLHttpRequest> {
        const { timeout } = options;
        return this.request(
            url,
            {
                ...options,
                method: METHOD.Post,
            },
            timeout
        );
    }

    delete(url: string, options: Options): Promise<XMLHttpRequest> {
        const { timeout } = options;
        return this.request(
            url,
            {
                ...options,
                method: METHOD.Delete,
            },
            timeout
        );
    }

    put(url: string, options: Options): Promise<XMLHttpRequest> {
        const { timeout } = options;
        return this.request(
            url,
            {
                ...options,
                method: METHOD.Put,
            },
            timeout
        );
    }

    request(
        url: string,
        options: Options,
        timeout: number = DEFAULT_TIMEOUT
    ): Promise<XMLHttpRequest> {
        const { method, data, headers } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.open(method || 'GET', `${this.baseUrl}${url}`);
            xhr.timeout = timeout;

            if (headers !== undefined) {
                Object.entries(headers).forEach(([key, value = '']) => {
                    xhr.setRequestHeader(key, value);
                });
            }

            xhr.onload = () => {
                resolve(xhr);
            };

            const handleError = (err: ProgressEvent) => {
                reject(err);
            };

            xhr.onabort = handleError;
            xhr.onerror = handleError;
            xhr.ontimeout = handleError;

            if (method === METHOD.Get || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    }
}

export default HTTPTransport;
