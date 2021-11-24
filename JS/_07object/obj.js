const person = {
  fName : 'Wilson',
  lName : 'Chang',
  age   : 20,
  job   : ['student', 'tutor'],
  friend: [{
    fName : 'Peter',
    lName : 'Parker',
    age   : 19,
    job   : ['Avengers', 'reporter', 'student'],
  }, {
    fName : 'Dio',
    lName : 'Brando',
    age   : 150,
    job   : 'philosopher',
    stand : 'Za Warudo'
  }],
  fullName: function() {
    return `${this.fName} ${this.lName}`;
  }
};

console.log(person.fullName());

const str = "hello";

for (i in str)
  console.log(i);

const arr = ["apple", "banana", "orange"];

for (i in arr)
  console.log(i);

console.log("finish");


const ibmdDiv = document.getElementById("imbd");

fetch("https://imdb-api.com/en/API/Search/k_sutkxi5l/violet evergarden")
  .then(res => {
    console.log(res);
    return res.json();
  })
  .then(data => {
    console.log(data);
    console.log(JSON.stringify(data.results));
    data.results.forEach(datum => {
      wrapper = document.createElement("div");

      title = document.createElement("h3");
      title.innerHTML = datum.title;

      poster = document.createElement("img");
      poster.src = datum.image;
      poster.width = "768";

      wrapper.append(title);
      wrapper.append(poster);

      ibmdDiv.append(wrapper);
    })
  })
  .catch(err => {
    console.log(err);
  });

// const tmp = 
// [{
//   "id":"tt7078180",
//   "resultType":"Title",
//   "image":"https://imdb-api.com/images/original/MV5BZmUzMThjOTItZGY4ZS00ODcwLTliNTMtYjVkM2JmY2QxNmRhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_Ratio0.7273_AL_.jpg",
//   "title":"Violet Evergarden",
//   "description":"(2018) (TV Mini Series)"
//   },
//   {
//   "id":"tt8652818",
//   "resultType":"Title",
//   "image":"https://imdb-api.com/images/original/MV5BYTJmNzc5YTEtNTBmNy00YmUxLWFlNzktYjZjMTg3OGY3ZDhkXkEyXkFqcGdeQXVyMzUzMzgxNA@@._V1_Ratio0.7273_AL_.jpg",
//   "title":"Violet Evergarden: The Movie",
//   "description":"(2020)"
//   },{
//   "id":"tt10477558",
//   "resultType":"Title",
//   "image":"https://imdb-api.com/images/original/MV5BZjljM2M1ZTgtZGM4My00OGRkLTliMjAtYzJiZDBkMzQ5ZDkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg",
//   "title":"Violet Evergarden: Eternity and the Auto Memories Doll",
//   "description":"(2019)"
// }]