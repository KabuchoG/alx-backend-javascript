export default function createReportObject(employeesList) {

    return {
        allEmployees: employeesList,
        getNumberOfDepartments(allEmployees) {
            return allEmployees.keys().length;
        }
    }

}