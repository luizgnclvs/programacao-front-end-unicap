export default class Pokemon {
    constructor(id, name, img, height, weight, types, originalName, flavorText, abilities, baseExperience) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.height = height;
        this.weight = weight;
        this.types = types;
        this.originalName = originalName;
        this.flavorText = flavorText;
        this.abilities = abilities;
        this.baseExperience = baseExperience;
    }
}