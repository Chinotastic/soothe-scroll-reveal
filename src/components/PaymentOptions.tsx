// src/components/PaymentOptions.tsx

import React from 'react';

export default function PaymentOptions() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl md:text-5xl font-clash text-[#23326a] mb-8">Elegí tu método de pago</h1>

      <div className="flex flex-col items-center gap-10 mt-6">

        {/* Pago con tarjeta */}
        <div className="flex flex-col items-center gap-10 mt-10 max-w-2xl w-full">
        {/* Opción Mercado Pago */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full">
          <h2 className="text-2xl font-semibold text-[#23326a] mb-2">Con Mercado Pago</h2>
          <p className="text-gray-700 text-lg mb-4">
            Pagá con tarjeta de crédito, débito o dinero en cuenta de Mercado Pago.
          </p>
          <p className="text-[#23326a] text-xl font-bold mb-4">$22.000</p>
          <a
            href="https://mpago.li/2ySaNnc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#23326a] text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200 font-clash"
            >
            Pagar con Mercado Pago
            </a>
        </div>
        </div>

        <hr className="w-full border-t border-gray-300" />

        {/* Transferencia */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
          <div className="text-2xl font-semibold flex items-center justify-center gap-2 text-green-900 mb-2">
            💸 Transferencia bancaria
          </div>

          <div className="mb-3">
            <span className="inline-block bg-green-600 text-white text-sm px-3 py-1 rounded-full">
              Ahorrás $2.000 pagando por transferencia 💰
            </span>
          </div>

          <p className="text-lg">Valor: <strong>$20.000</strong></p>
          <p className="text-gray-700">Alias: <strong>moahu.mp</strong></p>
          <p className="text-gray-700">CBU: <strong>0000003100022356812557</strong></p>
          <p className="text-gray-700">Titular: <strong>Mateo Ignacio Usoz</strong></p>
          <p className="text-gray-700">Cuenta: <strong>Mercado Pago</strong></p>
          <p className="text-gray-700">CUIT: <strong>20-44452215-2</strong></p>

          <div className="flex justify-center mt-4">
            <a
              href="https://wa.me/5491123498257?text=Hola%2C%20te%20env%C3%ADo%20el%20comprobante%20de%20la%20transferencia"
              className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform font-clash"
            >
              Enviar comprobante por WhatsApp
            </a>
          </div>
        </div>


        <div className="mt-8 text-sm text-gray-600 max-w-md">
          <p>📦 Por el momento no contamos con envíos integrados, pero estamos trabajando para resolverlo.</p>
          <p className="mt-2">📩 Una vez realizado el pago, por favor enviá el comprobante al siguiente correo o número de WhatsApp:</p>
          <p className="mt-1 font-semibold">📧 Mateousoz9@gmail.com</p>
          <p className="font-semibold">📱 +54 9 1123498257</p>
        </div>

      </div>
    </div>
  );
}
