import { Funnel } from "react-bootstrap-icons";
import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";
import { useState, useEffect, useRef } from "react";

export default function ProductListingPage() {
    const [openFilter, setOpenfilter] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setOpenfilter(!openFilter);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpenfilter(false);
            }
        };

        if (openFilter) {
            document.body.classList.add('overflow-hidden');
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openFilter]);

    return (
        <div className="flex flex-col px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] gap-5 mt-10 bg-slate-100">
            <div className="flex flex-col-reverse md:justify-between md:flex-row gap-4 items-start mt-5">
                <p> <span className="font-semibold">Resultado para "Tênis"</span> - {localStorage.getItem('totalProducts')} produtos</p>
                <div className="flex flex-row gap-4">
                    <select className="focus:outline-none border-[#474747] focus-within:border-pink-500 rounded-md border-2 p-2 w-full">
                        <option value="">Ordenar por: Mais relevantes</option>
                        <option value="preco-asc">Ordenar por: Preço(Menor para Maior)</option>
                        <option value="preco-desc">Ordenar por: Preço(Maior para Menor)</option>
                        <option value="nome-asc">Ordenar por: Nome(A-Z)</option>
                    </select>
                    <Funnel size={42} className="lg:hidden bg-pink-600 p-2 hover:bg-pink-900 rounded-md text-white" onClick={() => toggleSidebar()} />
                </div>
            </div>
            <div className="flex flex-row pb-16 gap-20 justify-center lg:items-start">
                <FilterGroup className={'hidden lg:block w-[350px] px-10'} />
                <ProductListing />
                {
                    openFilter &&
                    <div
                        ref={sidebarRef}
                        className={`translate-x-0 bg-black bg-opacity-50 fixed inset-y-12 md:inset-y-14 left-0 transform transition-transform duration-300 w-full
                        h-screen flex flex-col z-40 space-y-2 mt-4`}>
                        <div>
                            <FilterGroup className={'block w-[250px] px-4 h-[100vh]'} onClick={() => toggleSidebar()} mobile={true} />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
