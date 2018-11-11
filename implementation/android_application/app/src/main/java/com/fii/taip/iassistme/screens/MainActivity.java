package com.fii.taip.iassistme.screens;

import android.app.FragmentTransaction;
import android.content.Intent;
import android.support.v4.app.FragmentManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.FrameLayout;

import com.fii.taip.iassistme.R;
import com.fii.taip.iassistme.fragments.AuthFragment;
import com.fii.taip.iassistme.fragments.SpeechToTextFragment;
import com.fii.taip.iassistme.utils.DebugTrace;

public class MainActivity extends AppCompatActivity {

    private SpeechToTextFragment mSpeechToTextFragment;
    private AuthFragment mAuthFragement;
    private FrameLayout mFrameLayout;
    private final int REQ_CODE_SPEECH_INPUT = 100;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mFrameLayout = (FrameLayout) findViewById(R.id.frame_container);
        if (savedInstanceState == null) {
            mSpeechToTextFragment = new SpeechToTextFragment();
            //mAuthFragement = new AuthFragment();
            FragmentTransaction ft = getFragmentManager().beginTransaction();

            FragmentManager manager = getSupportFragmentManager();
            android.support.v4.app.FragmentTransaction transaction = manager.beginTransaction();
            transaction.replace( R.id.frame_container, mSpeechToTextFragment);
            transaction.commit();
        }

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        testAnnotatedMethod();
    }

    @DebugTrace
    private void testAnnotatedMethod() {
        try {
            Thread.sleep(10);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

