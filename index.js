var submitButton = document.querySelector('#app form button')
var zipCodeField = document.querySelector('#app form input')
var content = document.querySelector('#app  main')

submitButton.addEventListener('click', run)

function run( event){

     event.preventDefault();

    var zipCode = zipCodeField.Value
     
     zipCode = zipCode.replace(' ', '')
     zipCode = zipCode.replace('.', '')
     zipCode = zipCode.trim()
     
     axios
      .get('https://viacep.com.br/ws/' + zipCode + '/json/')
      .then(function(response) {
        content.innerHTML = ''

       createLine(response.data.logradouro)
       createLine(response.data.localidade + '/' + response.data.uf)
        })
      .catch(function(error) {
          console.log(error)
      })
}

function createLine(text) {
    var line = document.createElement('p')  
     var texto = document.createTextNode(text)
           
    line.appendChild(texto)
    content.appendChild(line)
}