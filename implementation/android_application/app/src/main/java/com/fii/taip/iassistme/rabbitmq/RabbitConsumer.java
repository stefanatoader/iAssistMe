package com.fii.taip.iassistme.rabbitmq;

import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;

import com.rabbitmq.client.AMQP;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.DefaultConsumer;
import com.rabbitmq.client.Envelope;

import java.io.IOException;

public class RabbitConsumer extends DefaultConsumer {

    private final Handler handler;

    RabbitConsumer(Channel channel, final Handler h) {
        super(channel);
        handler = h;
    }

    @Override
    public void handleDelivery(String consumerTag, Envelope envelope,
                               AMQP.BasicProperties properties, byte[] body)
            throws IOException {
        String message = new String(body, "UTF-8");
        Log.d("", "[r] " + message);
        Message msg = handler.obtainMessage();
        Bundle bundle = new Bundle();
        bundle.putString("msg", message);
        msg.setData(bundle);
        handler.sendMessage(msg);
    }
}
