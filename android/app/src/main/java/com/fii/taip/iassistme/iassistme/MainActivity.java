package com.fii.taip.iassistme.iassistme;

import android.app.FragmentTransaction;
import android.content.Intent;
import android.speech.RecognizerIntent;
import android.support.v4.app.FragmentManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.FrameLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.fii.taip.iassistme.iassistme.fragments.AuthFragment;
import com.fii.taip.iassistme.iassistme.fragments.MainScreenFragment;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private MainScreenFragment mMainScreenFragment;
    private AuthFragment mAuthFragement;
    private FrameLayout mFrameLayout;
    private final int REQ_CODE_SPEECH_INPUT = 100;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mFrameLayout = (FrameLayout) findViewById(R.id.frame_container);
        if (savedInstanceState == null) {
            mMainScreenFragment = new MainScreenFragment();
            //mAuthFragement = new AuthFragment();
            FragmentTransaction ft = getFragmentManager().beginTransaction();

            FragmentManager manager = getSupportFragmentManager();
            android.support.v4.app.FragmentTransaction transaction = manager.beginTransaction();
            transaction.replace( R.id.frame_container, mMainScreenFragment);
            transaction.commit();
        }

        setContentView(R.layout.activity_main);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
    }
}
