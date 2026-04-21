const schools = [
  { name: 'Lake Seneca Elementary School', link: 'https://forms.gle/bwHmJv4dKcYqD5QN7' },
];

const volunteerForm = 'https://forms.gle/id88TDpf7YNWaC1c7';

document.addEventListener('DOMContentLoaded', () => {
  const regTypeSelect = document.getElementById('registrationType');
  const schoolGroup = document.getElementById('schoolGroup');
  const schoolSelect = document.getElementById('schoolSelect');
  const continueBtn = document.getElementById('continueBtn');
  const footerYear = document.getElementById('footerYear');

  if (footerYear) footerYear.textContent = new Date().getFullYear();

  // Populate school options
  schools.forEach((school) => {
    const option = document.createElement('option');
    option.value = school.name;
    option.textContent = school.name;
    schoolSelect.appendChild(option);
  });

  function updateForm() {
    const type = regTypeSelect.value;

    if (type === 'child') {
      schoolGroup.style.display = 'block';
    } else {
      schoolGroup.style.display = 'none';
      schoolSelect.value = '';
    }

    updateButton();
  }

  function updateButton() {
    const type = regTypeSelect.value;
    const school = schoolSelect.value;
    const disabled = !type || (type === 'child' && !school);
    continueBtn.disabled = disabled;
  }

  regTypeSelect.addEventListener('change', updateForm);
  schoolSelect.addEventListener('change', updateButton);

  continueBtn.addEventListener('click', () => {
    const type = regTypeSelect.value;
    const school = schoolSelect.value;

    if (type === 'volunteer') {
      window.open(volunteerForm, '_blank', 'noopener,noreferrer');
      window.location.href = 'index.html';
    } else if (type === 'child' && school) {
      const found = schools.find((s) => s.name === school);
      if (found) {
        window.open(found.link, '_blank', 'noopener,noreferrer');
        window.location.href = 'index.html';
      }
    }
  });
});
