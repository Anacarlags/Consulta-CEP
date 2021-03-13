# Projeto Consulta CEP
Aplicação web de Consultar enderços através do cep, listando bairro, Cidade e Estado.
<br>Pagina criada com HTML e CSS, para a funcionalidade de Consulta em tempo real do endereço 
<br>Utilizei Javascript para crira uma função que utiliza a biblioteca Axios para consumir
<br>dados da API ViaCEP dos correios.


### Acessando o webservice de CEP
* Exemplo de pesquisa por CEP:<br>
   axios
      .get('https://viacep.com.br/ws/' + zipCode + '/json/')<br>
      
      
      
#### Formatos de Retorno: <br>
JSON<br/>
URL: viacep.com.br/ws/zipCode/json/<br>
UNICODE: viacep.com.br/ws/zipCode/json/unicode/

    {
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    }
            

      
