import React from "react";
import styles from "../../styles/Location.module.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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

      battery.addEventListener("chargingchange", function () {
        updateChargeInfo();
      });
      function updateChargeInfo() {
        alert("Battery charging? " + (battery.charging ? "Yes" : "No"));
      }

      battery.addEventListener("levelchange", function () {
        updateLevelInfo();
      });
      function updateLevelInfo() {
        alert("Battery level: " + battery.level * 100 + "%");
      }

      battery.addEventListener("chargingtimechange", function () {
        updateChargingInfo();
      });
      function updateChargingInfo() {
        console.log(
          "Battery charging time: " + battery.chargingTime + " seconds"
        );
      }

      battery.addEventListener("dischargingtimechange", function () {
        updateDischargingInfo();
      });
      function updateDischargingInfo() {
        console.log(
          "Battery discharging time: " + battery.dischargingTime + " seconds"
        );
      }
    });
  };
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={getBattery}>
        Show me the Battery Status
      </button>
    </div>
  );
};

export default Battery;
