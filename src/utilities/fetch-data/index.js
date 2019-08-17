import Taro from '@tarojs/taro'
import buildUrl from 'build-url'
import _ from 'lodash'

async function fetchData({
  resource = '',
  id = '',
  search = '',
  page = '',
  pageSize = '',
  success = () => { },
  fail = () => { },
  complete = () => { }
}) {
  let queryParams = {}

  if (search) queryParams.q = search
  if (page) queryParams._page = page
  if (pageSize) queryParams._limit = pageSize

  if (_.isEmpty(queryParams)) {
    queryParams = null
  }

  const path = (id ? `${resource}/${id}` : resource)

  let url = buildUrl(API_BASE, {
    path,
    queryParams
  })

  if (queryParams) {
    url = url + '&consumer_key=ck_11f3f51b1091ddbcc5a19cbe7e73094c0f9f4556&consumer_secret=cs_e48694f94fa590ef350bef0fe956e4f886294334'
  } else {
    url = url + '?consumer_key=ck_11f3f51b1091ddbcc5a19cbe7e73094c0f9f4556&consumer_secret=cs_e48694f94fa590ef350bef0fe956e4f886294334'
  }

  try {
    const response = await Taro.request({
      url,
      fail(error) {
        error.message = '服务出现问题，请稍后再试。'
        fail(error)
      }
    })

    const { statusCode } = response

    switch (statusCode) {
      case 200:
        if (process.env.NODE_ENV === 'development') {
          setTimeout(() => {
            success(response)
          }, 1000)
        } else {
          success(response)
        }
        break;
      default:
        throw new Error('服务出现问题，请稍后再试。')
        break;
    }
  } catch (error) {
    fail(error)
  }

  complete()
}

export default fetchData
