const toggleButton = document.getElementById('toggleButton');
const statusMessage = document.getElementById('statusMessage');
const loxoneAddress = document.getElementById('loxoneAddress');
const lightingController = document.getElementById('lightingController');

toggleButton.addEventListener('click', async () => {
try {
const response = await fetch(`http://${loxoneAddress.value}/api/v2/GetLightingStatus/${lightingController.value}`, {
method: 'GET',
headers: {
'Authorization': 'Bearer YOUR_LOXONE_API_TOKEN'
}
});

const data = await response.json();

if (data.State === 'ON') {
await fetch(`http://${loxoneAddress.value}/api/v2/SetLighting/${lightingController.value}/OFF`, {
method: 'POST',
headers: {
'Authorization': 'Bearer YOUR_LOXONE_API_TOKEN'
}
});

statusMessage.textContent = 'Lighting turned off.';
} else {
await fetch(`http://${loxoneAddress.value}/api/v2/SetLighting/${lightingController.value}/ON`, {
method: 'POST',
headers: {
'Authorization': 'Bearer YOUR_LOXONE_API_TOKEN'
}
});

statusMessage.textContent = 'Lighting turned on.';
}
} catch (error) {
statusMessage.textContent = `Error: ${error.message}`;
}
});
