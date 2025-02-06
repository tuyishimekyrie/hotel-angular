import { Injectable } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import image1 from '../../assets/download.jpeg';
import image2 from '../../assets/download(1).jpeg';
import image3 from '../../assets/download(2).jpeg';



@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotels: Hotel[] = [  // Explicitly define the type
    { id: 1, name: 'Hotel Paradise', description: 'Luxury hotel with ocean views.', location: 'Beachside', image: image1 },
    { id: 2, name: 'Ocean View Resort', description: 'Scenic sea view resort.', location: 'Coastal area', image: image2 },
    { id: 3, name: 'Mountain Lodge', description: 'Peaceful retreat in the mountains.', location: 'Hillside', image: image3 }
  ];

  getHotels(): Hotel[] {
    return this.hotels;
  }

  getHotelById(id: number): Hotel | undefined {
    return this.hotels.find(h => h.id === id);
  }
}
