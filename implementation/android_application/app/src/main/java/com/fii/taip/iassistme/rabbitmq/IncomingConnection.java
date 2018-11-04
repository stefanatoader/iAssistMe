package com.fii.taip.iassistme.rabbitmq;
import com.rabbitmq.client.ConnectionFactory;

import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.concurrent.BlockingDeque;
import java.util.concurrent.LinkedBlockingDeque;

class IncomingConnection implements ConnectionInt {

    private static IncomingConnection instance = new IncomingConnection();
    private ConnectionFactory factory = new ConnectionFactory();
    private String rabbitMqHost = "rabbit@georgianas-macbook-pro";
    private BlockingDeque<String> queue = new LinkedBlockingDeque<>();



    private IncomingConnection(){
        AmqpConnectionFactory f = new AmqpConnectionFactory();
        ConnectionInt c = f.getConnectionType("INCOMING");
        c.setupConnection();
    }


    public static IncomingConnection getInstance(){
        return instance;
    }


    public void setupConnection(){
        try {
            factory.setAutomaticRecoveryEnabled(false);
            factory.setUri(rabbitMqHost);
        } catch (KeyManagementException | NoSuchAlgorithmException | URISyntaxException e1) {
            e1.printStackTrace();
        }
    }


    public ConnectionFactory getConnectionFactory(){
        return factory;
    }

    public BlockingDeque<String> getQueue(){
        return queue;
    }
}
