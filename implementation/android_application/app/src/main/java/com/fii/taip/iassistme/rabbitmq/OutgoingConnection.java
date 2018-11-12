package com.fii.taip.iassistme.rabbitmq;

import com.rabbitmq.client.ConnectionFactory;

import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;


class OutgoingConnection implements ConnectionInt {

    private static OutgoingConnection instance;
    private ConnectionFactory factory = new ConnectionFactory();


    private OutgoingConnection() {
        setupConnection();
    }

    public static OutgoingConnection getInstance() {
        if (instance == null)
            instance = new OutgoingConnection();
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
}
