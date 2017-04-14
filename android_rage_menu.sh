#!/bin/bash
# adb shell am force-stop com.weatherapp
# adb shell am start -n com.weatherapp/com.weatherapp.MainActivity
adb shell input keyevent 82
adb shell input keyevent 46
adb shell input keyevent 66 66
