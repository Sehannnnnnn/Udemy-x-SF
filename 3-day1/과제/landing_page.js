const ACCESS_KEY = '37612350-adfd0e4b030b076f045526284'
const WEATHER_KEY = '4d389314040de5a81e9fc3b19b154d55'

let imgs = []
const colors = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"]
async function getRandomIMG (cb, keyword) {
    const rd_page = parseInt(Math.random() * 30)
    const params = {
        key: ACCESS_KEY,
        min_width: 1080,
        min_height: 720,
        page : rd_page
    }
    const queryString = new URLSearchParams(params).toString()
    const imgUrls = await fetch(`https://pixabay.com/api/?${queryString}`)
                    .then((res) => res.json())
                    .then((data) => data.hits.map((img) => img.largeImageURL))
    return cb(imgUrls);
}

async function getVedio (cb, keyword) {
    const params = {
        key: ACCESS_KEY,
        min_width: 1080,
        min_height: 720,
    }
    const queryString = new URLSearchParams(params).toString()
    const vedioUrls = await fetch(`https://pixabay.com/api/videos?${queryString}`)
                    .then((res) => res.json())
                    .then((data) => data.hits.map((vedio) => vedio.videos.large.url))
    return cb(vedioUrls);
}

// async function getWeather() {
//     const weather = 
// }

const bg = document.querySelector('.bg');
getVedio((vedioURLs) => {
    const vedio_source = document.getElementById('vedio_source');
    vedio_source.src = vedioURLs[parseInt(Math.random() * 20)]
});

console.log(abc);