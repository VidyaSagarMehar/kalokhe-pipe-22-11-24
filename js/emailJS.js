// Automate Email
let UserId = 'ZsZWEOngK1RoiCS2b';
let ServiceId = 'service_5djijly';
let TemplateId = 'template_uqtzzyt';

(function () {
	emailjs.init({ publicKey: UserId });
})();

document
	.getElementById('contact-form')
	.addEventListener('submit', function (e) {
		e.preventDefault();

		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const phone = document.getElementById('phone').value;
		const message = document.getElementById('message').value;

		// EmailJS parameters
		const params = {
			name: name,
			email: email,
			phone: phone,
			message: message,
		};

		emailjs
			.send(ServiceId, TemplateId, params)
			.then((response) => {
				alert('Message sent successfully!');
				document.getElementById('contact-form').reset();
			})
			.catch((error) => {
				alert('Failed to send message. Please try again.');
				console.error(error);
			});
	});
