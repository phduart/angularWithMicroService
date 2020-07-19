import { Component, OnInit } from '@angular/core';
import { ButtonRendererComponent } from './renderer/btn-renderer.component';
import { AppService } from './app.service';

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
      {headerName: 'Nome', field: 'nome', sortable: true, resizable: true, width: 250 },
      {headerName: 'Sobrenome', field: 'sobrenome', sortable: true, resizable: true, width: 250 },
      {headerName: 'Salário', field: 'salario', sortable: true, resizable: true, width: 250 },
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

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
    this.rowData = this.appService.getPessoas();
  }

  OnGridReady(params){
    this.gridApi=params.api;
    this.gridOptions=params.api;
    params.api.sizeColumnsToFit();
  }

  onBtnClick1(e) {
    console.log(e);
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
