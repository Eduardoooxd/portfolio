import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("w-full h-full p-6 lg:container", className)}>
      {children}
    </div>
  );
}
