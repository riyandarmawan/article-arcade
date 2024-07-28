import NavItem from "@components/Header/NavItem";

export default function Navbar({ appear }) {
    return (
        <>
            <div
                className={`absolute top-[103%] flex w-full ${appear ? "scale-y-100" : "scale-y-0"} origin-top flex-col gap-2 bg-white p-4 duration-300 sm:relative sm:w-fit sm:scale-y-100 sm:flex-row sm:gap-6 sm:bg-transparent`}
            >
                <NavItem
                    href="/"
                    text="Home"
                    className="underline-animation after:content-[' '] relative w-fit !p-0"
                />
                <NavItem
                    href="/articles"
                    text="Articles"
                    className="underline-animation after:content-[' '] relative w-fit !p-0"
                />
                <NavItem
                    href=""
                    text="Login"
                    className="underline-animation after:content-[' '] relative w-fit !p-0 sm:hidden"
                />
            </div>
            <div className="flex items-center gap-4">
                <NavItem
                    href=""
                    text="Login"
                    className="cta underline-animation after:content-[' '] relative hidden !p-0 sm:block"
                />
                <NavItem
                    href=""
                    text="Register"
                    className="cta bg-primary text-white hover:opacity-90 focus:ring focus:ring-slate-500 active:opacity-80"
                />
            </div>
        </>
    );
}
