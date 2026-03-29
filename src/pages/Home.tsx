import { Shield, Gavel, UserCheck, Scale, BookOpen, Landmark, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const services = [
    {
      icon: Gavel,
      title: "Defesa Especial em Tribunal do Júri",
      description: "Atuação estratégica e humanizada em julgamentos por júri. Preparação minuciosa de defesa e articulação com todas as instâncias judiciais em Brasília."
    },
    {
      icon: Scale,
      title: "Audiências de Custódia",
      description: "Defesa especializada em audiências de custódia, garantindo preservação de direitos e liberdade processual. Atuação imediata e incisiva nas primeiras horas de prisão."
    },
    {
      icon: Landmark,
      title: "Crimes Financeiros e Econômicos",
      description: "Defesa criminal especializada em fraude, lavagem de dinheiro, evasão de divisas e crimes contra a administração pública nos tribunais federais e estaduais."
    },
    {
      icon: Shield,
      title: "Defesa Criminal Geral",
      description: "Representação em inquéritos policiais, ações penais, recursos e habeas corpus. Atuação estratégica em todas as fases do processo penal."
    },
    {
      icon: BookOpen,
      title: "Consultoria Criminal Preventiva",
      description: "Assessoria preventiva para empresas e pessoas físicas, análise de risco criminal e compliance com legislação penal vigente."
    },
    {
      icon: UserCheck,
      title: "Defesa em Crimes Contra a Pessoa",
      description: "Atuação em crimes graves como homicídio, lesão corporal gravíssima e violência doméstica, com abordagem humanizada e eficaz."
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: 'url("https://i.ibb.co/fVgmy2mc/cabe-alho-e-rodap.jpg")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-60">
        {/* Hero Section */}
        <div className="min-h-[600px] flex items-center py-20 px-4 md:px-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">RENATA ANDRADE</h1>
              <h2 className="text-2xl md:text-3xl mb-6">Advogados e Associados</h2>
              <p className="text-lg md:text-xl mb-8 max-w-3xl">
                Ofertamos Defesa Criminal Especializada em Brasília, com atuação estratégica em Tribunal do Júri, Audiências de Custódia 
                e todas as instâncias judiciais. Nossa equipe altamente qualificada está comprometida em proteger seus direitos com ética, 
                competência e dedicação em cada caso.
              </p>
              <Link
                to="/contato"
                className="bg-[#722F37] text-white px-8 py-3 rounded-md text-lg font-medium 
                         hover:bg-[#5C262D] transform hover:scale-105 transition-all duration-300 
                         hover:shadow-lg inline-block"
              >
                Solicite uma Consulta
              </Link>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-16 px-4 md:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/90 rounded-lg p-4 md:p-8 mb-16">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa Missão</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                  Fornecer Defesa Criminal Especializada de excelência, protegendo os direitos e liberdades de nossos clientes em Brasília. 
                  Atuamos com ética, integridade e competência técnica em todas as fases do processo penal, desde inquéritos policiais até 
                  recursos no Superior Tribunal de Justiça, oferecendo estratégia personalizada e defesa intransigente.
                </p>
              </div>

              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa Visão</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                  Ser reconhecido em Brasília como referência em Defesa Criminal Especializada, com atuação estratégica em Tribunal do Júri 
                  e processo penal complexo. Buscamos ser sinônimo de excelência técnica, defesa intransigente e compromisso com a justiça, 
                  contribuindo para a evolução do Direito Penal no Distrito Federal.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Áreas de Atuação</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-[#722F37] hover:border-[#8B3741] transform hover:scale-105 transition-all duration-300 shadow-lg">
                      <service.icon className="h-12 w-12 text-[#722F37] mb-4" />
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
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
    </div>
  );
}

export default Home;