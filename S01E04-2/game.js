module.exports = {
  scoreFrame,
  scoreGame
}

function scoreFrame (frame, nextFrame, nextNextFrame) {
  // If strike or spare
  if (scoreSingleFrame(frame) === 10) {
    // If strike
    if (frame[0] === 10) {
      // If double strike
      if (nextFrame.length === 1) {
        return scoreDoubleStrike(nextNextFrame)
      } else {
        return scoreSingleStrike(nextFrame)
      }
    // If spare
    } else {
      return scoreSpare(nextFrame)
    }
  // Everything else
  } else {
    return scoreSingleFrame(frame)
  }
}

function scoreSingleFrame (frame) {
  // Add pins down in single frame. See MDN docs for Array.reduce():
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  return frame.reduce((total, currentVal) => total + currentVal)

  // Equivalent (for two-ball frame, but not bonus ball in 10th frame):
  // if (frame.length === 1) {
  //   return frame[0]
  // } else if (frame.length === 2) {
  //   return frame[0] + frame[1]
  // }
}

function scoreSpare (frame) {
  // See MDN docs for Array.slice():
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  return 10 + scoreSingleFrame(frame.slice(0, 1))

  // Equivalent:
  // return 10 + frame[0]
}

function scoreSingleStrike (frame) {
  return 10 + scoreSingleFrame(frame)
}

function scoreDoubleStrike (frame, nextFrame, nextNextFrame) {
  // See MDN docs for Array.slice():
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  return 10 + 10 + scoreSingleFrame(frame.slice(0, 1))

  // Equivalent:
  // return 10 + 10 + frame[0]
}

function scoreGame () {
  // TODO: Score game!
  return 0
}
