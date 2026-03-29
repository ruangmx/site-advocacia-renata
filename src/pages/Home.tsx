import { Shield, Gavel, UserCheck, Scale, BookOpen, Landmark, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const services = [
    {
      icon: Shield,
      title: "Defesa em Processo Penal",
      description: "Representação em inquéritos policiais, ações penais e elaboração de recursos e habeas corpus."
    },
    {
      icon: Scale,
      title: "Consultoria Jurídica Criminal",
      description: "Assessoria preventiva, consultoria em compliance e análise de risco criminal."
    },
    {
      icon: Landmark,
      title: "Direito Penal Econômico",
      description: "Defesa em casos de crimes financeiros, corrupção e lavagem de dinheiro."
    },
    {
      icon: Gavel,
      title: "Crimes Contra a Pessoa",
      description: "Defesa em casos de homicídio, lesão corporal e violência doméstica."
    },
    {
      icon: BookOpen,
      title: "Direito Penal Ambiental",
      description: "Defesa em casos de crimes ambientais e consultoria em legislação ambiental."
    },
    {
      icon: UserCheck,
      title: "Direito Penal Digital",
      description: "Defesa em casos de crimes cibernéticos e assessoria em proteção de dados."
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
                Somos especialistas em Direito Penal, dedicados a fornecer defesa jurídica de excelência para nossos clientes. 
                Com uma equipe altamente qualificada e experiente, estamos comprometidos em proteger os direitos e interesses 
                daqueles que enfrentam acusações criminais.
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
                  Fornecer defesa jurídica de excelência, protegendo os direitos e liberdades dos nossos clientes com ética, 
                  integridade e competência. Comprometemo-nos a oferecer um serviço personalizado, estratégico e dedicado em 
                  todas as fases do processo criminal, garantindo um tratamento justo e igualitário para todos.
                </p>
              </div>

              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa Visão</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                  Ser reconhecido como um dos principais escritórios de advocacia criminal do país, conhecido por nossa paixão 
                  pela justiça, defesa intransigente dos direitos dos nossos clientes e nossa contribuição significativa para 
                  a evolução e aprimoramento do Direito Penal.
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