import Home from "@/app/Home/page";
import Link from "next/link"


const Header = () => {
    return (
        <header style={{margin: '0 auto',width: '360px', padding: '8px 16px'}}>
            <nav style={{display: "flex", justifyContent: "center", alignItems: 'center', gap: '16px', borderTop: '1px solid gray', padding: '8px 0'}}>
                <Link href={'Home'}>Всі</Link>
                <Link href={'New'}>Нові</Link>
                <Link href={'Populate'}>Популярні</Link>
                <Link href={'Shares'}>Акції</Link>
                <Link href={'Premium'}>Преміум</Link>
            </nav>
        </header>
    )
}

export default Header;