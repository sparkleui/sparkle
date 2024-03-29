import { fileURLToPath, URL } from 'node:url';
import { defineConfig, type DefaultTheme, type PageData } from 'vitepress';
import pkg from '../../package.json';
import { capitalize, kebabToText } from './theme/composables/utils';
import { iconAnimations, icons } from './theme/composables/icons';

export default defineConfig({
    title: 'Sparkle UI',
    description: pkg.description,
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/sparkle/favicon.svg' }]],
    base: '/sparkle/',
    cleanUrls: true,
    appearance: false,
    themeConfig: {
        logo: '/favicon.svg',
        nav: nav(),
        sidebar: {
            '/docs/': { base: '/docs/', items: docsSidebar() },
            '/icons/': { base: '/icons/', items: iconsSidebar() },
        },
        outline: [2, 3],
        socialLinks: [{ icon: 'github', link: `https://github.com/sparkleui/sparkle` }],
        footer: {
            message: 'Released under the MIT License.',
            copyright: `Copyright © ${new Date().getFullYear()} ${pkg.author}`,
        },
        editLink: {
            pattern: `https://github.com/sparkleui/sparkle/edit/main/docs/:path`,
        },
        search: {
            provider: 'local',
        },
    },
    transformPageData: (pageData) => transformPageData(pageData),
    vite: {
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: fileURLToPath(new URL('./theme/', import.meta.url)),
                },
                {
                    find: /^.*\/vp-doc\.css$/,
                    replacement: fileURLToPath(new URL('./theme/styles/components/vp-doc.scss', import.meta.url)),
                },
                {
                    find: /^.*\/base\.css$/,
                    replacement: fileURLToPath(new URL('./theme/styles/base.scss', import.meta.url)),
                },
            ],
        },
        css: {
            devSourcemap: true,
        },
    },
});

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Docs', link: '/docs/introduction/getting-started', activeMatch: '/docs/' },
        { text: 'Icons', link: '/icons/introduction/what-is-sparkle-icons', activeMatch: '/icons/' },
    ];
}

function docsSidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            items: [
                { text: 'Getting started', link: 'introduction/getting-started' },
                { text: 'Advanced usage', link: 'introduction/advanced-usage' },
                { text: 'Contents', link: 'introduction/contents' },
            ],
        },
        {
            text: 'Customize',
            items: [
                { text: 'Sass', link: 'customize/sass' },
                { text: 'Options', link: 'customize/options' },
                { text: 'Colors', link: 'customize/colors' },
            ],
        },
        {
            text: 'Layout',
            items: [
                { text: 'Breakpoints', link: 'layout/breakpoints' },
                { text: 'Page wrapper', link: 'layout/page-wrapper' },
                { text: 'Containers', link: 'layout/containers' },
                { text: 'Grid', link: 'layout/grid' },
                { text: 'Header', link: 'layout/header' },
                { text: 'Footer', link: 'layout/footer' },
            ],
        },
        {
            text: 'Elements',
            items: [
                { text: 'Reset', link: 'elements/reset' },
                { text: 'Document', link: 'elements/document' },
                { text: 'Typography', link: 'elements/typography' },
                { text: 'Images', link: 'elements/images' },
                { text: 'Tables', link: 'elements/tables' },
                { text: 'Buttons', link: 'elements/buttons' },
                { text: 'Forms', link: 'elements/forms' },
            ],
        },
        {
            text: 'Components',
            items: [
                { text: 'Pagination', link: 'components/pagination' },
                { text: 'Breadcrumb', link: 'components/breadcrumb' },
                { text: 'Card', link: 'components/card' },
                { text: 'Cover', link: 'components/cover' },
                { text: 'Parallax', link: 'components/parallax' },
                { text: 'Slider', link: 'components/slider' },
            ],
        },
        {
            text: 'Utilities',
            items: [
                { text: 'Overview', link: 'utilities/overview' },
                { text: 'Text colors', link: 'utilities/text-colors' },
                { text: 'Background colors', link: 'utilities/background-colors' },
                { text: 'Text alignment', link: 'utilities/text-alignment' },
                { text: 'Spacing', link: 'utilities/spacing' },
            ],
        },
    ];
}

function iconsSidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            items: [
                { text: 'What is Sparkle Icons?', link: 'introduction/what-is-sparkle-icons' },
                { text: 'Getting started', link: 'introduction/getting-started' },
                { text: 'Advanced usage', link: 'introduction/advanced-usage' },
            ],
        },
        {
            text: 'Demo',
            items: [
                { text: 'Icons', link: 'demo/icons/' },
                { text: 'Animations', link: 'demo/animations/' },
            ],
        },
    ];
}

function transformPageData(pageData: PageData) {
    if (pageData.params?.icon) {
        const { icon } = pageData.params;
        pageData.title = kebabToText(capitalize(icon));

        const currentIconIndex = icons.findIndex(({ name }) => name === icon);

        pageData.frontmatter = {
            prev: {
                text: currentIconIndex === 0 ? 'Icons' : kebabToText(capitalize(icons[currentIconIndex - 1].name)),
                link:
                    currentIconIndex === 0
                        ? '/icons/demo/icons/'
                        : `/icons/demo/icons/${icons[currentIconIndex - 1].name}`,
            },
            next: {
                text:
                    currentIconIndex === icons.length - 1
                        ? 'Animations'
                        : kebabToText(capitalize(icons[currentIconIndex + 1].name)),
                link:
                    currentIconIndex === icons.length - 1
                        ? '/icons/demo/animations/'
                        : `/icons/demo/icons/${icons[currentIconIndex + 1].name}`,
            },
        };
    } else if (pageData.params?.animation) {
        const { animation } = pageData.params;
        pageData.title = capitalize(animation);

        const currentAnimationIndex = iconAnimations.findIndex((iconAnimation) => iconAnimation === animation);

        pageData.frontmatter = {
            prev: {
                text:
                    currentAnimationIndex === 0 ? 'Animations' : capitalize(iconAnimations[currentAnimationIndex - 1]),
                link:
                    currentAnimationIndex === 0
                        ? '/icons/demo/animations/'
                        : `/icons/demo/animations/${iconAnimations[currentAnimationIndex - 1]}`,
            },
            next: {
                text:
                    currentAnimationIndex === iconAnimations.length - 1
                        ? ''
                        : capitalize(iconAnimations[currentAnimationIndex + 1]),
                link:
                    currentAnimationIndex === iconAnimations.length - 1
                        ? ''
                        : `/icons/demo/animations/${iconAnimations[currentAnimationIndex + 1]}`,
            },
        };
    }
}
