import LargePartnerCard from "../../components/Card/LargeCard/LargePartnerCard";
import MainTitle from "../../components/MainTitle";
import PaperBackground from "../../components/PaperBackground";

export default function Partner() {
  return (
    <>
      <MainTitle 
        shadowText="Parceiros"
        mainText="Parceiros"
      />
      <PaperBackground>
        <LargePartnerCard 
          name="Furioso Energy Drink"
          description="Descubra o máximo poder de furioso! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec aliquet sem. Morbi volutpat neque sed auctor elementum. "
          fullImage="/partner-furioso-full.png"
          image="/partner-furioso.png"
          events={
            [
              {
                name: "Copa Inteli 2024",
                date: "15/10/2021"
              },
              {
                name: "Copa Vôlei 2023",
                date: "15/10/2021"
              },
              {
                name: "Tanterada",
                date: "15/10/2021"
              },
              {
                name: "Covil",
                date: "15/10/2021",
              }
            ]
          }
          impacts={
            [
              {
                name: "+150 Energéticos",
              }, 
              {
                name: "+300 Pessoas",
              },
              {
                name: "+3 Eventos",
              }
            ]
          }
          textButton="Conheça Mais"
          linkButton="https://www.instagram.com/furiosoenergydrink/"
        />
      </PaperBackground>
    </>
  );
}
