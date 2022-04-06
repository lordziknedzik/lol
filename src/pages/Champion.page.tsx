import React, {FunctionComponent, useContext} from 'react'
import {useLocation} from 'react-router-dom'
import { ChampionContext } from '../contexts/Champions.context'


const Champion:FunctionComponent = () => {

    const {champions}= useContext(ChampionContext) 
    const {pathname} = useLocation()
    const championName = pathname.split('/')[2]

    const thisChampion = champions.filter(champ => champ.id === championName)[0]
    return (
        <div className=''>
          {thisChampion.name}
          {thisChampion.stats.attackdamage}

        </div>
    )
}

export default Champion;