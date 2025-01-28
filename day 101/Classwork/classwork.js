document.getElementById('dogg').addEventListener('click', () => {

    fetch('https://dog.ceo/api/breeds/image/random').then(res =>{

        console.log(res);
        if (!res.ok) {
          throw new Error(`Something went wrong! Your error is ${res.status}`)
        }

        return res.json()
      })
      .then(data => document.getElementById('dog').src = data.message)

      .catch(error =>  console.error(error))
      });

  