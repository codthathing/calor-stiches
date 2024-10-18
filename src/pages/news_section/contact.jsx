const ContactTemplate = () => {
  const contactDetails = [
    { id: 0, contactHead: "Contact Us", contactParOne: "Email: akinwumiboluwatife1975@gmail.com", contactPhone: "Phone: 09043445618" },
    { id: 1, contactHead: "Our store", contactParOne: "36 Imam Olorunimbe, Lagos State Nigeria" }
  ]

  return (
    <>
      {contactDetails.map(({ id, contactHead, contactParOne, contactPhone }) => {
        return (
          <main key={id} className="contactMain">
            <h1 className="contactHead">{contactHead}</h1>
            <p className="contactParagraph">{contactParOne}</p>
            {contactPhone && <p className="contactParagraph">{contactPhone}</p>}
          </main>
        );
      })}
    </>
  );

}

export default ContactTemplate;