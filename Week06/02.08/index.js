// ====== FUNÇŌES ASSÍNCRONAS =====//

// call1 = ()=>{
//     console.log('ola');

//     // Executa de forma assincrona
//     setTimeout(() => {
//         console.log('Tudo bem?');
//     }, 5000);
// }

// console.log('Sim, estou bem.')

// call1()

// ======== PROMISSES =======//

// const promise = new Promise((resolve, reject) => {
//     let valor = 40;
//     if (valor > 20) {
//         setTimeout(() => {
//             resolve('Sou maior que 20'); // É uma função - Pode receber uma função
//         }, 5000);
//     } else {
//       reject(call1); // É uma função
//     }
//   });
  
//   console.log('Daqui a pouco voce vai receber um ola.');

//Se tiver somente uma funcao, faz o tratamento somente do resolve
// promise.then(()=>{})

//Se houver 2 funcoes, entao podemos tratar o resolve e o reject

// promise com 2 funcoes
// promise.then((retorno)=>{
//     console.log(retorno);

// }, (err)=>{ console.error(err);});

// promise com then e catch
// promise.then((retorno)=>{
//     console.log(retorno);
// }).catch((err)=>{
//     console.error(err);
// });

// =========== EXERCICIO =======//

// const p = new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => {
//         resolve(mostraOi())
//       }, 5000);
//     } catch (e) {
//       reject(e)
//     }
//   })
//   console.log(p)
//   function mostraOi(){
//     console.log("amigo estou aquiiiiiiiiiii");
//   }
//   p.then((resolve)=>{
//       console.log("amigo estou aqui");
//   }).catch(
//     (err)=>{console.error(err)}
//   );
  


// =========== Async/await =======//

// ========== PROMISE ASYNC E AWAIT ============= //

// function validaCep() {
//     let cep = "1234567890"
//     const p = new Promise((resolve, reject) => {
//         console.log(cep.length)
//         if(cep.length == 9){
//             resolve("Cep validado com sucesso"); // se entrar no resolve e direcionado para o then
//         } else {
//             reject('O cep informado esta invalido'); // se entrar no reject e direcionado para o catch
//         }
//     })

//     p.then((resolve)=>{
//         console.log(resolve);
//     }).catch(
//         (err)=>{console.error(err)}
//     );

//     //o resto do codigo
// }
// validaCep();

// const promessa = new Promise((resolve, reject) => {
//     fetch('.file.json')
//     .then((response)=>{
//         console.log(response);
//         resolve(response.json())});
// })
// console.log(promessa);

// promessa.then((resolve)=>{
//     console.log(resolve);
// }).catch(
//     (err)=>{console.error(err)}
// )


// ========= ASYNC E AWAIT ========= //

// async function validade(username, password){
//     await setTimeout(() => {
//         if(username == 'rayane123' && password == '123456'){
//             return "Success";
//         } else {
//             return "Failed";
//         }        
//     }, 5000);
// }

// function loadPlaylist(){
//     //
// }

// function login(){ //antes de seguir com o codigo, espera a validacao
//     let username = 'Silas', password = '123456';
//     let validateResults = validade(username, password);
//     console.log(validateResults);
//     if(validateResults == 'Success'){
//         console.log('Logado');
//         loadPlaylist();
//     } else{
//         console.error('Usuario ou senha incorreta')
//     }
// }

// login();

// ====