var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
export var TrackierEnvironment;
(function (TrackierEnvironment) {
    TrackierEnvironment["Development"] = "development";
    TrackierEnvironment["Production"] = "production";
    TrackierEnvironment["Testing"] = "testing";
})(TrackierEnvironment || (TrackierEnvironment = {}));
var TrackierConfig = /** @class */ (function () {
    function TrackierConfig(appToken, environment) {
        this.secretId = '';
        this.secretKey = '';
        this.manualMode = false;
        this.boolean = false;
        this.appToken = appToken;
        this.environment = environment;
        this.secretId = this.secretId;
        this.secretKey = this.secretKey;
        this.manualMode = this.manualMode;
        this.disableOrganic = this.disableOrganic;
    }
    TrackierConfig.prototype.setAppSecret = function (key, value) {
        this.secretId = key;
        this.secretKey = value;
    };
    TrackierConfig.prototype.setManualMode = function (value) {
        this.manualMode = value;
    };
    TrackierConfig.prototype.disableOrganicTracking = function (value) {
        this.disableOrganic = value;
    };
    return TrackierConfig;
}());
export { TrackierConfig };
var TrackierEvent = /** @class */ (function () {
    function TrackierEvent(eventId) {
        this.eventId = eventId;
    }
    TrackierEvent.prototype.setOrderId = function (orderId) {
        this.orderId = orderId;
    };
    TrackierEvent.prototype.setCurrency = function (currency) {
        this.currency = currency;
    };
    TrackierEvent.prototype.setCouponCode = function (couponCode) {
        this.couponCode = couponCode;
    };
    TrackierEvent.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    TrackierEvent.prototype.setParam1 = function (param1) {
        this.param1 = param1;
    };
    TrackierEvent.prototype.setParam2 = function (param2) {
        this.param2 = param2;
    };
    TrackierEvent.prototype.setParam3 = function (param3) {
        this.param3 = param3;
    };
    TrackierEvent.prototype.setParam4 = function (param4) {
        this.param4 = param4;
    };
    TrackierEvent.prototype.setParam5 = function (param5) {
        this.param5 = param5;
    };
    TrackierEvent.prototype.setParam6 = function (param6) {
        this.param6 = param6;
    };
    TrackierEvent.prototype.setParam7 = function (param7) {
        this.param7 = param7;
    };
    TrackierEvent.prototype.setParam8 = function (param8) {
        this.param8 = param8;
    };
    TrackierEvent.prototype.setParam9 = function (param9) {
        this.param9 = param9;
    };
    TrackierEvent.prototype.setParam10 = function (param10) {
        this.param10 = param10;
    };
    TrackierEvent.prototype.setRevenue = function (revenue) {
        this.revenue = revenue;
    };
    return TrackierEvent;
}());
export { TrackierEvent };
var TrackierCordovaPluginOriginal = /** @class */ (function (_super) {
    __extends(TrackierCordovaPluginOriginal, _super);
    function TrackierCordovaPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrackierCordovaPluginOriginal.prototype.initializeSDK = function (config) { return cordova(this, "initializeSDK", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserEmail = function (userEmail) { return cordova(this, "setUserEmail", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserName = function (userName) { return cordova(this, "setUserName", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserPhone = function (userPhone) { return cordova(this, "setUserPhone", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setDOB = function (dob) { return cordova(this, "setDOB", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setGender = function (gender) { return cordova(this, "setGender", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.parseDeepLink = function (uri) { return cordova(this, "parseDeepLink", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.fireInstall = function () { return cordova(this, "fireInstall", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getTrackierId = function () { return cordova(this, "getTrackierId", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAd = function () { return cordova(this, "getAd", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAdID = function () { return cordova(this, "getAdID", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getCampaign = function () { return cordova(this, "getCampaign", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getCampaignID = function () { return cordova(this, "getCampaignID", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAdSet = function () { return cordova(this, "getAdSet", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAdSetID = function () { return cordova(this, "getAdSetID", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getChannel = function () { return cordova(this, "getChannel", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP1 = function () { return cordova(this, "getP1", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP2 = function () { return cordova(this, "getP2", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP3 = function () { return cordova(this, "getP3", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP4 = function () { return cordova(this, "getP4", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP5 = function () { return cordova(this, "getP5", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getClickId = function () { return cordova(this, "getClickId", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getDlv = function () { return cordova(this, "getDlv", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getPid = function () { return cordova(this, "getPid", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getIsRetargeting = function () { return cordova(this, "getIsRetargeting", {}, arguments); };
    TrackierCordovaPluginOriginal.pluginName = "TrackierCordovaPlugin";
    TrackierCordovaPluginOriginal.plugin = "com.trackier.cordova_sdk";
    TrackierCordovaPluginOriginal.pluginRef = "cordova.plugins.TrackierCordovaPlugin";
    TrackierCordovaPluginOriginal.repo = "https://github.com/trackier/cordova_sdk";
    TrackierCordovaPluginOriginal.platforms = ["Android"];
    return TrackierCordovaPluginOriginal;
}(AwesomeCordovaNativePlugin));
var TrackierCordovaPlugin = new TrackierCordovaPluginOriginal();
export { TrackierCordovaPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdHJhY2tpZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBOEIsTUFBTSwrQkFBK0IsQ0FBQztBQUczRSxNQUFNLENBQU4sSUFBWSxtQkFJWDtBQUpELFdBQVksbUJBQW1CO0lBQzlCLGtEQUEyQixDQUFBO0lBQzNCLGdEQUF5QixDQUFBO0lBQ3pCLDBDQUFtQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBSTlCOztJQVNBLHdCQUFZLFFBQWdCLEVBQUUsV0FBZ0M7UUFKdEQsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXRDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUMxQyxDQUFDO0lBRU0scUNBQVksR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEtBQWE7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLEtBQWM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7SUFDeEIsQ0FBQztJQUVNLCtDQUFzQixHQUE3QixVQUE4QixLQUFjO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFBO0lBQzVCLENBQUM7eUJBcENGOzs7O0lBMkRDLHVCQUFZLE9BQWU7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNNLG1DQUFXLEdBQWxCLFVBQW1CLFFBQWdCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFDTSxxQ0FBYSxHQUFwQixVQUFxQixVQUFrQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUM5QixDQUFDO0lBQ00sbUNBQVcsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUNNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNNLGtDQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNNLGtDQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzt3QkEzR0Y7Ozs7SUEySDJDLHlDQUEwQjs7OztJQUdwRSw2Q0FBYSxhQUFDLE1BQXNCO0lBS3BDLDBDQUFVLGFBQUMsS0FBb0I7SUFLL0IseUNBQVMsYUFBQyxNQUFjO0lBS3hCLDRDQUFZLGFBQUMsU0FBYztJQUszQiwyQ0FBVyxhQUFDLFFBQWE7SUFLekIsNENBQVksYUFBQyxTQUFjO0lBSzNCLHNDQUFNLGFBQUMsR0FBUTtJQUtmLHlDQUFTLGFBQUMsTUFBVztJQUtyQiw2Q0FBYSxhQUFDLEdBQVE7SUFLdEIsMkNBQVc7SUFLWCw2Q0FBYTtJQUtiLHFDQUFLO0lBS0wsdUNBQU87SUFLUCwyQ0FBVztJQUtYLDZDQUFhO0lBS2Isd0NBQVE7SUFLUiwwQ0FBVTtJQUtWLDBDQUFVO0lBS1YscUNBQUs7SUFLTCxxQ0FBSztJQUtMLHFDQUFLO0lBS0wscUNBQUs7SUFLTCxxQ0FBSztJQUtMLDBDQUFVO0lBS1Ysc0NBQU07SUFLTixzQ0FBTTtJQUtOLGdEQUFnQjs7Ozs7O2dDQWhRakI7RUEySDJDLDBCQUEwQjtTQUF4RCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gVHJhY2tpZXJFbnZpcm9ubWVudCB7XG5cdERldmVsb3BtZW50ID0gJ2RldmVsb3BtZW50Jyxcblx0UHJvZHVjdGlvbiA9ICdwcm9kdWN0aW9uJ1xuXHRUZXN0aW5nID0gJ3Rlc3RpbmcnXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2llckNvbmZpZyB7XG5cdHByaXZhdGUgYXBwVG9rZW46IHN0cmluZztcblx0cHJpdmF0ZSBlbnZpcm9ubWVudDogVHJhY2tpZXJFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSBzZWNyZXRJZDogc3RyaW5nID0gJyc7XG5cdHByaXZhdGUgc2VjcmV0S2V5OiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBtYW51YWxNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgZGlzYWJsZU9yZ2FuaWMgYm9vbGVhbiA9IGZhbHNlO1xuXHRjb25zdHJ1Y3RvcihhcHBUb2tlbjogc3RyaW5nLCBlbnZpcm9ubWVudDogVHJhY2tpZXJFbnZpcm9ubWVudCkge1xuXHRcdHRoaXMuYXBwVG9rZW4gPSBhcHBUb2tlbjtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5zZWNyZXRJZCA9IHRoaXMuc2VjcmV0SWQ7XG5cdFx0dGhpcy5zZWNyZXRLZXkgPSB0aGlzLnNlY3JldEtleVxuXHRcdHRoaXMubWFudWFsTW9kZSA9IHRoaXMubWFudWFsTW9kZVxuXHRcdHRoaXMuZGlzYWJsZU9yZ2FuaWMgPSB0aGlzLmRpc2FibGVPcmdhbmljXG5cdH1cblxuXHRwdWJsaWMgc2V0QXBwU2VjcmV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWNyZXRJZCA9IGtleTtcblx0XHR0aGlzLnNlY3JldEtleSA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHNldE1hbnVhbE1vZGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm1hbnVhbE1vZGUgPSB2YWx1ZVxuXHR9XG5cblx0cHVibGljIGRpc2FibGVPcmdhbmljVHJhY2tpbmcodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmRpc2FibGVPcmdhbmljID0gdmFsdWVcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2llckV2ZW50IHtcblxuXHRwcml2YXRlIGV2ZW50SWQ6IHN0cmluZztcblx0cHJpdmF0ZSBvcmRlcklkOiBzdHJpbmc7XG5cdHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcblx0cHJpdmF0ZSBjb3Vwb25Db2RlOiBzdHJpbmc7XG5cdHByaXZhdGUgZGlzY291bnQ6IG51bWJlclxuXHRwcml2YXRlIHBhcmFtMTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNDogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtODogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtOTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMTA6IHN0cmluZztcblx0cHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRJZDogc3RyaW5nKSB7XG5cdFx0dGhpcy5ldmVudElkID0gZXZlbnRJZDtcblx0fVxuXG5cdHB1YmxpYyBzZXRPcmRlcklkKG9yZGVySWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG5cdH1cblx0cHVibGljIHNldEN1cnJlbmN5KGN1cnJlbmN5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG5cdH1cblx0cHVibGljIHNldENvdXBvbkNvZGUoY291cG9uQ29kZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jb3Vwb25Db2RlID0gY291cG9uQ29kZTtcblx0fVxuXHRwdWJsaWMgc2V0RGlzY291bnQoZGlzY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuZGlzY291bnQgPSBkaXNjb3VudDtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0xKHBhcmFtMTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTEgPSBwYXJhbTE7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMihwYXJhbTI6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0yID0gcGFyYW0yO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTMocGFyYW0zOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMyA9IHBhcmFtMztcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW00KHBhcmFtNDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTQgPSBwYXJhbTQ7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNShwYXJhbTU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW01ID0gcGFyYW01O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTYocGFyYW02OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNiA9IHBhcmFtNjtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW03KHBhcmFtNzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTcgPSBwYXJhbTc7XG5cdH1cblx0cHVibGljIHNldFBhcmFtOChwYXJhbTg6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW04ID0gcGFyYW04O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTkocGFyYW05OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtOSA9IHBhcmFtOTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0xMChwYXJhbTEwOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMTAgPSBwYXJhbTEwO1xuXHR9XG5cdHB1YmxpYyBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucmV2ZW51ZSA9IHJldmVudWU7XG5cdH1cblxuXHRzZXRFdmVudFZhbHVlOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuXG5AUGx1Z2luKHtcblx0cGx1Z2luTmFtZTogJ1RyYWNraWVyQ29yZG92YVBsdWdpbicsXG5cdHBsdWdpbjogJ2NvbS50cmFja2llci5jb3Jkb3ZhX3NkaycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuXHRwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuVHJhY2tpZXJDb3Jkb3ZhUGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuXHRyZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RyYWNraWVyL2NvcmRvdmFfc2RrJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuXHQvL2luc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcblx0Ly9pbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcblx0cGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhY2tpZXJDb3Jkb3ZhUGx1Z2luIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuXG5cdEBDb3Jkb3ZhKClcblx0aW5pdGlhbGl6ZVNESyhjb25maWc6IFRyYWNraWVyQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHRyYWNrRXZlbnQoZXZlbnQ6IFRyYWNraWVyRXZlbnQpOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJFbWFpbCh1c2VyRW1haWw6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyTmFtZSh1c2VyTmFtZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJQaG9uZSh1c2VyUGhvbmU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRET0IoZG9iOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0R2VuZGVyKGdlbmRlcjogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHBhcnNlRGVlcExpbmsodXJpOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0ZmlyZUluc3RhbGwoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFRyYWNraWVySWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZElEKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDYW1wYWlnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2FtcGFpZ25JRCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWRTZXQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkU2V0SUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENoYW5uZWwoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFAxKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQMigpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDMoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFA0KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQNSgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2xpY2tJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0RGx2KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldElzUmV0YXJnZXRpbmcoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cbn0iXX0=