const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// após isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

// Lidar com falha de autenticação
client.on('auth_failure', () => {
    console.log('Falha na autenticação. Tente escanear novamente o QR Code.');
});

// Inicialização do bot para responder às mensagens
client.on("message", async (msg) => {
    // Verificação inicial para responder ao usuário
    if (
        msg.body.match(
            /(menu|Menu|oi|Oi|Olá|olá|ola|Ola|bom dia|Bom dia|boa tarde|Boa tarde|boa noite|Boa Noite|atendimento|Atendimento|iniciar|Iniciar|começar|Começar|ajuda|Ajuda|suporte|Suporte)/i
        ) &&
        msg.from.endsWith("@c.us")
    ) {
        const chat = await msg.getChat();
  
        await chat.sendStateTyping();
        const contact = await msg.getContact();
        const name = contact.pushname || contact.name || "Cliente"; // Tentando capturar nome de outras formas
  
        await client.sendMessage(
            msg.from,
            `Olá! ${name.split(" ")[0]}, como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n` +
            "1 | Solicitar uma opção\n" +
            "2 | Encerrar atendimento\n\n" +
            "Estou pronto para ajudar!"
        );
        return; // Evita a execução do código abaixo
    }

    // Verificação das opções escolhidas
    if (msg.body && msg.from.endsWith("@c.us")) {
        const chat = await msg.getChat();

        if (/^(1|1\.|1-|um|Um|UM|one|One)$/i.test(msg.body)) {
            await chat.sendStateTyping();
            await client.sendMessage(
                msg.from,
                "Ótima escolha! Podemos seguir com o processo conforme a opção escolhida."
            );
        } else if (/^(2|2\.|2-|encerrar|Encerrar|encerrar atendimento)$/i.test(msg.body)) {
            await chat.sendStateTyping();
            await client.sendMessage(
                msg.from,
                "Agradecemos pelo seu contato! Caso precise de mais alguma coisa, estarei aqui para te ajudar. Até logo!"
            );
            client.close(); // Fecha a conexão com o WhatsApp Web
        } else {
            await chat.sendStateTyping();
            await client.sendMessage(
                msg.from,
                "Não entendi direito o que quis dizer com isso, mas posso tentar novamente.\n\n" +
                "Escolha uma das opções a seguir e envie o número correspondente:\n\n" +
                "1 | Solicitar uma opção\n" +
                "2 | Encerrar atendimento\n\n" +
                "Estou pronto para ajudar!"
            );
        }
    }
});

// Inicialização do cliente WhatsApp
client.initialize();
