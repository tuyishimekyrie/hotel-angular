import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../../models/hotel.model';


@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {
  searchQuery: string = '';
  hotels: Hotel[] = []; // Explicitly define the type

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.hotels = this.hotelService.getHotels();
  }

  get filteredHotels(): Hotel[] {
    return this.hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
