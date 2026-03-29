import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

function Contact() {
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
                    <h3 className="font-semibold text-[#722F37]">Telefone</h3>
                    <p className="text-white">(61) 9 9319-4945</p>
                  </div>
                </div>
                
                <div className="flex items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Mail className="h-6 w-6 text-[#722F37] mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#722F37]">E-mail</h3>
                    <p className="text-white">contato@renataandrade.adv.br</p>
                  </div>
                </div>
                
                <div className="flex items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <MapPin className="h-6 w-6 text-[#722F37] mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#722F37]">Endereço</h3>
                    <p className="text-white"> Águas Claras</p>
                    <p className="text-white"> Brasília - DF</p>
                  </div>
                </div>
                
                <div className="flex items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Clock className="h-6 w-6 text-[#722F37] mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#722F37]">Horário de Atendimento</h3>
                    <p className="text-white">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg border-2 border-[#722F37]">
              <h2 className="text-2xl font-semibold mb-6 text-[#722F37]">Envie uma Mensagem</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-white mb-2" htmlFor="name">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
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