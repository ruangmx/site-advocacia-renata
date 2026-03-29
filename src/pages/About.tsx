import { useState, useEffect, useRef } from 'react';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    "https://i.ibb.co/mVtcXgVF/Whats-App-Image-2025-03-26-at-09-06-05.jpg",
    "https://i.ibb.co/ymyhzrMc/Whats-App-Image-2025-03-27-at-09-56-10.jpg",
    "https://i.ibb.co/7JJhwwFB/Whats-App-Image-2025-03-27-at-09-56-08.jpg"
  ];

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = window.setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const certifications = [
    {
      icon: GraduationCap,
      title: "Pós-graduada pela escola da magistratura - TJDFT",
      description: "Especialização em Direito Penal e Processo Penal"
    },
    {
      icon: Award,
      title: "Curso de Investigação Defensiva",
      description: "Perícia médica, psicologia forense, provas digitais, perícia em balística e local do crime – RJ"
    },
    {
      icon: BookOpen,
      title: "Perícia Criminal",
      description: "Toxicologia Forense – 9 horas, Helix Concursos"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-75 py-16 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div 
              className="relative h-[600px] overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Renata Andrade ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
                    currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-6">Sobre o Escritório</h1>
              <p className="mb-6">
                O Escritório é composto pela atuação da sócia e fundadora Renata Andrade, 
                especialista em direito penal e processo penal pela escola da magistratura 
                no Tribunal de Justiça do DF, secretária da comissão de ciências criminais 
                da OAB-Guará/DF.
              </p>
              <p className="mb-6">
                Com atuação em mais de 100 defesas criminais pelo país, sendo os principais 
                estados de atuação: Brasília, Goiás e São Paulo.
              </p>
              <p className="mb-8">
                No Escritório de advocacia RENATA ANDRADE advogados e associados, acreditamos 
                que todos têm direito a uma defesa justa e combativa. Estamos aqui para apoiar 
                nossos clientes em momentos difíceis, oferecendo orientação legal e apoio 
                contínuo em cada etapa do processo, sendo que sua liberdade é nossa prioridade.
              </p>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Certificações e Especializações</h2>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <cert.icon className="h-6 w-6 text-[#722F37] mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg">{cert.title}</h3>
                        <p className="text-gray-300">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Compromisso com a Excelência</h2>
                <p className="mb-4">
                  Nossa atuação é marcada pela dedicação integral aos casos, análise minuciosa 
                  das evidências e desenvolvimento de estratégias de defesa eficazes. Atuamos 
                  em diversas áreas do Direito Penal, incluindo defesa em casos de crimes contra 
                  a pessoa, patrimônio, tráfico de drogas, associação criminosa, entre outros.
                </p>
                <p>
                  Nosso enfoque é fornecer uma defesa estratégica e personalizada, analisando 
                  cada detalhe do caso para garantir a melhor representação possível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;