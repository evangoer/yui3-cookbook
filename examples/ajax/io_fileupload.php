<?php
header('Content-type: application/json');

$response = array();
if (isset($_FILES['ode'])) {
    $response['name']  = filter_var($_FILES['ode']['name'], FILTER_SANITIZE_STRING);
    $response['size'] = $_FILES['ode']['size'];
}
echo json_encode($response);
?>