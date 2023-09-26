import './App.css'
import Card from './components/Card/Card'

function App() {

  const item1 = {
    nome: 'Patrô',
    imageUrl: 'https://cdn.discordapp.com/attachments/1108770471232684153/1152000204879433728/1.png'
  }

  const item2 = {
    nome: 'Stalkin',
    imageUrl: 'https://cdn.discordapp.com/attachments/1108770471232684153/1152000205542150205/2.png'
  }

  return (
    <>
    {/* <Card item="teste"/>
    coloco chaves pq tudo que é javascript vai dentro de chaves
    uma string */}

    <Card item={item1} />

    <Card item={item2} />

    {/*
      <div class="card">
        <h2>Patro</h2>
        <h2>o virus que pede sub</h2>
        <img src="https://cdn.discordapp.com/attachments/1108770471232684153/1152000204879433728/1.png" />
      </div>
      */}

    </> 
  )
}

export default App
