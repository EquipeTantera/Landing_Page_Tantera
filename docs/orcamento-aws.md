# Orçamento dos Serviços AWS

Abaixo será explicado o uso de cada serviço, bem como o seu custo para a atlética. Todos os custos foram pensados na maior escalabilidade do site, mas também nas ferramentas que têm o melhor custo-benefício.

## Orçamento EC2 - Backend

A EC2 será responsável por armazenar o backend da aplicação web para a tantera.

**Locação: Instância Compartilhada**

O hardware é alocado de forma dinâmica e pode ser utilizado por múltiplos clientes ao mesmo tempo. É a opção mais econômica e comum para a maioria das aplicações que não possuem requisitos de isolamento de hardware físico. Ideal para workloads de uso geral, como servidores web e APIs, sem a necessidade de maior controle sobre o hardware.

**Sistema Operacional: Ubuntu**

É uma versão do sistema operacional Ubuntu que inclui suporte de longo prazo (LTS) com patches de segurança e suporte adicional para mais pacotes de software, além de opções avançadas de conformidade e segurança. Sendo um dos sistemas mais estáveis e compatíveis com diversas ferramentas de aplicação web, também é amplamente utilizado na comunidade de desenvolvimento, garantindo suporte contínuo e atualizações.

**Cargas de Trabalho: Uso Constante**

A carga de trabalho "uso constante" refere-se a uma instância que permanece ativa 24/7, sem interrupções. Esse tipo de uso é indicado para aplicações que precisam estar sempre disponíveis, como servidores web, bancos de dados ou APIs. Isso é apropriado para serviços que precisam ser acessados de maneira ininterrupta, garantindo alta disponibilidade, assim como o site da atlética.

**Tipo de Instância: t3.medium**

A instância t3.medium é ideal para aplicações com uso constante e exigência moderada de recursos, oferecendo 2 vCPUs e 4 GiB de memória. Esta instância proporciona um equilíbrio entre desempenho e custo, sendo adequada para suportar o backend da aplicação web.

**Armazenamento: SSD (gp3), 20 GiB**

O EBS (Elastic Block Store) foi configurado com um volume de 20 GiB e taxa de throughput de 100 MBps. Esse armazenamento é ideal para garantir a velocidade de leitura e gravação necessária para o backend sem incorrer em altos custos. O uso de gp3 permite maior flexibilidade e melhor controle sobre a performance do volume.

**Opções de Pagamento: Compute Savings Plans (3 anos, pagamento adiantado parcial)**

O Compute Savings Plan oferece descontos de até 66% em comparação com o preço sob demanda, aplicando-se automaticamente ao uso de EC2, Fargate e Lambda. No caso de um compromisso de 3 anos com pagamento adiantado parcial, o custo inicial é menor do que o pagamento adiantado integral, proporcionando um bom custo-benefício para serviços de uso constante.

**Associação com Elastic IP**

Um Elastic IP é um endereço IP estático e público que pode ser atribuído à instância EC2. Ele permite que a instância tenha um IP fixo, mesmo que seja interrompida e reiniciada. Isso facilita o gerenciamento de servidores web e outros serviços que precisam de um endereço público consistente.

### Custos Totais - EC2

- **Custo Inicial Total:** 7.81 USD (pagamento adiantado parcial para o Compute Savings Plan de 3 anos).
- **Custo Mensal Total:** 9.41 USD (graças ao plano de pagamento adiantado parcial e economias do Savings Plan).

---

## Orçamento EC2 - Banco de dados

Tendo em vista os custos do EC2 para o backend, precisamos armazenar o banco de dados, e para isso a tantera optou por utilizar uma instância EC2 como servidor para o banco de dados PostgreSQL, ao invés de RDS, para reduzir custos iniciais.

### Especificações

- **Tipo de Instância:** t3.micro
- **Sistema Operacional:** Ubuntu
- **Modelo de Preço:** Compute Savings Plan (3 anos, Partial UpFront)
- **Armazenamento:** SSD (gp3), 20 GiB, 100 MBps
- **Implantação:** Single-AZ (Zona única)
- **Backup:** Não há snapshots configurados.

### PostgreSQL:

O PostgreSQL foi escolhido como o banco de dados relacional, conhecido por sua robustez e capacidade de lidar com grandes volumes de dados. Ele é ideal para o backend, que precisa de uma base de dados consistente e eficiente para armazenar informações críticas da aplicação.

### Multi-AZ:

Embora o Multi-AZ proporcione alta disponibilidade, a escolha foi feita para uma implantação Single-AZ, uma vez que o site está em fase de desenvolvimento, onde o custo é um fator mais importante que a redundância.

### Armazenamento: SSD (gp3), 20 GiB

O armazenamento foi provisionado em 20 GiB com a opção gp3, que oferece uma boa performance para leitura e gravação a um custo acessível. A taxa de throughput de 100 MBps é adequada para suportar as cargas de trabalho esperadas.

### Custos Totais - EC2 para Banco de Dados

- **Custo Inicial Total:** 2.41 USD (pagamento adiantado parcial para o Compute Savings Plan de 3 anos).
- **Custo Mensal Total:** 4.01 USD (graças ao plano de pagamento adiantado parcial e economias do Savings Plan).

---

## Custos Totais

- **Custo Inicial Total (EC2 Backend + EC2 Banco de Dados):** 367,92 USD 
- **Custo Mensal Total (EC2 Backend + EC2 Banco de Dados):** 13,42 USD
- **Custo Total em 12 Meses:** 528,96 USD (incluindo custos iniciais).
