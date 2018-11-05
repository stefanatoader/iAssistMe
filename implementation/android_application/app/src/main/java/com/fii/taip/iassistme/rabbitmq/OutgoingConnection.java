package com.fii.taip.iassistme.rabbitmq;

import com.rabbitmq.client.ConnectionFactory;

import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

class OutgoingConnection implements ConnectionInt {

    private static OutgoingConnection instance = new OutgoingConnection();
    private ConnectionFactory factory = new ConnectionFactory();
    private String rabbitMqHost = "10.23.254.162";


    private OutgoingConnection() {
        AmqpConnectionFactory f = new AmqpConnectionFactory();
        ConnectionInt c = f.getConnectionType("OUTGOING");
        c.setupConnection();
    }

    public static OutgoingConnection getInstance() {
        return instance;
    }

    public void setupConnection() {

        factory.setAutomaticRecoveryEnabled(false);
        factory.setUsername("rabbit");
        factory.setPassword("F5pPaHvaSdkV");
        factory.setVirtualHost("/");
        factory.setHost(rabbitMqHost);
        factory.setPort(5672);
    }

    public ConnectionFactory getConnectionFactory() {
        return factory;
    }
}
