package com.fii.taip.iassistme.screens;

import android.app.FragmentTransaction;
import android.content.Intent;
import android.support.v4.app.FragmentManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.FrameLayout;

import com.fii.taip.iassistme.R;
import com.fii.taip.iassistme.fragments.SpeechToTextFragment;



public class MainActivity extends AppCompatActivity {

    private SpeechToTextFragment mSpeechToTextFragment;
    private FrameLayout mFrameLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mFrameLayout = (FrameLayout) findViewById(R.id.frame_container);
        if (savedInstanceState == null) {

            mSpeechToTextFragment = new SpeechToTextFragment();
            FragmentTransaction ft = getFragmentManager().beginTransaction();
            FragmentManager manager = getSupportFragmentManager();
            android.support.v4.app.FragmentTransaction transaction = manager.beginTransaction();
            transaction.replace(R.id.frame_container, mSpeechToTextFragment);
            transaction.commit();

        }

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
    }
}

