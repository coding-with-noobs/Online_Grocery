<?php
    require_once '../shared/database.php';

    $input = file_get_contents('php://input');
    $input = json_decode($input);
    $query = "SELECT `productid`,`image` from `products` where `productid` in (" . implode(',',$input) .");";
    $data = $dbconnection -> query($query);
    $array = [];
    
    while($row = $data -> fetch_assoc())
    {
        $array[$row['productid']] = $row['image'];
    }
    echo json_encode($array);
?>