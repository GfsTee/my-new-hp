module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/malerei': { page: '/malerei' },
            '/impressum': { page: '/impressum' },
            '/dsgvo': { page: '/dsgvo' },
            '/texte': { page: '/texte' },
            '/vita': { page: '/vita' }
        }
    },
}