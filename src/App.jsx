import './App.css'
import menuImage from './assets/menu.png'
import funnelImage from './assets/funnel.png'
import fretamentoImage from './assets/fretamento.png'
import adminMenu from './assets/admin-menu.png'



function App() {
  return (
    <div className="portfolio">
      {/* Seção de Perfil */}
      <section className="profile-section">
        <div className="profile-container">
          <div className="profile-image">
            <img
              src="https://avatars.githubusercontent.com/u/114958005?v=4"
              alt="Foto do desenvolvedor"
              className="profile-photo"
            />
          </div>

          <div className="profile-info">
            <h1 className="profile-name">Daniel Raoli</h1>
            <h2 className="profile-title">Desenvolvedor Full Stack</h2>

            <div className="social-links">
              <a href="https://github.com/danielRaoli" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/daniel-raoli" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>

              <a href="mailto:danielraoli074@gmail.com" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 11.64 21.615 3.82h.749c.904 0 1.636.733 1.636 1.637z" />
                </svg>
                Email
              </a>
            </div>

            <div className="profile-description">
              <p>
                Graduado em Análise e desenvolvimento de sistemas e desde 2022 atuo como desenvolvedor Web. 
                Tenho experiência com JavaScript, TypeScript e C#, utilizando frameworks como Next.js e .NET, além de trabalhar 
                também com NodeJS. Meu foco é principalmente Desenvolver soluções que sejam realmente eficientes, to sempre buscando algum projeto novo
                e indo atrás das novas tecnologias e metodologias pra desenvolve-lo. a busca pela evolução e a curiosidade é sempre a minha principal motivação
                nesse meio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">Principais Projetos</h2>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={menuImage} alt="Projeto 1" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Menu Digital</h3>
                <p className="project-description">
                  Cardapio Digital Para restaurantes, Abra conta se registre
                  e adicione pedidos ao carrinho.
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    React
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    Next.Js
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    Postgresql
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    .NET - c#
                  </span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/danielRaoli/cardapio-restaurante" target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                  <a href="https://menu-digital-demo-fmbx.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                    Testar WebApp
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={adminMenu} alt="Projeto 1" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Admin Menu Digital</h3>
                <p className="project-description">
                  Administração para Cardapio digital de restaurantes.
                  para testar utilizar essas credenciais:
                  admin - senha:  senha123
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    React
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    Next.Js
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    Postgresql
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    .NET - c#
                  </span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/danielRaoli/menu-digital-admin" target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                  <a href="https://menu-digital-admin-rho.vercel.app/login" target="_blank" rel="noopener noreferrer" className="project-link">
                    Testar WebApp
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={funnelImage} alt="Projeto 2" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Funnel Bot</h3>
                <p className="project-description">
                  Bot de automação para funil de vendas pelo telegram
                  com diversas ferramentas de marketing.
                  para testar utilize as credenciais:
                  contateste@gmail.com - teste123 <br />
                  <a href="https://t.me/Teste_Funnel_Bot" target="_blank"  >
                    VISITE O BOT
                  </a>
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    React
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    TypeScript
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    Next.Js
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    C# - .NET
                  </span>
                </div>
                <div className="project-links">
                  <a href="https://www.funnelbot.fun/" target="_blank" rel="noopener noreferrer" className="project-link">
                    Testar WebApp
                  </a>
                </div>
              </div>
            </div>


            

            

            <div className="project-card">
              <div className="project-image">
                <img src={fretamentoImage} alt="Projeto 3" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Sistema de fretamento</h3>
                <p className="project-description">
                  Registro de frotas, motoristas, clientes e funcionários
                  Controle de manutenção e documentos dos veículos
                  Registro e gerenciamento de viagens e passagens
                  conta teste: admin - senha:  senha123
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    Next.Js
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    TypeScript
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    PostgreSQL
                  </span>
                  <span className="tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                    </svg>
                    C# - .NET
                  </span>
                </div>
                <div className="project-links">
                  <a href="https://infofretamento-front-demo.vercel.app/login" target="_blank" rel="noopener noreferrer" className="project-link">
                    Testar WebApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
