function sampleFunction() {
  const cbox = document.getElementById("samplecb");

  if (cbox.checked === false) {
    console.log("The checkbox is unchecked");
  } else {
    console.log("The checkbox is checked");
  }
}

sampleFunction();

document.getElementById("samplecb").addEventListener("change", sample);
