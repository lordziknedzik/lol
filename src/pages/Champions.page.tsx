import React, {FunctionComponent, useContext} from 'react'
import { ChampionContext } from '../contexts/Champions.context';
import { GlobalContext } from '../contexts/Global.context';
import {championType} from '../ts/types'
import { Link } from 'react-router-dom';



const Champions:FunctionComponent = () => {


    const {champions} = useContext(ChampionContext)
    const {imgUrl} = useContext(GlobalContext)

    if (!champions) return <></>
    return (
        <div className='champions'>
            {champions.map(champ => 
            <Link to={`/champions/${champ.id}`}><div className='card' key={champ.id}>
                <img className='champions--img' src={`${imgUrl}${champ.id}_0.jpg`} alt=''></img>
                <div className='card--title'>{champ.name}</div>
            </div></Link>
            )}
            {/* {champions.map(champ => <div>{champ}</div>)} */}
        </div>
    )
}

export default Champions;