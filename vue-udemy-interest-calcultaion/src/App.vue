<template>
  <div>
    <div class="container">
      <div class="header">Future Interest Calculation</div>
      <div>
        <div class="content">
          <div class="leftText">You Will Calculate</div>
          <div class="rightField">Future value and interest amount</div>
          <div class="rightField">
            <label class="radioButton">
              <input
                type="radio"
                name="credit"
                value="Credit Calculation"
                id="creditCalculation"
              />
              <span class="radioButtonText">Credit Calculation</span>
              <input
                type="radio"
                name="credit"
                value="Calculation"
                id="calculation"
              />
              <span class="radioButtonText">Calculation</span>
            </label>
          </div>
        </div>
        <div class="content">
          <div class="leftText">Present value(Capital)</div>
          <div class="rightField">
            <input v-model="capital" class="capitalInput" />
          </div>
        </div>
        <div class="content">
          <span class="leftText">Interest Rate</span>
          <label>
            <input v-model="rate" class="inputs" />
          </label>
          <label>
            <select class="selectOption" v-model="rateType">
              <option value="Yearly" class="options">% Yearly</option>
              <option value="Monthly" class="options">% Monthly</option>
              <option value="Daily" class="options">% Daily</option>
            </select>
          </label>
        </div>
        <div class="content">
          <span class="leftText">Term</span>
          <label>
            <input v-model="termValue" class="inputs" />
          </label>
          <label>
            <select v-model="term" class="selectOption">
              <option
                v-for="item in termArray"
                :value="item"
                :key="item"
                class="options"
              >
                {{ item }}
              </option>
            </select>
          </label>
        </div>
        <div class="calculateArea">
          <button
            :style="[buttonDisable ? disabledStyle : '']"
            :disabled="buttonDisable"
            @click="interestCalculation()"
            class="calculateButton"
          >
            calculate
          </button>
        </div>
      </div>
    </div>
    <div class="calculateReasult" v-show="result !== 0">
      <!-- v-if="result !==0" -->
      <span class="title">Calculation Result</span>
      <label class="outText">
        If you invested ${{ capital }} now, {{ termValue }} {{ term }} later,
        you get
        <span class="resultText">${{ result }}</span>
      </label>
    </div>
    <div class="calculateReasult" v-show="result !== 0">
      <!-- v-if="result !==0" -->
      <span class="title">Calculation Result</span>
      <label class="outText">
        If you invested ${{ capital }} now, {{ termValue }} {{ term }} later,
        you get
        <span class="resultText">${{ result }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      capital: null,
      rate: 0,
      rateType: "Yearly",
      termValue: 0,
      term: "Year",
      result: 0,
      termArray: ["Year", "Month", "Day"],
      disabledStyle: {
        background: "#cccccc",
      },
    };
  },
  computed: {
    computedTermValue() {
      if (this.rateType === "Yearly") {
        if (this.term === "Year") {
          return this.termValue;
        } else if (this.term === "Month") {
          return this.termValue / 12;
        } else {
          return this.termValue / 360;
        }
      } else if (this.rateType === "Month") {
        if (this.term === "Year") {
          return this.termValue * 12;
        } else if (this.term === "Month") {
          return this.termValue;
        } else {
          return this.termValue / 30;
        }
      } else {
        if (this.term === "Year") {
          return this.termValue * 360;
        } else if (this.term === "Month") {
          return this.termValue * 30;
        } else {
          return this.termValue;
        }
      }
    },
    buttonDisable() {
      return this.termValue == 0 || this.rate == 0 || this.result === null;
    },
  },
  methods: {
    interestCalculation() {
      const result =
        this.capital * Math.pow(1 + this.rate * 0.01, this.computedTermValue);
      this.result = parseInt(result);
      console.log(this.result);
    },
  },
  // methodlar this anahtarını kullanmadan data değişkenlerine erişemezler
};
</script>

<style>
.container {
  font-family: Arial, sans-serif;
  font-size: 15px;
  max-width: 600px;
  background-color: #f5f5f9;
  border-radius: 7px;
  box-shadow: 0 0 12px #888;
  margin-top: 20px;
  padding: 20px 10px 10px;
  margin-right: auto;
  margin-left: auto;
}
.header {
  font-weight: normal;
  padding-bottom: 5px;
  font-size: 17px;
  padding-top: 5px;
  width: 100%;
  text-shadow: 1px 1px 1px white;
  letter-spacing: 1px;
  text-align: center;
}
.content {
  margin-top: 20px;
  display: flex;
}
.leftText {
  width: 40%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15px;
  color: blue;
}
.rightField {
  font-size: 14px;
  width: 60%;
  display: flex;
  flex-direction: column;
}
.capitalInput {
  width: 95%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 7px;

  border: solid 1px #e8e8e8;
  border-radius: 3px;
  box-shadow: 0 0 2px silver;
  font-size: 14px;
  resize: vertical;
}
.inputs {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 7px;
  border-radius: 3px;
  border: solid 1px #e8e8e8;
  box-shadow: 0 0 1px silver;
  font-size: 14px;
}
.selectOption {
  padding: 7px;
  border-radius: 3px;
  border: solid 1px #e8e8e8;
  box-shadow: 0 0 1px silver;
  font-size: 12px;
  margin: 5px 4px 5px 56px;
  width: 115px;
}
.options {
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0 2px 1px;
}
.calculateArea {
  border-top: 1px solid silver;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}
.calculateButton {
  box-sizing: content-box;
  padding: 10px;
  min-width: 100px;
  background-color: #0094ff;
  color: white;
  border: solid 1px transparent;
  cursor: pointer;
  border: solid 1px transparent;
  font-weight: 600;
  text-shadow: 1px 1px 1px #555555;
  margin-top: 20px;
}
.calculateReasult {
  max-width: 600px;
  background-color: #d8dbd3;
  box-shadow: 0 0 12px #888888;
  border-radius: 7px;
  margin-top: 25px;
  padding: 20px 10px 10px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  font-family: Cambria, sans-serif;
  border-bottom: 1px solid silver;
  padding-bottom: 10px;
  font-size: 20px;
  color: #23233b;
}
.outText {
  margin-top: 20px;
  color: #313629;
}
.resultText {
  font-weight: 600;
  font-size: 18px;
}
.radioButton {
  font-size: 13px;
}
.radioButtonText {
  font-size: 14px;
  text-align: center;
  margin-top: -2px;
}
</style>
