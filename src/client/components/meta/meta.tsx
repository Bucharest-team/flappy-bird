import React from 'react';
import Helmet from 'react-helmet';

import { OG } from './consts';

type Props = {
    title: string,
    description?: string
};

export function Meta({ title, description }: Props) {
    return (
        <Helmet>
            <title>{title}</title>

            {description && <meta name="description" content={description} />}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={OG.image} />
            <meta property="og:site_name" content="Яндекс.Практикум" />
            <meta name="title" content={title} />

            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Helmet>
    );
}

Meta.defaultProps = {
    description: null
};
