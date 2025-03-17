import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private jsonUrl = 'assets/data/employees.json';  // ✅ Correct path


  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.getEmployees().pipe(
      map(employees => employees.find(emp => emp.id === id))
    );
  }
}
