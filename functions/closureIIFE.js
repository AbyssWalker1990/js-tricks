const privateCounter = (() => {
  let count = 0 // Now it is private var and can not be used from globalscope
  console.log(`Initial value ${count}`)
  return () => { count += 1; console.log(count) }
})()

privateCounter()  // 1
privateCounter()  // 2
privateCounter()  // 3

const credits = ((num) => {
  let credits = num
  console.log(`Initial credits: ${credits}`)
  return () => {
    if (credits > 0) console.log(`Playing game, ${credits} credits remaining`)
    if (credits <= 0) console.log('Not enough credits')
    credits -= 1
  }
})(3)

credits()
credits()
credits()

