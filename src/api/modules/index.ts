import service from '../request'

export const testApi = () => {
  return service.get(`/getData`)
}

// 获取天气(和风天气API:北京)
export const getHFWeather = () =>
  service.get(
    "https://devapi.qweather.com/v7/weather/now?location=101010100&key=5649bab4e85c4ab0a8d82c7d86867fe3"
  )

