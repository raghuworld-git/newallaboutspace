import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LaunchUtilService } from 'src/app/core/services/launch/launchUtil.service';

@Component({
  selector: 'app-launch-filter',
  templateUrl: './launch-filter.component.html',
  styleUrls: ['./launch-filter.component.css']
})
export class LaunchFilterComponent implements OnInit {

  constructor(public launchUtilService: LaunchUtilService) { }

  @Output() searchEvent = new EventEmitter<{filter:string,value:string}>();


  statusFilter: boolean = false;
  private filterValue:string=""
  ngOnInit(): void {

  }

  onFilterChange(selectedOption: any) {
    this.filterValue = selectedOption.target.value;
    //console.log(this.k.nativeElement);
    if (this.filterValue == "status") {
      this.statusFilter = true;
      
    }
    else {
      this.statusFilter = false;
      this.searchEvent.emit({filter:this.filterValue,value:""})
    }
  }

  onGo(){
    this.searchEvent.emit({filter:this.filterValue,value:""})
  }

}
