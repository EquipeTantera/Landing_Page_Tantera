# Orçamento dos serviços AWS
Abaixo será explicado o uso de cada serviço, bem como o seu custo para a atlética. Todos os custos foram pensando na maior escalabilidade do site, mas também nas ferramentas que tem o melhor custo benefício. 

## Orçamento EC2
A EC2 irá armazenar o backend da aplicação web para a tantera.

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


### Custos totais - EC2
- *Custo inicial total:* 85,41 USD (pagamento adiantado para o Compute Savings Plan).

- *Custo mensal total:* 2,37 USD (graças ao plano de pagamento adiantado e economias do Savings Plan).

---

## Orçamento RDS e EC2
Tendo em vista os custos da EC2 para o backend, precisamos armazenar o banco de dados e para isso a Tantech optou por continuar utilizando os serviços AWS.

**Especificações**
- *Tipo de Banco de Dados:* PostgreSQL 16.3-R2
- *Modelo de Preço:* Reserved (3 anos, Partial UpFront)
- *Armazenamento:* 100 GiB SSD com IOPS provisionado (io2)
- *IOPS:* 3000
- *Implantação:* Single-AZ (Zona única)
- *RDS Proxy:* Habilitado
- *Insights de Performance:* 7 dias (nível gratuito)
- *Backups Automáticos:* 7 dias

**PostgreSQL:**

O PostgreSQL foi escolhido como o banco de dados relacional, conhecido por sua robustez e capacidade de lidar com grandes volumes de dados. Ele é ideal para o backend do Strapi, que precisa de uma base de dados consistente e eficiente para armazenar os dados da atlética.

**Multi-AZ:** 

Embora o Multi-AZ proporcione alta disponibilidade, a escolha foi feita para uma implantação Single-AZ, uma vez que o site está em fase de desenvolvimento, onde o custo é um fator mais importante que a redundância.

**IOPS Provisionado (io2):**

O uso de armazenamento SSD com IOPS provisionado foi essencial para garantir alto desempenho do banco de dados, com latência baixa. 3000 IOPS são mais que suficientes para manter a agilidade nas consultas ao banco, o que impacta diretamente na velocidade de carregamento de dados no site.

**RDS Proxy:**

Habilitar o RDS Proxy foi uma decisão estratégica para melhorar o gerenciamento de conexões com o banco de dados, especialmente em ambientes de alta concorrência. Isso é importante para evitar gargalos no acesso ao banco de dados quando há múltiplos usuários acessando o site simultaneamente.

**Backups Automáticos:**

A retenção de backups por 7 dias garante que, em caso de falhas, o banco de dados possa ser restaurado a um ponto anterior recente, proporcionando resiliência.

### Custos totais - RDS e EC2

- *Custo Inicial Total (Partial UpFront):* 114,00 USD
- *Custo Mensal Total:* 137,54 USD


## Custos Totais
- *Custo Inicial Total (EC2 + RDS):* 199,41 USD
- *Custo Mensal Total (EC2 + RDS):* 139,91 USD
- *Custo Total em 12 Meses:* 1.878,33 USD (incluindo custos iniciais)
