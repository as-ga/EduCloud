import { AuthProvider } from "@/components/auth/auth-provider";
import { Toaster } from "@/components/ui/sonner";

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AuthProvider>
        {children}
        <Toaster />
      </AuthProvider>
    </>
  );
}
export default Providers;
