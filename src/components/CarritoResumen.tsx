interface Props {
  shippingCost: number;
  showShipping: boolean;
  cantidad: number;
}


export default function CarritoResumen({ shippingCost, showShipping, cantidad }: Props) {
  const basePrice = 22000;
  const total = basePrice + (showShipping ? shippingCost : 0);

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
      <div className="flex items-center gap-4 mb-4">
        <img src="/lovable-uploads/foto4.jpeg" alt="Producto" width={80} height={80} />
        <div className="text-sm">
          <p className="font-bold">RODILLO MOAHU</p>
          <p className="text-gray-600">Negro — 1 unidad</p>
        </div>
        <div className="ml-auto font-semibold">$22.000</div>
      </div>

      <hr className="mb-2" />

      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>${basePrice}</span>
      </div>

      {showShipping && (
        <div className="flex justify-between text-sm">
          <span>Envío</span>
          <span>${shippingCost}</span>
        </div>
      )}

      <hr className="my-2" />

      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${total}</span>
      </div>
    </div>
  );
}
