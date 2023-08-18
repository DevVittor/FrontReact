import { useState } from "react";
import "../Home.css";
import { Link } from "react-router-dom";

export default function Home(){

const [Foto] = useState(["https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg","https://images.pexels.com/photos/4169899/pexels-photo-4169899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/7389105/pexels-photo-7389105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/15422831/pexels-photo-15422831/free-photo-of-arvore-de-natal-computador-portatil-laptop-notebook.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/8278851/pexels-photo-8278851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/5882698/pexels-photo-5882698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/17615043/pexels-photo-17615043/free-photo-of-mesa-balcao-escritorio-em-casa-home-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/5196814/pexels-photo-5196814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/8297162/pexels-photo-8297162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/7584231/pexels-photo-7584231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/5702275/pexels-photo-5702275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/7314827/pexels-photo-7314827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg","https://images.pexels.com/photos/3571943/pexels-photo-3571943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/14585225/pexels-photo-14585225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/12290556/pexels-photo-12290556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/845245/pexels-photo-845245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2839120/pexels-photo-2839120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2928175/pexels-photo-2928175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1983040/pexels-photo-1983040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"])

    return(
        <main>
            <section>
                <div className="flex justify-center items-center p-5 pt-[32px]">
                    <div className="flex items-center gap-2">
                        <input className="pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] border-2 border-gray-100" type="text" name="" id="" placeholder="What do you want to find ?"/>
                        <input className="pr-[10px] pl-[10px] pt-[5px] pb-[5px] rounded-[3px] border-2 border-black bg-black font-semibold text-white" type="submit" value="Search" />
                    </div>
                </div>
            </section>
            <section>
                <div className="m-auto w-full  2xl:columns-7 lg:columns-5 md:columns-3 sm:columns-2 gap-3 p-3">
                    
                        {Foto.map((link, index) => (
                            <Link to={`/${index + 1}`} key={index}>
                            <div className="group flex justify-start items-end mb-2.5 relative w-full break-inside-avoid hover:cursor-pointer" key={index}>
                                <img
                                    loading="lazy"
                                    className="max-w-full rounded-xl pointer-events-none"
                                    src={link}
                                    alt={`Imagem ${index + 1}`}
                                />
                                <div className="group-hover:opacity-100 w-full backdrop-blur-2xl transition-opacity delay-150 opacity-0 absolute p-2 rounded-b-xl text-white">
                                    <h3 className="text-[14px] font-extrabold truncate text-white drop-shadow-xl shadow-black">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, veniam.
                                    </h3>
                                </div>
                            </div>
                        
                    </Link>
                        ))}
                </div>
            </section>
        </main>
    )
}