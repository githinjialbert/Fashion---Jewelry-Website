<?php

class myFashionStore {

    private $dbserver = 'localhost';
    private $dbname = 'fashion_website';
    private $dbusername = 'root';
    private $dbpassword = '';
    private $connection;

    public function __construct () {
        try {
            $this->connection = new PDO("mysql:host={$this->dbserver};dbname={$this->dbname}", $this->dbusername, $this->dbpassword);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOExeption $e) {
            die("Connection Failed: " . $e->getMessage());
        }
    }

    

}