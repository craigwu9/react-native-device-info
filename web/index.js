/**
 * react-native-web empty polyfill.
 */

module.exports = {
  uniqueId: '',
  instanceId: '',
  serialNumber: '',
  androidId:() => new Promise((resolve, reject) => resolve('')),
  uniqueIdType:() => new Promise((resolve, reject) => resolve('')),
  getIpAddress: () => new Promise((resolve, reject) => resolve('')),
  getMacAddress: () => new Promise((resolve, reject) => resolve('')),
  deviceId: '',
  systemManufacturer: '',
  model: '',
  brand: '',
  systemName: '',
  systemVersion: '',
  apiLevel: 0,
  bundleId: '',
  appName: '',
  buildNumber: 0,
  appVersion: 0,
  deviceName: '',
  userAgent: window.navigator.userAgent,
  deviceLocale: '',
  deviceCountry: '',
  timezone: '',
  fontScale: 0,
  isEmulator: false,
  isTablet: false,
  is24Hour: false,
  isPinOrFingerprintSet: callback => callback && callback(false),
  firstInstallTime: 0,
  installReferrer: '',
  lastUpdateTime: 0,
  phoneNumber: '',
  carrier: '',
  totalMemory: 0,
  maxMemory: 0,
  totalDiskCapacity: 0,
  freeDiskStorage: 0,
  getBatteryLevel: () => Promise.resolve(0)
};
