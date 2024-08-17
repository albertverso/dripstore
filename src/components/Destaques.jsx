import '../pages/Home.jsx'
import Camisa from '../assets/Blusa.png'
import Tenis from '../assets/Tenis.png'
import Fone from '../assets/Fone.png'

function Destaques() {
  return (
    // Coleções em destaque
    <div class="flex flex-col lg:flex-row gap-5 pt-5">
      <div
        class="flex flex-col w-full h-64 bg-slate-200 rounded-xl p-10 justify-between relative overflow-hidden">
        <div
          class="absolute h-[300px] w-[300px] -rotate-[40deg] -right-20">
            <img src={Camisa} alt="" />
          </div>
        <div class="relative z-10">
          <div
            class="flex rounded-full bg-lime-300 w-24 h-8 items-center justify-center">
            <p>30% OFF</p>
          </div>
        </div>
        <div class="relative z-10">
          <p class="text-3xl font-bold">
            Novo drop <br />Supreme
          </p>
        </div>
        <div class="relative z-10">
          <button
            class="bg-white hover:bg-pink-600 w-48 h-10 rounded-md text-center font-bold text-pink-600 hover:text-white">
            Comprar
          </button>
        </div>
      </div>
      <div
        class="flex flex-col w-full h-64 bg-slate-200 rounded-xl p-10 justify-between relative overflow-hidden">
        <div
          class="absolute bg-custom-tenis h-[230px] w-[300px] -rotate-[10deg] -right-10 -scale-x-100">
            <img src={Tenis} alt="" />
          </div>
        <div class="relative z-10">
          <div
            class="flex rounded-full bg-lime-300 w-24 h-8 items-center justify-center">
            <p>30% OFF</p>
          </div>
        </div>
        <div class="relative z-10">
          <p class="text-3xl font-bold">Coleção <br />Nike</p>
        </div>
        <div class="relative z-10">
          <button
            class="bg-white hover:bg-pink-600 w-48 h-10 rounded-md text-center font-bold text-pink-600 hover:text-white">
            Comprar
          </button>
        </div>
      </div>
      <div
        class="flex flex-col w-full h-64 bg-slate-200 rounded-xl p-10 justify-between relative overflow-hidden">
        <div
          class="absolute bg-custom-fone h-[250px] w-[220px] rotate-[30deg] -right-10">
            <img src={Fone} alt="" />
          </div>
        <div class="relative z-10">
          <div
            class="flex rounded-full bg-lime-300 w-24 h-8 items-center justify-center">
            <p>30% OFF</p>
          </div>
        </div>
        <div class="relative z-10">
          <p class="text-3xl font-bold">Novo <br />Beats Bass</p>
        </div>
        <div class="relative z-10">
          <button
            class=" bg-white hover:bg-pink-600 w-48 h-10 rounded-md text-center font-bold text-pink-600 hover:text-white">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destaques