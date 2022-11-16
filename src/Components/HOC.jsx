import Header from "./Header";
import Footer from "./Footer";

const HOC = ({children}) => {
    return <>
        <Header />
            {children}
        <Footer />
    </>
}

export default HOC;