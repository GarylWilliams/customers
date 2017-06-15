fetch('https://randomuser.me/api/?results=12')

.then(
  function(response) {
    if (response.status !== 200) {
      console.log('WTF' + response.status);
      return;
    }
    response.json().then(function(data){
      // console.log(data.results[0].name.first);
      let name = data.results;

      var peoples = data.results;
      // console.log(peoples);

      function renderPeoples() {
        return `
        ${peoples.map(people =>`

        <div class='name'>
          <ul>
          <li><img src="${people.picture.large}"></li>
          <li id = 'person'>${people.name.first} ${people.name.last} </li>
          <li>${people.email}</li>
          <li class = 'address'>${people.location.street}</li>
          <li class = 'address'>${people.location.city} ${people.location.state} ${people.location.postcode}</li>
          <li>${people.phone}</li>
          <br>
          <li id = 'identification'>${people.id.name} ${people.id.value}</li>           
          </ul>
          </div>
          `).join('')}
        `
                    
        }

          let test1 = `
            <h1> Internal Company Directory</h1>
            <div class="peoples">
            
           <p>${renderPeoples()}</p>
           </div>`

    document.body.innerHTML = test1;

      })
      }
      )