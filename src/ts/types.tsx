export type championType = {
  blurb: string
  id: string
  title: string
  name: string
  image: imgType
  tags: string[]
  stats: championStatsType
}

export type imgType = {
    full: string
    sprite: string
    group: string
    x: number
    y: number
    w: number
    h: number
}

export type championStatsType = {
  hp: number
  hpperlevel: number
  mp: number
  mpperlevel: number
  movespeed: number
  armor: number,
  armorperlevel: number
  spellblock: number
  spellblockperlevel: number
  attackrange: number
  hpregen: number
  hpregenperlevel: number
  mpregen: number
  mpregenperlevel: number
  crit: number
  critperlevel: number
  attackdamage: number
  attackdamageperlevel: number
  attackspeedperlevel: number
  attackspeed: number
}


// {
//   version: 12.4.1,
//   id: Aatrox,
//   key: 266,
//   name: Aatrox,
//   title: the Darkin Blade,
//   blurb: Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...,
//   info: {
//       attack: 8,
//       defense: 4,
//       magic: 3,
//       difficulty: 4
//   },
//  

//   partype: Blood Well,
