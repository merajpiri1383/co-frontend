import TopHeader from "./topHeader";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Products from "./products";
import Blogs from "./blogs";
import Faqs from "./faqs";
import { GoftinoSnippet } from "@mohsen007/react-goftino";
export default function Home () {
    return (
        <>
            <TopHeader />
            <Header />
            <Main />
            <Faqs />
            <Products />
            <Blogs />
            <Footer />
            <GoftinoSnippet 
                goftinoKey="w13trj"
            />
        </>
    )
};