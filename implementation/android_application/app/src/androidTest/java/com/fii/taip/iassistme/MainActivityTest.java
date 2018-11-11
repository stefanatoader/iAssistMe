package com.fii.taip.iassistme;

import android.content.Context;
import android.support.test.InstrumentationRegistry;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;


public class MainActivityTest {

    @Test
    public void appThemeTest() throws Exception {
        Context appContext = InstrumentationRegistry.getTargetContext();
        assertEquals("Theme.AppCompat.Light.NoActionBar", appContext.getTheme());

    }

}