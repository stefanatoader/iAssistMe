package com.fii.taip.iassistme.rabbitmq;
import android.os.Handler;
import android.util.Log;

import com.rabbitmq.client.AMQP;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;

public class Subscriber {

    private Thread subscribeThread;

    public Subscriber(final Handler handler){
        subscribe(handler);
    }

    public Thread getSubscribeThread() {
        return subscribeThread;
    }

    public void subscribe(final Handler handler)
    {
        subscribeThread = new Thread(new Runnable() {
            @Override
            public void run() {
                while(true) {
                    try {
                        Connection connection = OutgoingConnection.getInstance().getConnectionFactory().newConnection();
                        Channel channel = connection.createChannel();
                        channel.basicQos(1);
                        AMQP.Queue.DeclareOk q = channel.queueDeclare();
                        channel.queueBind(q.getQueue(), "amq.direct", "outgoing_response");
                        RabbitConsumer consumer = new RabbitConsumer(channel, handler);
                        channel.basicConsume(q.getQueue(), true, consumer);
                    } catch (Exception e1) {
                        Log.d("", "Connection broken: " + e1.getClass().getName());
                        try {
                            Thread.sleep(5000); //sleep and then try again
                        } catch (InterruptedException e) {
                            break;
                        }
                    }
                }
            }
        });
        subscribeThread.start();
    }
}
