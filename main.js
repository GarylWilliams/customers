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
      console.log(name);
      console.log('The fucking first name is ' + name);

      var peoples = data.results;
      console.log(peoples);

      function renderPeoples() {
        return `
        ${peoples.map(peoples =>`
          <ul>
          <li>${peoples.name.first}</li>
          <li>${peoples.picture.medium}</li>
          <li>${peoples.name.first} ${peoples.name.last} </li>
          <li>${peoples.email}</li>
          <li>${peoples.location.street}</li>
          <li>${peoples.location.city} ${peoples.location.state} ${peoples.location.postcode}</li>
          <li>${peoples.phone}</li>
          <br>
          <li>${peoples.id.name} ${peoples.id.value}</li>`).join('')}
            </ul>`;
        }

          let test1 = `
            <div class="info">
           <p>Name ${renderPeoples()}</p>
           </div>`

    document.body.innerHTML = test1;

      })
      }
      )
