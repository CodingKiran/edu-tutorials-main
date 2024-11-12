import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { signIn } from "next-auth/react";

interface AlertProps {
  isDialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
}

export default function LoginDialogOpen({
  isDialogOpen,
  setDialogOpen,
}: AlertProps) {
  const handleLogin = () => {
    signIn("google");
    setDialogOpen(false);
  };

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={() => setDialogOpen(false)}>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Login Required</AlertDialogTitle>
            <AlertDialogDescription>
              You need to be logged in to proceed with the payment. Would you
              like to log in now?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end">
            <AlertDialogCancel onClick={() => setDialogOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleLogin}>Log In</AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
}
