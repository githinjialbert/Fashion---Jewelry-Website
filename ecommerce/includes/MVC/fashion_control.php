<?php

require_once "fashion_model.php";

class FashionControl {
    private $master;

    public function __construct() {
        $this->master = new MyFashionStore();
    }

    public function userInput() {
       
        if ($_SERVER["REQUEST_METHOD"] === "POST") {

            $fname = isset($_POST["fname"]) ? trim(htmlspecialchars($_POST["fname"])) : '';
            $email = isset($_POST["email"]) ? trim(htmlspecialchars($_POST["email"])) : '';
            $cmessage = isset($_POST["cmessage"]) ? trim(htmlspecialchars($_POST["cmessage"])) : '';

            if (empty($fname) || empty($email) || empty($cmessage)) {
                throw new Exception("Please fill in all the fields.");
            }

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                throw new Exception("Invalid email format.");
            }

            if (strlen($cmessage) > 1000) {
                throw new Exception("Your message is too long. Please keep it under 1000 characters.");
            }

            
            try {
                if ($this->master->takeUserInfo($fname, $email, $cmessage)) {
                    header("Location: ../../contact.php");
                    exit();
                }
            } catch (Exception $e) {
                error_log($e->getMessage());
                throw new Exception("An error occurred while submitting your information. Please try again later.");
            }
        }
    }
}

$fashionControl = new FashionControl();
$fashionControl->userInput();