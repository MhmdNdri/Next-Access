import React from 'react'

const Battery = () => {

    const getBattery = () => {

        navigator.getBattery().then(function (battery) {
            function updateAllBatteryInfo() {
                updateChargeInfo();
                updateLevelInfo();
                updateChargingInfo();
                updateDischargingInfo();
            }
            updateAllBatteryInfo();

            battery.addEventListener('chargingchange', function () {
                updateChargeInfo();
            });
            function updateChargeInfo() {
                console.log("Battery charging? "
                    + (battery.charging ? "Yes" : "No"));
            }

            battery.addEventListener('levelchange', function () {
                updateLevelInfo();
            });
            function updateLevelInfo() {
                alert("Battery level: "
                    + battery.level * 100 + "%");
            }

            battery.addEventListener('chargingtimechange', function () {
                updateChargingInfo();
            });
            function updateChargingInfo() {
                console.log("Battery charging time: "
                    + battery.chargingTime + " seconds");
            }

            battery.addEventListener('dischargingtimechange', function () {
                updateDischargingInfo();
            });
            function updateDischargingInfo() {
                console.log("Battery discharging time: "
                    + battery.dischargingTime + " seconds");
            }

        });

    }
    return (
        <div>
            <button onClick={getBattery}>
                Battery
            </button>
        </div>
    )
}

export default Battery