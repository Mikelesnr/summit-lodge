export function EmailTemplate(
  firstName,
  lastName,
  email,
  message,
  bank,
  account,
  acoount_no
) {
  return `<body style="background-color: #af9a7d; display: grid; align-items: center">
  <div
    style="
      background: linear-gradient(
          0deg,
          rgba(3, 3, 3, 0.7),
          rgba(17, 16, 15, 0.7)
        ),
        url('https://live.staticflickr.com/65535/53930464836_567148a6e6_b.jpg');
      height: fit-content;
      filter: 30%;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      color: #af9a7d;
    "
  >
    <br />
    <br />
    <img
      src="https://previews.dropbox.com/p/thumb/ACVy4uetHJxi4jBKYYAmOmg60GaqxBBNDtfkeUWrW6V0fz4yRkEuRzMLb6O7GPT1jLztf244eqlrjj7W4n3Fm0-B_QjNP-R0Z3ck-2eba7wMNTJby33yNlK1LI1DH6R-ap98p9sfhrWmoXmgReehPMhmSMbddBNcHKhutfMsAPuBee8Eprniq4j8VfJZho_ttcmfiiTybwh4IAb2cMiaYO6IQaQGqGjnKJepGV7t4fR2HHPcDKWBnl5EO5EMVn4dHnVjSK9hJlMUJAkPp6IsJ_8GnV4rMpB0F5GiD6x8QHw2uU3hpjZhcNt73VDd7rFo2STC9Ygk8VL_4pBtNIp7Pp2b/p.png"
      alt=""
      style="max-width: 90%"
    />
    <h1 style="text-align: center">Booking Confirmation</h1>
    <h3>Booking for: ${firstName} ${lastName}</h3>
    <h3>Email: ${email}</h3>
    <h3>Invoice</h3>
    <p>${message}</p>
    <h3 style="color: #af9a7d;">Payment details</h3>
    <p style="color: #af9a7d;">Bank Name: ${bank}</p>
    <p style="color: #af9a7d;">Account Type: ${account}</p>
    <p style="color: #af9a7d;">Account Number: ${acoount_no}</p>
    <br />
    <br />
  </div>
</body>
`;
}
