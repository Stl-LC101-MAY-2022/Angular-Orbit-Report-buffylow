import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
//o fix this, you'll need to replace the NaN string
//  with a structural directive to indicate how many satellites are on display in the table.
//  Like orbit-list, the orbit-counts component has access to the array of fetched 
// satellites using an input property called satellites.
	@Input() satellites: Satellite[];
	
  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }


}