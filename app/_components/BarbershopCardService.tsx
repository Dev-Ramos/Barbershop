import Image from "next/image";
import { BarbershopService } from "../generated/prisma/client";
import { Button } from "./ui/button";

interface BarbershopCardServiceProps {
  service: BarbershopService;
}
const BarbershopCardService = ({ service }: BarbershopCardServiceProps) => {
  return (
    <div className="border-border bg-card flex h-full w-full items-center justify-center gap-3 rounded-2xl border border-solid p-3">
      <div className="relative size-[110px] shrink-0 overflow-hidden rounded-[10px]">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          className="rounded-[10px] object-cover"
        />
      </div>
      <div className="flex grow basis-0 flex-row items-center self-stretch">
        <div className="relative flex h-full min-h-0 min-w-0 grow basis-0 flex-col items-start justify-between">
          <div className="flex h-[67.5px] w-full flex-col items-start gap-1 text-sm leading-[1.4]">
            <p className="text-card-foreground w-full font-bold">
              {service.name}
            </p>
            <p className="text-muted-foreground w-full font-normal">
              {service.description}
            </p>
          </div>

          <div className="flex w-full items-center justify-between">
            <p className="text-card-foreground text-sm leading-[1.4] font-bold whitespace-pre">
              {`R$ ${service.priceInCents / 100},00`}
            </p>
            <Button className="rounded-full px-4 py-2">Reservar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarbershopCardService;
