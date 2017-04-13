#!/bin/bash
adb shell am force-stop com.weatherapp && adb shell am start -n com.weatherapp/com.weatherapp.MainActivity
