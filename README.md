# Chatbot WhatsApp

Este projeto consiste em um chatbot simples para WhatsApp, implementado utilizando a biblioteca `whatsapp-web.js`. O bot permite interação básica com o usuário, oferecendo um menu com duas opções e respostas automáticas.
<br> <br>
**Observação:** Este projeto é apenas um modelo de exemplo, simples e genérico. A configuração e personalização do chatbot variam de acordo com as necessidades da empresa, cliente ou aplicação específica. Para um uso real, será necessário adaptar o código com base nos serviços oferecidos, opções de interação e integração com sistemas externos.

## Índice
- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Exemplo de Uso](#exemplo-de-uso)

## Descrição do Projeto
O objetivo principal deste projeto é criar um chatbot para WhatsApp que possa interagir com os usuários de forma simples e automatizada. O bot oferece um menu com duas opções e responde conforme a escolha do usuário.

## Funcionalidades
### Menu de Opções
- **1 | Solicitar uma opção**: Resposta automatizada para o processo de solicitação.
- **2 | Encerrar atendimento**: Finaliza a conversa com uma mensagem de agradecimento.

### Funcionalidade de Encerramento
Ao escolher a opção "Encerrar atendimento", o bot agradece o contato e encerra a conversa, fechando a sessão do WhatsApp Web.

## Estrutura do Projeto
A estrutura de pastas e arquivos está organizada da seguinte forma:

```
src/
├── bot/
│   ├── chatbot.js       # Código principal do chatbot
└── README.md           # Documentação do projeto
```

## Tecnologias Utilizadas
- **Linguagem**: JavaScript (Node.js)
- **Biblioteca**: `whatsapp-web.js`
- **Ferramenta**: WhatsApp Web (para interação com o WhatsApp)
- **Paradigma**: Programação Orientada a Objetos (POO)

## Exemplo de Uso
1. Execute o projeto utilizando Node.js.
2. Após iniciar o bot, escaneie o QR Code gerado no terminal.
3. O bot estará pronto para interagir com os usuários no WhatsApp.
4. Ao enviar mensagens ao bot, ele responderá automaticamente de acordo com as opções do menu:
   - Opção 1: Solicitar uma opção.
   - Opção 2: Encerrar atendimento.
