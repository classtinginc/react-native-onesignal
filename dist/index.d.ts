import { DeviceState, ChangeEvent, PermissionChange, SubscriptionChange, EmailSubscriptionChange, SMSSubscriptionChange } from './models/Subscription';
import NotificationReceivedEvent from './events/NotificationReceivedEvent';
import { OpenedEvent } from './models/NotificationEvents';
import { OutcomeEvent } from './models/Outcomes';
import { InAppMessage, InAppMessageAction, InAppMessageLifecycleHandlerObject } from './models/InAppMessage';
export declare type LogLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export default class OneSignal {
    /**
     * Completes OneSignal initialization by setting the OneSignal Application ID.
     * @param  {string} appId
     * @returns void
     */
    static setAppId(appId: string): void;
    /**
     * Add a callback that fires when the native push permission changes.
     * @param  {(event:ChangeEvent<PermissionChange>) => void} observer
     * @returns void
     */
    static addPermissionObserver(observer: (event: ChangeEvent<PermissionChange>) => void): void;
    /**
     * Clears current permission observers.
     * @returns void
     */
    static clearPermissionObservers(): void;
    /**
     * Add a callback that fires when the OneSignal subscription state changes.
     * @param  {(event:ChangeEvent<SubscriptionChange>) => void} observer
     * @returns void
     */
    static addSubscriptionObserver(observer: (event: ChangeEvent<SubscriptionChange>) => void): void;
    /**
     * Clears current subscription observers.
     * @returns void
     */
    static clearSubscriptionObservers(): void;
    /**
     * Add a callback that fires when the OneSignal email subscription changes.
     * @param  {(event:ChangeEvent<EmailSubscriptionChange>) => void} observer
     * @returns void
     */
    static addEmailSubscriptionObserver(observer: (event: ChangeEvent<EmailSubscriptionChange>) => void): void;
    /**
     * Clears current email subscription observers.
     * @returns void
     */
    static clearEmailSubscriptionObservers(): void;
    /**
     * Add a callback that fires when the OneSignal sms subscription changes.
     * @param  {(event:ChangeEvent<SMSSubscriptionChange>) => void} observer
     * @returns void
     */
    static addSMSSubscriptionObserver(observer: (event: ChangeEvent<SMSSubscriptionChange>) => void): void;
    /**
     * Clears current SMS subscription observers.
     * @returns void
     */
    static clearSMSSubscriptionObservers(): void;
    /**
     * Sets the handler that fires before the notification is displayed
     * Callback parameter is a `NotificationReceivedEvent` with:
     *  - notification data
     *  - `complete` function that accepts the `NotificationReceivedEvent`
     * @param  {(event:NotificationReceivedEvent) => void} handler
     */
    static setNotificationWillShowInForegroundHandler(handler: (event: NotificationReceivedEvent) => void): void;
    /**
     * Set the callback to run on notification open.
     * @param  {(openedEvent:OpenedEvent) => void} handler
     * @returns void
     */
    static setNotificationOpenedHandler(handler: (openedEvent: OpenedEvent) => void): void;
    /**
     * Prompts the iOS user for push notifications.
     * @param  {(response:boolean) => void} handler
     * @returns void
     */
    static promptForPushNotificationsWithUserResponse(handler: (response: boolean) => void): void;
    /**
     * Only applies to iOS (does nothing on Android as it always silently registers)
     * Request for Direct-To-History push notification authorization
     *
     * For more information: https://documentation.onesignal.com/docs/ios-customizations#provisional-push-notifications
     *
     * @param  {(response:boolean) => void} handler
     * @returns void
     */
    static registerForProvisionalAuthorization(handler: (response: boolean) => void): void;
    /**
     * Disable the push notification subscription to OneSignal.
     * @param  {boolean} disable
     * @returns void
     */
    static disablePush(disable: boolean): void;
    /**
     * Android Only. If notifications are disabled for your application, unsubscribe the user from OneSignal.
     * @param  {boolean} unsubscribe
     * @returns void
     */
    static unsubscribeWhenNotificationsAreDisabled(unsubscribe: boolean): void;
    /**
     * True if the application has location share activated, false otherwise
     * @returns Promise<boolean>
     */
    static isLocationShared(): Promise<boolean>;
    /**
     * Disable or enable location collection (defaults to enabled if your app has location permission).
     * @param  {boolean} shared
     * @returns void
     */
    static setLocationShared(shared: boolean): void;
    /**
     * Prompts the user for location permissions to allow geotagging from the OneSignal dashboard.
     * @returns void
     */
    static promptLocation(): void;
    /**
     * Gets the device state.
     * This method returns a "snapshot" of the device state for when it was called.
     * @returns Promise<DeviceState | null>
     */
    static getDeviceState(): Promise<DeviceState | null>;
    /**
     * Allows you to set the app defined language with the OneSignal SDK.
     * @param  {string} language
     * @returns void
     */
    static setLanguage(language: string): void;
    /**
     * Tag a user based on an app event of your choosing so they can be targeted later via segments.
     * @param  {string} key
     * @param  {string} value
     * @returns void
     */
    static sendTag(key: string, value: string): void;
    /**
     * Tag a user with multiple tags based on an app event of your choosing so they can be targeted later via segments.
     * @param  {[key: string]: string} tags
     * @returns void
     */
    static sendTags(tags: {
        [key: string]: string;
    }): void;
    /**
     * Retrieve a list of tags that have been set on the user from the OneSignal server.
     * @param  {(tags: {[key: string]: string}) => void} handler
     * @returns void
     */
    static getTags(handler: (tags: {
        [key: string]: string;
    }) => void): void;
    /**
     * Deletes a single tag that was previously set on a user.
     * @param  {string} key
     * @returns void
     */
    static deleteTag(key: string): void;
    /**
     * Deletes multiple tags that were previously set on a user.
     * @param  {string[]} keys
     */
    static deleteTags(keys: string[]): void;
    /**
     * Allows you to set the user's email address with the OneSignal SDK.
     * @param  {string} email
     * @param  {string} emailAuthCode
     * @param  {Function} handler
     * @returns void
     */
    static setEmail(email: string, emailAuthCode?: string | null, handler?: Function): void;
    /**
     * If your app implements logout functionality, you can call logoutEmail to dissociate the email from the device.
     * @param  {Function} handler
     */
    static logoutEmail(handler?: Function): void;
    /**
     * Allows you to set the user's SMS number with the OneSignal SDK.
     * @param  {string} smsNumber
     * @param  {string} smsAuthCode
     * @param  {Function} handler
     * @returns void
     */
    static setSMSNumber(smsNumber: string, smsAuthCode?: string | null, handler?: Function): void;
    /**
     * If your app implements logout functionality, you can call logoutSMSNumber to dissociate the SMS number from the device.
     * @param  {Function} handler
     */
    static logoutSMSNumber(handler?: Function): void;
    /**
     * Send a notification
     * @param  {string} notificationObjectString - JSON string payload (see REST API reference)
     * @param  {(success:object) => void} onSuccess
     * @param  {(failure:object) => void} onFailure
     * @returns void
     */
    static postNotification(notificationObjectString: string, onSuccess?: (success: object) => void, onFailure?: (failure: object) => void): void;
    /**
     * Android Only. iOS provides a standard way to clear notifications by clearing badge count.
     * @returns void
     */
    static clearOneSignalNotifications(): void;
    /**
     * Android Only.
     * Removes a single OneSignal notification based on its Android notification integer id.
     * @param  {number} id - notification id to cancel
     * @returns void
     */
    static removeNotification(id: number): void;
    /**
     * Android Only.
     * Removes all OneSignal notifications based on its Android notification group Id.
     * @param  {string} id - notification group id to cancel
     * @returns void
     */
    static removeGroupedNotifications(id: string): void;
    /**
     * This method can be used to set if launch URLs should be opened in safari or within the application.
     * @param  {boolean} isEnabled
     * @returns
     */
    static setLaunchURLsInApp(isEnabled: boolean): void;
    /**
     * Allows you to use your own system's user ID's to send push notifications to your users.
     * @param  {string} externalId
     * @param  {string} externalIdAuthCode?
     * @param  {(results:object) => void} handler?
     * @returns void
     */
    static setExternalUserId(externalId: string, handlerOrAuth?: ((results: object) => void) | string, handler?: (results: object) => void): void;
    /**
     * Removes whatever was set as the current user's external user ID.
     * @param  {(results:object) => void} handler
     * @returns void
     */
    static removeExternalUserId(handler?: (results: object) => void): void;
    /**
     * Sets an In-App Message click event handler.
     * @param  {(action:InAppMessageAction) => void} handler
     * @returns void
     */
    static setInAppMessageClickHandler(handler: (action: InAppMessageAction) => void): void;
    /**
     * Sets the In-App Message lifecycle handler object to run on displaying and/or dismissing an In-App Message.
     * @param  {InAppMessageLifecycleHandlerObject} handlerObject
     * @returns void
     */
    static setInAppMessageLifecycleHandler(handlerObject: InAppMessageLifecycleHandlerObject): void;
    /**
     * Add an In-App Message Trigger.
     * @param  {string} key
     * @param  {string | number | boolean} value
     * @returns void
     */
    static addTrigger(key: string, value: string | number | boolean): void;
    /**
     * Adds Multiple In-App Message Triggers.
     * @param  {[key: string]: string | number | boolean} triggers
     * @returns void
     */
    static addTriggers(triggers: {
        [key: string]: string | number | boolean;
    }): void;
    /**
     * Removes a list of triggers based on a collection of keys.
     * @param  {string[]} keys
     * @returns void
     */
    static removeTriggersForKeys(keys: string[]): void;
    /**
     * Removes a list of triggers based on a key.
     * @param  {string} key
     * @returns void
     */
    static removeTriggerForKey(key: string): void;
    /**
     * Gets a trigger value for a provided trigger key.
     * @param  {string} key
     * @returns Promise<string | number | boolean | null>
     */
    static getTriggerValueForKey(key: string): Promise<string | number | boolean | null>;
    /**
     * Pause & unpause In-App Messages
     * @param  {boolean} pause
     * @returns void
     */
    static pauseInAppMessages(pause: boolean): void;
    /**
     * Increases the "Count" of this Outcome by 1 and will be counted each time sent.
     * @param  {string} name
     * @param  {(event:OutcomeEvent) => void} handler
     * @returns void
     */
    static sendOutcome(name: string, handler?: (event: OutcomeEvent) => void): void;
    /**
     * Increases "Count" by 1 only once. This can only be attributed to a single notification.
     * @param  {string} name
     * @param  {(event:OutcomeEvent) => void} handler
     * @returns void
     */
    static sendUniqueOutcome(name: string, handler?: (event: OutcomeEvent) => void): void;
    /**
     * Increases the "Count" of this Outcome by 1 and the "Sum" by the value. Will be counted each time sent.
     * If the method is called outside of an attribution window, it will be unattributed until a new session occurs.
     * @param  {string} name
     * @param  {string|number} value
     * @param  {(event:OutcomeEvent) => void} handler
     * @returns void
     */
    static sendOutcomeWithValue(name: string, value: string | number, handler?: (event: OutcomeEvent) => void): void;
    /**
     * Did the user provide privacy consent for GDPR purposes.
     * @returns Promise<boolean>
     */
    static userProvidedPrivacyConsent(): Promise<boolean>;
    /**
     * True if the application requires user privacy consent, false otherwise
     * @returns Promise<boolean>
     */
    static requiresUserPrivacyConsent(): Promise<boolean>;
    /**
     * For GDPR users, your application should call this method before setting the App ID.
     * @param  {boolean} required
     * @returns void
     */
    static setRequiresUserPrivacyConsent(required: boolean): void;
    /**
     * If your application is set to require the user's privacy consent, you can provide this consent using this method.
     * @param  {boolean} granted
     * @returns void
     */
    static provideUserConsent(granted: boolean): void;
    /**
     * Enable logging to help debug if you run into an issue setting up OneSignal.
     * @param  {LogLevel} nsLogLevel - Sets the logging level to print to the Android LogCat log or Xcode log.
     * @param  {LogLevel} visualLogLevel - Sets the logging level to show as alert dialogs.
     * @returns void
     */
    static setLogLevel(nsLogLevel: LogLevel, visualLogLevel: LogLevel): void;
    /**
     * Clears all handlers and observers.
     * @returns void
     */
    static clearHandlers(): void;
    /**
     * Classting custom methods
     */
    static init(handler: (success: boolean) => void): void;
    static getSdkVersion(): string;
}
export { ChangeEvent, PermissionChange, SubscriptionChange, EmailSubscriptionChange, SMSSubscriptionChange, NotificationReceivedEvent, OpenedEvent, InAppMessage, InAppMessageAction, InAppMessageLifecycleHandlerObject, OutcomeEvent, DeviceState, };
export { default as OSNotification } from './OSNotification';
export { OpenedEventAction, OpenedEventActionType } from './models/NotificationEvents';
export { IosPermissionStatus, ObserverChangeEvent } from './models/Subscription';
