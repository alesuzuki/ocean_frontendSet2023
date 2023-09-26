import "./Card.css"

//declarando componente
export default function Card() {
    return <div class="card">
    <h2>TABERNA 404</h2>

    <div className="tags">
      <span className="tag">Status: Off-line</span>
      <span className="tag">Plataforma: Twitch</span>
      <span className="tag">Pais: BR</span>
    </div>

    <img src="https://cdn.discordapp.com/attachments/1108770471232684153/1152239724036116500/Logotipo_podcast_ilustrado_neon_amarelo_1.png" />
  </div>
}