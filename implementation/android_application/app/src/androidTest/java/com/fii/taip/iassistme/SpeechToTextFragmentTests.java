package com.fii.taip.iassistme;

import android.app.FragmentTransaction;
import android.support.v4.app.FragmentManager;
import android.test.ActivityInstrumentationTestCase2;
import android.widget.EditText;
import android.widget.ImageButton;

import com.fii.taip.iassistme.fragments.SpeechToTextFragment;
import com.fii.taip.iassistme.screens.MainActivity;

import org.junit.Before;
import org.junit.Test;

public class SpeechToTextFragmentTests extends ActivityInstrumentationTestCase2<MainActivity> {
    private SpeechToTextFragment fragment;

    public SpeechToTextFragmentTests(Class<MainActivity> activityClass) {

        super(activityClass);
    }

    @Before
    public void setup() {
        fragment = new SpeechToTextFragment();
        FragmentTransaction ft = getActivity().getFragmentManager().beginTransaction();
        FragmentManager manager = getActivity().getSupportFragmentManager();
        android.support.v4.app.FragmentTransaction transaction = manager.beginTransaction();
        transaction.replace( R.id.frame_container, fragment);
        transaction.commit();
    }
    @Test
    public void imageNotNullButtonTest() {
        ImageButton imageButton = fragment.getView().findViewById(R.id.btnSpeak);
        assertNotNull(imageButton);
    }

    @Test
    public void editTextNotNullTest() {
        EditText editText = fragment.getView().findViewById(R.id.txtSpeechInput);
        assertNotNull(editText);
    }

    @Test
    public void editTextEmptyTest() {
        EditText editText = fragment.getView().findViewById(R.id.txtSpeechInput);
        assertTrue(editText.getText() == null);
    }


}
