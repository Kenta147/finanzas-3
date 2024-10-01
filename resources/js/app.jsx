import React from 'react';
import { createRoot } from 'react-dom/client';
import { App as InertiaApp } from '@inertiajs/inertia-react';
import { createInertiaApp } from '@inertiajs/inertia-react';

createInertiaApp({
    resolve: name => import(`./Pages/${name}`),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
