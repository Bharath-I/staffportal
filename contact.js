const contactForm =
document.querySelector('.contact-form form');

contactForm.addEventListener('submit', function(e){

    e.preventDefault();

    // GET VALUES

    const name =
    contactForm.querySelectorAll('input')[0].value;

    const email =
    contactForm.querySelectorAll('input')[1].value;

    const subject =
    contactForm.querySelectorAll('input')[2].value;

    const message =
    contactForm.querySelector('textarea').value;

    // YOUR WHATSAPP NUMBER

    const companyWhatsapp = '919500828284';

    // MESSAGE

    const whatsappMessage =
`New Contact Message

Name: ${name}

Email: ${email}

Subject: ${subject}

Message:
${message}`;

    // ENCODE MESSAGE

    const encodedMessage =
    encodeURIComponent(whatsappMessage);

    // WHATSAPP LINK

    const whatsappURL =
    `https://wa.me/${companyWhatsapp}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');

    // SAVE MESSAGE

    const contactData = {

        name,
        email,
        subject,
        message,
        date : new Date().toLocaleString()

    };

    let messages =
    JSON.parse(localStorage.getItem('contactMessages')) || [];

    messages.push(contactData);

    localStorage.setItem(
        'contactMessages',
        JSON.stringify(messages)
    );

    // REDIRECT TO WHATSAPP

    window.location.href = whatsappURL;

    // RESET FORM

    contactForm.reset();

});