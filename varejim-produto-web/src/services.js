const axios = require('axios').default;

const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
})

export async function getProducts(query){
  let res = http.get('/produtos', {params: query});
  return res;
}

export const insertProduct = async(descricao, secao_id) => {
  let res = http.post('/produtos', {
    descricao: descricao,
    secao_id: secao_id
  });
  return res;
}

export const updateProduct = async(id, descricao, secao_id) => {
  let res = http.put(`/produtos/${id}`, {
    id: id,
    descricao: descricao,
    secao_id: secao_id});
  return res;
}

export const deleteProduct = async(id) => {
  let res = http.delete(`/produtos/${id}`);
  return res;
}

export const getSections = async(query) => {
  let res = http.get('/secoes', {params: query});
  return res;
}

export async function getSectionIds(){
  let res = await http.get('/secoes');
  if(res.status === 200){    
      let arr = []
      for(let x of res.data.items){
        arr.push(x.id);
      }
      return arr;
  }else{
    return 0;
  }
}