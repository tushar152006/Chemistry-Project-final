// Constants
const PLANCK_CONSTANT = 6.626e-34; // Joule·second
const SPEED_OF_LIGHT = 3.0e8; // meters/second

// Interactive Graph
const ctx = document.getElementById('spectrumChart').getContext('2d');
const spectrumChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['400nm', '450nm', '500nm', '550nm', '600nm', '650nm', '700nm'],
        datasets: [
            {
                label: 'Absorption Spectrum',
                data: [0.2, 0.4, 0.8, 0.6, 0.4, 0.3, 0.1],
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Emission Spectrum',
                data: [0.1, 0.3, 0.5, 0.7, 0.5, 0.4, 0.2],
                borderColor: 'red',
                borderWidth: 2,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: { title: { display: true, text: 'Wavelength (nm)' } },
            y: { title: { display: true, text: 'Intensity' } }
        }
    }
});

// User Calculation
document.getElementById('calculate').addEventListener('click', () => {
    const wavelength = parseFloat(document.getElementById('wavelength').value);
    if (!wavelength) {
        alert('Please enter a valid wavelength.');
        return;
    }

    const frequency = SPEED_OF_LIGHT / wavelength;
    const energy = PLANCK_CONSTANT * frequency;

    document.getElementById('results').innerHTML = `
        <p>Frequency: ${frequency.toExponential(2)} Hz</p>
        <p>Energy: ${energy.toExponential(2)} Joules</p>
    `;
});
