document.querySelectorAll('.products-select_checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const label = this.nextElementSibling;
        if (this.checked) {
            label.textContent = 'Выбрано';
            label.style.color = '#28a745'; // зелёный
        } else {
            label.textContent = 'Выбрать';
            label.style.color = '#444';
        }
    });
});