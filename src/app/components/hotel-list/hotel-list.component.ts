import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/hotel.model';
import { HotelService } from '../../services/hotel.service';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  filteredHotels: Hotel[] = [];
  searchQuery: string = '';

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotels = this.hotelService.getHotels();
    this.filteredHotels = this.hotels;
  }

  onSearchChange(): void {
    this.filteredHotels = this.hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
