export const getGifs = async (category) => {

    const getUrl = `https://api.giphy.com/v1/gifs/search?api_key=It7849IqCV7BQeCi4jRji0ByxBVDcPVC&q=${category}&limit=4`;

    const resp = await fetch(getUrl);

    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_width_small.url
    }));

    console.log(gifs)

    return gifs;
}