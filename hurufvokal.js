let str = 'Purwadhika'

//STRING TO ARRAY
let kataArr = str.split('')
console.log(kataArr)

let vokal = []

for (let i = 0; i < kataArr.length; i++) {
    if (kataArr[i] == 'a'|| kataArr[i] == 'i' || kataArr[i] == 'u'||kataArr[i] == 'e'|| kataArr[i] == 'o' ) {
        vokal.push(kataArr[i])
    }
}
console.log(vokal)

