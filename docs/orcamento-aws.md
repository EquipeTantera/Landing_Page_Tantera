# Orçamento dos serviços AWS
Abaixo será explicado o uso de cada serviço, bem como o seu custo para a atlética. Todos os custos foram pensando na maior escalabilidade do site, mas também nas ferramentas que tem o melhor custo benefício. 

## Orçamento EC2

**Locação: Instância Compartilhada**

O hardware é alocado de forma dinâmica e pode ser utilizado por múltiplos clientes ao mesmo tempo. É a opção mais econômica e comum para a maioria das aplicações que não possuem requisitos de isolamento de hardware físico. Ideal para workloads de uso geral, como servidores web e APIs, sem a necessidade de maior controle sobre o hardware.

**Sistema operacional: Ubuntu**

É uma versão do sistema operacional Ubuntu que inclui suporte de longo prazo (LTS) com patches de segurança e suporte adicional para mais pacotes de software, além de opções avançadas de conformidade e segurança. Sendo um dos sistemas mais estáveis e compatíveis com diversas ferramentas de aplicação web. Também é amplamente utilizado na comunidade de desenvolvimento, garantindo suporte contínuo e atualizações.

**Cargas de trabalho: Uso Constante**

A carga de trabalho "uso constante" refere-se a uma instância que permanece ativa 24/7, sem interrupções. Esse tipo de uso é indicado para aplicações que precisam estar sempre disponíveis, como servidores web, bancos de dados ou APIs. Isso é apropriado para serviços que precisam ser acessados de maneira ininterrupta, garantindo alta disponibilidade, assim como o site da atlética.

**Tipo de instância: t2.micro**

A t2.micro é uma instância de uso geral com 1 vCPU e 1 GiB de memória. Ela é qualificada para o Free Tier da AWS no primeiro ano e é ideal para cargas de trabalho leves e de baixo consumo de recursos. Essa instância é adequada para workloads pequenos ou de desenvolvimento, como sites simples, APIs ou bancos de dados leves. Oferece um ótimo equilíbrio entre custo e desempenho, além de estar incluída no nível gratuito da AWS. Esse tipo de instância foi escolhido inicialmente por conta do seu primeiro ano gratuito.

**Opções de pagamento: Compute Savings Plans (1 ano, pagamento adiantado integral)**

O Compute Savings Plan oferece até 66% de desconto em comparação com o preço sob demanda, aplicando-se automaticamente ao uso de EC2, Fargate e Lambda. No caso de um compromisso de 1 ano com pagamento adiantado integral, o custo inicial é pago à vista, reduzindo os custos mensais ao longo do tempo. Como a instância estará em uso contínuo, o plano de economia maximiza o valor investido, tornando a solução mais acessível no longo prazo.

**Associação com Elastic IP**

Um Elastic IP é um endereço IP estático e público que pode ser atribuído à instância EC2. Ele permite que a instância tenha um IP fixo, mesmo que seja interrompida e reiniciada. Isso facilita o gerenciamento de servidores web e outros serviços que precisam de um endereço público consistente.


### Custos totais
- *Custo inicial total:* 85,41 USD (pagamento adiantado para o Compute Savings Plan).

- *Custo mensal total:* 2,37 USD (graças ao plano de pagamento adiantado e economias do Savings Plan).

