import Header from "./Header/Index";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
