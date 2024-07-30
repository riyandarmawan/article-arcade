import Layout from "@components/Layout";

export default function Home({ title }) {
    return (
        <>
            <Layout title={title}>
                <div className="container">
                    <div className="flex h-dvh flex-col items-center justify-center">
                        <h1 className="text-center lg:text-4xl font-medium text-lg sm:text-xl">
                            Explore, Read, and Discover with{" "}
                            <a href="/" className="font-title font-bold">
                                Article Arcade
                            </a>
                            ,
                            <span className="block">
                                Your Ultimate Reading Adventure
                            </span>
                        </h1>
                        <a
                            href="/articles"
                            className="cta mt-5 lg:mt-10 w-fit sm:!text-base bg-primary lg:!px-6 lg:!py-3 text-center !text-sm lg:!text-xl text-white hover:opacity-90 focus:ring focus:ring-slate-500 active:opacity-80"
                        >
                            Explore the Articles
                        </a>
                    </div>
                </div>
            </Layout>
        </>
    );
}
