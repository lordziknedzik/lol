import React, {FunctionComponent, useContext} from 'react';
import {Header} from './components/Index.component'
import { GlobalContext } from './contexts/Global.context';
import { ChampionContext } from './contexts/Champions.context';
import {Main} from './pages/Index.page'

const App:FunctionComponent = () => {

const {loading} = useContext(ChampionContext)

if (loading) return <div>Loading</div>
return (
  <div>
    <Header />
    <Main />
  </div>
)

}

export default App;



// const [champions, setChampions] = useState([])
// const championsUrl ='http://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json'
// const imgUrl = "http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/"
// const loadingScreenUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/'

// console.log(variables)
// useEffect( () => 
//   axios
//   .get(championsUrl)
//   .then(resp => {setChampions(Object.entries(resp.data.data).flatMap(entry=> entry[1]))})
//   .catch(error => console.log(error))
// , [])