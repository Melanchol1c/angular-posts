import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AddressDto, CompanyDto, GeoDto, UserDto } from '@/app/core/dto';
import { Address, Company, Geo, User } from '@/app/core/models';
import { environment } from '@/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly USERS_URL = `${environment.apiUrl}/users`;

  constructor(protected readonly http: HttpClient) {}

  public getAll(): Observable<User[]> {
    return this.http
      .get<UserDto[]>(this.USERS_URL)
      .pipe(map((dtos) => dtos.map(this.mapDtoToUser)));
  }

  public getById(userId): Observable<User> {
    return this.http
      .get<UserDto>(`${this.USERS_URL}/${userId}`)
      .pipe(map(this.mapDtoToUser));
  }

  private mapDtoToUser = (dto: UserDto): User => {
    const address: Address = this.mapDtoToAddress(dto.address);
    const company: Company = this.mapDtoToCompany(dto.company);

    return new User({
      id: dto.id,
      name: dto.name,
      username: dto.username,
      email: dto.email,
      address,
      phone: dto.phone,
      website: dto.website,
      company,
      avatar: this.getRandomAvatar(),
    });
  };

  private mapDtoToAddress = (dto: AddressDto): Address => {
    const geo: Geo = this.mapDtoToGeo(dto.geo);

    return new Address({
      street: dto.street,
      suite: dto.suite,
      city: dto.city,
      zipcode: dto.zipcode,
      geo,
    });
  };

  private mapDtoToGeo = (dto: GeoDto): Geo => {
    return new Geo({
      lat: dto.lat,
      lng: dto.lng,
    });
  };

  private mapDtoToCompany = (dto: CompanyDto): Company => {
    return new Company({
      name: dto.name,
      catchPhrase: dto.catchPhrase,
      bs: dto.bs,
    });
  };

  private getRandomAvatar = () => {
    return `https://api.adorable.io/avatars/${Math.floor(
      Math.random() * Math.floor(1000)
    )}`;
  };
}
