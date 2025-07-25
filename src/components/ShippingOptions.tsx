import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  postalCode: string;
  basePrice: number;
  setShippingCost: (cost: number) => void;
  shippingCost: number;
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  setStep: (step: number) => void; // <--- AGREGAR ESTO
}

export default function ShippingOptions({ postalCode, basePrice, setShippingCost, shippingCost, selectedOption, setSelectedOption, setStep, }: Props) {

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);

    if (option === "envio") {
        let costo = 0;

        if (postalCode.startsWith("14")) {
            costo = 8000;
        } else if (postalCode.startsWith("16")) {
            costo = 8000;
        } else if (postalCode.startsWith("11")) {
            costo = 8000;
        } else {
            costo = 8000; // valor por defecto
        }

        setShippingCost(costo); // <- ESTO FALTABA ACA
        } else {
        setShippingCost(0); // Retiro por el local
        }

  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bohme text-azul mb-6">Metodo de entrega</h2>

      <div className="space-y-4">
        <label className="block border border-gray-300 rounded-md p-4 cursor-pointer">
          <input
            type="radio"
            name="shipping"
            value="envio"
            checked={selectedOption === "envio"}
            onChange={() => handleOptionChange("envio")}
            className="mr-2"
          />
          Envío a domicilio {selectedOption === "envio" && `$${shippingCost}`}
        </label>

        <label className="block border border-gray-300 rounded-md p-4 cursor-pointer">
          <input
            type="radio"
            name="shipping"
            value="retiro"
            checked={selectedOption === "retiro"}
            onChange={() => handleOptionChange("retiro")}
            className="mr-2"
          />
          Retirar por el local Moahu 
        </label>
       
      </div>
    </div>
  );
}
