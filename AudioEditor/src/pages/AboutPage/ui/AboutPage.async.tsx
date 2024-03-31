import { lazy } from 'react';

// export const AboutPageAsync = lazy(async () => await import('./AboutPage'));

// export const AboutPageAsync = lazy(async () => {
//     return await new Promise(resolve => {
//         setTimeout(() => { resolve(import('./AboutPage')); }, 300);
//     });
// });

export const AboutPageAsync = lazy(async () => {
    return await Promise.all([
        import('./AboutPage'),
        new Promise((resolve) => setTimeout(resolve, 1000))
    ]).then(([moduleExports]) => moduleExports);
});
