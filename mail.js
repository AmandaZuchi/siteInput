// Configuração do Firebase

  const firebaseConfig = {
  apiKey: "******",
  authDomain: ""******",",
  projectId: ""******",",
  storageBucket: ""******",",
  messagingSenderId: ""******",",
  appId: ""******",",
  measurementId: ""******"," 
};



// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Firestore
const db = firebase.firestore();

// Adicionar evento de envio ao formulário
document.getElementById("postForm").addEventListener("submit", submitForm);

// Função para enviar os dados do formulário
function submitForm(e) {
  e.preventDefault();

  // Obter valores dos campos do formulário
  const titulo = getElementVal("titulo");
  const conteudo = getElementVal("conteudo");
  const categoria = getElementVal("categoria");
  const autor = getElementVal("autor");
  const id = getElementVal("id");
  const objetivo = getElementVal("objetivo");
  const imageURL = getElementVal('imageURL');
  const linkdoartigo = getElementVal('linkdoartigo');
  const metodo = getElementVal('metodo');
  const imagem = getElementVal('imagem');
  const palavra1 = getElementVal('palavra1');
  const palavra2 = getElementVal('palavra2');
  const palavra3 = getElementVal('palavra3');
  const palavra4 = getElementVal('palavra4');
  const palavra5 = getElementVal('palavra5');
  const palavra6 = getElementVal('palavra6');
  const significado1 = getElementVal('significado1');
  const significado2 = getElementVal('significado2');
  const significado3 = getElementVal('significado3');
  const significado4 = getElementVal('significado4');
  const significado5 = getElementVal('significado5');
  const significado6 = getElementVal('significado6');
  const fontIMG = getElementVal('fontIMG');
  const fontIMGcapa = getElementVal('fontIMGcapa');
  const subcategoria = getElementVal('subcategoria');
  const data = getElementVal('data');
  const conclusao = getElementVal('conclusao');


  // Salvar mensagens no Firestore
  savePost(
    titulo,
    conteudo,
    categoria,
    autor,
    linkdoartigo,
    imageURL,
    id,
    metodo,
    objetivo,
    imagem,
    palavra1,
    palavra2,
    palavra3,
    palavra4,
    palavra5,
    palavra6,
    significado1,
    significado2,
    significado3,
    significado4,
    significado5,
    significado6,
    fontIMG,
    fontIMGcapa,
    subcategoria,
    data,
    conclusao,
  );

  // Exibir alerta
  const alert = document.querySelector(".alert");
  alert.style.display = "block";

  // Remover alerta após 3 segundos
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);

  // Resetar o formulário
  document.getElementById("postForm").reset();
}

// Função para salvar posts no Firestore
const savePost = (
  titulo,
  conteudo,
  categoria,
  autor,
  linkdoartigo,
  imageURL,
  id,
  metodo,
  objetivo,
  imagem,
  palavra1,
  palavra2,
  palavra3,
  palavra4,
  palavra5,
  palavra6,
  significado1,
  significado2,
  significado3,
  significado4,
  significado5,
  significado6,
  fontIMG,
  fontIMGcapa,
  subcategoria,
  data,
  conclusao,
) => {
  db.collection("posts").add({
    titulo: titulo,
    conteudo: conteudo,
    categoria: categoria,
    autor: autor,
    id: id,
    imageURL: imageURL || null,
    linkdoartigo: linkdoartigo,
    metodo: metodo,
    objetivo: objetivo,
    imagem: imagem,
    palavra1: palavra1,
    palavra2: palavra2,
    palavra3: palavra3,
    palavra4: palavra4,
    palavra5: palavra5,
    palavra6: palavra6,
    significado1: significado1,
    significado2: significado2,
    significado3: significado3,
    significado4: significado4,
    significado5: significado5,
    significado6: significado6,
    fontIMG: fontIMG,
    fontIMGcapa: fontIMGcapa,
    subcategoria:subcategoria,
    data:data,
    conclusao:conclusao,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    console.log("Post salvo com sucesso!");
  }).catch((error) => {
    console.error("Erro ao salvar post: ", error);
  });
};

// Função para obter o valor de um elemento pelo ID
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
