import React from "react";
import MainTitle from "../../components/MainTitle";
import PaperBackground from "../../components/PaperBackground";
import LargeMembershipPlanCard from "../../components/Card/LargeCard/LargeMembershipPlanCard";

export default function MembershipPlan() {
  return (
    <>
      <MainTitle 
        shadowText="Seja sócio"
        mainText="Planos de Sócios"
      />

      <PaperBackground>
        {/* Componente de cartão grande de plano de sócio */}
        <LargeMembershipPlanCard 
          name="Plano de Sócio"
          description="Descrição do plano de sócio"
          fullImage="https://via.placeholder.com/150"
          advantages={[
            "Vantagem 1",
            "Vantagem 2",
            "Vantagem 3",
          ]}
          paymentTypes={[
            "Tipo de pagamento 1",
            "Tipo de pagamento 2",
            "Tipo de pagamento 3",
          ]}
          price="100,00"
        />
      </PaperBackground>
    </>
  );
}