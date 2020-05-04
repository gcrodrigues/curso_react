const baseUrl = 'http://localhost:8000/api/autor';

const consomeApi =  async (url = '', method = 'GET', body) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method,
    headers: { "content-type": "application/json" },
    body
  });
  const res = await ApiService.TrataErros(response); 
  const data = res.json()

  return data;
}

const ApiService = {
  ListaAutores: () => {
    return consomeApi();
  },

  CriaAutor: (autor) => {
    return consomeApi('', 'POST', autor);
  },

  ListaNomes: () => {
    return consomeApi('nome');
  },

  ListaLivros: () => {
    return consomeApi('livro');
  },

  RemoveAutor: (id) => {
    return consomeApi(id, 'DELETE');
  },

  TrataErros: res => {
    if(!res.ok){
      throw new Error(res.responseText);
    }
    return res;
  }
};

export default ApiService;
