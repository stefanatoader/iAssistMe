package com.fii.taip.iassistme;

import android.test.ActivityInstrumentationTestCase2;

import com.fii.taip.iassistme.fragments.SpeechToTextFragment;
import com.fii.taip.iassistme.screens.MainActivity;

public class SpeechToTextFragmentTests extends ActivityInstrumentationTestCase2<MainActivity> {
    private SpeechToTextFragment fragment;
    private MainActivity testMainActivity;

    public SpeechToTextFragmentTests(Class<MainActivity> activityClass) {
        super(activityClass);
    }
/*
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
    public void aTest() {
        ImageButton imageButton = fragment.getView().findViewById(R.id.btnSpeak);
        EditText textView = fragment.getView().findViewById(R.id.txtSpeechInput);
        assertNotNull(textView);
    }*/
}
