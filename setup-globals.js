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
// since we want to be able to use our testing library
// functions throughout the application, it's easier to
// write them into the global namespace, instead of
// creating a module and importing it everywhere:
global.test = test
global.expect = expect