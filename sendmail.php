<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Sanitize Inputs
        $name = htmlspecialchars(trim($_POST["name"]));
        $phone = htmlspecialchars(trim($_POST["phone"]));
        $email = htmlspecialchars(trim($_POST["email"]));
        $message = htmlspecialchars(trim($_POST["message"]));
        // Your Email
        $to = "suryatantraenterprisesllp@gmail.com";
        // Subject
        $subject = "New Contact Form Submission";
        // Email Body
        $body = "
        You received a new enquiry from your website.
        Name: $name
        Phone: $phone
        Email: $email
        Message: $message
        ";
        // Headers
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        // Send Mail
        if (mail($to, $subject, $body, $headers)) {
            echo "
            <script>
                alert('Message sent successfully!');
                window.location.href='contact.html';
            </script>
            ";
        } else {
            echo "
            <script>
                alert('Failed to send message.');
                window.history.back();
            </script>
            ";
        }
    } else {
        header('Location: contact.html');
        exit();
    }
?>