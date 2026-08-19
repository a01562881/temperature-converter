const TemperatureVO = require('../valueobjects/TemperatureVO');

const TemperatureManager = () => {
    function convert(temperature, unit){
        return new TemperatureV0(temperature.value, unit)
    }

    return { convert };

};

module.exports = TemperatureManager;