import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HotelService } from '../../services/hotel.service';


@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent {
  hotel: any = null;

  constructor(private route: ActivatedRoute, private hotelService: HotelService) {}

  ngOnInit() {
    const hotelId = Number(this.route.snapshot.paramMap.get('id'));
    this.hotel = this.hotelService.getHotelById(hotelId);
  }
}
