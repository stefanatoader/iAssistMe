package com.fii.taip.iassistme.rabbitmq;

import com.rabbitmq.client.ConnectionFactory;


import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.concurrent.BlockingDeque;
import java.util.concurrent.LinkedBlockingDeque;

class IncomingConnection implements ConnectionInt {

    private static IncomingConnection instance;
    private ConnectionFactory factory = new ConnectionFactory();
    private BlockingDeque<String> queue = new LinkedBlockingDeque<>();


    private IncomingConnection() {

          setupConnection();
    }


    public static IncomingConnection getInstance() {
        if(instance == null)
            instance = new IncomingConnection();
        return instance;
    }


   public void setupConnection() {

       try {
           factory.setUri("amqp://guest:guest@10.0.2.2:5672/%2f");
       } catch (URISyntaxException e) {
           e.printStackTrace();
       } catch (NoSuchAlgorithmException e) {
           e.printStackTrace();
       } catch (KeyManagementException e) {
           e.printStackTrace();
       }

    }


    public ConnectionFactory getConnectionFactory() {
        return factory;
    }

    public BlockingDeque<String> getQueue() {
        return queue;
    }
}
