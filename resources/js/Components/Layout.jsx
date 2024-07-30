import { Head } from "@inertiajs/react";
import Header from "./Header/Index";

export default function Layout({ title, children }) {
    return (
        <>
            <Head title={title} />
            <Header />
            {children}
        </>
    );
}
