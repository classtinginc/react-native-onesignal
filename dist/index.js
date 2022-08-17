'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSNotification = exports.NotificationReceivedEvent = void 0;
var react_native_1 = require("react-native");
var EventManager_1 = __importDefault(require("./events/EventManager"));
var events_1 = require("./events/events");
var NotificationReceivedEvent_1 = __importDefault(require("./events/NotificationReceivedEvent"));
exports.NotificationReceivedEvent = NotificationReceivedEvent_1.default;
var helpers_1 = require("./helpers");
var RNOneSignal = react_native_1.NativeModules.OneSignal;
var eventManager = new EventManager_1.default(RNOneSignal);
var OneSignal = /** @class */ (function () {
    function OneSignal() {
    }
    /* I N I T I A L I Z A T I O N */
    /**
     * Completes OneSignal initialization by setting the OneSignal Application ID.
     * @param  {string} appId
     * @returns void
     */
    OneSignal.setAppId = function (appId) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.setAppId(appId);
    };
    /* O B S E R V E R S */
    /**
     * Add a callback that fires when the native push permission changes.
     * @param  {(event:ChangeEvent<PermissionChange>) => void} observer
     * @returns void
     */
    OneSignal.addPermissionObserver = function (observer) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        (0, helpers_1.isValidCallback)(observer);
        RNOneSignal.addPermissionObserver();
        eventManager.addEventHandler(events_1.PERMISSION_CHANGED, observer);
    };
    /**
     * Clears current permission observers.
     * @returns void
     */
    OneSignal.clearPermissionObservers = function () {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.removePermissionObserver();
        eventManager.clearEventHandler(events_1.PERMISSION_CHANGED);
    };
    /**
     * Add a callback that fires when the OneSignal subscription state changes.
     * @param  {(event:ChangeEvent<SubscriptionChange>) => void} observer
     * @returns void
     */
    OneSignal.addSubscriptionObserver = function (observer) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        (0, helpers_1.isValidCallback)(observer);
        RNOneSignal.addSubscriptionObserver();
        eventManager.addEventHandler(events_1.SUBSCRIPTION_CHANGED, observer);
    };
    /**
     * Clears current subscription observers.
     * @returns void
     */
    OneSignal.clearSubscriptionObservers = function () {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.removeSubscriptionObserver();
        eventManager.clearEventHandler(events_1.SUBSCRIPTION_CHANGED);
    };
    /**
     * Add a callback that fires when the OneSignal email subscription changes.
     * @param  {(event:ChangeEvent<EmailSubscriptionChange>) => void} observer
     * @returns void
     */
    OneSignal.addEmailSubscriptionObserver = function (observer) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        (0, helpers_1.isValidCallback)(observer);
        RNOneSignal.addEmailSubscriptionObserver();
        eventManager.addEventHandler(events_1.EMAIL_SUBSCRIPTION_CHANGED, observer);
    };
    /**
     * Clears current email subscription observers.
     * @returns void
     */
    OneSignal.clearEmailSubscriptionObservers = function () {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.removeEmailSubscriptionObserver();
        eventManager.clearEventHandler(events_1.EMAIL_SUBSCRIPTION_CHANGED);
    };
    /**
     * Add a callback that fires when the OneSignal sms subscription changes.
     * @param  {(event:ChangeEvent<SMSSubscriptionChange>) => void} observer
     * @returns void
     */
    OneSignal.addSMSSubscriptionObserver = function (observer) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        (0, helpers_1.isValidCallback)(observer);
        RNOneSignal.addSMSSubscriptionObserver();
        eventManager.addEventHandler(events_1.SMS_SUBSCRIPTION_CHANGED, observer);
    };
    /**
     * Clears current SMS subscription observers.
     * @returns void
     */
    OneSignal.clearSMSSubscriptionObservers = function () {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.removeSMSSubscriptionObserver();
        eventManager.clearEventHandler(events_1.SMS_SUBSCRIPTION_CHANGED);
    };
    /* H A N D L E R S */
    /**
     * Sets the handler that fires before the notification is displayed
     * Callback parameter is a `NotificationReceivedEvent` with:
     *  - notification data
     *  - `complete` function that accepts the `NotificationReceivedEvent`
     * @param  {(event:NotificationReceivedEvent) => void} handler
     */
    OneSignal.setNotificationWillShowInForegroundHandler = function (handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        (0, helpers_1.isValidCallback)(handler);
        RNOneSignal.setNotificationWillShowInForegroundHandler();
        eventManager.setEventHandler(events_1.NOTIFICATION_WILL_SHOW, handler);
    };
    /**
     * Set the callback to run on notification open.
     * @param  {(openedEvent:OpenedEvent) => void} handler
     * @returns void
     */
    OneSignal.setNotificationOpenedHandler = function (handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        (0, helpers_1.isValidCallback)(handler);
        RNOneSignal.setNotificationOpenedHandler();
        eventManager.setEventHandler(events_1.NOTIFICATION_OPENED, handler);
    };
    /* R E G I S T R A T I O N  E T C */
    /**
     * Prompts the user for push notifications permission in iOS and Android 13+.
     * Use the fallbackToSettings parameter to prompt to open the settings app if a user has already declined push permissions.
     *
     * Call with promptForPushNotificationsWithUserResponse(fallbackToSettings?, handler?)
     *
     * Recommended: Do not use and instead follow: https://documentation.onesignal.com/docs/ios-push-opt-in-prompt.
     * @param  {boolean} fallbackToSettings
     * @param  {(response:boolean) => void} handler
     * @returns void
     */
    OneSignal.promptForPushNotificationsWithUserResponse = function (fallbackToSettingsOrHandler, handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        var fallbackToSettings = false;
        if (typeof fallbackToSettingsOrHandler === "function") {
            // Method was called like promptForPushNotificationsWithUserResponse(handler: function)
            handler = fallbackToSettingsOrHandler;
        }
        else if (typeof fallbackToSettingsOrHandler === "boolean") {
            // Method was called like promptForPushNotificationsWithUserResponse(fallbackToSettings: boolean, handler?: function)
            fallbackToSettings = fallbackToSettingsOrHandler;
        }
        // Else method was called like promptForPushNotificationsWithUserResponse(), no need to modify
        if (!handler && react_native_1.Platform.OS === 'ios') {
            handler = function () { };
        }
        RNOneSignal.promptForPushNotificationsWithUserResponse(fallbackToSettings, handler);
    };
    /**
     * Only applies to iOS (does nothing on Android as it always silently registers)
     * Request for Direct-To-History push notification authorization
     *
     * For more information: https://documentation.onesignal.com/docs/ios-customizations#provisional-push-notifications
     *
     * @param  {(response:boolean) => void} handler
     * @returns void
     */
    OneSignal.registerForProvisionalAuthorization = function (handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (react_native_1.Platform.OS === 'ios') {
            (0, helpers_1.isValidCallback)(handler);
            RNOneSignal.registerForProvisionalAuthorization(handler);
        }
        else {
            console.log("registerForProvisionalAuthorization: this function is not supported on Android");
        }
    };
    /**
     * Disable the push notification subscription to OneSignal.
     * @param  {boolean} disable
     * @returns void
     */
    OneSignal.disablePush = function (disable) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.disablePush(disable);
    };
    /**
     * Android Only. If notifications are disabled for your application, unsubscribe the user from OneSignal.
     * @param  {boolean} unsubscribe
     * @returns void
     */
    OneSignal.unsubscribeWhenNotificationsAreDisabled = function (unsubscribe) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (react_native_1.Platform.OS === 'android') {
            RNOneSignal.unsubscribeWhenNotificationsAreDisabled(unsubscribe);
        }
        else {
            console.log("unsubscribeWhenNotificationsAreDisabled: this function is not supported on iOS");
        }
    };
    /* L O C A T I O N */
    /**
     * True if the application has location share activated, false otherwise
     * @returns Promise<boolean>
     */
    OneSignal.isLocationShared = function () {
        // must return a promise
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return Promise.resolve(false);
        return RNOneSignal.isLocationShared();
    };
    /**
     * Disable or enable location collection (defaults to enabled if your app has location permission).
     * @param  {boolean} shared
     * @returns void
     */
    OneSignal.setLocationShared = function (shared) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.setLocationShared(shared);
    };
    /**
     * Prompts the user for location permissions to allow geotagging from the OneSignal dashboard.
     * @returns void
     */
    OneSignal.promptLocation = function () {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        //Supported in both iOS & Android
        RNOneSignal.promptLocation();
    };
    /* D E V I C E  I N F O */
    /**
     * Gets the device state.
     * This method returns a "snapshot" of the device state for when it was called.
     * @returns Promise<DeviceState | null>
     */
    OneSignal.getDeviceState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deviceState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
                            return [2 /*return*/, Promise.resolve(null)];
                        return [4 /*yield*/, RNOneSignal.getDeviceState()];
                    case 1:
                        deviceState = _a.sent();
                        if (react_native_1.Platform.OS === 'android') {
                            deviceState['hasNotificationPermission'] = deviceState['areNotificationsEnabled'];
                            delete deviceState['areNotificationsEnabled'];
                        }
                        return [2 /*return*/, deviceState];
                }
            });
        });
    };
    /**
     * Allows you to set the app defined language with the OneSignal SDK.
     * @param  {string} language
     * @param  {(success:object) => void} onSuccess
     * @param  {(failure:object) => void} onFailure
     * @returns void
     */
    OneSignal.setLanguage = function (language, onSuccess, onFailure) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (!onSuccess) {
            onSuccess = function () { };
        }
        if (!onFailure) {
            onFailure = function () { };
        }
        RNOneSignal.setLanguage(language, onSuccess, onFailure);
    };
    /* T A G S */
    /**
     * Tag a user based on an app event of your choosing so they can be targeted later via segments.
     * @param  {string} key
     * @param  {string} value
     * @returns void
     */
    OneSignal.sendTag = function (key, value) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (!key || (!value && value !== "")) {
            console.error("OneSignal: sendTag: must include a key and a value");
        }
        RNOneSignal.sendTag(key, value);
    };
    /**
     * Tag a user with multiple tags based on an app event of your choosing so they can be targeted later via segments.
     * @param  {[key: string]: string} tags
     * @returns void
     */
    OneSignal.sendTags = function (tags) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        var keys = Object.keys(tags);
        if (keys.length === 0) {
            console.error("OneSignal: sendTags: argument must be of type object of the form { key : 'value' }");
        }
        RNOneSignal.sendTags(tags || {});
    };
    /**
     * Retrieve a list of tags that have been set on the user from the OneSignal server.
     * @param  {(tags: {[key: string]: string} | null) => void} handler
     * @returns void
     */
    OneSignal.getTags = function (handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.getTags(handler);
    };
    /**
     * Deletes a single tag that was previously set on a user.
     * @param  {string} key
     * @returns void
     */
    OneSignal.deleteTag = function (key) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (typeof key !== "string") {
            console.error("OneSignal: deleteTag: key argument must be of type string");
        }
        RNOneSignal.deleteTags([key]);
    };
    /**
     * Deletes multiple tags that were previously set on a user.
     * @param  {string[]} keys
     */
    OneSignal.deleteTags = function (keys) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (!Array.isArray(keys)) {
            console.error("OneSignal: deleteTags: argument must be of array type");
        }
        RNOneSignal.deleteTags(keys);
    };
    /* E M A I L */
    /**
     * Allows you to set the user's email address with the OneSignal SDK.
     * @param  {string} email
     * @param  {string} emailAuthCode
     * @param  {Function} handler
     * @returns void
     */
    OneSignal.setEmail = function (email, emailAuthCode, handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (emailAuthCode === undefined)
            emailAuthCode = null;
        // Android workaround for the current issue of callback fired more than once
        if (!handler && react_native_1.Platform.OS === 'ios')
            handler = function () { };
        RNOneSignal.setEmail(email, emailAuthCode, handler);
    };
    /**
     * If your app implements logout functionality, you can call logoutEmail to dissociate the email from the device.
     * @param  {Function} handler
     */
    OneSignal.logoutEmail = function (handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        // Android workaround for the current issue of callback fired more than once
        if (!handler && react_native_1.Platform.OS === 'ios')
            handler = function () { };
        RNOneSignal.logoutEmail(handler);
    };
    /* S M S */
    /**
     * Allows you to set the user's SMS number with the OneSignal SDK.
     * @param  {string} smsNumber
     * @param  {string} smsAuthCode
     * @param  {Function} handler
     * @returns void
     */
    OneSignal.setSMSNumber = function (smsNumber, smsAuthCode, handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (smsAuthCode === undefined)
            smsAuthCode = null;
        // Android workaround for the current issue of callback fired more than once
        if (!handler && react_native_1.Platform.OS === 'ios')
            handler = function () { };
        RNOneSignal.setSMSNumber(smsNumber, smsAuthCode, handler);
    };
    /**
     * If your app implements logout functionality, you can call logoutSMSNumber to dissociate the SMS number from the device.
     * @param  {Function} handler
     */
    OneSignal.logoutSMSNumber = function (handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        // Android workaround for the current issue of callback fired more than once
        if (!handler && react_native_1.Platform.OS === 'ios')
            handler = function () { };
        RNOneSignal.logoutSMSNumber(handler);
    };
    /* N O T I F I C A T I O N S */
    /**
     * Send a notification
     * @param  {string} notificationObjectString - JSON string payload (see REST API reference)
     * @param  {(success:object) => void} onSuccess
     * @param  {(failure:object) => void} onFailure
     * @returns void
     */
    OneSignal.postNotification = function (notificationObjectString, onSuccess, onFailure) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (!onSuccess)
            onSuccess = function () { };
        if (!onFailure)
            onFailure = function () { };
        RNOneSignal.postNotification(notificationObjectString, onSuccess, onFailure);
    };
    /**
     * Android Only. iOS provides a standard way to clear notifications by clearing badge count.
     * @returns void
     */
    OneSignal.clearOneSignalNotifications = function () {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (react_native_1.Platform.OS === 'android') {
            RNOneSignal.clearOneSignalNotifications();
        }
        else {
            console.log("clearOneSignalNotifications: this function is not supported on iOS");
        }
    };
    /**
     * Android Only.
     * Removes a single OneSignal notification based on its Android notification integer id.
     * @param  {number} id - notification id to cancel
     * @returns void
     */
    OneSignal.removeNotification = function (id) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (react_native_1.Platform.OS === 'android') {
            RNOneSignal.removeNotification(id);
        }
        else {
            console.log("removeNotification: this function is not supported on iOS");
        }
    };
    /**
     * Android Only.
     * Removes all OneSignal notifications based on its Android notification group Id.
     * @param  {string} id - notification group id to cancel
     * @returns void
     */
    OneSignal.removeGroupedNotifications = function (id) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (react_native_1.Platform.OS === 'android') {
            RNOneSignal.removeGroupedNotifications(id);
        }
        else {
            console.log("removeGroupedNotifications: this function is not supported on iOS");
        }
    };
    /**
     * This method can be used to set if launch URLs should be opened in safari or within the application.
     * @param  {boolean} isEnabled
     * @returns
     */
    OneSignal.setLaunchURLsInApp = function (isEnabled) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (react_native_1.Platform.OS === 'ios') {
            RNOneSignal.setLaunchURLsInApp(isEnabled);
        }
        else {
            console.log("setLaunchURLsInApp: this function is not supported on Android");
        }
    };
    /* E X T E R N A L  U S E R  I D */
    /**
     * Allows you to use your own system's user ID's to send push notifications to your users.
     * @param  {string} externalId
     * @param  {string} externalIdAuthCode?
     * @param  {(results:object) => void} handler?
     * @returns void
     */
    OneSignal.setExternalUserId = function (externalId, handlerOrAuth, handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (typeof handlerOrAuth === "function") {
            RNOneSignal.setExternalUserId(externalId, null, handlerOrAuth);
            return;
        }
        if (!handler && react_native_1.Platform.OS === 'ios') {
            handler = function () { };
        }
        RNOneSignal.setExternalUserId(externalId, handlerOrAuth, handler);
    };
    /**
     * Removes whatever was set as the current user's external user ID.
     * @param  {(results:object) => void} handler
     * @returns void
     */
    OneSignal.removeExternalUserId = function (handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        // Android workaround for the current issue of callback fired more than once
        if (handler === undefined && react_native_1.Platform.OS === 'ios')
            handler = function () { };
        RNOneSignal.removeExternalUserId(handler);
    };
    /* I N  A P P  M E S S A G I N G */
    /**
     * Sets an In-App Message click event handler.
     * @param  {(action:InAppMessageAction) => void} handler
     * @returns void
     */
    OneSignal.setInAppMessageClickHandler = function (handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        (0, helpers_1.isValidCallback)(handler);
        RNOneSignal.initInAppMessageClickHandlerParams();
        RNOneSignal.setInAppMessageClickHandler();
        eventManager.setEventHandler(events_1.IN_APP_MESSAGE_CLICKED, handler);
    };
    /**
     * Sets the In-App Message lifecycle handler object to run on displaying and/or dismissing an In-App Message.
     * @param  {InAppMessageLifecycleHandlerObject} handlerObject
     * @returns void
     */
    OneSignal.setInAppMessageLifecycleHandler = function (handlerObject) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (handlerObject.onWillDisplayInAppMessage) {
            (0, helpers_1.isValidCallback)(handlerObject.onWillDisplayInAppMessage);
            eventManager.setEventHandler(events_1.IN_APP_MESSAGE_WILL_DISPLAY, handlerObject.onWillDisplayInAppMessage);
        }
        if (handlerObject.onDidDisplayInAppMessage) {
            (0, helpers_1.isValidCallback)(handlerObject.onDidDisplayInAppMessage);
            eventManager.setEventHandler(events_1.IN_APP_MESSAGE_DID_DISPLAY, handlerObject.onDidDisplayInAppMessage);
        }
        if (handlerObject.onWillDismissInAppMessage) {
            (0, helpers_1.isValidCallback)(handlerObject.onWillDismissInAppMessage);
            eventManager.setEventHandler(events_1.IN_APP_MESSAGE_WILL_DISMISS, handlerObject.onWillDismissInAppMessage);
        }
        if (handlerObject.onDidDismissInAppMessage) {
            (0, helpers_1.isValidCallback)(handlerObject.onDidDismissInAppMessage);
            eventManager.setEventHandler(events_1.IN_APP_MESSAGE_DID_DISMISS, handlerObject.onDidDismissInAppMessage);
        }
        RNOneSignal.setInAppMessageLifecycleHandler();
    };
    /**
     * Add an In-App Message Trigger.
     * @param  {string} key
     * @param  {string | number | boolean} value
     * @returns void
     */
    OneSignal.addTrigger = function (key, value) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        // value can be assigned to `false` so we cannot just check `!value`
        if (!key || value == null) {
            console.error("OneSignal: addTrigger: must include a key and a value");
        }
        var trigger = {};
        trigger[key] = value;
        RNOneSignal.addTriggers(trigger);
    };
    /**
     * Adds Multiple In-App Message Triggers.
     * @param  {[key: string]: string | number | boolean} triggers
     * @returns void
     */
    OneSignal.addTriggers = function (triggers) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        var keys = Object.keys(triggers);
        if (keys.length === 0) {
            console.error("OneSignal: addTriggers: argument must be an object of the form { key : 'value' }");
        }
        RNOneSignal.addTriggers(triggers);
    };
    /**
     * Removes a list of triggers based on a collection of keys.
     * @param  {string[]} keys
     * @returns void
     */
    OneSignal.removeTriggersForKeys = function (keys) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.removeTriggersForKeys(keys);
    };
    /**
     * Removes a list of triggers based on a key.
     * @param  {string} key
     * @returns void
     */
    OneSignal.removeTriggerForKey = function (key) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.removeTriggerForKey(key);
    };
    /**
     * Gets a trigger value for a provided trigger key.
     * @param  {string} key
     * @returns Promise<string | number | boolean | null>
     */
    OneSignal.getTriggerValueForKey = function (key) {
        // must return a promise
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return Promise.resolve(null);
        return RNOneSignal.getTriggerValueForKey(key);
    };
    /**
     * Pause & unpause In-App Messages
     * @param  {boolean} pause
     * @returns void
     */
    OneSignal.pauseInAppMessages = function (pause) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.pauseInAppMessages(pause);
    };
    /* O U T C O M E S */
    /**
     * Increases the "Count" of this Outcome by 1 and will be counted each time sent.
     * @param  {string} name
     * @param  {(event:OutcomeEvent) => void} handler
     * @returns void
     */
    OneSignal.sendOutcome = function (name, handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (!handler) {
            handler = function () { };
        }
        RNOneSignal.sendOutcome(name, handler);
    };
    /**
     * Increases "Count" by 1 only once. This can only be attributed to a single notification.
     * @param  {string} name
     * @param  {(event:OutcomeEvent) => void} handler
     * @returns void
     */
    OneSignal.sendUniqueOutcome = function (name, handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (!handler) {
            handler = function () { };
        }
        RNOneSignal.sendUniqueOutcome(name, handler);
    };
    /**
     * Increases the "Count" of this Outcome by 1 and the "Sum" by the value. Will be counted each time sent.
     * If the method is called outside of an attribution window, it will be unattributed until a new session occurs.
     * @param  {string} name
     * @param  {string|number} value
     * @param  {(event:OutcomeEvent) => void} handler
     * @returns void
     */
    OneSignal.sendOutcomeWithValue = function (name, value, handler) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        if (!handler) {
            handler = function () { };
        }
        RNOneSignal.sendOutcomeWithValue(name, Number(value), handler);
    };
    /* P R I V A C Y  C O N S E N T */
    /**
     * Did the user provide privacy consent for GDPR purposes.
     * @returns Promise<boolean>
     */
    OneSignal.userProvidedPrivacyConsent = function () {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return Promise.resolve(false);
        //returns a promise
        return RNOneSignal.userProvidedPrivacyConsent();
    };
    /**
     * True if the application requires user privacy consent, false otherwise
     * @returns Promise<boolean>
     */
    OneSignal.requiresUserPrivacyConsent = function () {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return Promise.resolve(false);
        //returns a promise
        return RNOneSignal.requiresUserPrivacyConsent();
    };
    /**
     * For GDPR users, your application should call this method before setting the App ID.
     * @param  {boolean} required
     * @returns void
     */
    OneSignal.setRequiresUserPrivacyConsent = function (required) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.setRequiresUserPrivacyConsent(required);
    };
    /**
     * If your application is set to require the user's privacy consent, you can provide this consent using this method.
     * @param  {boolean} granted
     * @returns void
     */
    OneSignal.provideUserConsent = function (granted) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.provideUserConsent(granted);
    };
    /* O T H E R  F U N C T I O N S */
    /**
     * Enable logging to help debug if you run into an issue setting up OneSignal.
     * @param  {LogLevel} nsLogLevel - Sets the logging level to print to the Android LogCat log or Xcode log.
     * @param  {LogLevel} visualLogLevel - Sets the logging level to show as alert dialogs.
     * @returns void
     */
    OneSignal.setLogLevel = function (nsLogLevel, visualLogLevel) {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        RNOneSignal.setLogLevel(nsLogLevel, visualLogLevel);
    };
    /**
     * Clears all handlers and observers.
     * @returns void
     */
    OneSignal.clearHandlers = function () {
        if (!(0, helpers_1.isNativeModuleLoaded)(RNOneSignal))
            return;
        eventManager.clearHandlers();
    };
    /**
     * Classting custom methods
     */
    OneSignal.init = function (handler) {
        if (react_native_1.Platform.OS === 'android') {
            RNOneSignal.init(handler);
        }
        else {
            handler(true);
        }
    };
    OneSignal.getSdkVersion = function () {
        return RNOneSignal.getSdkVersion();
    };
    return OneSignal;
}());
exports.default = OneSignal;
var OSNotification_1 = require("./OSNotification");
Object.defineProperty(exports, "OSNotification", { enumerable: true, get: function () { return __importDefault(OSNotification_1).default; } });
