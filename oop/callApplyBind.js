const game = {
  title: 'Sonic',
  year: 1991
}

function info (platform, char) {
  console.log(`${this.title} was released in ${this.year} for platform ${platform} and ${char}`)
  console.log(this)
}

// info.call(game, 'SEGA', 'Sonic')
// info.apply(game, ['SEGA', 'Sonic'])

const gameInfo = info.bind(game, 'SEGA', 'Sonic')
gameInfo()