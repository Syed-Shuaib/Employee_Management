import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule], // Add CommonModule for *ngIf
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  employee: any;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(id).subscribe(data => {
      this.employee = data;
    });
  }
}
