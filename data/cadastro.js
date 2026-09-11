window.CADASTRO_CANDIDATOS = [
  {
    "cargo": "presidente",
    "numero": "13",
    "nome": "Lula",
    "partido": "",
    "foto_key": "13Lula.jpg"
  },
  {
    "cargo": "governador",
    "numero": "13",
    "nome": "Rafael",
    "partido": "",
    "foto_key": "13Rafael.jpg"
  },
  {
    "cargo": "senador",
    "numero": "555",
    "nome": "Júlio César",
    "partido": "",
    "foto_key": "555JulioCesar.jpg"
  },
  {
    "cargo": "senador",
    "numero": "151",
    "nome": "Marcelo Castro",
    "partido": "",
    "foto_key": "151Marcelo.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "13000",
    "nome": "Nerinho",
    "partido": "PT",
    "foto_key": "13000.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "13123",
    "nome": "Limma",
    "partido": "PT",
    "foto_key": "13123.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "13234",
    "nome": "Evaldo Gomes",
    "partido": "PT",
    "foto_key": "13234.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "13456",
    "nome": "Janainna Marques",
    "partido": "PT",
    "foto_key": "13456.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "13555",
    "nome": "Dr. Gil Carlos",
    "partido": "PT",
    "foto_key": "13555.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "13678",
    "nome": "Hélio Rodrigues",
    "partido": "PT",
    "foto_key": "13678.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "13888",
    "nome": "Rubens Vieira",
    "partido": "PT",
    "foto_key": "13888.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "15101",
    "nome": "Severo Eulálio",
    "partido": "MDB",
    "foto_key": "15101.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "15222",
    "nome": "Dr. Hélio",
    "partido": "MDB",
    "foto_key": "15222.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "15444",
    "nome": "Cel Carlos Augusto",
    "partido": "MDB",
    "foto_key": "15444.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "15555",
    "nome": "João Madison",
    "partido": "MDB",
    "foto_key": "15555.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "55000",
    "nome": "Draga Alana",
    "partido": "PSD",
    "foto_key": "55000.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "55123",
    "nome": "Tiago Vasconcelos",
    "partido": "PSD",
    "foto_key": "55123.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "55255",
    "nome": "Simone Pereira",
    "partido": "PSD",
    "foto_key": "55255.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "55333",
    "nome": "Wilson Capote",
    "partido": "PSD",
    "foto_key": "55333.jpg"
  },
  {
    "cargo": "estadual",
    "numero": "55555",
    "nome": "Júlio Cesar Filho",
    "partido": "PSD",
    "foto_key": "55555.jpg"
  }
];
window.CADASTRO_CANDIDATOS.forEach(c=>c.foto=(window.CANDIDATE_PHOTOS||{})[c.foto_key]||'');
