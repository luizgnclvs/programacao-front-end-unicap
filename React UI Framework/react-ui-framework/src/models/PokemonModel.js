export default class Pokemon {
    constructor(id, name, photo, height, weight, types, flavorText, abilities, genderRate, captureRate, baseExperience) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.height = height;
        this.weight = weight;
        this.types = types;
        this.flavorText = flavorText;
        this.abilities = abilities;
        this.genderRate = genderRate;
        this.captureRate = captureRate;
        this.baseExperience = baseExperience;
    }
}