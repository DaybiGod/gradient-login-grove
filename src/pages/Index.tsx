import { LoginForm } from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#030711] animate-gradient p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:200px_200px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <nav className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-end p-4">
        <Link to="/pricing">
          <Button variant="outline" className="bg-black/40 border-gray-800 hover:bg-gray-800 text-gray-300">
            Pricing
          </Button>
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;