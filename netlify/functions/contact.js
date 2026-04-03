const { Resend } = require('resend');

// O Netlify buscará automaticamente o valor de RESEND_API_KEY das variáveis de ambiente que configuramos no painel.
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  // Garante que apenas requisições POST sejam aceitas
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch (error) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { name, email, phone, message } = data;
  
  // Validação básica
  if (!name || !email || !message) {
    return { statusCode: 400, body: 'Nome, e-mail e mensagem são obrigatórios.' };
  }

  try {
    // Envio do e-mail usando o Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'andradeadvocacia.financeiro@gmail.com',
      subject: `Novo contato de ${name}`,
      html: `
        <h3>Novo contato pelo site</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || '-'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return { 
      statusCode: 200, 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true }) 
    };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return { statusCode: 500, body: 'Falha ao enviar e-mail' };
  }
};