export default function Header() {
    return (
        <header>
            <div className="container flex items-center justify-between py-4">
                <a href="" className="font-title text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                    Article Arcade
                </a>
                <div className="flex items-center gap-4">
                    <a
                        href=""
                        className="cta underline-animation after:content-[' '] relative hidden !p-0 sm:block"
                    >
                        Login
                    </a>
                    <a
                        href=""
                        className="cta bg-primary text-white hover:opacity-90 focus:ring focus:ring-slate-500 active:opacity-80"
                    >
                        Register
                    </a>
                </div>
            </div>
        </header>
    );
}
