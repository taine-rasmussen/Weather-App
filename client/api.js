import request from 'superagent'
import KEY from '../config'

export function getData (city) {
  return request
    .get(`https://api.openweathermap.org/data/2.5/weather?q=wellington&appid=${KEY}`)
    .then(res => res.body)

}



