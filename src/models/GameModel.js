export class GameModel {
  constructor(id, url, name, price, num_players, playtime, min_age) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.price = price;
    this.num_players = num_players;
    this.playtime = playtime;
    this.min_age = min_age;
  }
}
