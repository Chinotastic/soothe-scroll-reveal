"use client"

import { useState } from "react"
import Image from "next/image"
import { Package, MapPin, CreditCard, Check, Edit2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [couponCode, setCouponCode] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [isEditingAddress, setIsEditingAddress] = useState(false)
  const [isEditingShipping, setIsEditingShipping] = useState(false)

  const steps = [
    { id: 1, title: "Forma de envío", icon: Package },
    { id: 2, title: "Dirección de entrega", icon: MapPin },
    { id: 3, title: "Pago", icon: CreditCard },
  ]

  const shippingOptions = [
    { id: "standard", name: "ENVÍO ESTÁNDAR", price: 2500, days: "3-5 días hábiles", date: "Lunes 6 de Enero" },
    { id: "express", name: "ENVÍO EXPRESS", price: 4500, days: "1-2 días hábiles", date: "Viernes 3 de Enero" },
    { id: "pickup", name: "RETIRO EN TIENDA", price: 0, days: "Disponible hoy", date: "Hoy mismo" },
  ]

  const selectedShipping = shippingOptions.find((option) => option.id === shippingMethod) || shippingOptions[0]

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId)
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const applyCoupon = () => {
    // Simulación de aplicar cupón
    console.log("Aplicando cupón:", couponCode)
  }

  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-sky-800 mb-2">CHECKOUT</h1>
          <p className="text-sky-600 font-medium">Completá tu compra en tres simples pasos</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isCompleted = step.id < currentStep
              const isCurrent = step.id === currentStep

              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => handleStepClick(step.id)}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-all hover:scale-105 ${
                        isCompleted
                          ? "bg-sky-800 border-sky-800 text-white"
                          : isCurrent
                            ? "border-sky-800 text-sky-800 bg-white shadow-lg"
                            : "border-gray-300 text-gray-300 bg-white hover:border-sky-400"
                      }`}
                    >
                      {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </button>
                    <span
                      className={`text-sm font-bold text-center cursor-pointer ${
                        isCompleted || isCurrent ? "text-sky-800" : "text-gray-400"
                      }`}
                      onClick={() => handleStepClick(step.id)}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-24 h-0.5 mx-4 ${step.id < currentStep ? "bg-sky-800" : "bg-gray-300"}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Method */}
            {currentStep >= 1 && (
              <Card
                className={`border-2 transition-all ${currentStep === 1 ? "border-sky-800 shadow-lg" : "border-gray-200"}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-black text-sky-800 flex items-center gap-2">
                      {currentStep > 1 ? <Check className="w-5 h-5 text-green-600" /> : <Package className="w-5 h-5" />}
                      FORMA DE ENVÍO
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-sky-800 text-sky-800 hover:bg-sky-50 font-bold bg-transparent"
                      onClick={() => setIsEditingShipping(!isEditingShipping)}
                    >
                      {isEditingShipping ? "GUARDAR" : "CAMBIAR"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {isEditingShipping ? (
                    <div className="space-y-4">
                      <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                        {shippingOptions.map((option) => (
                          <div
                            key={option.id}
                            className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-sky-300"
                          >
                            <RadioGroupItem value={option.id} id={option.id} className="border-sky-800" />
                            <Label htmlFor={option.id} className="font-bold text-sky-800 cursor-pointer flex-1">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-black">{option.name}</p>
                                  <p className="text-sm text-gray-600 font-medium">{option.days}</p>
                                </div>
                                <p className="font-black text-sky-800">
                                  {option.price === 0 ? "GRATIS" : `$${option.price.toLocaleString()}`}
                                </p>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ) : (
                    <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-black text-sky-800">{selectedShipping.name}</p>
                          <p className="text-sm text-sky-600 font-medium">{selectedShipping.days}</p>
                        </div>
                        <p className="font-black text-sky-800">
                          {selectedShipping.price === 0 ? "GRATIS" : `$${selectedShipping.price.toLocaleString()}`}
                        </p>
                      </div>
                      <p className="text-sm text-sky-600 font-medium">
                        FECHA ESTIMADA: <span className="font-bold text-sky-800">{selectedShipping.date}</span>
                      </p>
                    </div>
                  )}
                  {currentStep === 1 && (
                    <div className="mt-4">
                      <Button
                        onClick={handleNextStep}
                        className="w-full bg-sky-800 text-white hover:bg-sky-900 font-black py-3"
                      >
                        CONTINUAR
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Delivery Address */}
            {currentStep >= 2 && (
              <Card
                className={`border-2 transition-all ${currentStep === 2 ? "border-sky-800 shadow-lg" : "border-gray-200"}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-black text-sky-800 flex items-center gap-2">
                      {currentStep > 2 ? <Check className="w-5 h-5 text-green-600" /> : <MapPin className="w-5 h-5" />}
                      DIRECCIÓN DE ENTREGA
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-sky-800 text-sky-800 hover:bg-sky-50 font-bold bg-transparent"
                      onClick={() => setIsEditingAddress(!isEditingAddress)}
                    >
                      <Edit2 className="w-4 h-4 mr-1" />
                      {isEditingAddress ? "GUARDAR" : "EDITAR"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {isEditingAddress ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-bold text-sky-800">NOMBRE COMPLETO</Label>
                          <Input defaultValue="Usuario Genérico" className="border-2 border-gray-200 font-medium" />
                        </div>
                        <div>
                          <Label className="text-sm font-bold text-sky-800">TELÉFONO</Label>
                          <Input defaultValue="+54 11 1234-5678" className="border-2 border-gray-200 font-medium" />
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-bold text-sky-800">DIRECCIÓN</Label>
                        <Input defaultValue="Av. Ejemplo 1234" className="border-2 border-gray-200 font-medium" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label className="text-sm font-bold text-sky-800">CIUDAD</Label>
                          <Input defaultValue="Buenos Aires" className="border-2 border-gray-200 font-medium" />
                        </div>
                        <div>
                          <Label className="text-sm font-bold text-sky-800">CÓDIGO POSTAL</Label>
                          <Input defaultValue="C1425" className="border-2 border-gray-200 font-medium" />
                        </div>
                        <div>
                          <Label className="text-sm font-bold text-sky-800">PROVINCIA</Label>
                          <Select defaultValue="caba">
                            <SelectTrigger className="border-2 border-gray-200">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="caba">CABA</SelectItem>
                              <SelectItem value="buenos-aires">Buenos Aires</SelectItem>
                              <SelectItem value="cordoba">Córdoba</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <p className="font-black text-sky-800">USUARIO GENÉRICO</p>
                        <p className="text-sky-600 font-medium">AV. EJEMPLO 1234, PISO 2, DEPTO A</p>
                        <p className="text-sky-600 font-medium">CIUDAD AUTÓNOMA DE BUENOS AIRES, C1425</p>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-bold text-sky-800 mb-1">EMAIL</p>
                          <p className="text-sky-600 font-medium">usuario@email.com</p>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-sky-800 mb-1">TELÉFONO</p>
                          <p className="text-sky-600 font-medium">+54 11 1234-5678</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div className="mt-4">
                      <Button
                        onClick={handleNextStep}
                        className="w-full bg-sky-800 text-white hover:bg-sky-900 font-black py-3"
                      >
                        CONTINUAR
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Payment Method */}
            {currentStep >= 3 && (
              <Card className="border-2 border-sky-800 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-black text-sky-800 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    MÉTODO DE PAGO
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-sky-300">
                      <RadioGroupItem value="card" id="card" className="border-sky-800" />
                      <Label htmlFor="card" className="font-bold text-sky-800 cursor-pointer flex-1">
                        TARJETA DE CRÉDITO/DÉBITO
                      </Label>
                      <div className="flex gap-2">
                        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          VISA
                        </div>
                        <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          MC
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-sky-300">
                      <RadioGroupItem value="transfer" id="transfer" className="border-sky-800" />
                      <Label htmlFor="transfer" className="font-bold text-sky-800 cursor-pointer flex-1">
                        TRANSFERENCIA BANCARIA
                      </Label>
                      <Badge variant="outline" className="border-green-600 text-green-600 font-bold">
                        5% DESC
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-sky-300">
                      <RadioGroupItem value="mercadopago" id="mercadopago" className="border-sky-800" />
                      <Label htmlFor="mercadopago" className="font-bold text-sky-800 cursor-pointer flex-1">
                        MERCADO PAGO
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 pt-4 border-t-2 border-sky-100">
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <Label className="text-sm font-bold text-sky-800">NÚMERO DE TARJETA</Label>
                          <Input placeholder="1234 5678 9012 3456" className="border-2 border-gray-200 font-medium" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-bold text-sky-800">VENCIMIENTO</Label>
                          <Input placeholder="MM/AA" className="border-2 border-gray-200 font-medium" />
                        </div>
                        <div>
                          <Label className="text-sm font-bold text-sky-800">CVC</Label>
                          <Input placeholder="123" className="border-2 border-gray-200 font-medium" />
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-bold text-sky-800">NOMBRE EN LA TARJETA</Label>
                        <Input placeholder="Usuario Genérico" className="border-2 border-gray-200 font-medium" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-sky-800 sticky top-8 shadow-lg">
              <CardHeader className="bg-sky-800 text-white">
                <CardTitle className="text-xl font-black">RESUMEN DEL PEDIDO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                {/* Product */}
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 bg-sky-100 rounded-lg overflow-hidden border border-sky-200">
                    <img
                      src="/lovable-uploads/Foto5.jpeg"
                      alt="Producto Genérico"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-sky-800 text-sm mb-1">PRODUCTO GENÉRICO</h3>
                    <p className="text-xs text-sky-600 font-medium mb-2">TALLE: M | COLOR: AZUL</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-sky-800">$12.500</span>
                      <span className="text-xs text-gray-500 line-through font-medium">$15.000</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Coupon */}
                <div>
                  <Label className="text-sm font-bold text-sky-800 mb-2 block">CUPÓN DE DESCUENTO</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ingresá tu código"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="border-2 border-gray-200 font-medium"
                    />
                    <Button
                      variant="outline"
                      className="border-sky-800 text-sky-800 hover:bg-sky-50 font-bold px-6 bg-transparent"
                      onClick={applyCoupon}
                    >
                      APLICAR
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-sky-600">SUBTOTAL</span>
                    <span className="font-bold text-sky-800">$15.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-sky-600">DESCUENTO</span>
                    <span className="font-bold text-green-600">-$2.500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-sky-600">ENVÍO</span>
                    <span className="font-bold text-sky-800">
                      {selectedShipping.price === 0 ? "GRATIS" : `$${selectedShipping.price.toLocaleString()}`}
                    </span>
                  </div>

                  <Separator />

                  <div className="flex justify-between">
                    <span className="text-lg font-black text-sky-800">TOTAL</span>
                    <span className="text-lg font-black text-sky-800">
                      ${(12500 + selectedShipping.price).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button className="w-full bg-sky-800 text-white hover:bg-sky-900 font-black py-6 text-lg">
                  FINALIZAR COMPRA
                </Button>

                {/* Security Info */}
                <div className="text-center">
                  <p className="text-xs text-sky-600 font-medium">🔒 Compra 100% segura y protegida</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}