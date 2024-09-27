<?php

class MyFashionStore {

    private $dbserver = 'localhost';
    private $dbname = 'ecommerce';
    private $dbusername = 'root';
    private $dbpassword = '';
    private $connection;

    public function __construct () {
        try {

            $this->connection = new PDO("mysql:host={$this->dbserver};dbname={$this->dbname}", $this->dbusername, $this->dbpassword);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
        } catch (PDOException $e) {
            die("Connection Failed: " . $e->getMessage());
        }
    }

    public function takeUserInfo($fname, $email, $cmessage) {
        try {

            $this->connection->beginTransaction();

            $stmt = $this->connection->prepare("SELECT id FROM contact_us WHERE email = :email");
            $stmt->bindParam(':email', $email);
            $stmt->execute();

            if ($stmt->rowCount() == 0) {
                $stmt = $this->connection->prepare("INSERT into contact_us(fname, email, cmessage) VALUES(:fname, :email, :cmessage);");
                $stmt->bindParam(':fname', $fname);
                $stmt->bingParam(':email', $email);
                $stmt->bindParam(':cmessage', $cmessage);
                $stmt->execute();

                $user_id = $this->connection->lastInsertId();
            } else {
                $user_id = $stmt->fetch(PDO::FETCH_ASSOC)['id'];
            }

            $this->connection->commit();
            return true;

        } catch (PDOException $e) {
            $this->connection->rollBack();
            error_log($e->getMessage());
            throw new Exception("Failed to submit. Please try again later");
        }
    }
}