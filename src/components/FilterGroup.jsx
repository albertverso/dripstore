import { Checkbox, Radio } from "@mui/material"
import * as React from 'react';
import { X } from "react-bootstrap-icons";

export default function FilterGroup({className, mobile, onClick}) {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <section className={`${className} items-start justify-start bg-white`}>
            <div className={`flex flex-col`}>
                <div className="flex flex-row items-center justify-between">
                    <p className={`text-xl font-semibold ml-3 ${mobile ? 'pb-2 pt-2' : 'pb-5 pt-5' }`}>Filtrar por</p>
                    <X size={24} className="text-gray-500 hover:text-pink-600 lg:hidden" onClick={() => onClick() }/>
                </div>
                <div className={`border-t-2 ml-3 ${mobile ? '' : 'pt-5' }`}></div>
                <div className="flex flex-col">
                    <div>
                        <div className={`flex flex-col ${mobile ? 'pb-1' : 'pb-5 gap-1' }`}>
                            <p className="font-semibold ml-3">Marca</p>
                            <div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Adidas</label>
                                </div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox             
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Balenciaga</label>
                                </div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox
                                        
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>K-Swiss</label>
                                </div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox
                                        
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Nike</label>
                                </div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox
                                        
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Puma</label>
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col ${mobile ? 'pb-1' : 'pb-5 gap-1' }`}>
                            <p className="font-semibold ml-3">Categoria</p>
                            <div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox
                                        
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Esporte e lazer</label>
                                </div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox
                                        
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Casual</label>
                                </div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox
                                        
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Utilitario</label>
                                </div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox
                                        
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Corrida</label>
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col ${mobile ? 'pb-1' : 'pb-5 gap-1' }`}>
                            <p className="font-semibold ml-3">Gênero</p>
                            <div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox
                                        
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Masculino</label>
                                </div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox
                                        
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Feminino</label>
                                </div>
                                <div  className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Checkbox
                                        
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Unisex</label>
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col ${mobile ? 'pb-1' : 'pb-5 gap-1' }`}>
                            <p className="font-semibold ml-3">Estado</p>
                            <div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Radio
                                        
                                        checked={selectedValue === 'a'}
                                        onChange={handleChange}
                                        value="a"
                                        name="radio-buttons"
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Novo</label>
                                </div>
                                <div className={`flex flex-row items-center ${mobile && 'h-7'}`}>
                                    <Radio
                                        
                                        checked={selectedValue === 'b'}
                                        onChange={handleChange}
                                        value="b"
                                        name="radio-buttons"
                                        sx={{
                                            color: "#666666",
                                            '&.Mui-checked': {
                                                color: "#C92071",
                                            },
                                        }}
                                    />
                                    <label>Usado</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}