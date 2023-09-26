import './App.css'
import Card from './components/Card/Card'

function App() {

  const item1 = {
    nome: 'Patrô',
    imageUrl: 'https://cdn.discordapp.com/attachments/1108770471232684153/1152000204879433728/1.png'
    tag: 
  }

  const item2 = {
    nome: 'Stalkin',
    imageUrl: 'https://cdn.discordapp.com/attachments/1108770471232684153/1152000205542150205/2.png'
  }

  const item3 = {
    nome: 'Kratos',
    imageUrl: 'https://cdn.discordapp.com/attachments/1108770471232684153/1151593517945213018/kratos-numa-harley-contra-arranhadores-de-moto.png'
  }


  const itens = [item1, item2, item3]


  return (
    <>
    {/* <Card item="teste"/>
    coloco chaves pq tudo que é javascript vai dentro de chaves
    uma string */}

    {/*<Card item={item1} />
    <Card item={item2} />
*/}

    {/*
      <div class="card">
        <h2>Patro</h2>
        <h2>o virus que pede sub</h2>
        <img src="https://cdn.discordapp.com/attachments/1108770471232684153/1152000204879433728/1.png" />
      </div>
      */}

    {/*
      {itens.map(function (item) {
        return <div>Item</div>
      })}

      */}



      {itens.map(function (parametrodafunction) {
        return <Card item={parametrodafunction}/>
      })}

    </> 
  )
}

export default App
