DECLARE
  v_name Customers.Name%TYPE;
BEGIN
  FOR loan_rec IN (
    SELECT L.LoanID, L.CustomerID, L.DueDate, C.Name
    FROM Loans L
    JOIN Customers C ON L.CustomerID = C.CustomerID
    WHERE L.DueDate <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || loan_rec.Name || ', your loan (ID: ' || loan_rec.LoanID || ') is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-Mon-YYYY'));
  END LOOP;
END;
