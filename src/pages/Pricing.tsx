import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#030711] animate-gradient p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:200px_200px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <nav className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
          {/* Unlimited Plan */}
          <div className="relative w-full p-8 rounded-xl bg-black/40 backdrop-blur-xl border border-gray-800 space-y-6">
            <div className="absolute -top-3 -right-3">
              <span className="px-3 py-1 text-xs font-medium bg-green-500 text-white rounded-full shadow-lg">
                Precio de lanzamiento
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Unlimited</h2>
              <div className="flex items-center gap-2">
                <p className="text-xl text-gray-400 line-through">$6<span className="text-sm">/week</span></p>
                <p className="text-3xl font-bold text-white">$3<span className="text-lg font-normal">/week</span></p>
              </div>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li>✓ Acceso ilimitado a Xtarify</li>
              <li>✓ Creación ilimitada de webs</li>
              <li>✓ Sin límites por una semana</li>
            </ul>
            <Button className="w-full bg-white text-black hover:bg-gray-100">
              Pagar ahora
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="w-full p-8 rounded-xl bg-black/40 backdrop-blur-xl border border-gray-800 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Para Empresas</h2>
              <p className="text-3xl font-bold text-white">Personalizado</p>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li>✓ Todas las características de Unlimited</li>
              <li>✓ Soporte prioritario</li>
              <li>✓ Características personalizadas</li>
            </ul>
            <Button className="w-full" disabled>
              Coming Soon!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;