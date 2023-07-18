(function() {
  // Add your EmailJS User ID, Service ID, and template ID here
  emailjs.init('YOUR_USER_ID');
  
  // Attach an event listener to the form submit button
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    // Send the email using EmailJS
    emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',{
      'from_name': name,
      'email': email,
      'phone': phone,
      'message': message
    })
      .then(function(response) {
        console.log('Email sent', response.status, response.text);
        alert('Thank you for contacting us!');
        document.getElementById('contact-form').reset();
      })
      .catch(function(error) {
        console.log('Email failed to send', error);
        alert('Sorry, there was an error sending your message. Please try again later.');
      });
  });
})();
