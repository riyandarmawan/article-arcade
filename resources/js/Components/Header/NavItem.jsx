export default function NavItem({ href, text, className = "" }) {
    return (
        <a href={href} className={`cta ${className}`}>
            { text }
        </a>
    );
}
