const BACKEND_URL = "http://localhost:8080/api/join";

// Name field validation - only alphabets and spaces
document.getElementById("name").addEventListener("input", function(e) {
  // Remove any character that is not a letter or space
  this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});

// Phone field validation - only numbers
document.getElementById("phone").addEventListener("input", function(e) {
  // Remove any character that is not a number
  this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("joinForm").addEventListener("submit", async e => {
  e.preventDefault();

    const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  // Additional validation before submission
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Name should contain only alphabets and spaces.");
    return;
  }

  if (!/^[0-9]+$/.test(phone)) {
    alert("Phone number should contain only digits.");
    return;
  }

  if (phone.length < 10) {
    alert("Phone number should be at least 10 digits.");
    return;
  }

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    membershipPlan: document.getElementById("membershipPlan").value,
    fitnessGoal: document.getElementById("fitnessGoal").value
  };

  console.log("Submitting:", data); // for debugging

  try {
    const res = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert("Thank you for joining FitZone!");
      e.target.reset();
    } else {
      alert("Something went wrong while submitting your form.");
    }
  } catch (err) {
    alert("Network error. Please try again later.");
  }
});
