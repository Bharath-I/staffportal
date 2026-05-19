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

$sql =
"SELECT * FROM permissions
ORDER BY id DESC";

$result = $conn->query($sql);

$permissions = [];

while($row = $result->fetch_assoc()){

    $permissions[] = $row;

}

echo json_encode($permissions);

$conn->close();

?>