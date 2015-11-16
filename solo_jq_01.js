$(document).ready(function(){

  function Employee(firstName, lastName, employeeNumber, empTitle, lastScore, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.employeeNumber = employeeNumber;
    this.empTitle = empTitle;
    this.lastScore = lastScore;
    this.salary = salary;
  }

  var employees = [];


  $('#employeeForm').on('submit', function(e){
    $('#content').text('');
    var data = ($(this).serializeArray());
    //console.log(data);
    var firstEmployee = new Employee(data[0].value, data[1].value, data[2].value, data[3].value, data[4].value, data[5].value);
    //var secondEmployee = new Employee(data[0].firstName,);

    /*
    var totalSalary += salary;
    //console.log(totalSalary);
    outputString += "Total salary: $" + (totalSalary + employees[i].salary);
    */ 
    
    //console.log(firstEmployee);

    employees.push(firstEmployee);

    console.log(employees);


    //$('#content').append(employees);

    for (var i = 0; i < employees.length; i++) {
      var paragraphClass = "";

      if (parseInt(employees[i].lastScore) === 5) {
        paragraphClass = "employee green";
      }else if (parseInt(employees[i].lastScore) === 4) {
        paragraphClass = "employee yellow";
      }else if (parseInt(employees[i].lastScore) === 3) {
        paragraphClass = "employee blue";
      }else if (parseInt(employees[i].lastScore) === 2) {
        paragraphClass = "employee orange";
      }else if (parseInt(employees[i].lastScore) === 1) {
        paragraphClass = "employee red";
    }


      var outputString = "<p class=\"" + paragraphClass + "\">Name: " + employees[i].firstName + " ";
      outputString += employees[i].lastName + "<br />";
      outputString += "Employee number: " + employees[i].employeeNumber + "<br />";
      outputString += "Title: " + employees[i].empTitle + "<br />";
      outputString += "Review score: " + employees[i].lastScore + "<br />";
      outputString += "Salary: $" + employees[i].salary + "</p>";





      //outputString += "<button name=\"delete\">Delete</button>";



      $('#content').append(outputString);

      
      //array.splice(2, 1);

    }

   
    //$('#content').append("It works " + data[0].value + "! ");

    //$('#content').append("Your salary is " + data[5].value);
    //console.log(data[0]);
    e.preventDefault();
  });



});