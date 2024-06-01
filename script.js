async function sendContact(ev) {
    ev.preventDefault()

    console.log('BUTTON')

    let sujet = document.getElementById('sujet').value;
    let senderMessage = document.getElementById('messageInput').value;

    if(sujet = ''){
        alert('Ecrit quelque chose au moins')
    }
    const webhookBody = {
        embeds: [{
            fields: [
                { name: sujet, value: senderMessage }
            ]
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1246439941358223420/w3ym8DpDW0JBSVlT7jJzIYqrQIL5_DvXUZC5tgdq8PikZ4cyNV1tO37HgCyX_XzMBoIn';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        document.getElementById('messageInput').value = ''
        alert('Message envoyé !')

    } else {
        alert('bon là ya un soucis');
    }
}