
import { useState, useRef } from "react";
import ShippingOptions from "../components/ShippingOptions";


export default function Comprar() {
  const [currentStep, setCurrentStep] = useState(1);
  const [country, setCountry] = useState("Argentina");
  const [postalCode, setPostalCode] = useState("");
  const [shippingCost, setShippingCost] = useState(0);
  const basePrice = 22000;
  const [cantidad, setCantidad] = useState<number>(1);
  const [step, setStep] = useState(1);
  const [metodoPagoSeleccionado, setMetodoPagoSeleccionado] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [inputCantidad, setInputCantidad] = useState<string>("1");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const subtotal = basePrice * cantidad;
  const totalSinDescuento = subtotal + shippingCost;
  const descuento = metodoPagoSeleccionado === "transferencia" ? 0.1 : 0;
  const montoDescuento = totalSinDescuento * descuento;
  const totalFinal = totalSinDescuento - montoDescuento;
 


  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [telefono, setTelefono] = useState("");
  const [piso, setPiso] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [observaciones, setObservaciones] = useState("");



  const handleNextStep = () => {
      if (postalCode.trim().length >= 4) {
        setCurrentStep(2);
      } else {
        alert("Por favor ingresá un código postal válido");
      }
    };
  const handleContinuarFinal = () => {
      if (!nombre || !direccion || !ciudad || !provincia || !telefono) {
        alert("Por favor completá todos los campos");
        return;
      }

      const templateParams = {
        nombre,
        direccion,
        ciudad,
        provincia,
        telefono,
        piso,
        departamento,
        observaciones,
        postalCode,
      };
    };

  const handleVolver = () => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    };

  const finalizarPedido = () => {
  // Lógica para limpiar carrito, mostrar mensaje, etc.
  alert("¡Gracias por tu compra! Podés pasar a retirar tu pedido por el local."); 
  window.location.href = 'https://moahu.com.ar/';
  // Aquí podrías redirigir a otra página o limpiar el estado del carrito
  };


  
  return (
    <div className="min-h-screen bg-[#f7f7f7] font-clash px-6 py-10">
      <button
          onClick={handleVolver}
          className="absolute top-4 left-4 text-azul hover:underline text-lg font-clash"
        >
          ← Volver
        </button>
      <h2 className="text-3xl mb-10 font-clash">Checkout</h2>
      <div className="flex flex-col lg:flex-row gap-10 ">
        <div className="w-full lg:w-2/3">
          {currentStep === 1 && (
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bohme text-azul mb-6">Datos de entrega</h2>

              <div className="mb-4">
                <label htmlFor="country" className="block text-lg font-semibold text-gray-800 mb-1">País:</label>
                <select
                  id="country"
                  name="country"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-lg"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="Argentina">Argentina</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Chile">Chile</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Brasil">Brasil</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="postalCode" className="block text-lg font-semibold text-gray-800 mb-1">Código postal:</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  placeholder="Ej: 1406"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-lg"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="cantidad" className="block text-lg font-semibold text-gray-800 mb-1">Cantidad:</label>
                <input
                  type="number"
                  value={inputCantidad}
                  min="1"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "" || /^\d+$/.test(value)) {
                      setInputCantidad(value);
                      if (value !== "") setCantidad(Number(value));
                    }
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-lg"
                />
              </div>

              <button
                onClick={handleNextStep}
                className="w-full bg-black text-white text-xl py-3 rounded-md hover:bg-gray-900 transition"
              >
                Continuar
              </button>
            </div>
          )}

          {currentStep === 2 && (
              <>
                <ShippingOptions
                  postalCode={postalCode}
                  basePrice={basePrice}
                  setShippingCost={setShippingCost}
                  shippingCost={shippingCost}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  setStep={setStep}
                />

                <div className="mt-6">
                  <button
                    onClick={() => {
                      if (selectedOption === "envio") {
                        setCurrentStep(3); // Paso siguiente con formulario
                      } else {
                        // Continuar directo al resumen o pago
                        setCurrentStep(3);
                      }
                    }}
                    className="w-full bg-black text-white py-3 rounded-md font-bold text-lg"
                  >
                    Continuar
                  </button>
                </div>
              </>
            )}

        </div>
        {currentStep === 3 && (
          <div className="bg-white p-8 rounded-xl shadow-md w-full lg:w-2/3">
            <h2 className="text-2xl font-bohme text-azul mb-6">Elegí tu medio de pago</h2>

              <div className="space-y-4">
                {/* TARJETA */}
                <div
                  onClick={() => {
                    setMetodoPagoSeleccionado("tarjeta");
                    window.open(
                      "https://link.mercadopago.com.ar/moahu",
                      "_blank"
                    );
                  }}
                  className={`cursor-pointer flex justify-between items-center border rounded-md px-6 py-4 transition-all duration-200 ${
                    metodoPagoSeleccionado === "tarjeta"
                      ? "border-blue-600 bg-blue-50 shadow-md"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                <div className="flex items-center gap-3">
                  <img src="/icons/credit-card.png" alt="Mercado Pago" className="w-8 h-8" />
                  <span className="text-lg font-semibold">Mercado Pago</span>
                </div>
              </div>

              {/* TRANSFERENCIA */}
              <div
                onClick={() => setMetodoPagoSeleccionado("transferencia")}
                className={`cursor-pointer flex justify-between items-center border rounded-md px-6 py-4 transition-all duration-200 ${
                  metodoPagoSeleccionado === "transferencia"
                    ? "border-green-600 bg-green-50 shadow-md"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">💸</span>
                  <span className="text-lg font-semibold">Transferencia bancaria</span>
                </div>
                <span className="text-sm text-green-600 font-bold">10% de descuento</span>
              </div>

              {/* DATOS TRANSFERENCIA */}
              {metodoPagoSeleccionado === "transferencia" && (
                <div className="mt-6 p-4 border rounded-md bg-gray-50">
                  <h3 className="text-lg font-semibold mb-2">Datos para transferencia:</h3>
                  <p>Alias: <strong>moahu.mp</strong></p>
                  <p>CBU: <strong>0000003100022356812557</strong></p>
                  <p>Cuil: <strong>20-44452215-2</strong></p>

                  <a
                    href="https://wa.me/5491123498257?text=Hola! Te paso el comprobante de mi transferencia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                  >
                    Enviar comprobante por WhatsApp
                  </a>
                </div>
              )}

              {/* BOTÓN DE CONTINUAR */}
              <button
                onClick={() => {
                  if (selectedOption === "envio") {
                    // Terminar el pedido directamente
                    setCurrentStep(4); // podés mostrar un mensaje de agradecimiento, redirigir o limpiar carrito
                  } else {
                    // Pasar al paso 4 para datos de envío
                    finalizarPedido();
                  }
                  }}
                  className="w-full mt-6 bg-black text-white py-3 rounded-md font-bold text-lg hover:bg-gray-900 transition"
                >
                  Ya pagué, continuar con datos de envío.
                </button>
            </div>
          </div>
        
        )}
        {currentStep === 4 && selectedOption == "envio" && (
                <form
                  action="https://formsubmit.co/mateousoz9@gmail.com"
                  method="POST"
                  className="bg-white mt-10 p-8 rounded-xl shadow-md w-full lg:w-2/3"
                  
                >
                  <h2 className="text-2xl font-bohme text-azul mb-6">Datos de envío</h2>

                  <input type="hidden" name="_subject" value="MOAHU" />
                  <input type="hidden" name="_captcha" value="false" />

                  {/* Nombre */}
                  <div className="mb-4">
                    <label className="block mb-1 font-semibold">Nombre completo</label>
                    <input type="text" name="Nombre" required className="w-full border px-4 py-2 rounded-md" />
                  </div>
                  {/* Email */}
                  <div className="mb-4">
                    <label className="block mb-1 font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      required
                      className="w-full border px-4 py-2 rounded-md"
                    />
                  </div>

                  {/* Calle y número */}
                  <div className="mb-4">
                    <label className="block mb-1 font-semibold">Calle y número</label>
                    <input type="text" name="Dirección" required className="w-full border px-4 py-2 rounded-md" />
                  </div>

                  {/* Piso y departamento */}
                  <div className="mb-4 flex gap-4">
                    <div className="flex-1">
                      <label className="block mb-1 font-semibold">Piso (opcional)</label>
                      <input type="text" name="Piso" className="w-full border px-4 py-2 rounded-md" />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-1 font-semibold">Departamento (opcional)</label>
                      <input type="text" name="Departamento" className="w-full border px-4 py-2 rounded-md" />
                    </div>
                  </div>

                  {/* Ciudad */}
                  <div className="mb-4">
                    <label className="block mb-1 font-semibold">Ciudad</label>
                    <input type="text" name="Ciudad" required className="w-full border px-4 py-2 rounded-md" />
                  </div>

                  {/* Provincia */}
                  <div className="mb-4">
                    <label className="block mb-1 font-semibold">Provincia</label>
                    <input type="text" name="Provincia" required className="w-full border px-4 py-2 rounded-md" />
                  </div>

                  {/* Teléfono */}
                  <div className="mb-4">
                    <label className="block mb-1 font-semibold">Teléfono</label>
                    <input type="tel" name="Teléfono" required className="w-full border px-4 py-2 rounded-md" />
                  </div>

                  {/* Observaciones */}
                  <div className="mb-6">
                    <label className="block mb-1 font-semibold">Observaciones (opcional)</label>
                    <textarea name="Observaciones" className="w-full border px-4 py-2 rounded-md" rows={3} />
                  </div>

                  <input type="hidden" name="Código Postal" value={postalCode} />


                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-md font-bold text-lg hover:bg-gray-900 transition"
                  >
                    Finalizar pedido
                  </button>
                </form>
              )}

        <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">Carrito</h3>
          <div className="flex gap-4 mb-4">
            <img src="/lovable-uploads/foto4.jpeg" alt="Producto" className="w-20 h-20 object-contain border rounded-md" />
            <div>
              <p className="font-semibold">Rodillo Moahu</p>
              <p className="text-gray-600 text-sm">{cantidad} unidad{cantidad > 1 ? 'es' : ''}</p>
              <p className="text-gray-800 mt-1">${basePrice}</p>
            </div>
          </div>

         

          <hr className="my-4 border-gray-300" />

          <div className="flex justify-between text-lg mb-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          {shippingCost > 0 && (
            <div className="flex justify-between text-lg mb-2">
              <span>Envío</span>
              <span>${shippingCost}</span>
            </div>
          )}

          {descuento > 0 && (
            <div className="flex justify-between text-lg mb-2 text-green-600">
              <span>Descuento (10%)</span>
              <span>- ${montoDescuento.toFixed(2)}</span>
            </div>
          )}

          <hr className="my-4 border-gray-300" />

          <div className="flex justify-between text-xl font-bold ">
            <span>Total</span>
            <span>${totalFinal.toFixed(2)}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
