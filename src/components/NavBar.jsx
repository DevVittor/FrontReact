import { Outlet,Link } from "react-router-dom"
export default function NavBar(){
    return(
        <>
            <header className="sticky top-0  bg-[#000] z-50">
                <div className="flex-col flex items-center justify-between  pt-[20px] pb-[20px] gap-1">
                    <div className="">
                        <Link to="/"><h1 className="text-[44px] text-white font-semibold ">A<b className="font-semibold text-yellow-300">BR</b>IME</h1></Link>
                    </div>
                    <div className="">
                        <nav>
                            <ul className="flex items-center text-white gap-3 font-[400] ">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="category">Category</Link></li>
                                <li><Link to="article">Article</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="products">Form</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
                <Outlet/>
            <footer className="bg-[#000] flex justify-center items-center p-[14px] ">
                <span className="font-[400] text-[16px] text-white">Todos os direitos reservados &copy; | 2020 - 2025</span>
            </footer>
        </>
    )
}