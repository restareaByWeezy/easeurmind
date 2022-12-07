import axios from 'axios'

export const fetchProductItems = async () => {
  axios.get('/api/products').then(res => {
    return res
  })
}

export const fetchCoupons = async () => {
  axios.get('/api/coupons').then(res => {
    return res
  })
}
