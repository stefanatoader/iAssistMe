package com.fii.taip.iassistme.rabbitmq;

import com.rabbitmq.client.ConnectionFactory;


import java.util.concurrent.BlockingDeque;
import java.util.concurrent.LinkedBlockingDeque;

class IncomingConnection implements ConnectionInt {

    private static IncomingConnection instance = new IncomingConnection();
    private ConnectionFactory factory = new ConnectionFactory();
    private String rabbitMqHost = "10.23.254.162";
    private BlockingDeque<String> queue = new LinkedBlockingDeque<>();


    private IncomingConnection() {
        AmqpConnectionFactory f = new AmqpConnectionFactory();
        ConnectionInt c = f.getConnectionType("INCOMING");
        c.setupConnection();
    }


    public static IncomingConnection getInstance() {
        if(instance == null)
            instance = new IncomingConnection();
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

    public BlockingDeque<String> getQueue() {
        return queue;
    }
}
