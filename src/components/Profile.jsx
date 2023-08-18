import { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile(){

    const picture = "https://images.pexels.com/photos/17987491/pexels-photo-17987491/free-photo-of-automotivo-automotor-automobilistico-lindo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const [Foto] = useState(["https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg","https://images.pexels.com/photos/4169899/pexels-photo-4169899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/7389105/pexels-photo-7389105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/15422831/pexels-photo-15422831/free-photo-of-arvore-de-natal-computador-portatil-laptop-notebook.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/8278851/pexels-photo-8278851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/5882698/pexels-photo-5882698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/17615043/pexels-photo-17615043/free-photo-of-mesa-balcao-escritorio-em-casa-home-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/5196814/pexels-photo-5196814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/8297162/pexels-photo-8297162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/7584231/pexels-photo-7584231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/5702275/pexels-photo-5702275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/7314827/pexels-photo-7314827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg","https://images.pexels.com/photos/3571943/pexels-photo-3571943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/14585225/pexels-photo-14585225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/12290556/pexels-photo-12290556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/845245/pexels-photo-845245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2839120/pexels-photo-2839120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2928175/pexels-photo-2928175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1983040/pexels-photo-1983040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"])

    return (
        <main>
            <section>
                <div className="flex justify-center items-start p-3 gap-5">
                <div className="flex flex-col items-center justify-center gap-3">
                        <div className="flex flex-col items-end justify-center gap-3">
                            <div className="flex items-end justify-center">
                                <img className="h-[350px] w-[350px] object-cover rounded-full" loading="lazy" src={picture} alt="" />
                                <div className="absolute p-3">
                                    <span className="rounded-[3px] bg-[#FE0000] text-white font-semibold pr-2 pl-2 pt-[5px] pb-[5px]">R$ 250/h</span>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex justify-center items-center w-[350px] p-3">
                                    <nav>
                                        <ul className="flex gap-3 text-xl text-black">
                                            <li><i className="bi bi-facebook"></i></li>
                                            <li><i className="bi bi-instagram"></i></li>
                                            <li><i className="bi bi-twitter"></i></li>
                                            <li><i className="bi bi-tiktok"></i></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-semibold ">Fernanda Lima, 26</h2>
                            <i className="text-blue-500 text-lg fa-solid fa-circle-check"></i>
                        </div>
                        <div className="flex items-center gap-3">
                            <h4 className="font-light"><i className="text-red-500 pr-2 fa-solid fa-location-dot"></i>Rio de Janeiro, Rj</h4>
                            <span className="font-light">|</span>
                            <h4 className="font-light"><i className="text-pink-500 pr-2 fa-solid fa-mars"></i>Mulher</h4>
                        </div>
                        <div className="text-center ">
                            <p className="text-[16px] font-light 2xl:w-[425px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia perferendis rerum, dicta, ad sunt adipisci fuga illo modi dolorem voluptas vero nisi, tempore repudiandae eius?</p>
                        </div>
                        {/*<div className="flex flex-col gap-3 w-full">
                            <h2 className="text-xl font-semibold">Serviços:</h2>
                            <nav>
                                <ul className="flex items-center flex-wrap gap-2">
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                    <li className="text-[12px] font-medium border-2 border-blue-500 text-blue-500 rounded-full pr-[20px] pl-[20px] pt-[5px] pb-[5px]">Casal</li>
                                </ul>
                            </nav>
                        </div> */}
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col justify-between items-center w-[350px] p-3 ">
                    <div className="bg-black pr-5 pl-5 pt-2 pb-2 rounded-md">
                        <nav>
                            <ul className="flex gap-3 text-white">
                                <li><i className="text-xl fa-solid fa-camera"></i></li>
                                <li><i className="text-xl fa-solid fa-child-reaching"></i></li>
                                <li><i className="text-xl fa-solid fa-bell-concierge"></i></li>
                                <li><i className="text-xl fa-solid fa-map-location-dot"></i></li>
                            </ul>
                        </nav>
                    </div>
                </div>              
            </section>
            <section>
                <div className="m-auto w-full  2xl:columns-7 lg:columns-5 md:columns-3 sm:columns-2 gap-3 pb-3 pr-3 pl-3 ">
                    
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