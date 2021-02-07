const axios = require('axios').default;

const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
})

export function getProducts(){
  return http.get('/produtos')
}

export function insertProduct(descricao, secao_id){
  return http.post('/produtos', {
    descricao: descricao,
    secao_id: secao_id
  })
}

export function updateProduct(id, descricao, secao_id){
  return http.put(`/produtos/${id}`, {
    id: id,
    descricao: descricao,
    secao_id: secao_id
  })
}

export function deleteProduct(id){
  return http.delete(`/produtos/${id}`)
}

export function getSections(){
  return http.get('/secoes')
}
