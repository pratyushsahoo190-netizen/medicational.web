import Image from "next/image";

interface DoctorCardProps {
  name: string;
  specialty: string;
  imageSrc?: string;
}

export default function DoctorCard({ name, specialty, imageSrc }: DoctorCardProps) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-background/60 backdrop-blur p-4">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
          {imageSrc ? (
            <Image src={imageSrc} alt={name} fill className="object-cover" />
          ) : (
            <div className="h-full w-full grid place-items-center text-xs text-foreground/50">Photo</div>
          )}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-foreground/70">{specialty}</p>
        </div>
      </div>
    </div>
  );
}