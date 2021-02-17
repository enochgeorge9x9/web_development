const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    createImg(res.data);
})

const clearImg = () => {

}

const createImg = (datas) => {
    for (let data of datas) {
        try {
            const newImg = document.createElement('img');
            newImg.src = data.show.image.medium;
            document.body.append(newImg)
        } catch (e) {
            console.log(data, e)
        }

    }
}