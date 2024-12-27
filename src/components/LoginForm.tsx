import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Github, Mail } from "lucide-react";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleGithubLogin = () => {
    toast({
      title: "Próximamente",
      description: "El login con Github estará disponible pronto",
    });
  };

  const handleGoogleLogin = () => {
    toast({
      title: "Próximamente",
      description: "El login con Google estará disponible pronto",
    });
  };

  return (
    <div className="w-full max-w-md space-y-8 p-8 rounded-xl bg-black/40 backdrop-blur-xl border border-gray-800 relative">
      <Button 
        variant="ghost" 
        className="absolute left-2 top-2 text-gray-400 hover:text-white"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Bienvenido a Xtarify AI
        </h1>
        <p className="text-gray-400">Regístrate para comenzar</p>
      </div>

      <div className="space-y-4">
        <Button
          type="button"
          variant="outline"
          className="w-full bg-gray-900/50 border-gray-800 hover:bg-gray-800 text-gray-300"
          onClick={handleGoogleLogin}
        >
          <Mail className="mr-2 h-5 w-5" />
          Continuar con Google
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full bg-gray-900/50 border-gray-800 hover:bg-gray-800 text-gray-300"
          onClick={handleGithubLogin}
        >
          <Github className="mr-2 h-5 w-5" />
          Continuar con Github
        </Button>
      </div>
    </div>
  );
};