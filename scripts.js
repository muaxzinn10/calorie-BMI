function calculate() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activity = document.getElementById('activity').value;

    if (age && gender && weight && height && activity) {
        // คำนวณ BMR (Basal Metabolic Rate)
        let bmr;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        // คำนวณ TDEE (Total Daily Energy Expenditure)
        const tdee = bmr * activity;

        // คำนวณแคลอรี่ที่ต้องการสำหรับการลดน้ำหนัก (100% ถึง 58%)
        const calorieNeeds100 = tdee;
        const calorieNeeds90 = tdee * 0.90;
        const calorieNeeds79 = tdee * 0.79;
        const calorieNeeds58 = tdee * 0.58;

        // คำนวณ BMI
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        // รับหมวดหมู่ BMI
        const bmiCategory = getBMICategory(bmi);

        // แสดงผลลัพธ์
        document.getElementById('bmi-result').innerText = `BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
        document.getElementById('calorie-result').innerHTML = `
            ความต้องการแคลอรี่:<br>
            100% (ปกติ): ${calorieNeeds100.toFixed(2)} แคลอรี่/วัน<br>
            90% (ลดน้ำหนักเล็กน้อย): ${calorieNeeds90.toFixed(2)} แคลอรี่/วัน<br>
            79% (ลดน้ำหนัก): ${calorieNeeds79.toFixed(2)} แคลอรี่/วัน<br>
            58% (ลดน้ำหนักอย่างหนัก): ${calorieNeeds58.toFixed(2)} แคลอรี่/วัน<br>
        `;
    } else {
        alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'น้ำหนักน้อย';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'น้ำหนักปกติ';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'น้ำหนักเกิน';
    } else {
        return 'โรคอ้วน';
    }
}


