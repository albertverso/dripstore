import { useLocation } from "react-router-dom";

export default function SkeletonLoading() {
    const location = useLocation();
    const loadingProducts = location.pathname === '/Lista-Produtos'
   
    return(
        <div className={`grid grid-cols-2 gap-5 cursor-not-allowed ${loadingProducts ? 'md:grid-cols-2 xl:grid-cols-3 w-[1000px]' : ' md:grid-cols-3 xl:grid-cols-4'}`}> {Array.from({ length: loadingProducts ? 30 : 8 }).map((_, index) => (
            <div key={index} className="py-2 w-full">
                <div className="animate-pulse bg-gray-300 h-64 rounded-md" />
            </div>
        ))}</div>
    )
}