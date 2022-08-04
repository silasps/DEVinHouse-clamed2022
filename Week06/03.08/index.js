// * APIs (Application Programming Interface)
// * Metodos de requisicao HTTP (HyperText Transfer Protocol)
// * XMLHttpRequest

// Principais metodos HTTP sao:
// * GET - * POST - * PUT - * DELETE

const OReq = new XMLHttpRequest(); // Criar uma requisicao - Este comando dever ser primeiro

OReq.onload = () => {
    // console.log(OReq.response.weight); // para imprimir um item direto
    console.log(OReq.response);
}

OReq.open("GET", "https://pokeapi.co/api/v2/pokemon/charizard");
OReq.responseType = "json";

OReq.send(); // Este comando deve ser por ultimo



// =========== API do SPOTIFY ========= //
// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://spotify23.p.rapidapi.com/search/?q=Bonde do tigrao&type=multi&offset=0&limit=10&numberOfTopResults=5");
// xhr.setRequestHeader("X-RapidAPI-Key", "5cb3c5eeddmsh0343bfb174e5695p1e9122jsn0f748ef5d48f");
// xhr.setRequestHeader("X-RapidAPI-Host", "spotify23.p.rapidapi.com");

// xhr.send(data);