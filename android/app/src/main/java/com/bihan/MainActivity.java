package com.bihan;

import com.facebook.react.ReactActivity;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;
import com.reactnativecomponent.splashscreen.RCTSplashScreen;
import android.os.Bundle;


public class MainActivity extends ReactActivity {

    @Override
  protected void onCreate(Bundle savedInstanceState) {
      RCTSplashScreen.openSplashScreen(this);
      super.onCreate(savedInstanceState);
  }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Bihan";
    }
}
