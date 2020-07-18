import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { ButtonRendererComponent } from './renderer/btn-renderer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridApi;
  gridOptions;
  rowDataClicked1 = {};
  rowSelection = "single";
  rowData: any;
  frameworkComponents: any;

  title = 'angularSearch';

  columnDefs = [
      {headerName: 'Make', field: 'make', sortable: true, resizable: true, width: 250 },
      {headerName: 'Model', field: 'model', sortable: true, resizable: true, width: 250 },
      {headerName: 'Price', field: 'price', sortable: true, resizable: true, width: 250 },
      {
        headerName: '',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onBtnClick1.bind(this),
          label: 'Deletar'
        },
        autoHeight: true,
        cellStyle: {textAlign: "center"}
      }
  ];

  constructor(private http: HttpClient) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }

  onBtnClick1(e) {
    console.log(e);
  }
  ngOnInit() {
      this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
  }

  OnGridReady(params){
    this.gridApi=params.api;
    this.gridOptions=params.api;
    params.api.sizeColumnsToFit();
  }

  onRowClicked(params){
    // console.log(params.data);
  }

  onCellClicked(params){
    if(params.colDef.field == "teste"){
      console.log(params);
    }
  }

}
