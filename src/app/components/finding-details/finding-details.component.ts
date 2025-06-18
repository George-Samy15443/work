import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FindingsService } from '../../services/findings.service';
import { Icategory } from '../../models/icategory';
import { Ifinding } from '../../models/ifinding';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-finding-details',
  imports: [FormsModule],
  templateUrl: './finding-details.component.html',
  styleUrl: './finding-details.component.css'
})
export class FindingDetailsComponent implements OnInit{
  
  _finding = inject(FindingsService);
  categories!:Icategory[];
  findings!:Ifinding[];
  filteredFindings!: Ifinding[];
  selectedCatId: number = 0;
  searchTitle:string = '';

  ngOnInit(): void {
    this._finding.getAllCategories().subscribe({
      next:(res) => {
        this.categories = res;
      },
      error:(err) => {
        console.log(err);
      }
    });
    

     this._finding.getAllFindings().subscribe({
      next:(res) => {this.findings = res; this.filteredFindings = this.findings;},
      error:(err) => {console.log(err)}
    })

    this.filteredFindings = this.findings;


  }

  removeFinding(id: number){
    this._finding.removeFinding(id).subscribe({
      next:(res) => {
        console.log(res);
      },
      error:(err) => {
        console.log(err);
      }
    });
    this.findings = this.findings.filter(finding => finding.id != id);
  }

  onVariableChange(newValue: number){
    this._finding.getFindingByCategory(newValue).subscribe({
      next:(res) => {this.findings = res; this.filteredFindings = this.findings},
      error:(err) => {console.log(err)}
    })
  }

  onTitleChange(newValue: string){
    if(newValue == '')
      this.filteredFindings = this.findings;
    else
      this.filteredFindings = this.findings.filter(finding => finding.title.toLocaleLowerCase().includes(newValue.toLowerCase()));
  }
}
