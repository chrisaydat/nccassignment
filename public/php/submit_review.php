<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $firstName = $_POST['first_name'];
  $lastName = $_POST['last_name'];
  $review = $_POST['review'];

  $to = 'aydatdotorg@gmail.com';
  $subject = 'New Review Submitted';
  $message = "First Name: $firstName\nLast Name: $lastName\nReview: $review";
  $headers = 'From: aydatdotorg@gmail.com';

  mail($to, $subject, $message, $headers);
  echo "Review submitted successfully.";
}
?>
