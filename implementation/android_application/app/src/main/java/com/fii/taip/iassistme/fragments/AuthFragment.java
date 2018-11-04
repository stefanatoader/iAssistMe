package com.fii.taip.iassistme.fragments;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;

import com.fii.taip.iassistme.R;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class AuthFragment extends Fragment {

    private Button loginButton;
    private EditText emailInput;
    private EditText passwordInput;
    private Button changeToRegisterButton;
    private ProgressBar loginUserProgressBar;


    private void signIn(String email, String password) {

    }


    private void validateFieldsValues() {

    }

    private void setEnabled(Button button, boolean value) {

    }


    public AuthFragment() {
    }


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_auth, container, false);
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);

    }

    @Override
    public void onDetach() {
        super.onDetach();
    }

}