import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
   options:object;
   Highcharts=Highcharts; 

   constructor() {

        this.options = {
               title: {
                  text: 'Monthly Attendence for Khushal For Chemistry',
                  x:-20
               },
               subtitle: {
                   text: 'FY-Batch-P2',
                   x:-20
               },
               chart: {
                 zoomType: 'xy',
                 type:'line'
               },
               xAxis: {
                 gridLineWidth:1,
                  title:{
                     text: '<b>Dates</b>',
                  },
                  type: "category",
                 categories:[0,1,2,"d",4,"ds",6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
               },
               yAxis: {
                  endOnTick:false,
                   title:{
                     text: '<b>Percentage Attendence (%)</b>'
                   },
                   max:100,
                   plotLines: [{
                     value:0,
                     width:1,
                   }]
               },
               plotOptions:{
                line: {
                  dataLabels: {
                      enabled: true,
                      formatter: function () {
                        return (this.y+"%")
                      },
                      color:'red',
                  },
                  enableMouseTracking: true
                }
               },
               
               marker:{
                    enabled:true,
               },
               tooltip:{
                //  formatter(){
                //        return 'X value-${this.x}. Y value -${point.y}';
                //  },
                   headerFormat: 'Day: '+'{point.x} <br/>',
                   pointerFormat: false,
                   backgroundColor: '#FCFFC5',
                   valueSuffix:' %',
                   borderWidth:3,
                   animation:false,
                   followPointer:true,
                   style:{
                       color:'red',
                   },
                   borderRadius:6,
                   shared:true
               },
               legend:{
                    layout:'vertical',
                    align:'right',
                    verticalAlign:'middle',
                    borderWidth:0
               },
               series: [
                 {
                   name:'Attendence ',
                  //  color:'rgba(223,83,83,.5)',
                 data: [[1,20.7],[2,88.8],[3,22.4],[4,15.2],[5,50],[6,17],[7,12],[8,1],[9,3],[10,33],[11,35],[12,54],[13,44],[14,22],[15,33],
                  [16,32],[17,22],[18,32],[19,32],[20,33],[21,23],[22,32],[23,54],[24,54],[25,4],[26,45],[27,5],[28,6],[29,5],[30,65]],
                  color:'#5DBCD2',
                // step:'left'
                 }
              ],
              responsive: {
                rules: [{
                    condition: {
                        maxWidth: 150
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
          }

             HC_exporting(Highcharts);

            setTimeout(()=>{
              window.dispatchEvent(new Event('resize'));
            },300);
            }
            

        }
    
    // outside constructor 


