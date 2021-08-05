let str = ` 
010-1234-5678
thesecon@gmail.com
konnimey@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/.{1,}(?=@)/g)
  // @ 기호를 기준으로 그 앞에 있는 연속적인 글자들(사용자의 아이디) 전부를 일치시킨다
  // Array [ "thesecon", "konnimey" ]
)

console.log(
  str.match(/(?<=@).{1,}/g)
  // @ 기호를 기준으로 그 앞에 있는 연속적인 글자들(사용자의 아이디) 전부를 일치시킨다
  // Array [ "gmail.com", "naver.com" ]
)
