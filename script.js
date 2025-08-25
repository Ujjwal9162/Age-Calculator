function calculateAge() {
  const dob = document.getElementById("dob").value;
  const resultBox = document.getElementById("result");

  if (!dob) {
    resultBox.innerText = "⚠️ Please select your Date of Birth.";
    resultBox.style.display = "block";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  resultBox.style.display = "block";
  resultBox.innerText = `🎉 Your Age: ${years} years, ${months} months, and ${days} days 🎂`;

  // 🎊 Confetti animation
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}
