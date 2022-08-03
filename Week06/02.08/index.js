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

