import Header from "./_components/Header";
import SearchInput from "./_components/SearchInput";
import Image from "next/image";
import banner from "@/public/banner.png";
import BookingItem from "./_components/BookingItem";
import { prisma } from "@/lib/prisma";
import { BarbershopItem } from "./_components/BarbershopItem";
import Footer from "@/app/_components/footer";
import {
  PageContainer,
  PageSection,
  PageSectionScroller,
  PageSectionTitle,
} from "./_components/ui/page";

export default async function Home() {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc",
    },
  });
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
  return (
    <main>
      <Header />
      <PageContainer>
        <SearchInput />
        <Image
          src={banner}
          alt="Agende agora!"
          sizes="100vw"
          className="h-auto w-full"
        />
        <PageSection>
          <PageSectionTitle>Agendamentos</PageSectionTitle>
          <BookingItem
            barbershopName="Barbearia Vintage"
            serviceName="Corte de Cabelo"
            date={new Date()}
            barbershopImageUrl="https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png"
          />
        </PageSection>
        <PageSection>
          <PageSectionTitle>Recomendados</PageSectionTitle>
          <PageSectionScroller>
            {recommendedBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>
        <PageSection>
          <PageSectionTitle>Populares</PageSectionTitle>
          <PageSectionScroller>
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>
      </PageContainer>
      <Footer />
    </main>
  );
}
