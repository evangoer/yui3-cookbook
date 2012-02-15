<?php
header('Content-type: application/json');

$response = array();
if (isset($_GET['suspect']) && $_GET['suspect'] === 'butler') {
    $response['guilty']  = 'YES';
    $response['comment'] = 'We are as shocked as you are.';
}
else {
    $response['guilty']  = 'NO';
    $response['comment'] = 'Perhaps this murder will never be solved.';
}
echo json_encode($response);
?>