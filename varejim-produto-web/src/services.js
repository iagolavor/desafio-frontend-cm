import axios from 'axios'

const axios = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
})

export function getProducts(){
  axios.get('/produtos').then(res => {
    return res;
  }).catch(err => {
    console.log(err)
    return 0;
  })
}

export function insertProduct(id, descricao, secao_id){
  axios.post('/produtos', {
    id:id,
    descricao: descricao,
    secao_id: secao_id
  }).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
    return 0;
  })
}

export function updateProduct(id){
  axios.put('/produtos', {
    params: {id:id}
  }).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
    return 0;
  })
}

export function deleteProduct(id){
  axios.delete('/produtos', {
    params: {id: id}
  }).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
    return 0;
  })
}

export function getSections(){
  axios.get('/secoes').then(res => {
    return res;
  }).catch(err => {
    console.log(err);
    return 0;
  })
}
