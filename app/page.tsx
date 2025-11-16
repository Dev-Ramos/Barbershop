import Header from "./_components/Header";
import SearchInput from "./_components/SearchInput";
import Image from "next/image";
import banner from "@/public/banner.png";
import BookingItem from "./_components/BookingItem";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="space-y-4 px-5">
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
      </div>
    </main>
  );
}
