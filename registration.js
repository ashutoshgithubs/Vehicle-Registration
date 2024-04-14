document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const vehicleNumber = document.getElementById("vehicle-number").value;
    const vehicleModel = document.getElementById("vehicle-model").value;

    const formData = `Name: ${name}, Phone: ${phone}, Vehicle Number: ${vehicleNumber}, Model: ${vehicleModel}`;

    saveFormDataToFile(formData);
    console.log(formData);
  });

function saveFormDataToFile(data) {
  const blob = new Blob([data], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "registration.txt";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
}
