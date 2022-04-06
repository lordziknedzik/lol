import React, {FunctionComponent, useState, useEffect, createContext, useContext} from "react";
import axios from "axios";
import {GlobalContext} from './Global.context'
import {championType} from '../ts/types'



interface ChampionContextInt {
  champions: championType[]
  loading: boolean
}

export const ChampionContext = createContext<ChampionContextInt>({} as ChampionContextInt)

const ChampionContextProvider: FunctionComponent = ({children}) => {

  const [loading, setLoading] = useState<boolean>(true)

  const [champions, setChampions] = useState<championType[]>([{} as championType])
  const {championUrl} = useContext(GlobalContext)

  useEffect(() => {
    axios.get(championUrl).then((resp:any) => {
      const newChampData: any = Object.entries(resp.data.data).flatMap(entry => entry[1])
      setChampions(newChampData)
    }).finally(() => setLoading(false))
  }, [])

  return (
    <ChampionContext.Provider value={{champions, loading}}>
      {children}
    </ChampionContext.Provider>
  )


}

export default ChampionContextProvider;



// import React, {createContext, useState, useEffect, FunctionComponent, useContext} from "react";
// import axios from 'axios'



// interface championsContextInt {
//   x: string
// }

// export const ChampionContext = createContext<championsContextInt>({} as championsContextInt)


// const ChampionContextProvider:FunctionComponent = ({children}) => {

//   useEffect(() => {
//     axios.get('http://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json')
//     .then(resp => {console.log(Object.entries(resp.data.data).flatMap(entry=> entry[1]))})
//   }, [])

// //   useEffect( () => 
// //   axios.get('http://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json')
// //   .then((resp:any) => {console.log(Object.entries(resp.data.data).flatMap(entry=> entry[1]))})

// // , [])


//   const x = 'x'

//   return (
//     <ChampionContext.Provider value={{x}}>
//       {children}
//     </ChampionContext.Provider>
//   )
// }

// export default ChampionContextProvider;