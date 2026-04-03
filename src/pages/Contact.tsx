import { useState, FormEvent, ChangeEvent } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Por favor, preencha nome, e-mail e mensagem.');
      return;
    }

    try {
      const newEntry = {
        ...formData,
        createdAt: new Date().toISOString(),
      };

      // 1) backup local (opcional)
      const current = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      const fiveDaysAgo = Date.now() - 5 * 24 * 60 * 60 * 1000;
      const cleaned = current.filter((item) => new Date(item.createdAt).getTime() > fiveDaysAgo);
      localStorage.setItem('contact_submissions', JSON.stringify([...cleaned, newEntry]));

      // 2) envio real (Netlify Function + nodemailer)
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry),
      });

      if (!response.ok) {
        const serverText = await response.text();
        throw new Error(`Erro servidor: ${serverText}`);
      }

      setStatus('Mensagem enviada com sucesso! Advogada será notificada por e-mail.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Erro ao enviar. Tente novamente mais tarde.');
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("https://i.ibb.co/Psfs0fKQ/crie-uma-imagem-que-o-fundo-seja-algo-relacionado-a-balstica-e-depois-destaque-na-frente-a-frase-x3h.png")',
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-75 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-6 hover:text-[#722F37] transition-colors duration-300">Entre em Contato</h1>
              <p className="text-gray-200 mb-8">
                Estou à disposição para auxiliar em seu caso. Entre em contato para uma consulta inicial.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Phone className="h-6 w-6 text-[#722F37] mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#722F37] bg-black bg-opacity-50 px-2 py-1 rounded">Telefone</h3>
                    <p className="text-white">(61) 9 9319-4945</p>
                  </div>
                </div>
                
                <div className="flex items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Mail className="h-6 w-6 text-[#722F37] mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#722F37] bg-black bg-opacity-50 px-2 py-1 rounded">E-mail</h3>
                    <p className="text-white">andradeadvocacia.financeiro@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <MapPin className="h-6 w-6 text-[#722F37] mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#722F37] bg-black bg-opacity-50 px-2 py-1 rounded">Endereço</h3>
                    <p className="text-white"> Águas Claras</p>
                    <p className="text-white"> Brasília - DF</p>
                  </div>
                </div>
                
                <div className="flex items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Clock className="h-6 w-6 text-[#722F37] mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#722F37] bg-black bg-opacity-50 px-2 py-1 rounded">Horário de Atendimento</h3>
                    <p className="text-white">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg border-2 border-[#722F37]">
              <h2 className="text-2xl font-semibold mb-6 text-[#722F37]">Envie uma Mensagem</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {status && (
                  <p className="text-sm text-yellow-300 mb-2">{status}</p>
                )}
                <div>
                  <label className="block text-white mb-2" htmlFor="name">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange('name')}
                    className="w-full px-4 py-2 bg-black bg-opacity-50 border border-[#722F37] rounded-md 
                             text-white focus:outline-none focus:ring-2 focus:ring-[#722F37] focus:border-transparent
                             hover:border-[#8B3741] hover:shadow-lg transform hover:scale-[1.02]
                             transition-all duration-300 ease-in-out"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    className="w-full px-4 py-2 bg-black bg-opacity-50 border border-[#722F37] rounded-md 
                             text-white focus:outline-none focus:ring-2 focus:ring-[#722F37] focus:border-transparent
                             hover:border-[#8B3741] hover:shadow-lg transform hover:scale-[1.02]
                             transition-all duration-300 ease-in-out"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2" htmlFor="phone">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    className="w-full px-4 py-2 bg-black bg-opacity-50 border border-[#722F37] rounded-md 
                             text-white focus:outline-none focus:ring-2 focus:ring-[#722F37] focus:border-transparent
                             hover:border-[#8B3741] hover:shadow-lg transform hover:scale-[1.02]
                             transition-all duration-300 ease-in-out"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2" htmlFor="message">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange('message')}
                    rows={4}
                    className="w-full px-4 py-2 bg-black bg-opacity-50 border border-[#722F37] rounded-md 
                             text-white focus:outline-none focus:ring-2 focus:ring-[#722F37] focus:border-transparent
                             hover:border-[#8B3741] hover:shadow-lg transform hover:scale-[1.02]
                             transition-all duration-300 ease-in-out resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#722F37] text-white py-2 px-4 rounded-md 
                           hover:bg-[#8B3741] transform hover:scale-105 hover:shadow-lg
                           transition-all duration-300 ease-in-out"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=5561993194945&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 p-3 rounded-full 
                 hover:bg-green-600 transform hover:scale-110 transition-all 
                 duration-300 shadow-lg"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </div>
  );
}

export default Contact;