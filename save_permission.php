<?php

$conn = new mysqli(
    "localhost",
    "root",
    "",
    "staffportal",
    3307
);

if($conn->connect_error){
    die("Connection Failed");
}

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$name = $data['employeeName'];

$id = $data['employeeId'];

$department = $data['department'];

$date = $data['date'];

$fromTime = $data['fromTime'];

$toTime = $data['toTime'];

$reason = $data['reason'];

$sql = "INSERT INTO permissions
(
employee_name,
employee_id,
department,
permission_date,
from_time,
to_time,
reason
)

VALUES
(
'$name',
'$id',
'$department',
'$date',
'$fromTime',
'$toTime',
'$reason'
)";

if($conn->query($sql) === TRUE){

    echo "Success";

}
else{

    echo "Error";

}

$conn->close();

?>