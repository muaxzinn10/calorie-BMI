function calculate() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activity = document.getElementById('activity').value;

    if (age && gender && weight && height && activity) {
        // Calculate BMR (Basal Metabolic Rate)
        let bmr;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        // Calculate TDEE (Total Daily Energy Expenditure)
        const tdee = bmr * activity;

        // Calculate calories needed for weight loss (100% to 58%)
        const calorieNeeds100 = tdee;
        const calorieNeeds90 = tdee * 0.90;
        const calorieNeeds79 = tdee * 0.79;
        const calorieNeeds58 = tdee * 0.58;

        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        // Get BMI category
        const bmiCategory = getBMICategory(bmi);

        // Display results
        document.getElementById('bmi-result').innerText = `BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
        document.getElementById('calorie-result').innerHTML = `
            Calorie needs:<br>
            100% (normal): ${calorieNeeds100.toFixed(2)} calories/day<br>
            90% (mild weight loss): ${calorieNeeds90.toFixed(2)} calories/day<br>
            79% (weight loss): ${calorieNeeds79.toFixed(2)} calories/day<br>
            58% (heavy weight loss): ${calorieNeeds58.toFixed(2)} calories/day<br>
        `;
    } else {
        alert('Please fill in all fields.');
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}
