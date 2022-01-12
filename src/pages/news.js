import NewsList from "../components/newsList";

const NewsPage = {
    render() {
        return `
            <h1>News Page</h1>
            đào ngọc linh
            ${NewsList.render()}
        `;
    },
};
export default NewsPage;