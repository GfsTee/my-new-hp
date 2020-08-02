module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/malerei': { page: '/malerei' },
            '/malerei/2017': { page: '/malerei/2017' },
            '/malerei/2018': { page: '/malerei/2018' },
            '/malerei/2019': { page: '/malerei/2019' },
            '/malerei/2020': { page: '/malerei/2020' },
            '/malerei/2016': { page: '/malerei/2016' },
            '/impressum': { page: '/impressum' },
            '/dsgvo': { page: '/dsgvo' },
            '/texte': { page: '/texte' },
            '/vita': { page: '/vita' }
        }
    },
}