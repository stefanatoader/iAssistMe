package com.fii.taip.iassistme.rabbitmq;

import android.util.Log;

//import com.rabbitmq.client.Channel;
//import com.rabbitmq.client.Connection;
//import com.rabbitmq.client.ConnectionFactory;

public class Publisher {

    private Thread publishThread;
    //private ConnectionFactory factory;
    private String message;

    //public Publisher(){
      //  startPublishToAMQP();
    //}

    public void publishMessage(String message) {
        try {
            Log.d("","[q] " + message);
            IncomingConnection.getInstance().getQueue().putLast(message);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public Thread getPublishThread() {
        return publishThread;
    }

   /* private void startPublishToAMQP()
    {
        publishThread = new Thread(new Runnable() {
            @Override
            public void run() {
                while(true) {
                    try {
                        factory = IncomingConnection.getInstance().getConnectionFactory();
                        Connection connection = factory.newConnection();
                        Channel ch = connection.createChannel();
                        ch.confirmSelect();

                        while (true) {

                            message = IncomingConnection.getInstance().getQueue().takeFirst();
                            try{
                                ch.basicPublish("amq.fanout", "incoming_request", null, message.getBytes());
                                Log.d("", "[s] " + message);
                                ch.waitForConfirmsOrDie();
                            } catch (Exception e){
                                Log.d("","[f] " + message);
                                IncomingConnection.getInstance().getQueue().putFirst(message);
                                throw e;
                            }
                        }
                    } catch (InterruptedException e) {
                        break;
                    } catch (Exception e) {
                        Log.d("", "Connection broken: " + e.getClass().getName());
                        try {
                            Thread.sleep(5000); //sleep and then try again
                        } catch (InterruptedException e1) {
                            break;
                        }
                    }
                }
            }
        });
        publishThread.start();
    }*/
}
