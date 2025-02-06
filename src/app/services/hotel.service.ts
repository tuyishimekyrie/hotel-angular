import { Injectable } from '@angular/core';
import { Hotel } from '../../models/hotel.model';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private hotels: Hotel[] = [
    {
      id: 1,
      name: 'Hotel Paradise',
      description: 'Luxury hotel with ocean views.',
      location: 'Beachside',
      image: 'assets/download.jpeg',
    },
    {
      id: 2,
      name: 'Ocean View Resort',
      description: 'Scenic sea view resort.',
      location: 'Coastal area',
      image: 'assets/download (1).jpeg',
    },
    {
      id: 3,
      name: 'Mountain Lodge',
      description: 'Peaceful retreat in the mountains.',
      location: 'Hillside',
      image: 'assets/download (2).jpeg',
    },
  ];

  getHotels(): Hotel[] {
    return this.hotels;
  }

  getHotelById(id: number): Hotel | undefined {
    return this.hotels.find((h) => h.id === id);
  }
}
