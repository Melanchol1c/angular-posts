export default class Geo {
  public lat: string;
  public lng: string;

  public constructor(data: Partial<Geo>) {
    this.lat = data.lat;
    this.lng = data.lng;
  }
}
