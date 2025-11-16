import BarbershopCardService from "@/app/_components/BarbershopCardService";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import {
  PageContainer,
  PageSection,
  PageSectionTitle,
} from "@/app/_components/ui/page";
import { Separator } from "@/app/_components/ui/separator";
import { prisma } from "@/lib/prisma";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BarbershopPage = async (props: PageProps<"/barbershops/[id]">) => {
  const { id } = await props.params;
  const barbershop = await prisma.barbershop.findUnique({
    where: {
      id,
    },
  });
  const barbershopServices = await prisma.barbershopService.findMany({
    where: {
      barbershopId: id
    }
  })
  if (!barbershop) notFound();
  return (
    <main className="flex size-full flex-col items-start overflow-clip">
      <div className="relative h-[297px] w-full">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 flex w-full items-baseline gap-[91px] px-5 pt-6 pb-0">
          <Button
            size="icon"
            variant="secondary"
            className="overflow-clip rounded-full"
            asChild
          >
            <Link href="/">
              <ChevronLeft className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="bg-background z-50 -mt-6 h-auto w-full rounded-t-3xl">
        <PageContainer>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src={barbershop.imageUrl} />
              </Avatar>
              <h1 className="text-xl font-semibold">{barbershop.name}</h1>
            </div>
            <p className="text-muted-foreground pl-1">{barbershop.address}</p>
          </div>
          <Separator />
          <PageSection>
            <PageSectionTitle>Sobre nós</PageSectionTitle>
            <p className="text-sm">
              Bem-vindo à Vintage Barber, onde tradição encontra estilo. Nossa
              equipe de mestres barbeiros transforma cortes de cabelo e barbas
              em obras de arte. Em um ambiente acolhedor, promovemos confiança,
              estilo e uma comunidade unida.
            </p>
          </PageSection>
          <Separator />
          <PageSection>
            <PageSectionTitle>Serviços</PageSectionTitle>
            {barbershopServices.map((service) => (
              <BarbershopCardService key={service.id} service={service}/>
            ))}
          </PageSection>
        </PageContainer>
      </div>
    </main>
  );
};

export default BarbershopPage;
