import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { LucideChevronRight, Mail } from "lucide-react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simular login - aquí irá tu lógica real de autenticación
    setTimeout(() => {
      toast({
        title: "Link de acceso enviado",
        description: "Revisa tu correo para continuar con el inicio de sesión",
      });
      setLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    // Aquí irá tu lógica de login con Google
    toast({
      title: "Próximamente",
      description: "El login con Google estará disponible pronto",
    });
  };

  return (
    <div className="w-full max-w-md space-y-8 p-8 rounded-xl bg-black/40 backdrop-blur-xl border border-gray-800">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Bienvenido
        </h1>
        <p className="text-gray-400">Ingresa con tu correo o Google</p>
      </div>

      <form onSubmit={handleEmailLogin} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-900/50 border-gray-800 text-gray-100 placeholder:text-gray-500"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300"
          disabled={loading}
        >
          {loading ? (
            "Enviando..."
          ) : (
            <>
              Continuar
              <LucideChevronRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-gray-500">O continúa con</span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full bg-gray-900/50 border-gray-800 hover:bg-gray-800 text-gray-300"
        onClick={handleGoogleLogin}
      >
        <Mail className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  );
};