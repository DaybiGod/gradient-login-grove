import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Github } from "lucide-react";

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
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
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