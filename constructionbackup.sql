CREATE TABLE Clients (
    ClientID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    ContactPerson VARCHAR(100),
    Phone VARCHAR(20),
    Email VARCHAR(100),
    Address VARCHAR(255)
);

CREATE TABLE Projects (
    ProjectID INT PRIMARY KEY AUTO_INCREMENT,
    ClientID INT,
    Name VARCHAR(100),
    Description TEXT,
    StartDate DATE,
    EndDate DATE,
    Budget DECIMAL(15, 2),
    FOREIGN KEY (ClientID) REFERENCES Clients(ClientID)
);

CREATE TABLE Expenses (
    ExpenseID INT PRIMARY KEY AUTO_INCREMENT,
    ProjectID INT,
    Description TEXT,
    Amount DECIMAL(15, 2),
    Date DATE,
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
);
