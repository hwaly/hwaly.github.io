const WeatherData = class {
    getTemperature() {}
    getHumidity() {}
    getPressure() {}
    measurementsChanged() {
        const temperature = this.getTemperature();
        const humidity = this.getHumidity();
        const pressure = this.getPressure();

        currentConditionsDisplay.update(temperature, humidity, pressure);
        statisticsDisplay.update(temperature, humidity, pressure);
        forecastDisplay.update(temperature, humidity, pressure);
    }
};

