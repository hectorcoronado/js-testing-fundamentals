const expect = actual => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      } 
    }
  }
}

const test = async (title, callback) => {
  try {
    await callback()
    console.log(`⚡️ ${title} passed 💯`)
  } catch (error) {
    console.error(`💀 ${title} failed 💀`)
    console.error(error)
  }
}

global.test = test
global.expect = expect