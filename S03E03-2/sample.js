// syntactic sugar: makes 

// function Dog () (old way)
class Dog {
  constructor (working) {
    this.isWorkingDog = working
  }

  detectContraband () {
    if (this.isWorkingDog) {
      console.log('Ok, sniffing for fruit at the border.')
    } else {
      console.log('Sorry, I am just a pet! Feed me!')
    }
  }
}

class Terrier extends Dog {
  constructor () {
    super(false)

    this.likesToChaseThings = true
  }

  chase () {
    if (this.likesToChaseThings) {
      console.log('Wheeeeeeeeeee!!!!')
    }
  }
}

class WireHairedTerrier extends Terrier {
  constructor () {
    super()

    this.colour = 'red'
  }

  describeYourself () {
    console.log(`I am a ${this.colour} wire-haired terrier.`)
  }
}

const barky = new WireHairedTerrier()
barky.describeYourself()
barky.detectContraband()
barky.chase()
