import Image from "next/image";
import { Barbershop } from "../generated/prisma/client";

interface BarbershopItemProps {
  barbershop: Barbershop;
}
export const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <div className="relative min-h-[200px] min-w-[300px] rounded-xl">
      <div className="absolute top-0 left-0 h-full w-full bg-linear-to-t from-black to-transparent z-10 rounded-lg"></div>
      <Image
        src={barbershop.imageUrl}
        alt={barbershop.name}
        fill //Garante que a imagem ocupe o espaço da div, pois tem dimensões fixas
        className="rounded-xl object-cover"
      />
      <div className="absolute right-0 bottom-0 left-0 z-20 p-4">
        <h3 className="text-background text-lg font-bold">{barbershop.name}</h3>
        <p className="text-background text-xs">{barbershop.address}</p>
      </div>
    </div>
  );
};
