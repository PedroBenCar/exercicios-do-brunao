class Animal {
    constructor(nome, cor, ambiente, comprimento, velocidade, patas) {
      this.nome = nome;
      this.cor = cor;
      this.ambiente = ambiente;
      this.comprimento = comprimento;
      this.velocidade = velocidade;
      this.patas = patas;
    }
  
    AlterarNome(nome) {
      this.nome = nome;
    }
  
    AlterarComprimento(comprimento) {
      this.comprimento = comprimento;
    }
  
    AlterarPatas(patas) {
      this.patas = patas;
    }
  
    AlterarCor(cor) {
      this.cor = cor;
    }
  
    AlterarAmbiente(ambiente) {
      this.ambiente = ambiente;
    }
  
    AlterarVelocidade(velocidade) {
      this.velocidade = velocidade;
    }
  
    Dados() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Comprimento: ${this.comprimento} cm`);
      console.log(`Patas: ${this.patas}`);
      console.log(`Cor: ${this.cor}`);
      console.log(`Ambiente: ${this.ambiente}`);
      console.log(`Velocidade: ${this.velocidade} m/s`);
    }
  }
  
  class Peixe extends Animal {
    constructor(nome, caracteristica, comprimento, velocidade) {
      super(nome, "cinzento", "mar", comprimento, velocidade, 0);
      this.caracteristica = caracteristica;
    }
  
    AlterarCaracteristica(caracteristica) {
      this.caracteristica = caracteristica;
    }
  
    Caracteristica() {
      return this.caracteristica;
    }
  
    Dados() {
      super.Dados();
      console.log(`Característica: ${this.caracteristica}`);
    }
  }
  
  class Mamifero extends Animal {
    constructor(nome, cor, alimento, comprimento, velocidade, patas) {
      super(nome, cor, "terra", comprimento, velocidade, patas);
      this.alimento = alimento;
    }
  
    AlterarAlimento(alimento) {
      this.alimento = alimento;
    }
  
    Alimento() {
      return this.alimento;
    }
  
    Dados() {
      super.Dados();
      console.log(`Alimento: ${this.alimento}`);
    }
  }
  
  // Criação dos animais do jardim zoológico
  const camelo = new Mamifero("Camelo", "castanho", "plantas", 230, 65, 4);
  const tubarao = new Peixe("Tubarão", "barbatanas", 400, 80);
  const urso = new Mamifero("Urso-do-Canadá", "castanho", "mel", 250, 55, 4);
  
  // Teste das funcionalidades dos animais
  console.log("Dados do Camelo:");
  camelo.Dados();
  console.log("Dados do Tubarão:");
  tubarao.Dados();
  console.log("Dados do Urso:");
  urso.Dados();
  