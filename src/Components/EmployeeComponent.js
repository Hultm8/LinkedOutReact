import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5270/employees');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {employees.map((employee) => (
                <div key={employee.employeeId}>
                    <p>{employee.employeeName}</p>
                    <p>{employee.employeeEmail}</p>
                </div>
            ))}
        </div>
    );
};

export default EmployeeComponent;