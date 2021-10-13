import request from 'superagent'

export function getData () {
  return request
    .get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=687bdd4bcdfaae0e53254b01661b9ec2`)
    .then(res => res.body)
}