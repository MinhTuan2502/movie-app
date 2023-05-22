
const apiConfig = {
    baseUrl: 'https://www.themoviedb.org/3/',
    apiKey: '256ba8add02e61e9140c97874f85322f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;
