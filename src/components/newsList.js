import data from "../data";

const NewsList = {
    render() {
        return /* html */`
                <h2 class="text-[#272f54] font-bold text-2xl py-4">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border p-4">
                            <a href="/news/${post.id}">
                                <img src="${post.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-bold text-[#b96442] m-4">${post.title}</a></h3>                    
                            <p>${post.desc}</p>
                        </div>
                    `).join("")}
                    
                </div>
                <h2 class="text-[#272f54] font-bold text-2xl py-4">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                    <div class="border p-4">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a href="" class="font-bold text-[#b96442] m-4">${post.title}</a></h3>                    
                        <p>${post.desc}</p>
                    </div>
                `).join("")}
                
            </div>
        
        `;
    },
};
export default NewsList;