export default function HamburgerMenu({ handleAppear }) {
    return (
        <div
            onClick={() => handleAppear()}
            className="flex cursor-pointer flex-col gap-[2px] sm:hidden"
        >
            <span className="block h-1 w-6 rounded-full bg-primary"></span>
            <span className="block h-1 w-6 rounded-full bg-primary"></span>
            <span className="block h-1 w-6 rounded-full bg-primary"></span>
        </div>
    );
}
