import React, { useState } from "react";
import { FaBars, FaInstagram, FaTimes, FaWhatsapp, FaStar, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "/logo.png";
import "./App.css";

function App() {
  const testimonials = [
    {
      name: "José Silva",
      text: "O Dr. Pedro Kaleb foi essencial na minha defesa. Graças ao seu conhecimento profundo e estratégia, consegui a absolvição no processo criminal em que estava envolvido.",
    },
    {
      name: "Roberta Santos",
      text: "Contratei o Dr. Pedro Kaleb para uma consultoria sobre defesa criminal. Sua clareza e competência me deram confiança e tranquilidade durante todo o processo.",
    },
    {
      name: "Carlos Souza",
      text: "Recomendo o Dr. Pedro Kaleb para qualquer questão criminal. Ele possui um conhecimento vasto e sempre foi extremamente atencioso em todos os momentos.",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-screen text-white">
      <div>
        <header className="w-screen bg-[#191A1C] text-center fixed z-50">
          <nav className="bg-transparent text-slate-100 shadow-lg py-3">
            <div className="container mx-auto px-6 flex items-center justify-between">
              <img src={logo} alt="Logo" className="rounded-full h-12 bg-transparent" />
              <div className="lg:hidden" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes className="text-gold text-3xl" /> : <FaBars className="text-gold text-3xl" />}
              </div>
              <div className="hidden lg:flex space-x-6">
                <a href="#especialidades" className="text-slate-200 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
                  Especialidades
                </a>
                <a href="#testemunhos" className="text-slate-200 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
                  Testemunhos
                </a>
                <a href="#contato" className="text-slate-200 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
                  Contato
                </a>
              </div>
            </div>

            <motion.div className={`lg:hidden bg-[#222325] rounded-lg py-4 mt-2 shadow-2xl ${isMobileMenuOpen ? "block" : "hidden"}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 10 }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <div className="text-center">
                <a href="#home" className="block text-slate-200 py-2 px-4 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
                  Ínicio da Página
                </a>
                <a href="#contato" className="block text-slate-200 py-2 px-4 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
                  Contato
                </a>
                <a href="#faq" className="block text-slate-200 py-2 px-4 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
                  Perguntas frequentes
                </a>
                <a href="#sobre" className="block text-slate-200 py-2 px-4 hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
                  Sobre
                </a>
              </div>
            </motion.div>
          </nav>
        </header>

        <div id="home" className="bg-cover bg-center relative" style={{ backgroundImage: `url('/background1.jpg')` }}>
          <div className="flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-20">
            <div className="h-screen flex flex-col justify-center">
              <div className="bg-transparent p-3 rounded-2xl mt-96 mx-2">
                <h1 className="text-2xl font-semibold text-slate-100 mb-2">Dr. Pedro Kaleb</h1>
                <p className="text-base text-slate-100">Especialista em Direito Criminal, com experiência em defesa de acusados, crimes complexos, e consultoria jurídica em processos penais.</p>
              </div>
              <div className="flex justify-center w-screen">
                <a href="https://wa.me/1234567890" className="bg-gradient-to-r from-green-500 to-green-700 mt-2 text-white py-2 px-4 w-auto rounded-full text-sm flex items-center justify-center gap-3 hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-xl">
                  <FaWhatsapp className="text-2xl" /> Falar com especialista
                </a>
              </div>
            </div>
          </div>
        </div>

        <section id="faq" className="py-8 bg-[#191A1C] text-center">
          <div className="container mx-auto px-4 pt-10">
            <h2 className="text-2xl font-semibold text-white mb-8">Feedbacks de clientes</h2>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#121212] p-8 rounded-xl shadow-md mt-8 relative">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-t-xl"></div>
                <p className="text-gray-400 text-sm italic mb-4 relative z-10">“{testimonial.text}”</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium text-md">{testimonial.name}</h3>
                  <div className="flex text-yellow-300">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="py-3 bg-[#191A1C] text-center">
          <div className="container mx-auto px-8 py-12">
            <h2 className="text-xl font-semibold text-white mb-6 text-center">Entre em Contato</h2>
            <p className="text-sm text-gray-400 mb-10 text-center">“Estamos aqui para defender seus direitos! Agende uma consulta ou tire suas dúvidas.”</p>

            <div className="bg-[#121212] p-6 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center sm:items-start">
                  <h3 className="text-md text-yellow-500 mb-1">Telefone</h3>
                  <p className="text-sm text-gray-300">(22) 99999-9999</p>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <h3 className="text-md text-yellow-500 mb-1">E-mail</h3>
                  <p className="text-sm text-gray-300">contato@drpedrokaleb.com</p>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <h3 className="text-md text-yellow-500 mb-1">WhatsApp</h3>
                  <a href="https://wa.me/1234567890" className="bg-gradient-to-r from-green-500 to-green-700 mt-2 text-white py-2 px-4 w-auto rounded-full text-sm flex items-center justify-center gap-3 hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-xl">
                    <FaWhatsapp className="text-2xl" /> Falar com especialista
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-16 bg-[#191A1C] text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gold mb-8">Sobre o Dr. Pedro Kaleb</h2>

            <div className="max-w-md mx-auto bg-[#121212] p-6 rounded-lg shadow-xl">
              <div className="flex justify-center mb-6">
                <img src="/perfil.jpg" alt="Dr. Pedro Kaleb" className="w-52 h-52 rounded-3xl object-cover" />
              </div>

              <p className="text-lg text-gray-400">Dr. Pedro Kaleb é especialista em Direito Criminal, com vasta experiência em defesa de acusados, crimes complexos e consultoria jurídica em processos penais. Atuando com ética e dedicação, ele trabalha incansavelmente para garantir que os direitos de seus clientes sejam respeitados e defendidos em todas as esferas jurídicas.</p>
            </div>
          </div>
        </section>
        
        <section id="faq" className="py-8 bg-[#191A1C] text-center">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl font-semibold text-gold mb-8">Perguntas Frequentes</h2>
    <div className="space-y-4">
      {/* Primeira Pergunta */}
      <div className="bg-[#121212] p-4 rounded-lg shadow-md">
        <h3
          className="text-xl text-gold cursor-pointer flex items-center justify-between"
          onClick={() => toggleDropdown(0)}
        >
          Como posso entrar em contato com o suporte?
          <span>{openIndex === 0 ? "-" : "+"}</span>
        </h3>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: openIndex === 0 ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-gray-400 overflow-hidden"
        >
          Você pode entrar em contato através do WhatsApp ou enviando um e-mail pelo formulário disponível na página de contato.
        </motion.div>
      </div>

      {/* Segunda Pergunta */}
      <div className="bg-[#121212] p-4 rounded-lg shadow-md">
        <h3
          className="text-xl text-gold cursor-pointer flex items-center justify-between"
          onClick={() => toggleDropdown(1)}
        >
          Quais serviços estão disponíveis?
          <span>{openIndex === 1 ? "-" : "+"}</span>
        </h3>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: openIndex === 1 ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-gray-400 overflow-hidden"
        >
          Oferecemos uma variedade de serviços, desde consultorias até atendimentos personalizados. Para mais detalhes, visite a seção de serviços no site.
        </motion.div>
      </div>

      {/* Terceira Pergunta */}
      <div className="bg-[#121212] p-4 rounded-lg shadow-md">
        <h3
          className="text-xl text-gold cursor-pointer flex items-center justify-between"
          onClick={() => toggleDropdown(2)}
        >
          Quanto tempo demora para receber uma resposta?
          <span>{openIndex === 2 ? "-" : "+"}</span>
        </h3>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: openIndex === 2 ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-gray-400 overflow-hidden"
        >
          Nosso tempo médio de resposta é de 24 a 48 horas úteis. Entre em contato para dúvidas urgentes.
        </motion.div>
      </div>

      {/* Quarta Pergunta */}
      <div className="bg-[#121212] p-4 rounded-lg shadow-md">
        <h3
          className="text-xl text-gold cursor-pointer flex items-center justify-between"
          onClick={() => toggleDropdown(3)}
        >
          Existem opções de atendimento presencial?
          <span>{openIndex === 3 ? "-" : "+"}</span>
        </h3>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: openIndex === 3 ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-gray-400 overflow-hidden"
        >
          Sim, temos opções de atendimento presencial. Entre em contato para verificar disponibilidade e agendar um horário.
        </motion.div>
      </div>
    </div>
  </div>
</section>


        {/* Rodapé (Footer) */}
        <footer className="bg-[#121212] py-8">
          <div className="container mx-auto px-4 text-center">
            {/* Redes Sociais */}
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://www.facebook.com" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://www.instagram.com" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://wa.me/1234567890" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>

            {/* Informações da Empresa */}
            <div className="text-gray-500 mb-4">
              <p className="text-sm text-white">Dr. Pedro Kaleb - Advogado Criminalista</p>
              <p className="text-xs">CNPJ: 12.345.678/0001-99</p>
              <p className="text-xs">Rua da Justiça, 123 - Campos dos Goytacazes - RJ</p>
              <p className="text-xs">Telefone: (22) 99999-9999</p>
              <p className="text-xs">E-mail: contato@drpedrokaleb.com</p>
            </div>

            {/* Direitos Autorais */}
            <div className="text-xs text-gray-500">
              <p>© 2024 Dr. Pedro Kaleb - Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
