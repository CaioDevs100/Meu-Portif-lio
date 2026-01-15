import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" style={{ textAlign: 'center', padding: '20px'}}>
        <h1>Meu Portfólio - Caio </h1>
        <p>Operação Azeite em ação. Vamos virar o melhor dev!</p>
      </section>

      <section id="sobre" style={{ padding: '20px'}}>
        <h2>Sobre Mim</h2>
        <p>Oi, sou Caio de BH, estudante de Análise e Desenvolvimento de Sistemas. Apaixonado por programação, aprendendo React, Node e mais. Objetivo: trabalhar remoto pro exterior!</p>
      </section>

      <section id="skills" style={{ padding: '20px' }}>
        <h2>Minhas Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </section>

      <section id="projetos" style={{ padding: '20px'}}>
        <h2>Meus Projetos</h2>
        <p>Em breve: apps incríveis aqui!</p>
      </section>

      <section id="contato" style={{ padding: '20px' }}>
        <h2>Contato</h2>
        <p>Email: caioevs26@gmail.com | <a href='www.linkedin.com/in/caio-code-anlyze-envolve' target='_blank'>LinkedIn</a></p>
      </section>

    </div>
  );
}

export default App;