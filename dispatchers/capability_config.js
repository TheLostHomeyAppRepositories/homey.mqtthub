//     "alarm_battery",
//     "alarm_bin_full",
//     "alarm_bin_missing",
//     "alarm_cleaning_pad_missing",
//     "alarm_co",
//     "alarm_co2",
//     "alarm_cold",
//     "alarm_connectivity",
//     "alarm_contact",
//     "alarm_door_fault",
//     "alarm_fire",
//     "alarm_gas",
//     "alarm_generic",
//     "alarm_heat",
//     "alarm_light",
//     "alarm_lost",
//     "alarm_moisture",
//     "alarm_motion",
//     "alarm_night",
//     "alarm_noise",
//     "alarm_occupancy",
//     "alarm_pm01",
//     "alarm_pm1",
//     "alarm_pm10",
//     "alarm_pm25",
//     "alarm_power",
//     "alarm_presence",
//     "alarm_problem",
//     "alarm_pump_device",
//     "alarm_pump_supply",
//     "alarm_running",
//     "alarm_safety",
//     "alarm_smoke",
//     "alarm_stuck",
//     "alarm_tamper",
//     "alarm_tank_empty",
//     "alarm_tank_missing",
//     "alarm_tank_open",
//     "alarm_vibration",
//     "alarm_water",
//     "audio_output",
//     "battery_charging_state",
//     "button",
//     "channel_down",
//     "channel_up",
//     "dim",
//     "dishwasher_program",
//     "docked",
//     "fan_mode",
//     "fan_speed",
//     "garagedoor_closed",
//     "heater_operation_mode",
//     "homealarm_state",
//     "hot_water_mode",
//     "laundry_washer_cycles",
//     "laundry_washer_program",
//     "laundry_washer_speed",
//     "level_aqi",
//     "level_carbon_filter",
//     "level_ch2o",
//     "level_co",
//     "level_co2",
//     "level_hepa_filter",
//     "level_nox",
//     "level_o3",
//     "level_pm01",
//     "level_pm1",
//     "level_pm10",
//     "level_pm25",
//     "level_radon",
//     "level_so2",
//     "level_tvoc",
//     "light_hue",
//     "light_mode",
//     "light_saturation",
//     "light_temperature",
//     "lock_mode",
//     "locked",
//     "measure_aqi",
//     "measure_battery",
//     "measure_carbon_filter",
//     "measure_ch2o",
//     "measure_co",
//     "measure_co2",
//     "measure_content_volume",
//     "measure_current",
//     "measure_data_rate",
//     "measure_data_size",
//     "measure_distance",
//     "measure_frequency",
//     "measure_gust_angle",
//     "measure_gust_strength",
//     "measure_hepa_filter",
//     "measure_humidity",
//     "measure_luminance",
//     "measure_moisture",
//     "measure_monetary",
//     "measure_noise",
//     "measure_nox",
//     "measure_o3",
//     "measure_odor",
//     "measure_ph",
//     "measure_pm01",
//     "measure_pm1",
//     "measure_pm10",
//     "measure_pm25",
//     "measure_power",
//     "measure_pressure",
//     "measure_radon",
//     "measure_rain",
//     "measure_rain_intensity",
//     "measure_rotation",
//     "measure_signal_strength",
//     "measure_so2",
//     "measure_speed",
//     "measure_temperature",
//     "measure_tvoc",
//     "measure_tvoc_index",
//     "measure_ultraviolet",
//     "measure_voltage",
//     "measure_water",
//     "measure_weight",
//     "measure_wind_angle",
//     "measure_wind_strength",
//     "media_input",
//     "meter_gas",
//     "meter_power",
//     "meter_rain",
//     "meter_water",
//     "mower_state",
//     "onoff",
//     "operational_state",
//     "oscillating",
//     "pump_mode",
//     "pump_setpoint",
//     "refrigerator_mode",
//     "speaker_album",
//     "speaker_artist",
//     "speaker_duration",
//     "speaker_next",
//     "speaker_playing",
//     "speaker_position",
//     "speaker_prev",
//     "speaker_repeat",
//     "speaker_shuffle",
//     "speaker_stop",
//     "speaker_track",
//     "swing_mode",
//     "target_humidity",
//     "target_humidity_max",
//     "target_humidity_min",
//     "target_temperature",
//     "target_temperature_level",
//     "target_temperature_max",
//     "target_temperature_min",
//     "thermostat_mode",
//     "vacuumcleaner_job_mode",
//     "vacuumcleaner_state",
//     "valve_position"
//     "volume_down",
//     "volume_mute",
//     "volume_set",
//     "volume_up",
//     "windowcoverings_closed",
//     "windowcoverings_set",
//     "windowcoverings_state",
//     "windowcoverings_tilt_down",
//     "windowcoverings_tilt_set",
//     "windowcoverings_tilt_up",

module.exports =
{
    alarm_battery: {
        payload: {
            device_class: 'battery'
        }
    },
    // alarm_bin_full
    // alarm_bin_missing
    // alarm_cleaning_pad_missing
    alarm_co: {
        payload: {
            device_class: 'carbon_monoxide'
        }
    },
    alarm_co2: {
        payload: {
            device_class: 'carbon_dioxide'
        }
    },
    alarm_cold: {
        payload: {
            device_class: 'cold'
        }
    },
    alarm_connectivity: {
        payload: {
            device_class: 'connectivity'
        }
    },
    // alarm_contact
    // alarm_door_fault
    // alarm_fire
    alarm_gas: {
        payload: {
            device_class: 'gas'
        }
    },
    // alarm_generic
    alarm_heat: {
        payload: {
            device_class: 'heat'
        }
    },
    alarm_light: {
        payload: {
            device_class: 'light'
        }
    },
    // alarm_lost
    alarm_moisture: {
        payload: {
            device_class: 'moisture'
        }
    },
    alarm_motion: {
        payload: {
            device_class: 'motion'
        }
    },
    // alarm_night
    // alarm_noise
    alarm_occupancy: {
        payload: {
            device_class: 'occupancy'
        }
    },
    // alarm_pm01
    // alarm_pm1
    // alarm_pm10
    // alarm_pm25
    alarm_power: {
        payload: {
            device_class: 'power'
        }
    },
    alarm_presence: {    
        payload: {
            device_class: 'presence'
        }
    },
    alarm_problem: {
        payload: {
            device_class: 'problem'
        }
    },
    // alarm_pump_device
    // alarm_pump_supply
    alarm_running: {
        payload: {
            device_class: 'running'
        }
    },
    alarm_safety: {
        payload: {
            device_class: 'safety'
        }
    },
    alarm_smoke: {
        payload: {
            device_class: 'smoke'
        }
    },
    // alarm_stuck
    alarm_tamper: {
        payload: {
            device_class: 'tamper'
        }
    },
    alarm_tamper: {
        payload: {
            device_class: 'tamper'
        }
    },
    // alarm_tank_empty
    // alarm_tank_missing
    // alarm_tank_open
    alarm_vibration: {
        payload: {
            device_class: 'vibration'
        }
    },
    alarm_water: {
        payload: {
            device_class: 'moisture'
        }
    },
    
    // audio_output
    // battery_charging_state
    // button
    // channel_down
    // channel_up
    // dim
    // dishwasher_program
    // docked
    // fan_mode
    // fan_speed
    // garagedoor_closed
    // heater_operation_mode
    // homealarm_state
    // hot_water_mode
    // laundry_washer_cycles
    // laundry_washer_program
    // laundry_washer_speed
    level_aqi: {
        payload: {
            device_class: 'aqi'
        }
    },
    // level_carbon_filter
    // level_ch2o
    level_co: {
        payload: {
            device_class: 'carbon_monoxide'
        }
    },
    level_co2: {
        payload: {
            device_class: 'carbon_dioxide'
        }
    },
    // level_hepa_filter
    level_nox: {
        payload: {
            device_class: 'nitrous_oxide'
        }
    },
    level_o3: {
        payload: {
            device_class: 'ozone'
        }
    },
    level_pm01: {
        payload: {
            device_class: 'pm1'
        }
    },
    level_pm10: {
        payload: {
            device_class: 'pm10'
        }
    },
    level_pm25: {
        payload: {
            device_class: 'pm25'
        }
    },
    // level_radon
    level_so2: {
        payload: {
            device_class: 'sulphur_dioxide'
        }
    },
    level_tvoc: {
        payload: {
            device_class: 'volatile_organic_compounds', 
        }
    },
    // light_hue
    // light_mode
    // light_saturation
    // light_temperature
    // lock_mode
    // locked
    measure_aqi: {
        payload: {
            device_class: 'aqi'
        }
    },
    measure_battery: {
        payload: {
            device_class: 'battery'
        }
    },
    // measure_carbon_filter
    // measure_ch2o
    measure_co: {
        payload: {
            device_class: 'co'
        }
    },
    measure_co2: {
        payload: {
            device_class: 'co2'
        }
    },
    // measure_content_volume
    measure_current: {
        payload: {
            device_class: 'current'
        }
    },
    // measure_data_rate
    // measure_data_size
    measure_distance: {
        payload: {
            device_class: 'distance'
        }
    },
    measure_frequency: {
        payload: {
            device_class: 'frequency'
        }
    },
    // measure_gust_angle
    // measure_gust_strength
    // measure_hepa_filter
    measure_humidity: {
        payload: {
            device_class: 'humidity'
        }
    },
    measure_luminance: {
        payload: {
            device_class: 'illuminance'
        }
    },
    measure_moisture: {
        payload: {
            device_class: 'moisture'
        }
    },
    measure_monetary: {    
        payload: {
            device_class: 'monetary'
        }
    },
    // measure_noise
    measure_nox: {
        payload: {
            device_class: 'nitrous_oxide'
        }
    },
    measure_o3: {
        payload: {
            device_class: 'ozone'
        }
    },
    // measure_odor
    measure_ph: {
        payload: {
            device_class: 'ph'
        }
    },
    measure_pm01: {
        payload: {
            device_class: 'pm1'
        }
    },
    measure_pm1: {
        payload: {
            device_class: 'pm1'
        }
    },
    measure_pm10: {
        payload: {
            device_class: 'pm10'
        }
    },
    measure_pm25: {
        payload: {
            device_class: 'pm25'
        }
    },
    measure_power: {
        payload: {
            device_class: 'power'
        }
    },
    measure_pressure: {
        payload: {
            device_class: 'pressure'
        }
    },
    // measure_radon
    // measure_rain
    // measure_rain_intensity
    // measure_rotation
    // measure_signal_strength
    measure_so2: {
        payload: {
            device_class: 'sulphur_dioxide'
        }
    },
    // measure_speed
    measure_temperature: {
        payload: {
            device_class: 'temperature'
        }
    },
    measure_tvoc: {
        payload: {
            device_class: 'volatile_organic_compounds'
        }
    },
    // measure_tvoc_index
    // measure_ultraviolet
    measure_voltage: {
        payload: {
            device_class: 'voltage'
        }
    },
    measure_water: {
        payload: {
            device_class: 'water'
        }
    },
    measure_weight: {
        payload: {
            device_class: 'weight'
        }
    },
    // measure_wind_angle
    // measure_wind_strength: {
    //     payload: { 
    //         device_class: 'wind_speed' // wind_speed = wind_strength (Bft)???
    // }
    // media_input
    meter_gas:  {
        payload: {
            device_class: 'gas'
        }
    },
    meter_power: {
        payload: {
            device_class: 'energy'
        }
    },
    // meter_rain
    meter_water: {
        payload: {
            device_class: 'water'
        }
    },
    // mower_state
    // onoff
    // operational_state
    // oscillating
    // pump_mode
    // pump_setpoint
    // refrigerator_mode
    // speaker_album
    // speaker_artist
    // speaker_duration
    // speaker_next
    // speaker_playing
    // speaker_position
    // speaker_prev
    // speaker_repeat
    // speaker_shuffle
    // speaker_stop
    // speaker_track
    // swing_mode
    target_humidity: {
        payload: {
            device_class: 'humidity'
        }
    },
    // target_humidity_max
    // target_humidity_min
    target_temperature: {
        payload: {
            device_class: 'temperature'
        }
    }
    // target_temperature_level
    // target_temperature_max
    // target_temperature_min
    // thermostat_mode
    // vacuumcleaner_job_mode
    // vacuumcleaner_state
    // valve_positio
    // volume_down
    // volume_mute
    // volume_set
    // volume_up
    // windowcoverings_closed
    // windowcoverings_set
    // windowcoverings_state
    // windowcoverings_tilt_down
    // windowcoverings_tilt_set
    // windowcoverings_tilt_up


}