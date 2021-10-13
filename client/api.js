import request from 'superagent'

 const key = '687bdd4bcdfaae0e53254b01661b9ec2'

export function getData () {
  return request
    .get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(res => res.body)
}