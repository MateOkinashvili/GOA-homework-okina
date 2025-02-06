class AnimalCard {
    constructor(name, habitat, diet, extra, image) {
      this.name = name;
      this.habitat = habitat;
      this.diet = diet;
      this.extra = extra;
      this.image = image;
    }
  
    render() {
      const card = document.createElement('div');
      card.className = 'card';
  
      card.innerHTML = `
        <img src="${this.image}" alt="${this.name}" />
        <h2>${this.name}</h2>
        <p><strong>Habitat:</strong> ${this.habitat}</p>
        <p><strong>Diet:</strong> ${this.diet}</p>
        <p>${this.extra}</p>
      `;
  
      return card;
    }
  }
  
  const animals = [
    new AnimalCard('Tiger', 'Forests', 'Carnivore', '<strong>Has Fur:</strong> Yes', 'tiger.jpg'),
    new AnimalCard('Penguin', 'Antarctica', 'Carnivore', '<strong>Can Fly:</strong> No', 'penguin.jpg'),
  ];
  
  const animalList = document.getElementById('animal-list');
  animals.forEach((animal) => animalList.appendChild(animal.render()));