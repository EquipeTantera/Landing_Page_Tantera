# Criação de Instância EC2 e RDS na AWS com Configurações Padrões

## 1. Criação de uma Instância EC2

### 1.1. Acessando o Console EC2

1. Faça login no [Console de Gerenciamento da AWS](https://aws.amazon.com/).
2. No menu superior, selecione **Services** e, em seguida, **EC2** na seção de serviços de computação.

### 1.2. Iniciando a Criação da Instância

1. Clique no botão **Launch Instance**.
2. Dê um nome à sua instância, como “EC2-Instancia-Padrao”.

### 1.3. Escolha da Imagem de Máquina Amazon (AMI)

1. Selecione uma AMI, como **Amazon Linux 2** (configuração padrão e gratuita).
2. Caso precise de outra distribuição, como Ubuntu ou Windows, escolha conforme sua necessidade.

### 1.4. Escolha do Tipo de Instância

1. Selecione o tipo de instância **t2.micro**, que está incluído no nível gratuito e é adequado pro site da atlética (caso precise aumentar, podemos fazer isso depois)

### 1.5. Configuração de Chave de Acesso (Key Pair)

1. Selecione uma chave existente ou crie uma nova Key Pair para acesso SSH à instância.
2. Faça o download do arquivo `.pem` e guarde-o em um local seguro (pasta Downloads)

### 1.6. Configuração de Rede e Grupos de Segurança

1. Escolha a VPC e Subnet padrões (Default VPC).
2. Crie um novo Security Group ou use um existente. Para uma configuração padrão:
   - Libere a porta 22 (SSH) para o seu endereço IP.
   - Libere a porta 80 (HTTP) para acesso público.

### 1.7. Revisão e Criação

1. Revise todas as configurações.
2. Clique em **Launch Instance** e aguarde até que a instância seja inicializada.

### 1.8. Conexão à Instância

1. Após o estado da instância mudar para “Running”, clique em **Connect**.
2. Siga as instruções para conectar via SSH usando a chave `.pem` (como mostrei na reunião)

## 2. Criação de um Banco de Dados RDS

### 2.1. Acessando o Console RDS

1. No Console da AWS, selecione **Services** e, em seguida, **RDS**.

### 2.2. Iniciando a Criação do Banco de Dados

1. Clique em **Create database**.

### 2.3. Método de Criação

1. Escolha o método de criação **Standard create**.

### 2.4. Seleção do Motor de Banco de Dados

1. Selecione o motor de banco de dados, como **MySQL**, **PostgreSQL**, ou outro de sua preferência (utilizamos o Postgresql na tantech)

### 2.5. Definição das Configurações de Banco de Dados

1. **Templates**: Selecione o template **Free tier** para evitar cobranças adicionais.
2. **DB Instance Class**: Selecione `db.t2.micro` para uso gratuito (podemos aumentar depois, caso precise)
3. **Storage**: Use as configurações padrão, com 20 GiB de armazenamento padrão.

### 2.6. Configuração de Credenciais e Banco de Dados

1. Defina um nome de usuário e senha para o banco de dados.
2. No campo “DB instance identifier”, insira um nome como “RDS-Instancia-Padrao”.

### 2.7. Configurações de Rede

1. Use a VPC padrão e defina o banco como publicamente acessível, se necessário.
2. Escolha o grupo de segurança que permite a comunicação com a instância EC2 (libere a porta 4321 para Postgresql ou conforme o banco escolhido).

### 2.8. Revisão e Criação

1. Revise todas as configurações.
2. Clique em **Create database** e aguarde a inicialização do banco.

Abaixo está um vídeo realizando o passo a passo para a criação do EC2 e RDS (o vídeo está sem som msm eheh)

<div align="center">

<sub>Vídeo 01: Demonstração prática de criação de instância EC2 e RDS</sub>

[Assista ao vídeo - deixe o like :)](https://drive.google.com/drive/folders/1bPhuXwScS-OXeQx0HeDUxxhDw6g8cnAp?usp=sharing) 

<sup>Fonte: Vídeo produzido pelos próprios autores (2024).</sup>

</div>
