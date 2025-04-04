package com.trackier.cordova_sdk;

import android.net.Uri;
import android.util.Log;
import org.apache.cordova.CordovaPlugin;

import androidx.annotation.NonNull;


import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONObject;
import com.trackier.cordova_sdk.TrackierCordovaUtil;

import com.trackier.sdk.AttributionParams;
import com.trackier.sdk.DeepLink;
import com.trackier.sdk.DeepLinkListener;
import com.trackier.sdk.TrackierSDK;


/**
 * This class echoes a string called from JavaScript.
 */
public class TrackierCordovaPlugin extends CordovaPlugin {

  private static CallbackContext dplkContext;

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
    try {
      if (action.equals("initializeSDK")) {
        String message = args.getString(0);
        this.initializeSDK(message, callbackContext, action);
        return true;
      } else if (action.equals("trackEvent")) {
        String message = args.getString(0);
        this.trackEvent(message, callbackContext);
        return true;
      } else if (action.equals("setUserId")) {
        return setUserId(com.trackier.cordova_sdk.TrackierCordovaUtil.optString(args, 0));
      } else if (action.equals("setUserEmail")) {
        return setUserEmail(com.trackier.cordova_sdk.TrackierCordovaUtil.optString(args, 0));
      } else if (action.equals("setUserName")) {
        return setUserName(com.trackier.cordova_sdk.TrackierCordovaUtil.optString(args, 0));
      } else if (action.equals("setUserPhone")) {
        return setUserPhone(com.trackier.cordova_sdk.TrackierCordovaUtil.optString(args, 0));
      } else if (action.equals("setDOB")) {
        return setDOB(com.trackier.cordova_sdk.TrackierCordovaUtil.optString(args, 0));
      } else if (action.equals("setGender")) {
        return setGender(com.trackier.cordova_sdk.TrackierCordovaUtil.optString(args, 0));
      } else if (action.equals("getTrackierId")) {
        String trackierId = com.trackier.sdk.TrackierSDK.getTrackierId();
        callbackContext.success(trackierId);
      } else if (action.equals("getAd")) {
        String data = com.trackier.sdk.TrackierSDK.getAd();
        callbackContext.success(data);
      } else if (action.equals("getAdID")) {
        String data = com.trackier.sdk.TrackierSDK.getAdID();
        callbackContext.success(data);
      } else if (action.equals("getCampaign")) {
        String data = com.trackier.sdk.TrackierSDK.getCampaign();
        callbackContext.success(data);
      } else if (action.equals("getCampaignID")) {
        String data = com.trackier.sdk.TrackierSDK.getCampaignID();
        callbackContext.success(data);
      } else if (action.equals("getAdSet")) {
        String data = com.trackier.sdk.TrackierSDK.getAdSet();
        callbackContext.success(data);
      } else if (action.equals("getAdSetID")) {
        String data = com.trackier.sdk.TrackierSDK.getAdSetID();
        callbackContext.success(data);
      } else if (action.equals("getChannel")) {
        String data = com.trackier.sdk.TrackierSDK.getChannel();
        callbackContext.success(data);
      } else if (action.equals("getP1")) {
        String data = com.trackier.sdk.TrackierSDK.getP1();
        callbackContext.success(data);
      } else if (action.equals("getP2")) {
        String data = com.trackier.sdk.TrackierSDK.getP2();
        callbackContext.success(data);
      } else if (action.equals("getP3")) {
        String data = com.trackier.sdk.TrackierSDK.getP3();
        callbackContext.success(data);
      } else if (action.equals("getP4")) {
        String data = com.trackier.sdk.TrackierSDK.getP4();
        callbackContext.success(data);
      } else if (action.equals("getP5")) {
        String data = com.trackier.sdk.TrackierSDK.getP5();
        callbackContext.success(data);
      } else if (action.equals("getClickId")) {
        String data = com.trackier.sdk.TrackierSDK.getClickId();
        callbackContext.success(data);
      } else if (action.equals("getDlv")) {
        String data = com.trackier.sdk.TrackierSDK.getDlv();
        callbackContext.success(data);
      } else if (action.equals("getPid")) {
        String data = com.trackier.sdk.TrackierSDK.getPid();
        callbackContext.success(data);
      } else if (action.equals("getIsRetargeting")) {
        String data = com.trackier.sdk.TrackierSDK.getIsRetargeting();
        callbackContext.success(data);
      } else if (action.equals("parseDeepLink")) {
        String url = com.trackier.cordova_sdk.TrackierCordovaUtil.optString(args, 0);
        parseDeepLink(url);
      } else if (action.equals("trackier_deferredDeeplink")) {
        TrackierCordovaPlugin.dplkContext = callbackContext;
        return true;
      } else if (action.equals("storeRetargetting")) {
        String url = com.trackier.cordova_sdk.TrackierCordovaUtil.optString(args, 0);
        storeRetargetting(url);
        return true;
      } else if (action.equals("fireInstall")) {
        fireInstall();
        return true;
      }
    } catch (Exception e) {

    }
    return false;
  }


  private void initializeSDK(String message, CallbackContext callbackContext, String action) {
    if (message == null && message.length() == 0) {
      callbackContext.error("Expected one non-empty string argument.");
      return;
    }
    try {
      JSONObject trackiersdkConfigJson = new JSONObject(message);
      com.trackier.sdk.TrackierSDKConfig sdkConfig = new com.trackier.sdk.TrackierSDKConfig(webView.getContext(),
        com.trackier.cordova_sdk.TrackierCordovaUtil.getStringVal("appToken", trackiersdkConfigJson),
        com.trackier.cordova_sdk.TrackierCordovaUtil.getStringVal("environment", trackiersdkConfigJson));
      sdkConfig.setAppSecret(com.trackier.cordova_sdk.TrackierCordovaUtil.getStringVal("secretId", trackiersdkConfigJson), com.trackier.cordova_sdk.TrackierCordovaUtil.getStringVal("secretKey", trackiersdkConfigJson));
      sdkConfig.setManualMode(com.trackier.cordova_sdk.TrackierCordovaUtil.getBooleanVal("manualMode", trackiersdkConfigJson));
      sdkConfig.disableOrganicTracking(com.trackier.cordova_sdk.TrackierCordovaUtil.getBooleanVal("disableorganic", trackiersdkConfigJson));
      sdkConfig.setSDKType("cordova_sdk");
      sdkConfig.setSDKVersion("1.6.64");

      JSONObject attributionParamsJson = trackiersdkConfigJson.optJSONObject("attributionParams");
      AttributionParams attributionParams = new AttributionParams();
      if (attributionParamsJson != null) {
        String partnerId = attributionParamsJson.optString("partnerId");
        if (partnerId != null && attributionParamsJson.has("partnerId")) {
          attributionParams.setParterId(partnerId);
        }
        String siteid = attributionParamsJson.optString("siteid");
        if (siteid != null && attributionParamsJson.has("siteid")) {
          attributionParams.setSiteId(siteid);
        }
        String channel = attributionParamsJson.optString("channel");
        if (channel != null && attributionParamsJson.has("channel")) {
          attributionParams.setChannel(channel);
        }
        String adId = attributionParamsJson.optString("adId");
        if (adId != null && attributionParamsJson.has("adId")) {
          attributionParams.setAdId(adId);
        }
        String ad = attributionParamsJson.optString("ad");
        if (ad != null && attributionParamsJson.has("ad")) {
          attributionParams.setAd(ad);
        }
        String subSiteId = attributionParamsJson.optString("subSiteId");
        if (subSiteId != null && attributionParamsJson.has("subSiteId")) {
          attributionParams.setSubSiteID(subSiteId);
        }
      }
      sdkConfig.setAttributionParams(attributionParams);
      sdkConfig.setDeepLinkListener(new DeepLinkListener() {
        @Override
        public void onDeepLinking(@NonNull DeepLink deepLink) {
          String deepLinkUrl = deepLink.getUrl();
          sendDeeplinkToJS(deepLink.getUrl());
        }
      });
      com.trackier.sdk.TrackierSDK.initialize(sdkConfig);
    } catch (Exception exception) {

    }

    callbackContext.success(message);
  }

  private void trackEvent(String message, CallbackContext callbackContext) {
    if (message == null || message.length() == 0) {
      callbackContext.error("Expected one non-empty string argument.");
      return;
    }
    try {
      JSONObject trackierEventJson = new JSONObject(message);
      com.trackier.sdk.TrackierEvent trackierEvent = new com.trackier.sdk.TrackierEvent(TrackierCordovaUtil.getStringVal("eventId", trackierEventJson));
      trackierEvent.orderId = TrackierCordovaUtil.getStringVal("orderId", trackierEventJson);
      trackierEvent.currency = TrackierCordovaUtil.getStringVal("currency", trackierEventJson);
      trackierEvent.discount = TrackierCordovaUtil.getFloatVal("discount", trackierEventJson);
      trackierEvent.couponCode = TrackierCordovaUtil.getStringVal("couponCode", trackierEventJson);
      trackierEvent.param1 = TrackierCordovaUtil.getStringVal("param1", trackierEventJson);
      trackierEvent.param2 = TrackierCordovaUtil.getStringVal("param2", trackierEventJson);
      trackierEvent.param3 = TrackierCordovaUtil.getStringVal("param3", trackierEventJson);
      trackierEvent.param4 = TrackierCordovaUtil.getStringVal("param4", trackierEventJson);
      trackierEvent.param5 = TrackierCordovaUtil.getStringVal("param5", trackierEventJson);
      trackierEvent.param6 = TrackierCordovaUtil.getStringVal("param6", trackierEventJson);
      trackierEvent.param7 = TrackierCordovaUtil.getStringVal("param7", trackierEventJson);
      trackierEvent.param8 = TrackierCordovaUtil.getStringVal("param8", trackierEventJson);
      trackierEvent.param9 = TrackierCordovaUtil.getStringVal("param9", trackierEventJson);
      trackierEvent.param10 = TrackierCordovaUtil.getStringVal("param10", trackierEventJson);
      trackierEvent.revenue = TrackierCordovaUtil.getDoubleVal("revenue", trackierEventJson);
      com.trackier.sdk.TrackierSDK.trackEvent(trackierEvent);

    } catch (Exception exception) {

    }

    callbackContext.success(message);
  }

  private boolean setUserId(String optString) {
    com.trackier.sdk.TrackierSDK.setUserId(optString);
    return true;
  }

  private boolean setUserEmail(String optString) {
    com.trackier.sdk.TrackierSDK.setUserEmail(optString);
    return true;
  }

  private boolean setUserName(String optString) {
    com.trackier.sdk.TrackierSDK.setUserName(optString);
    return true;
  }

  private boolean setUserPhone(String optString) {
    com.trackier.sdk.TrackierSDK.setUserPhone(optString);
    return true;
  }

  private boolean setDOB(String optString) {
    com.trackier.sdk.TrackierSDK.setDOB(optString);
    return true;
  }

  private boolean setGender(String optString) {
    switch (optString) {
      case "Male":
        com.trackier.sdk.TrackierSDK.setGender(TrackierSDK.Gender.Male);
        break;
      case "Female":
        com.trackier.sdk.TrackierSDK.setGender(TrackierSDK.Gender.Female);
        break;
      case "Others":
        com.trackier.sdk.TrackierSDK.setGender(TrackierSDK.Gender.Others);
        break;
      default:
        Log.d("TrackierSDK", "No Genders Found");
        break;
    }
    return true;
  }

  private void parseDeepLink(String optString) {
    Uri uri = Uri.parse(optString);
    com.trackier.sdk.TrackierSDK.parseDeepLink(uri);
  }

  private void fireInstall() {
    com.trackier.sdk.TrackierSDK.fireInstall();
  }

  private void storeRetargetting(String uri) {
    com.trackier.sdk.TrackierSDK.storeRetargetting(cordova.getContext(), uri);
  }

  private static void sendDeeplinkToJS(String uri) {
    if (dplkContext != null) {
      try {
        PluginResult result = new PluginResult(PluginResult.Status.OK, uri);
        result.setKeepCallback(true);  // Keep callback open for multiple events
        dplkContext.sendPluginResult(result);
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
  }
}
