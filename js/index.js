function getElementValueById(elementId) {
    const valueField = document.getElementById(elementId);
    const valueFieldString = valueField.value;
    const value = parseFloat(valueFieldString);
    // valueField.value = '';
    return value;
}

function setTextById(elementId, value) {
    const valueTextField = document.getElementById(elementId);
    valueTextField.innerText = value;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerRate = getElementValueById('player-field');
    const TotalRate = playerRate * 5
    setTextById('p-expense', TotalRate);
})
document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const PlayersCost = document.getElementById('p-expense').innerText;
    const TotalRate = parseFloat(PlayersCost)

    const manager = getElementValueById('manager-field');
    const coach = getElementValueById('coach-field');

    const totalCost = TotalRate + manager + coach;
    setTextById('total-expense', totalCost);

})