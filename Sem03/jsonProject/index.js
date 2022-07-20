var user = [
  {
    username: "Silasps",
    password: "123",
    profile: { first_name: "Silas", last_name: "Silva" },
    contact: {
      email: [
        "silaspereiras@gmail.com",
        "silas_pereira-silva@estudante.sesisenai.org.br",
      ],
      phone: ["555-5555-555", "21-2121-212"],
    },
  },
  {
    username: "Bela2000",
    password: "123",
    profile: { first_name: "Izabela", last_name: "Silva" },
    contact: {
      email: [
        "izabela.cristinadance@gmail.com",
        "izabela.cristinadance@yahoo.com.br",
      ],
      phone: ["975278653", "31 992513249"],
    },
  },
  {
    username: "Marta55",
    password: "123",
    profile: { first_name: "Marta", last_name: "Silva" },
    contact: {
      email: [
        "marta.cristinadance@gmail.com",
        "marta.cristinadance@yahoo.com.br",
      ],
      phone: ["975278653", "31 992513249"],
    },
  },
  {
    username: "Thiagols",
    password: "123",
    profile: { first_name: "Thiago", last_name: "Silva" },
    contact: {
      email: [
        "Thiago.cristinadance@gmail.com",
        "Thiago.cristinadance@yahoo.com.br",
      ],
      phone: ["975278653", "31 992513249"],
    },
  },
];

// var output = "";
// for (let i = 0; i < user.length; i++)
//     output += "<li>" + user[i].username + "</li>";
// document.getElementById("users").innerHTML = output;
// document.getElementById("users").innerHTML = JSON.stringify(user);
// console.log(user.contact.email[1]);
// console.log(JSON.stringify(user));

users_update = function(){
var respostaDoSite = new XMLHttpRequest();
respostaDoSite.onreadystatechange = function () {
  let output = "";
  if (this.readyState == 4 && this.status == 200) {
    //Quando terminar o processo que tem que fazer
    let response = respostaDoSite.responseText; //Aqui é onde o JSON está
    let user = JSON.parse(response);
    //console.log(response);
    for (let i = 0; i < user.length; i++)
      output += "<li>" + user[i].username + "</li>";
    document.getElementById("users").innerHTML = output;
  }
};
respostaDoSite.open(
  "GET",
  "http://127.0.0.1:5500/Aulas/Sem03/jsonProject/data.json",
  true
);
respostaDoSite.send();
}

var bt = document.getElementById("bt_update");
bt.addEventListener("click", users_update);