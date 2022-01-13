import Navigo from "navigo";
import Header from "./components/header";
import AboutPage from "./pages/about";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import Footer from "./components/footer";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import dashboard from "./admin/dasboar";
import adminproductlist from "./admin/news";
import productedit from "./admin/productedit";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        print(productedit.render(id));
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/dashboard": () => {
        print(dashboard.render());
    },
    "/admin/product/list": () => {
        print(adminproductlist.render());
    },
});
router.resolve();