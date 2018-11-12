package com.fii.taip.iassistme.fragments;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.speech.RecognizerIntent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

import com.fii.taip.iassistme.R;
import com.fii.taip.iassistme.rabbitmq.Publisher;

import org.android10.gintonic.annotation.DebugTrace;

import java.util.ArrayList;

import static android.app.Activity.RESULT_OK;


public class SpeechToTextFragment extends Fragment {

    public TextView txtSpeechInput;
    private ImageButton btnSpeak;
    private final int REQ_CODE_SPEECH_INPUT = 100;
    public Publisher publisher;

    //private OnFragmentInteractionListener mListener;

    public SpeechToTextFragment() {
        // Required empty public constructor
    }


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        startASycnc();
        View view = inflater.inflate(R.layout.fragment_speech_to_text, container, false);
        txtSpeechInput = (TextView) view.findViewById(R.id.txtSpeechInput);
        btnSpeak = (ImageButton) view.findViewById(R.id.btnSpeak);
        btnSpeak.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                promptSpeechInput();
            }
        });
        return view;
    }

    @DebugTrace
    public void promptSpeechInput() {
        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL,
                RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, "ro-RO");
        intent.putExtra(RecognizerIntent.EXTRA_PROMPT, "Speech prompt");
        try {
            startActivityForResult(intent, REQ_CODE_SPEECH_INPUT);
        } catch (ActivityNotFoundException a) {
            Toast.makeText(getContext(),
                    "speech not supported",
                    Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        switch (requestCode) {
            case REQ_CODE_SPEECH_INPUT: {
                if (resultCode == RESULT_OK && null != data) {

                    ArrayList<String> result = data
                            .getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
                    publisher.publishMessage(result.get(0));
                    String response = result.get(0);
                    txtSpeechInput.setText(response);
                    Log.e("CAAAAAMIIII", response);
                }
                break;
            }

        }
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
    }

    @Override
    public void onDetach() {
        super.onDetach();
         publisher.getPublishThread().interrupt();
    }

    public interface OnFragmentInteractionListener {
        // TODO: Update argument type and name
        void onFragmentInteraction(Uri uri);
    }

    public void startASycnc() {
        new StartAsyncTask().execute();
    }


    public class StartAsyncTask extends AsyncTask<String, String, String> {

        private String resp = "";

        @Override
        protected String doInBackground(String... strings) {
            publisher = new Publisher();
            return resp;
        }
    }
}
