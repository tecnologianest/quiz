<?php
//altere os dados dentro do arquivo .env

require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__);
$dotenv->load();

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Headers: *");
$input = json_decode(file_get_contents('php://input'), true);

//dados da api
$api_url = getenv("APIURL");
$api_key = getenv("APIKEY");
$api_list = $input['list'];
$api_list_status = 1;

$email = $input['email'];
$name = $input['name'];

echo "Email:" . $email;

if (isset($email)) {


    $curl_insert = curl_init();

    curl_setopt_array($curl_insert, [
        CURLOPT_URL => "$api_url/api/3/contact/sync",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "{\"contact\":{\"email\":\"$email\",\"firstName\":\"$name\"}}",
        CURLOPT_HTTPHEADER => [
            "Api-Token: $api_key",
            "accept: application/json",
            "content-type: application/json"
        ],
    ]);

    $response_insert = curl_exec($curl_insert);
    $err_insert = curl_error($curl_insert);

    $update = json_decode($response_insert);
    $updateId = $update->contact->id;

    $curl_update = curl_init();


    curl_setopt_array($curl_update, [
        CURLOPT_URL => "$api_url/api/3/contactLists",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "{\"contactList\":{\"list\":\"$api_list\",\"status\":\"$api_list_status\",\"contact\":\"$updateId\"}}",
        CURLOPT_HTTPHEADER => [
            "Api-Token: $api_key",
            "accept: application/json",
            "content-type: application/json"
        ],
    ]);


    $response_update = curl_exec($curl_update);
    $err_update = curl_error($curl_update);

    curl_close($curl_update);
    curl_close($curl_insert);

    $response = array(
        "response_insert" => $response_insert,
        "response_update" => $response_update
    );

    $err_response_insert = json_decode($response_insert);
    $err_response_update = json_decode($response_update);

    $arr_err = array(
        "error_insert" => $err_response_insert,
        "error_update" => $err_response_update
    );

    if ($response_insert === false || $response_insert === false) {
        header("HTTP/1.0 400 Bad Request");
    } else if ($err_insert || $err_update) {
        echo "cURL Error #:" . $err_insert;
        echo "cURL Error #:" . $err_update;
        header("HTTP/1.0 400 Bad Request");
    } else {
        echo json_encode($response);
    }
}