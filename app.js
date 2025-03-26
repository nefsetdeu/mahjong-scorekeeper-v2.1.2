/* styles.css - Shared styles for all pages */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: linear-gradient(to bottom, rgba(127, 29, 29, 0.7), rgba(69, 10, 10, 0.8)),
              url('mahjongback.jpg') no-repeat center center fixed;
  background-size: cover;
  color: #fef9c3;
  min-height: 100vh;
  padding-bottom: 20px;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 15px;
}

.header {
  padding: 20px 0;
  border-bottom: 1px solid #ca8a04;
  text-align: center;
  margin-bottom: 20px;
  background-color: transparent;
}

.header h1 {
  color: #eab308;
  margin-bottom: 10px;
  font-size: 24px;
}

.header p {
  color: #fde047;
  font-size: 16px;
}

.card {
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #a16207;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.card-title {
  color: #eab308;
  margin-bottom: 15px;
  font-size: 18px;
  border-bottom: 1px solid #713f12;
  padding-bottom: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #fde047;
}

.input-field {
  width: 100%;
  padding: 10px;
  background-color: #450a0a;
  border: 1px solid #ca8a04;
  border-radius: 4px;
  color: #fef9c3;
}

.select-field {
  width: 100%;
  padding: 10px;
  background-color: #450a0a;
  border: 1px solid #ca8a04;
  border-radius: 4px;
  color: #fef9c3;
}

@media (min-width: 576px) {
  .select-field {
    width: 120px;
  }
}

.btn {
  display: block;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #eab308;
  color: #7f1d1d;
}

.btn-primary:hover {
  background-color: #facc15;
}

.btn-secondary {
  background-color: #7f1d1d;
  color: #fde047;
  border: 1px solid #a16207;
}

.btn-secondary:hover {
  background-color: #9f2727;
}

.player-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #a16207;
  background-color: rgba(127, 29, 29, 0.3);
}

@media (min-width: 576px) {
  .player-row {
    flex-direction: row;
    align-items: center;
  }
}

.player-info {
  margin-bottom: 10px;
  width: 100%;
}

@media (min-width: 576px) {
  .player-info {
    margin-bottom: 0;
    margin-right: 10px;
  }
}

.player-label {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.player-icon {
  width: 30px;
  height: 30px;
  background-color: #7f1d1d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fde047;
  font-weight: bold;
  margin-right: 10px;
}

.banker-badge {
  background-color: #ca8a04;
  color: black;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 10px;
}

.checkbox-item {
  display: flex;
  padding: 10px;
  border: 1px solid #a16207;
  border-radius: 4px;
  margin-bottom: 10px;
  align-items: center;
  cursor: pointer;
  background-color: rgba(69, 10, 10, 0.6);
}

.checkbox-item:hover {
  background-color: rgba(127, 29, 29, 0.5);
}

.checkbox {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: #450a0a;
  border: 1px solid #ca8a04;
  border-radius: 3px;
  position: relative;
  display: inline-block;
}

.checkbox.checked:after {
  content: '✓';
  font-size: 16px;
  color: #eab308;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(69, 10, 10, 0.6);
  border: 1px solid #a16207;
  border-radius: 4px;
  margin-bottom: 10px;
}

.counter-label {
  flex: 1;
  font-size: 14px;
  color: #fde047;
}

.counter-controls {
  display: flex;
  align-items: center;
}

.counter-btn {
  width: 30px;
  height: 30px;
  background-color: #7f1d1d;
  color: #fde047;
  border: 1px solid #a16207;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
}

.counter-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.counter-value {
  margin: 0 10px;
  min-width: 30px;
  text-align: center;
  font-weight: bold;
}

.footer {
  text-align: center;
  padding: 10px 0;
  font-size: 12px;
  color: #a16207;
  border-top: 1px solid #713f12;
  margin-top: 20px;
}

.table-visualization {
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  border: 2px solid #ca8a04;
  border-radius: 8px;
  background-color: #7f1d1d;
}

.table-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background-color: #7f1d1d;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #eab308;
}

.table-position {
  position: absolute;
  width: 120px;
  text-align: center;
}

.table-position-east {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.table-position-south {
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.table-position-west {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.table-position-north {
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.player-name {
  background-color: #450a0a;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 5px;
  border: 1px solid #a16207;
}

.player-wind {
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-note {
  padding: 10px;
  background-color: rgba(127, 29, 29, 0.3);
  border-left: 4px solid #ca8a04;
  margin-bottom: 15px;
  font-size: 14px;
  color: #fde047;
}

.error-message {
  padding: 10px;
  background-color: rgba(220, 38, 38, 0.4);
  border-left: 4px solid #ef4444;
  margin-bottom: 15px;
  font-size: 14px;
  color: #fde047;
}

.section-heading {
  color: #fde047;
  margin: 15px 0 10px 0;
  font-size: 16px;
}

.subsection-heading {
  color: #ca8a04;
  margin: 10px 0 5px 0;
  font-size: 14px;
}

.score-summary {
  padding: 15px;
  background-color: rgba(127, 29, 29, 0.2);
  border-radius: 4px;
  margin-top: 15px;
}

.score-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.score-row.total {
  border-top: 1px solid #713f12;
  padding-top: 8px;
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #fde047;
}

.progress-indicator {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.progress-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #713f12;
}

.progress-dot.active {
  background-color: #eab308;
}

.progress-dot.completed {
  background-color: #ca8a04;
}

.winner-card {
  background: linear-gradient(to right, #713f12, #7f1d1d);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.winner-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eab308;
  color: #450a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  margin-right: 15px;
}

.winner-info {
  flex: 1;
}

.winner-name {
  font-size: 20px;
  font-weight: bold;
  color: #fef9c3;
}

.winner-score {
  margin-left: auto;
  font-size: 24px;
  font-weight: bold;
  color: #eab308;
}

.payout-row {
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #450a0a;
  border-radius: 4px;
  margin-bottom: 8px;
}

.payout-from {
  flex: 1;
  text-align: right;
  padding-right: 10px;
}

.payout-arrow {
  margin: 0 15px;
  color: #ca8a04;
}

.payout-to {
  flex: 1;
  padding-left: 10px;
}

.payout-amount {
  margin-left: auto;
  font-weight: bold;
  color: #eab308;
}

.history-item {
  padding: 10px;
  background-color: #450a0a;
  border-radius: 4px;
  margin-bottom: 10px;
}

.history-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 12px;
  color: #ca8a04;
}

.history-content {
  font-size: 14px;
}