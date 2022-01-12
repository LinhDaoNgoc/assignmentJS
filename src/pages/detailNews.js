import data from "../data";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /* html */`
            <h1 class="my-3"><a href="" class="font-bold text-[#b96442] m-4">${result.title}</h1>
            <img src="${result.img}" />
            <p>${result.desc}</p>
        `;
    },
};
export default DetailNewsPage;