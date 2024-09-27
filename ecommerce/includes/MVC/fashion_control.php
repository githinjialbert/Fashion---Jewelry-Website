<?php

require_once "fashion_model.php";

class FashionControl {
    private $master;

    public function __construct() {
        $this->master = new MyFashionStore();
    }

    public function userInput($fname, $email, $cmessage) {
        if ($_SERVER["REQUEST_METHOD"] === $_POST) {
            $fname = isset($_POST["fname"]) ? trim(htmlspecialchars($_POST["fname"])) : '';
            $email = isset($_POST["email"]) ? trim(htmlspecialchars($_POST["email"])) : '';
            $cmessage = isset($_POST["cmessage"]) ? trim(htmlspecialchars($_POST["cmessage"])) : '';

            if (empty($fname) || empty($email) || empty($cmessage)) {
                throw new Exception("Fill in all the fields.");
            }

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                throw new Exception("The Email you entered is invalid");
            }

            if (strlen($cmessage > 1000)) {
                throw new Exception("Your message is very long. Please make it concise.");
            }

            try {
                if ($this->master->takeUserInfo($fname, $email, $cmessage)) {
                    echo "Thanks for your Feedback. We'll reach out to you as soon as possible";
                    header("Location: ../contact.php");
                    exit();
                }
            } catch (PDOException $e) {
                error_log($e->getMessage());
                throw new Exception("An error occurred. Your information could not be submitted successfully");
            }
        }
    }
}