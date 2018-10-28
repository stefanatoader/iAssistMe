package com.iassistme.rabbitmq;

import com.rabbitmq.client.ConnectionFactory;

import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

class OutgoingConnection implements ConnectionInt{

    private static OutgoingConnection instance = new OutgoingConnection();
    private ConnectionFactory factory = new ConnectionFactory();
    private String rabbitMqHost = "rabbit@georgianas-macbook-pro";


    private OutgoingConnection(){
        AmqpConnectionFactory f = new AmqpConnectionFactory();
        ConnectionInt c = f.getConnectionType("OUTGOING");
        c.setupConnection();
    }

    public static OutgoingConnection getInstance(){
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
}
