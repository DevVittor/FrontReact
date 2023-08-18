import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar o produto:', error);
      });
  }, [id]);

  const [Foto] = useState(["https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg","https://images.pexels.com/photos/4169899/pexels-photo-4169899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/7389105/pexels-photo-7389105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/15422831/pexels-photo-15422831/free-photo-of-arvore-de-natal-computador-portatil-laptop-notebook.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/8278851/pexels-photo-8278851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/5882698/pexels-photo-5882698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/17615043/pexels-photo-17615043/free-photo-of-mesa-balcao-escritorio-em-casa-home-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/5196814/pexels-photo-5196814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/8297162/pexels-photo-8297162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/7584231/pexels-photo-7584231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/5702275/pexels-photo-5702275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/7314827/pexels-photo-7314827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg","https://images.pexels.com/photos/3571943/pexels-photo-3571943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/14585225/pexels-photo-14585225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/12290556/pexels-photo-12290556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/845245/pexels-photo-845245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2839120/pexels-photo-2839120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2928175/pexels-photo-2928175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1983040/pexels-photo-1983040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]);

  return (
    <main>
        <section>
            <div className="h-auto w-full flex justify-center items-center pt-3 2xl:pt-6 2xl:pb-3">
                <div className="bg-white 2xl:border-2 2xl:border-gray-100 h-auto flex 2xl:justify-center flex-col 2xl:flex-row">
                    <div className="flex flex-col items-end justify-start">
                        <div className="">
                        <img className="2xl:h-[450px] 2xl:w-[230px] max-h-[350px] w-[200px] object-cover" loading="lazy" src="https://images.pexels.com/photos/247297/pexels-photo-247297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="absolute">
                            <i className="text-xl m-2 fa-solid fa-circle-check"></i>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-black w-full p-1">
                            <div className="">
                                <h3 className="bg-black shadow-md text-white font-semibold pt-[5px] pb-[5px] pr-[20px] pl-[20px] rounded-[3px]">R$ 250/H</h3>
                            </div>
                            <div className="">
                                <nav>
                                    <ul className="flex 2xl:flex-row gap-3 text-lg text-white">
                                        <li><i className="bi bi-facebook"></i></li>
                                        <li><i className="bi bi-instagram"></i></li>
                                        <li><i className="bi bi-twitter"></i></li>
                                        <li><i className="bi bi-tiktok"></i></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start 2xl:w-[500px] bg-white w-full p-3">
                        <div className="flex flex-col">
                            <h2 className="font-semibold text-2xl">{product.product}, 22 Anos</h2>
                            <h4 className="mt-1.5 text-[15px] font-light"><i className="pr-1.5 text-red-500 bi bi-geo-alt-fill"></i>Rio de Janeiro, Rj</h4>
                        </div>
                        <div className="w-full pt-2">
                            <p className="font-medium text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quisquam deleniti hic nam assumenda. Ducimus sapiente, illum temporibus eos perferendis necessitatibus, delectus praesentium cumque, minus ullam velit? Dignissimos dolore deserunt ipsa iste illum? In ut harum omnis laudantium facere.</p>
                        </div>
                        <div className="flex justify-center pt-2.5">
                            <button className="bg-blue-500 font-semibold text-white text-lg pt-[5px] pb-[5px] pr-[20px] pl-[20px] rounded-[3px]"><i className="pr-2 bi bi-check-circle"></i>Verificada</button>
                        </div>
                    </div>
                    <div className="bg-black p-5 2xl:p-3 h-auto flex justify-center 2xl:justify-between items-center flex-col gap-3 ">
                        <div className="">
                            <nav>
                                <ul className="flex flex-row 2xl:flex-col gap-3 text-2xl text-white">
                                    
                                    <li><i className="fa-solid fa-child-reaching"></i></li>
                                    <li><i className="fa-solid fa-bell-concierge"></i></li>
                                    <li><i className="fa-solid fa-camera-retro"></i></li>
                                    <li><i className="fa-solid fa-video"></i></li>
                                    <li><i className="fa-solid fa-map-location-dot"></i></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="">
                            <button className="text-2xl"><i className="text-red-500 bi bi-exclamation-triangle-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="m-auto w-full  2xl:columns-7 lg:columns-5 md:columns-3 sm:columns-2 columns-1 gap-3 p-3">
                {Foto.map((link, index) => (
                    <div className="group flex justify-start items-end mb-2.5 relative w-full break-inside-avoid hover:cursor-pointer" key={index}>
                        <img
                            loading="lazy"
                            className="max-w-full rounded-xl pointer-events-none"
                            src={link}
                            alt={`Imagem ${index + 1}`}
                        />
                        <div className="group-hover:opacity-100 w-full bg-black transition-opacity delay-150 opacity-0 absolute p-2 rounded-b-xl text-white">
                            <h3 className="text-[14px] font-extrabold truncate text-white drop-shadow-xl shadow-black">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, veniam.
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </main>
)
}
