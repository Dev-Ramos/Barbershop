import Header from "./_components/Header";
import SearchInput from "./_components/SearchInput";
import Image from "next/image";
import banner from "@/public/banner.png";
import BookingItem from "./_components/BookingItem";
import { prisma } from "@/lib/prisma";
import { BarbershopItem } from "./_components/BarbershopItem";

export default async function Home() {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: 'asc'
    }
  })
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: 'desc'
    }
  })
  return (
    <main>
      <Header />
      <div className="space-y-4 p-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Agende agora!"
          sizes="100vw"
          className="h-auto w-full"
        />
        <h2 className="text-xs text-foreground font-semibold uppercase">Agendamentos</h2>
        <BookingItem
          barbershopName="Barbearia Vintage"
          serviceName="Corte de Cabelo"
          date={new Date()}
          barbershopImageUrl="https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png"
        />
        <h2 className="text-xs text-foreground font-semibold uppercase">Recomendados</h2>
        <div className="flex gap-4-overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {recommendedBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
        <h2 className="text-xs text-foreground font-semibold uppercase">Populares</h2>
        <div className="flex gap-4-overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>
    </main>
  );
}
