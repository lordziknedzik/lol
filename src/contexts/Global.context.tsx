import React, {FunctionComponent, createContext} from 'react'
import ChampionContexProvider from './Champions.context'


interface globalContextInt {
  language: string
  loadingScreenUrl: string
  imgUrl: string
  championUrl: string 

}

export const GlobalContext = createContext<globalContextInt>({} as globalContextInt)

const GlobalContextProvider:FunctionComponent = ({children}) => {

  const language ='en_us'
  const loadingScreenUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
  // const imgUrl = "http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/"
  const imgUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"

  const championUrl = 'http://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json'


    return (
      <GlobalContext.Provider value={{language,loadingScreenUrl,imgUrl, championUrl}}>
        <ChampionContexProvider>
          {children}
        </ChampionContexProvider>
      </GlobalContext.Provider>
    )
          
}

export default GlobalContextProvider;