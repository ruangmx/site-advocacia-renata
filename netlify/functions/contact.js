const { Resend } = require('resend');

// configure env var no Netlify: RESEND_API_KEY
// valor de exemplo (não comitar a chave em código): re_c7dn62TR_L3CH2hqWHfydxG3BvmWJgNRg
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
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
  if (!name || !email || !message) {
    return { statusCode: 400, body: 'Nome, e-mail e mensagem são obrigatórios.' };
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'andradeadvocacia.financeiro@gmail.com',
      subject: `Novo contato de ${name}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>E-mail:</strong> ${email}</p>
             <p><strong>Telefone:</strong> ${phone || '-'}</p>
             <p><strong>Mensagem:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error('Erro ao enviar e-mail via Resend:', error);
    return { statusCode: 500, body: 'Falha ao enviar e-mail' };
  }
};