import { GearFill } from "react-bootstrap-icons";

export default function PageNotFound(){
    return (

        <div className="flex w-full h-[40vh] items-center justify-center text-center">
          <div>
            <p className="text-2xl font-bold text-gray-800">Ops! Página em Progresso</p>
            <div className="flex justify-center items-center text-gray-800">
                  <GearFill className="w-12 h-12  animate-spin rotate-90"/>
                  <GearFill className="w-12 h-12 -ml-3 mt-12 animate-spin -rotate-90"/>
            </div>
          </div>
        </div>
    )
}