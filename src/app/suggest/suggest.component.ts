import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {

// zoom level
  zoom: number = 13 ;
// start position
    lat: number = 41.3861;
    lng: number = 2.1619;



// markers
markers: marker[] = [
    {
      name:'Company one',
      lat: 41.3780,
      lng: 2.1500,
      draggable: true
    },
    {
      name:'Boadas Cocktail',
      lat:41.3822,
      lng:2.1660,
      draggable:false
    },
    {
      name:'Bitter Cockail',
      lat:41.3758,
      lng:2.1622,
      draggable:false
    },
    {
      name:'Paradiso',
      lat:41.3837,
      lng:2.1836,
      draggable:false
    },
    {
      name:'Slow Barcelona',
      lat:41.3934,
      lng:2.1529,
      draggable:false
    },
    {
      name:'Dry Martini',
      lat:41.3927,
      lng:2.1542,
      draggable:false
    }

 ]


constructor(){

}
// shows the value of the markers display
clickedMarker(marker:marker, index:number){
  console.log('Clicked Marker:'+marker.name+' at index'+index);
}
// on every click you add a marker
// mapClicked($event:any){
//   var newMarker = {
//     name:'Untitled',
//     lat:$event.coords.lat,
//     lng:$event.coords.lng,
//     draggable:false
//   }
//   this.markers.push(newMarker);
// }
// when marker move it refresh its location on map
markerDragEnd(marker:any, $event:any){
  console.log('dragEnd', marker , $event)

  var updMarker ={
    name: marker.name,
    lat: parseFloat(marker.lat),
    lng: parseFloat(marker.lng),
    draggable: false
  }
  var newLat = $event.coords.lat;
  var newLng = $event.coords.lng;
}


ngOnInit(){}
}
// marker type
interface marker{
  name?:string;
  lat: number;
  lng:number;
  draggable:boolean;
}
