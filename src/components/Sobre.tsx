function Sobre() {
  return (
    <div className="container mt-4">

      <h2 className="mb-4">Sobre LeBron James</h2>

      <div className="row align-items-center mb-5">

        <div className="col-md-4">
          <img 
            src="/lebron.png"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-8">
          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            LeBron James é amplamente considerado o maior jogador de basquete de todos os tempos.
            Nascido em Akron, Ohio, em 30 de dezembro de 1984, ele superou uma infância difícil
            para se tornar um fenômeno global ainda antes de entrar na NBA.

            Em 2003, foi selecionado como a primeira escolha do Draft pelo Cleveland Cavaliers,
            chegando à liga com uma expectativa histórica e correspondendo desde o primeiro momento.
            Sua combinação única de força física, inteligência de jogo e versatilidade o tornou um
            jogador capaz de atuar em praticamente todas as posições dentro de quadra.

            Ao longo de sua carreira, LeBron conquistou múltiplos títulos da NBA, prêmios de MVP
            e se consolidou como o maior pontuador da história da liga, quebrando recordes que
            pareciam inalcançáveis.

            Além de seu desempenho dentro das quadras, LeBron também se destacou fora delas,
            sendo um líder influente, empresário e ativista social, impactando milhões de pessoas
            ao redor do mundo.

            Seu legado vai além de números: ele redefiniu o basquete moderno e continua sendo
            uma referência absoluta de excelência, longevidade e domínio no esporte.
          </p>
        </div>

        <h3 className="text-center mt-5 mb-4">Times que LeBron jogou</h3>

        <div className="d-flex justify-content-center align-items-center gap-4 mb-5">

          <img src="/cavs.png" style={{ height: "80px" }} />

          <span style={{ color: "white", fontSize: "24px" }}>→</span>

          <img src="/heat.png" style={{ height: "80px" }} />

          <span style={{ color: "white", fontSize: "24px" }}>→</span>

          <img src="/cavs.png" style={{ height: "80px" }} />

          <span style={{ color: "white", fontSize: "24px" }}>→</span>

          <img src="/lakers.png" style={{ height: "80px" }} />

        </div>
        <h3 className="text-center mt-5 mb-3">
          Estatísticas depois de 22 temporadas
        </h3>

        <p 
          className="text-center mb-5"
          style={{ fontSize: "28px", color: "white" }}
        >
          27.0 pts | 7.7 reb | 7.4 ast
        </p>

        <h3 className="text-center mt-5 mb-4">Marcas na NBA</h3>

          <div className="container mb-5" style={{ maxWidth: "700px" }}>
            <ul style={{ color: "white", fontSize: "16px", lineHeight: "1.8" }}>

              <li>4º em MVPs da Temporada Regular (4)</li>
              <li>2º em MVPs de Finais (4)</li>
              <li>2º em MVPs do All-Star Game (3)</li>
              <li>1º em Jogador do Mês da Conferência (41)</li>
              <li>1º em Jogador da Semana da Conferência (69)</li>
              <li>1º em Aparições no Time Ideal da Temporada Regular (21)</li>
              <li>3º em Aparições em Finais (10)</li>
              <li>1º em Aparições no All-Star Game (21)</li>
              <li>2º em Eficiência na Temporada Regular (271.38)</li>
              <li>1º em Eficiência em Playoffs (59.51)</li>
              <li>3º em Vitórias na Temporada Regular (1.009)</li>
              <li>1º em Vitórias em Playoffs (184)</li>
              <li>2º em Vitórias no All-Star Game (11)</li>
              <li>1º em Pontos na Temporada Regular (42.184)</li>
              <li>1º em Pontos em Playoffs (8.289)</li>
              <li>1º em Pontos no All-Star Game (434)</li>
              <li>4º em Assistências na Temporada Regular (11.584)</li>
              <li>2º em Assistências em Playoffs (2.095)</li>
              <li>3º em Assistências no All-Star Game (113)</li>
              <li>5º em Triplos-Duplos na Temporada Regular (122)</li>
              <li>2º em Triplos-Duplos em Playoffs (28)</li>
              <li>1º em Triplos-Duplos no All-Star Game (1)</li>

            </ul>
          </div>

      </div>

    </div>
  );
}

export default Sobre;