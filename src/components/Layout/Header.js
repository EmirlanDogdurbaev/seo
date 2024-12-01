import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Link href="/">Главная</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/company/about">О компании</Link>
        </header>
    );
}
